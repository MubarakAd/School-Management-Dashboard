"use client";
import CommonHeader from "@/components/CommonHeader/CommonHearder";
import DataTable from "@/components/DataTable/DataTable";
import { role, eventsData} from "@/data/data";
import { column } from "@/data/eventsHeaderData";
import Image from "next/image";
import Link from "next/link";
export interface rowType {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
}
const render = (item: rowType) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
  >
    <td className=" px-2 py-4" >{item.title}</td>
    <td className=" px-2 py-4">{item.class}</td>
    <td className="hidden md:table-cell p-4" >{item.date}</td>
    <td className="hidden md:table-cell px-2 py-4" >{item.startTime}</td>
    <td className="hidden md:table-cell  p-4" >{item.endTime}</td>
    <td className="flex p-4   gap-2">
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
      <CommonHeader career="All Events" />
      <DataTable data={eventsData} columns={column} render={render} />
    </div>
  );
};

export default page;
