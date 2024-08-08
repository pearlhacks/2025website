import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brown: {
        DEFAULT: '#9a5c38',
        accent: '#f18e87'
      },
      pink: {
        DEFAULT: '#ffd0cc'
      },
      green: {
        DEFAULT: '#96b548'
      },
      yellow:{
        DEFAULT: '#fad53f'
      },
      background: {
        top:'#E3938B',
        transition: '#F18E87',
        secondary: '#F7D2CD',
      }
    },
    extend: {
      backgroundImage: {
        'landing': "url(/images/landing/PH2025_WebsiteLanding.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
