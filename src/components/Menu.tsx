'use client'
import { role } from "@/lib/data";
import { menuItems } from "@/lib/menu";
import { button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Mock role for demonstration, replace with actual role logic.

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemLabel:any) => {
    setActiveItem(itemLabel);
  };

  return (
    <div className="mt-2 text-sm">
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
                    className="flex items-center justify-center lg:justify-start gap-4 py-2 lg:pl-5 "
                    href={item.href}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={18}
                      height={18}
                    />
                    <span className="hidden lg:block text-gray-500 ">
                      {item.label}
                    </span>
                  </Link>
                </button>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
