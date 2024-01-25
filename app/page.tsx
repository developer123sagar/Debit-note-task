import Image from "next/image";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Table from "@/components/Table";
import Button from "@/components/Button";

export default function Home() {
  const column = [
    {
      header: "Item/product",
      accessor: (product: any) => <span>1</span>,
    },
    {
      header: "Batch",
      accessor: (product: any) => <span>2</span>,
    },
    {
      header: "Warehouse",
      accessor: (product: any) => <span>3</span>,
    },
    {
      header: "Qty",
      accessor: (product: any) => <span>4</span>,
    },
    {
      header: "Rate",
      accessor: (product: any) => <span>4</span>,
    },
    {
      header: "Discount",
      accessor: (product: any) => <span>4</span>,
    },
    {
      header: "Tax",
      accessor: (product: any) => <span>4</span>,
    },
    {
      header: "Amount",
      accessor: (product: any) => <span>4</span>,
    },
  ];

  return (
    <div className="px-[24px] py-[8px]">
      <div className="flex-between h-[64px] px-[24px] py-[8px]">
        <h1 className="text-[17px] font-bold">New Debit Note</h1>
        <Image
          src={"/close.svg"}
          alt="close"
          width={40}
          height={40}
          className="w-[50px] h-[50px] object-contain cursor-pointer"
        />
      </div>
      <form className="px-[24px] py-[16px]">
        <div className="flex gap-[8px] justify-between flex-wrap">
          <Select
            label="Supplier name"
            placeH="Eg: Globex Corporation"
            className="basis-[45%]"
          />
          <Input
            id="date"
            type="date"
            label="Date"
            basis="basis-[45%]"
            className="cursor-pointer"
          />
          <Input
            id="reference"
            type="reference"
            label="Reference"
            basis="basis-[45%]"
            placeholder="Enter reference"
          />
        </div>
        <div className="mt-[8px]">
          <Table columns={column} />
        </div>
        <ul className="w-full flex p-[1rem] justify-between items-start self-stretch gap-[4rem]">
          <li className="basis-[45%]">
            <h3 className="text-[12px] font-normal">Note</h3>
            <textarea
              rows={3}
              cols={2}
              className="bg-primary border rounded-[8px] outline-none mt-[0.5rem] w-full py-[15px] px-4 placeholder:text-tertiry placeholder:text-sm"
              placeholder="Enter notes"
            />
            <span className="text-tertiry text-[11px] font-normal">
              This will appear on print
            </span>
          </li>
          <li className="basis-[45%] flex flex-col gap-[0.75rem] p-[0.5rem]">
            <div className="flex-between text-secondary text-[12px] font-normal">
              <span>Total</span>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal">
              <span>Total Excise Duty</span>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal">
              <h1 className="flex items-center gap-1">
                Discount
                <p className="flex bg-primary pl-[8px] rounded py-1">
                  Amount
                  <Image
                    src="/hug.svg"
                    alt="hug"
                    width={10}
                    height={10}
                    className="h-[20px] w-[20px] object-contain"
                  />
                </p>
              </h1>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal">
              <span>Non-taxable Total</span>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal">
              <span>Taxable Total</span>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal">
              <span>VAT</span>
              <span>0</span>
            </div>
            <div className="flex-between text-secondary text-[12px] font-normal border-t border-secondary py-[8px]">
              <span>Grand Total</span>
              <span>0</span>
            </div>
          </li>
        </ul>
        <div className="h-[60px] py-3 mt-[16px] flex-between border-b border-primary">
          <h2 className="text-secondary font-normal text-[15px]">
            Custom fields
          </h2>
          <Image
            src="/chevron-right.svg"
            alt="search"
            width={30}
            height={30}
            className="w-[20px] h-[20px] object-contain"
          />
        </div>
        <div className="mt-[16px]">
          <h3 className="text-sm font-normal text-secondary">
            Terms & conditions
          </h3>
          <textarea
            rows={3}
            cols={2}
            className="bg-primary border rounded-[8px] outline-none mt-[0.5rem] w-full py-[15px] px-4 placeholder:text-tertiry placeholder:text-sm"
            placeholder="Enter notes"
          />
        </div>
        <Button className="mt-3 float-right">Save</Button>
      </form>
    </div>
  );
}
