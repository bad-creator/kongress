"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/wcu_logo5.png"; // Картинка должна быть в папке public/images

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Ziele", href: "/#goals" },
    { label: "Werte", href: "/#values" },
    { label: "Mitgliedschaft", href: "/membership" },
    { label: "Kontakt", href: "/" },
    { label: "Spenden", href: "/" },
  ];

  return (
    <header className="px-5 fixed h-[100px] w-full bg-black flex flex-row justify-center z-50">
      <div className="w-full flex flex-row items-center justify-between">
        {/* Логотип */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="logo hidden md:block"
            width={90}
            height={90}
          />
        </Link>

        {/* Кнопка меню для мобильных устройств */}
        <button
          className="text-text-secondary md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Меню навигации */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-6 items-center absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-text-secondary hover:text-text-secondaryHover"
            >
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
