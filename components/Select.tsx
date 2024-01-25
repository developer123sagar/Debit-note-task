"use client";

import Image from "next/image";
import React, { useState } from "react";

import { selectOptions } from "@/constants";
import { cn } from "@/lib/utils";

const Select = ({
  required = true,
  label,
  placeH,
  className,
}: {
  required?: boolean;
  label?: string;
  placeH: string;
  className?: string;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        `
    w-full font-medium h-auto
    `,
        className,
        {}
      )}
    >
      {label && (
        <label className="block text-sm font-medium leading-6 text-label">
          {label}&nbsp;
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div
        onClick={() => setOpen(!open)}
        className={`w-full flex-between text-sm font-medium leading-6 border-[1px] rounded-[8px] bg-primary py-[14px] px-[16px] ${
          selected ? "text-gray-900" : "text-tertiry"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : placeH}
        <Image
          src="/chevron-down.svg"
          alt="down"
          width={30}
          height={30}
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
      </div>
      <ul
        className={`bg-gray-200 mt-1 overflow-y-auto rounded-[8px] custom-scrollbar ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-gray-200 z-40">
          <Image
            src="/search.svg"
            alt="search"
            width={30}
            height={30}
            className="w-[20px] h-[20px] object-contain"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Search"
            className="w-full placeholder:text-tertiry p-2 outline-none bg-gray-200"
          />
        </div>
        {selectOptions?.map((item) => (
          <li
            key={item?.name}
            className={`p-2 text-sm hover:text-white cursor-pointer transition duration-200 ease-in-out
            ${
              item?.name?.toLowerCase() === selected?.toLowerCase()
                ? "bg-sky-200 text-white"
                : "hover:bg-gray-300"
            }
            ${
              item?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
