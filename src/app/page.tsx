"use client";

import Categories from "@/enums/categories";
import Types from "@/enums/types";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface ListItem {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  category: string;
  createdAt?: string;
  upVotes?: number;
  _id: string;
}

export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [openTypeDropdown, setOpenTypeDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [openCategoriesDropdown, setOpenCategoriesDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [list, setList] = useState<ListItem[]>([]);
  const [startAfterId, setStartAfterId] = useState("");
  const [hasNextPage, setHasNextPage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const typeRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useOutsideAlerter(typeRef, () => setOpenTypeDropdown(false));
  useOutsideAlerter(categoryRef, () => setOpenCategoriesDropdown(false));

  const onTypeClick = (type: string) => {
    let tempTypes = [...selectedTypes];
    if (tempTypes.includes(type)) {
      tempTypes = tempTypes.filter((t) => t !== type);
    } else {
      tempTypes = [...tempTypes, type];
    }
    setSelectedTypes(tempTypes);
    setOpenTypeDropdown(false);
  };

  const onCategoryClick = (type: string) => {
    let tempTypes = [...selectedCategories];
    if (tempTypes.includes(type)) {
      tempTypes = tempTypes.filter((t) => t !== type);
    } else {
      tempTypes = [...tempTypes, type];
    }
    setSelectedCategories(tempTypes);
    setOpenCategoriesDropdown(false);
  };

  const fetchList = async (
    lastId: string,
    searchQuery: string,
    typeFilters: string[],
    categoryFilters: string[]
  ) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/reading-list/get`, {
        method: "POST",
        body: JSON.stringify({
          startAfterId: lastId,
          limit: 10,
          types: typeFilters.map((t) => t.toLowerCase()),
          categories: categoryFilters.map((c) => c.toLowerCase()),
          searchTitle: searchQuery,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setList(lastId ? [...list, ...data.items] : data.items);
      setStartAfterId(data.nextPageCursor);
      setHasNextPage(data.hasNextPage);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const lastResourceElementRef = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect(); // Now TypeScript knows observer.current can be an IntersectionObserver

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchList(
            startAfterId,
            searchQuery,
            selectedTypes,
            selectedCategories
          );
        }
      });

      if (node) observer.current.observe(node);
    },
    [
      loading,
      hasNextPage,
      startAfterId,
      searchQuery,
      selectedTypes,
      selectedCategories,
    ]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchList("", searchQuery, selectedTypes, selectedCategories);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, selectedTypes, selectedCategories]);

  return (
    <main className="w-full min-h-screen">
      <>
        <div className="fixed top-0 w-full p-4 backdrop-blur-2xl">
          <div className="w-[1280px] m-auto flex items-center justify-between">
            <input
              className="border w-[500px] border-black-15 hover:border-black-25 focus:border-black-40 focus:shadow-black-10-inset-input focus:outline-none disabled:border-black-8 disabled:bg-black-2 disabled:cursor-not-allowed disabled:placeholder-black-40 rounded-[13px] px-[11px] p-[7.75px] text-black-80 placeholder-black-40 font-normal text-base transition-all"
              placeholder="Enter title..."
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <div
              className="relative"
              onClick={() => setOpenCategoriesDropdown(true)}
              ref={categoryRef}
            >
              <input
                className="border w-[300px] border-black-15 hover:border-black-25 focus:border-black-40 focus:shadow-black-10-inset-input focus:outline-none disabled:border-black-8 disabled:bg-black-2 disabled:cursor-not-allowed disabled:placeholder-black-40 rounded-[13px] px-[11px] p-[7.75px] text-black-80 placeholder-black-40 font-normal text-base transition-all"
                placeholder="Select Category..."
                value={selectedCategories.join(", ")}
                readOnly
              />
              {openCategoriesDropdown ? (
                <div className="absolute top-[105%] w-full">
                  <div className="p-2 rounded-[16px] shadow-elevation-high bg-white-100 flex flex-col items-start justify-center gap-[2px]">
                    {Object.keys(Categories).map((c) => (
                      <div
                        key={c}
                        className={`p-1 w-full capitalize rounded-[8px] hover:bg-black-6 cursor-pointer ${
                          selectedCategories.includes(c) ? "bg-black-4" : ""
                        }`}
                        onClick={() => onCategoryClick(c)}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div
              className="relative"
              onClick={() => setOpenTypeDropdown(true)}
              ref={typeRef}
            >
              <input
                className="border w-[300px] border-black-15 hover:border-black-25 focus:border-black-40 focus:shadow-black-10-inset-input focus:outline-none disabled:border-black-8 disabled:bg-black-2 disabled:cursor-not-allowed disabled:placeholder-black-40 rounded-[13px] px-[11px] p-[7.75px] text-black-80 placeholder-black-40 font-normal text-base transition-all"
                placeholder="Select type..."
                value={selectedTypes.join(", ")}
                readOnly
              />
              {openTypeDropdown ? (
                <div className="absolute top-[105%] w-full">
                  <div className="p-2 rounded-[16px] shadow-elevation-high bg-white-100 flex flex-col items-start justify-center gap-[2px]">
                    {Object.keys(Types).map((t) => (
                      <div
                        key={t}
                        className={`p-1 w-full capitalize rounded-[8px] hover:bg-black-6 cursor-pointer ${
                          selectedTypes.includes(t) ? "bg-black-4" : ""
                        }`}
                        onClick={() => onTypeClick(t)}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* list is in this div below */}
        <div className="w-[1280px] min-h-screen m-auto py-[100px] flex flex-col items-start justify-start gap-[16px]">
          {list.map((item) => (
            <div
              className="flex items-start justify-between w-full shadow-elevation-medium p-4 rounded-[20px]"
              key={item._id}
            >
              <div className="w-[90%] flex items-start justify-start gap-[16px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-[12px] object-contain w-[90px] h-[90px]"
                />
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex items-center">
                    <h2 className="font-medium text-black-90 text-xl max-w-[45ch] w-full text-ellipsis overflow-hidden whitespace-nowrap mr-[16px]">
                      {item.title}
                    </h2>
                    <div className="bg-black-20 px-[8px] text-base rounded-[4px] mr-[8px] capitalize">
                      {item.category}
                    </div>
                    <div className="bg-black-8 px-[8px] text-base rounded-[4px] capitalize">
                      {item.type}
                    </div>
                  </div>
                  <div className="text-black-70 text-sm mb-[20px] font-medium">
                    {item.description}
                  </div>
                  <div className="flex items-center gap-[16px]">
                    {item.createdAt ? (
                      <div className="text-black-60 text-sm">
                        {new Date(item.createdAt as string).toDateString()}
                      </div>
                    ) : null}

                    <Link
                      href={item.url}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="hover:underline text-black-60 text-sm flex items-center gap-1"
                    >
                      View Item{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          className="bg-black-50"
                          d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[10%] h-full justify-end">
                <HeartButton
                  initialLikes={item.upVotes as number}
                  id={item._id}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    </main>
  );
}

interface HeartButtonProps {
  initialLikes: number;
  id: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  initialLikes,
  id,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      setIsLiked(true);
      const response = await fetch(`http://localhost:3001/reading-list/add`, {
        method: "POST",
        body: JSON.stringify({
          itemId: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLikes(data.upVotes);
      setIsLiked(false);
    } catch (error) {
      console.log(error);
      setIsLiked(false);
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-col items-center">
        <button
          onClick={isLiked ? undefined : () => handleLike()}
          className={`text-xl ${isLiked ? "text-red-60 cursor-not-allowed" : "text-black-70"}`}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
        <span className="text-sm text-black-60">{likes}</span>
      </div>
    </div>
  );
};
