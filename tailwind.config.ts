import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        label: "#00171F",
        primary: "#F0F0F0",
        secondary: "#00171F",
        tertiry: "#979797",
        accent: "#00A8E8",
        danger: "#EF233C",
      }
    },
  },
  plugins: [],
};
export default config;
