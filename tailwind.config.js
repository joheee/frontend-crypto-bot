/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gold": "#FFD700",
        "secondary-dark-gold": "#B8860B",
        "accent-black": "#222224",
        "secondary-black": "#383838",
      },
      fontFamily: {
        frijole: ["frijole", "sans-serif"], // Replace 'custom' and 'YourCustomFont' as needed
      },
    },
    backgroundImage: {
      "hero-background": "url('/hero_background.png')",
    },
  },
  plugins: [],
};
