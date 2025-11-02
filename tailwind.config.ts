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
        landing: "url(/images/landing/PH2026_WebsiteLanding.svg')",
      },
      colors: {
        // Primary brand colors - browns
        brown: {
          DEFAULT: "#5d2516", // Primary dark brown text
          light: "#ca8d5c", // Light brown for accents/buttons
          footer: "#cb915c", // Footer text color
          dark: "#6D2A1B", // Dark brown for About section background
          medium: "#B2652B", // Medium brown for "brew with" text
        },
        // Secondary brand colors - pinks
        pink: {
          DEFAULT: "#E57794", // Primary pink for headings
          light: "#ff99bb", // Light pink for accents
          soft: "#FAE3E1", // Soft pink background
          accent: "#f18e87", // Pink accent color
          transition: "#DE6F67", // Pink transition/darker shade
        },
        // Accent colors - blues
        blue: {
          DEFAULT: "#7ac0e6", // Primary blue for buttons
          light: "#9ccce6", // Light blue for links
          hover: "#7fb8d8", // Blue hover state
        },
        // Background colors - creams
        cream: {
          DEFAULT: "#fbe8ca", // Primary cream background
          light: "#fffbf7", // Light cream for cards
        },
        // Utility colors
        green: {
          DEFAULT: "#96b548", // Kept for future use
        },
      },
    },
  },
  plugins: [],
};
export default config;
