import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        sm: "0.8125rem",
        base: "0.9375rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      colors: {
        // Black
        "black-100": "rgba(9, 10, 12, 1)", // #090A0C with opacity 100%
        "black-90": "rgba(9, 10, 12, 0.9)", // #090A0C with opacity 90%
        "black-80": "rgba(9, 10, 12, 0.8)", // #090A0C with opacity 80%
        "black-70": "rgba(9, 10, 12, 0.7)", // #090A0C with opacity 70%
        "black-60": "rgba(9, 10, 12, 0.6)", // #090A0C with opacity 60%
        "black-50": "rgba(9, 10, 12, 0.5)", // #090A0C with opacity 50%
        "black-40": "rgba(9, 10, 12, 0.4)", // #090A0C with opacity 40%
        "black-30": "rgba(9, 10, 12, 0.3)", // #090A0C with opacity 30%
        "black-25": "rgba(9, 10, 12, 0.25)", // #090A0C with opacity 25%
        "black-20": "rgba(9, 10, 12, 0.2)", // #090A0C with opacity 20%
        "black-15": "rgba(9, 10, 12, 0.15)", // #090A0C with opacity 15%
        "black-10": "rgba(9, 10, 12, 0.1)", // #090A0C with opacity 10%
        "black-8": "rgba(9, 10, 12, 0.08)", // #090A0C with opacity 8%
        "black-6": "rgba(9, 10, 12, 0.06)", // #090A0C with opacity 6%
        "black-4": "rgba(9, 10, 12, 0.04)", // #090A0C with opacity 4%
        "black-2": "rgba(9, 10, 12, 0.02)", // #090A0C with opacity 2%
        // White
        "white-100": "rgba(255, 255, 255, 1)", // #FFFFFF with opacity 100%
        "white-90": "rgba(255, 255, 255, 0.9)", // #FFFFFF with opacity 90%
        "white-80": "rgba(255, 255, 255, 0.8)", // #FFFFFF with opacity 80%
        "white-70": "rgba(255, 255, 255, 0.7)", // #FFFFFF with opacity 70%
        "white-60": "rgba(255, 255, 255, 0.6)", // #FFFFFF with opacity 60%
        "white-50": "rgba(255, 255, 255, 0.5)", // #FFFFFF with opacity 50%
        "white-40": "rgba(255, 255, 255, 0.4)", // #FFFFFF with opacity 40%
        "white-30": "rgba(255, 255, 255, 0.3)", // #FFFFFF with opacity 30%
        "white-25": "rgba(255, 255, 255, 0.25)", // #FFFFFF with opacity 25%
        "white-20": "rgba(255, 255, 255, 0.2)", // #FFFFFF with opacity 20%
        "white-15": "rgba(255, 255, 255, 0.15)", // #FFFFFF with opacity 15%
        "white-10": "rgba(255, 255, 255, 0.1)", // #FFFFFF with opacity 10%
        "white-8": "rgba(255, 255, 255, 0.08)", // #FFFFFF with opacity 8%
        "white-6": "rgba(255, 255, 255, 0.06)", // #FFFFFF with opacity 6%
        "white-4": "rgba(255, 255, 255, 0.04)", // #FFFFFF with opacity 4%
        "white-2": "rgba(255, 255, 255, 0.02)", // #FFFFFF with opacity 2%
        // Red
        "red-100": "#890f0e",
        "red-20": "#ffe8e8",
        "red-30": "#ffa3a6",
        "red-40": "#ff777c",
        "red-50": "#f35a55",
        "red-60": "#fe3c38",
        "red-70": "#f52a24",
        "red-80": "#ea0f09",
        "red-90": "#b60f09",
        // Teal
        "teal-100": "#00736f",
        "teal-20": "#dff3f2",
        "teal-30": "#9bd8d6",
        "teal-40": "#82cecc",
        "teal-50": "#47c4bf",
        "teal-60": "#00a09a",
        "teal-70": "#00948e",
        "teal-80": "#008783",
        "teal-90": "#007b77",
        // Blue
        "blue-100": "#005184",
        "blue-20": "#e0ecf4",
        "blue-30": "#74cef8",
        "blue-40": "#1eb8f5",
        "blue-50": "#1e9ace",
        "blue-60": "#0088d7",
        "blue-70": "#007ec9",
        "blue-80": "#0071b4",
        "blue-90": "#00629c",
        // Yellow
        "yellow-100": "#a26300",
        "yellow-20": "#fff6d2",
        "yellow-30": "#ffeb9f",
        "yellow-40": "#ffe060",
        "yellow-50": "#f9c053",
        "yellow-60": "#ffb700",
        "yellow-70": "#ffa200",
        "yellow-80": "#ff9e00",
        "yellow-90": "#e28b00",
        //Brand Green
        "brand-green": "#4af78f",
      },
      boxShadow: {
        "elevation-high":
          "0px 0px 1px 0px rgba(9,10,12,0.3), 0px 11px 40px 0px rgba(9,10,12,0.14)",
        "elevation-medium":
          "0px 0px 1px 0px rgba(9,10,12,0.3), 0px 4px 24px 0px rgba(9,10,12,0.08)",
        "elevation-low":
          "0px 0px 1px 0px rgba(9,10,12,0.3), 0px 2px 4px 0px rgba(9,10,12,0.08)",
        "elevation-x-low":
          "0px 0px 1px 0px rgba(9,10,12,0.1), 0px 1px 2px 0px rgba(9,10,12,0.08)",
        "black-100-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 3px rgba(9, 10, 12, 1)",
        "btn-primary-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 2.4px rgba(9, 10, 12, 0.9)",
        "black-30-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 3px rgba(9, 10, 12, 0.3)",
        "btn-outline-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 2.4px rgba(9, 10, 12, 0.2)",
        "black-10-inset-input":
          "0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 3px rgba(9, 10, 12, 0.1)",
        "black-10-inset-check":
          "0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 2px rgba(9, 10, 12, 0.1)",
        "btn-secondary-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 2.4px rgba(9, 10, 12, 0.06)",
        "list-item-inset":
          "0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 2px rgba(9, 10, 12, 0.06)",
        "btn-ghost-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 2.4px rgba(9, 10, 12, 0.04)",
        "btn-danger-inset":
          "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 2.4px #ea0f09",
        "red-70-inset": "0 0 0 1.4px rgba(255, 255, 255, 1), 0 0 0 3px #f52a24",
        "red-20-inset-input":
          "0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 3px rgba(255, 119, 124, 0.2)",
      },
    },
  },
  plugins: [],
}
export default config
