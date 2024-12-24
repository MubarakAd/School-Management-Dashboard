'use client';
import { role } from "@/data/data";
import { menuItems } from "@/data/menu";
import { button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // For hamburger and close icons.

const Menu = () => {
  const [activeItem, setActiveItem] = useState("Teachers");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (itemLabel: any) => {
    setActiveItem(itemLabel);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden flex items-center justify-center p-2 text-gray-600"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:block mt-2 text-sm bg-white shadow-md rounded-md lg:shadow-none lg:bg-transparent`}
      >
        {menuItems.map((menu) => (
          <div className="flex flex-col gap-2" key={menu.title}>
            <span className="hidden lg:block text-gray-400 pl-2 font-light">
              {menu.title}
            </span>
            {menu.items.map(
              (item) =>
                item.visible.includes(role) && (
                  <button
                    key={item.label}
                    className={`${
                      activeItem === item.label && "bg-gray-300"
                    }`}
                    onClick={() => handleClick(item.label)}
                  >
                    <Link
                      className="flex items-center justify-center lg:justify-start gap-4 py-2 lg:pl-5"
                      href={item.href}
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={18}
                        height={18}
                      />
                      <span className="hidden lg:block text-gray-500">
                        {item.label}
                      </span>
                    </Link>
                  </button>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
