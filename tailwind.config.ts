import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "350px",
        xs: "480px",
        sm: "640px",
        md: "840px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1620px",
        "4xl": "1920px",
      },
      fontFamily: {
        sacramento: ["var(--font-sacramento)"],
        roboto: ["var(--font-roboto)"],
        vibes: ["var(--font-vibes)"],
      },
      backgroundImage: {
        "section-gradient1":
          "linear-gradient(to bottom, #f59f99b0, #cea89c, #f3d5cf)",
        "section-gradient2":
          "linear-gradient(to top, #f59f99b0, #cea89c, #f3d5cf)",
        "section-gradient3":
          "linear-gradient(to top, #f59f99b0, #f3d5cf, #cea89c,#f59f99b0)",
        "dark-gradient":
          "linear-gradient(170deg, rgba(47,20,9,1) 38%, rgba(92,28,5,1) 79%, rgba(158,108,90,1) 96%)",
        "dark-overlay": "rgba(255, 255, 255, 0.589)",
        "darker-overlay": "rgba(255, 255, 255, 1)",
        "sm-overlay": "rgba(167, 99, 99, 0.233)",
      },
      colors: {
        primary: "rgba(54, 41, 41, 0.822)",
        secondary: "#F4DFC8",
        "gradient-sm":
          "linear-gradient(to bottom, #f59f99b0, #cea89c, #f3d5cf)",
      },
      boxShadow: {
        "over-inset-sm": "inset 3px 3px 50px 10px rgba(2, 2, 2, 0.412)",
        "over-inset-md": "inset 5px 5px 100px 20px rgba(2, 2, 2, 0.712)",
      },
      borderRadius: {
        trbl: "5% 40% 5% 40%",
      },
      hr: {
        borderColor: "rgba(54, 41, 41, 0.322)",
      },
    },
  },
  plugins: [],
};
export default config;
