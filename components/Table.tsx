import Select from "@/components/Select";
import { ITableProps } from "@/types";

function Table<T>({ columns, data }: ITableProps<T>) {
  return (
    <div className="bg-white w-full py-1">
      <div className="overflow-auto">
        <table className="pt-6 pb-2.5 sm:px-7.5 xl:pb-1 text-center overflow-x-scroll scrollbar-hide w-full">
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th
                  key={index}
                  className="py-6 px-3 font-bold truncate whitespace-nowrap text-gray-800 text-center border-py"
                >
                  <p className="text-[13px] text-center font-[500] text-secondary">
                    {column.header}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr
                  className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-white"}`}
                  key={rowIndex}
                  style={{ margin: "0 auto" }}
                >
                  {columns?.map((column, colIndex) => {
                    const cellData = column.accessor(item);
                    const renderedData = column.render
                      ? column.render(cellData)
                      : cellData;
                    return (
                      <td
                        key={colIndex}
                        style={{
                          margin: "0 auto",
                        }}
                        className={`py-6 text-[12px] font-[400] text-secondary px-3 whitespace-normal max-h-[100px] text-center border border-gray-200`}
                      >
                        {renderedData}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr className="border-b h-[53px] border-primary">
                <td className="py-2 px-4 text-tertiry text-[12px]">
                  Add cupon or code
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
