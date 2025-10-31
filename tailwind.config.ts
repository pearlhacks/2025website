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
        landing: "url(/images/landing/PH2025_WebsiteLanding.svg')",
      },
      colors: {
        brown: {
          DEFAULT: "#9a5c38",
          dark: "#5d2514",
          darker: "#5d2516",
          transition: "#713f12",
          light: "#ca8d5c",
          lighter: "#cb915c",
        },
        pink: {
          200: "#FAE3E1",
          DEFAULT: "#ffd0cc",
          accent: "#f18e87",
          transition: "#DE6F67",
          light: "#ff99bb",
          red: "#e57794",
        },
        green: {
          DEFAULT: "#96b548",
          transition: "#65a30d",
        },
        yellow: {
          DEFAULT: "#fad53f",
          light: "#fbe8ca",
        },
        blue: {
          DEFAULT: "#7ac0e6",
          light: "#9ccce6",
          lighter: "#7fb8d8",
        },
        background: {
          top: "#E3938B",
          transition: "#DE6F67",
          secondary: "#F7D2CD",
          cream: "#fbe8ca",
          white: "#fffbf7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
