/** @type {import('tailwindcss').Config} */
module.exports = {
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
      screens: {
        xxs:"0px",
        xs: "430px", // Custom xs screen starting from 0px
        sm: "640px", // Default sm screen starts from 640px in Tailwind
        md: "768px", // Default md screen starts from 768px in Tailwind
        lg: "1024px", // Default lg screen starts from 1024px in Tailwind
        xl: "1280px", // Default xl screen starts from 1280px in Tailwind
      },
    },
  },
  plugins: [],
};
