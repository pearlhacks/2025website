import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Caviar Dreams", "system-ui"],
      body: ["Proxima Nova", "system-ui"],
    },
    extend: {
      backgroundImage: {
        landing: "url('/images/landing/PH26_Landing.svg')",
      },
      colors: {
        brown: {
          light: "#CA8E5C",
          DEFAULT: "#752E1A",
          dark: "#5D2515",
          mid: "#B2652B",
          accent: "#B3662A",
          transition: "#cb905c",
        },
        cream: {
          DEFAULT: "#FBE8CA",
        },
        white: "#FFFFFF",
        blue: {
          DEFAULT: "#7ac0e6",
          light: "#9ccce6",
        },
        pink: {
          DEFAULT: "#e57794",
        },
      },
    },
  },
  plugins: [],
};
export default config;
