"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  basis?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required = true,
  disabled = false,
  basis = "basis-full",
  className,
  ...props
}) => {
  return (
    <div className={`${basis}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-label"
      >
        {label}&nbsp;
        {required && <span className="text-danger">*</span>}
      </label>

      <input
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        className={cn(
          `
          block 
          w-full 
          border-[1px]
          rounded-[8px]
        bg-primary
          py-[14px]
          px-[16px]
          text-gray-900 
          placeholder:text-tertiry 
          focus:outline-none
          sm:text-sm 
          sm:leading-6`,
          className,
          {}
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
