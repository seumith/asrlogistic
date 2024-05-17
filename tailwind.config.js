import type { Config } from "tailwindcss";

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
      colors :{
        "paragraph" :"#909090",
        "primary-blue" : "#4479E2",
        "box-color" : "rgba(13, 13, 13, 0.26)",
        "box-color-dark" : "#101010",
        "sub-heading" : "#d1d1d1",
        "link-bg" : "#81a5ff26"
      }
    },
  },
  plugins: [],
};
export default config;
