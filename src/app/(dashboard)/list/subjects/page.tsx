"use client";
import CommonHeader from "@/components/CommonHeader/CommonHearder";
import DataTable from "@/components/DataTable/DataTable";
import { role, studentsData, subjectsData, teachersData } from "@/lib/data";
import { column } from "@/lib/subjectsHeaderData";
import Image from "next/image";
import Link from "next/link";
export interface rowType {
    id: number,
    name: string,
    teachers: string[],
}
const render = (item: rowType) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
  >
    <td className="flex items-center p-4 " >{item.name}</td>
    <td className="  p-4  hidden md:table-cell ">{item.teachers.join(",")}</td>
    <td className="flex  items-center p-4   gap-2">
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
      <CommonHeader career="All Subjects" />
      <DataTable data={subjectsData} columns={column} render={render} />
    </div>
  );
};

export default page;
