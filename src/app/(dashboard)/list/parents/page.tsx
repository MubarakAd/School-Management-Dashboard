"use client";
import CommonHeader from "@/components/CommonHeader/CommonHearder";
import DataTable from "@/components/DataTable/DataTable";
import { parentsData, role, teachersData } from "@/lib/data";
import { column } from "@/lib/parentsDataHeader";
import Image from "next/image";
import Link from "next/link";
export interface rowType {
    id: number,
    name:string,
    students: string[],
    email: string,
    phone: string,
    address: string,
}
const render = (item: rowType) => (
  <tr
    key={item.id}
    className="text-left border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
  >
    <td className=" p-4 ">
      <div className="flex flex-col gap-2  ">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-xs">{item.email}</p>
      </div>
    </td>

    <td className="hidden md:table-cell p-4">{item.students.join(",")}</td>
    <td className="hidden md:table-cell p-4">{item.phone}</td>
    <td className="hidden lg:table-cell p-4">{item.address}</td>
    <td className="flex  gap-2 p-4">

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
      <CommonHeader career="All Parents" />
      <DataTable data={parentsData} columns={column} render={render} />
    </div>
  );
};

export default page;
