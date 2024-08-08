import type { Config } from "tailwindcss";

export const tailwindColors = {
  red: "#fe3418",
  saddlebrown: "#722d23",
  dimgray: "#828282",
  brown: "#febd6d",
  white: "#fff",
  whitesmoke: "#f2f2f2",
  overlayDark: "#000000b3",
  lightgray: "#cbcbcb",
  darkslategray: "#414141",
  black: "#000",
  skyblue: "#8cd0c5",
  olivedrab: "#6ab04c",
  slateblue: "#7158e2",
  coral: "#ff802a",
  tomato: "#ff384a",
  cornflowerblue: "#65acf0",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { ...tailwindColors },
    },
  },
  plugins: [],
};

export default config;
