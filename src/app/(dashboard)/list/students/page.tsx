"use client";
import CommonHeader from "@/components/CommonHeader/CommonHearder";
import DataTable from "@/components/DataTable/DataTable";
import { role, studentsData, teachersData } from "@/lib/data";
import { column } from "@/lib/studentsDataHeader";
import Image from "next/image";
import Link from "next/link";
export interface rowType {
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
}
const render = (item: rowType) => (
  <tr
    key={item.id}
    className="text-left border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
  >
    <td className="  p-4 ">
        <div className="flex  gap-4">
        <Image
        src={item.photo}
        alt=""
        width={18}
        height={18}
        className="md:hidden xl:block h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2  ">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-xs">{item.class}</p>
      </div>
        </div>
    
    </td>
    <td className="hidden md:table-cell p-4">{item.studentId}</td>
    <td className="hidden md:table-cell p-4">{item.grade}</td>
    <td className="hidden md:table-cell p-4">{item.phone}</td>
    <td className="hidden  xl:table-cell p-4">{item.address}</td>
    <td className="flex p-4 gap-4">
      <Link href={`/list/teachers/${item.id}`}>
        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-teal-300">
          <Image src={"/view.png"} alt="" width={16} height={16} />
        </button>
      </Link>
      {role === "admin" && (
        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-300">
          <Image src={"/delete.png"} alt="" width={16} height={16} />
        </button>
      )}
    </td>
  </tr>
);
const page = () => {
  return (
    <div className="p-4 bg-white m-3 rounded-md">
      <CommonHeader career="All Students" />
      <DataTable data={studentsData} columns={column} render={render} />
    </div>
  );
};

export default page;
