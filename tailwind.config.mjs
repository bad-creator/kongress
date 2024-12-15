/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "var(--primary)", // Основной цвет текста
          secondary: "var(--secondary)", // Вторичный цвет текста
          secondaryHover: "var(--secondary-hover)",
          accent: "var(--accent)", // Акцентный цвет текста
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans], // Для основного текста
        heading: ["var(--font-unbounded)", "cursive"], // Для заголовков
      },
      fontSize: {
        h1: ["2.5rem", "3rem"], // Размер и межстрочное расстояние для h1
        h2: ["2rem", "2.5rem"], // Для h2
        base: ["1rem", "1.5rem"], // Обычный текст
      },
    },
  },
  plugins: [],
};
