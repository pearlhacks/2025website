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
        },
        pink: {
          200: "#FAE3E1",
          DEFAULT: "#ffd0cc",
          accent: "#f18e87",
        },
        green: {
          DEFAULT: "#96b548",
        },
        yellow: {
          DEFAULT: "#fad53f",
        },
        background: {
          top: "#E3938B",
          transition: "#F18E87",
          secondary: "#F7D2CD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
