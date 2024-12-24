import { role } from "@/data/data"; // Assuming this is where your role is coming from
import Image from "next/image";
import React from "react";

const CommonHeader = ({ career }: { career: string }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="hidden md:block font-semibold text-xl">{career}</h1>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex justify-center items-center  gap-2 px-2 py-[2px] border border-gray-300 rounded-lg bg-white">
          <Image src={"/search.png"} width={14} height={14} alt="search icon" />
          <input
            className="outline-none border-none focus:ring-0"
            placeholder="search..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4 self-end">
          <button className="px-2 py-2 bg-yellow-300 rounded-full">
            <Image
              src={"/filter.png"}
              alt="filter-icon"
              width={12}
              height={12}
            />
          </button>

          <button className="px-2 py-2 bg-yellow-300 rounded-full">
            <Image src={"/sort.png"} alt="sort-icon" width={12} height={12} />
          </button>
          {role === "admin" && (
          <button className=" px-2 py-2 bg-yellow-300 rounded-full">
            <Image
              src={"/plus.png"} // Use the correct image source here
              alt="plus-icon"
              width={12}
              height={12}
            />
          </button>
        )}
        </div>

        
      </div>
    </div>
  );
};

export default CommonHeader;
