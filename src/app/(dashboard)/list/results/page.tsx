"use client";
import CommonHeader from "@/components/CommonHeader/CommonHearder";
import DataTable from "@/components/DataTable/DataTable";
import { role,  resultsData} from "@/data/data";
import { column } from "@/data/resultsHeaderData";
import Image from "next/image";
import Link from "next/link";
export interface rowType {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    student: string,
    date:string,
    score: number,
}
const render = (item: rowType) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
  >
    <td className=" px-2 py-4" >{item.subject}</td>
    <td className=" px-2 py-4">{item.student}</td>
    <td className="hidden md:table-cell p-4" >{item.score}</td>
    <td className="hidden md:table-cell px-2 py-4" >{item.teacher}</td>
    <td className="hidden md:table-cell  p-4" >{item.class}</td>
    <td className="hidden md:table-cell px-2 py-4" >{item.date}</td>
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
      <CommonHeader career="All Results" />
      <DataTable data={resultsData} columns={column} render={render} />
    </div>
  );
};

export default page;
