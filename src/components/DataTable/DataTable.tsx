import { rowType } from "@/app/(dashboard)/list/teachers/page";
import React, { useState } from "react";
interface Column {
  key: string;
  label: string;
  className?:string
  render?: (value: any, row: any) => React.ReactNode;
}
interface DataTableProps {
  data: any[];
  columns: Column[];
  rowsPerPage?: number;
  render: (item: any) => React.ReactNode;
}
const DataTable: React.FC<DataTableProps> = ({
  data,
  columns,
  rowsPerPage = 10,
  render,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(data.length / rowsPerPage);
  const PaginationData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const handleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="container  p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full  bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-500 text-left text-sm">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={column.className!}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>{PaginationData.map((row, rowIndex) => render(row))}</tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
