/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gold": "#FFD700",
        "secondary-dark-gold": "#B8860B",
        "accent-black": "#2A2525",
        "secondary-black": "#383838",
      },
      fontFamily: {
        frijole: ["frijole", "sans-serif"], // Replace 'frijole' with your custom font name
      },
      backgroundImage: {
        "hero-background": "url('/hero_background.png')",
      },
      screens: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
        "large-desktop": "1280px",
      },
    },
  },
  plugins: [],
};
