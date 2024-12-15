import { Unbounded, Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

// Импортируем Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Выберите необходимые толщины
  variable: "--font-inter", // Создаем CSS-переменную для шрифта
});

// Импортируем Unbounded
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Выберите необходимые толщины
  variable: "--font-unbounded",
});

export const metadata = {
  title: "Kongress",
  description: "Weltkongress der Ukrainer für Fried und Wiederaufbau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${unbounded.variable} antialiased font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
