"use client";
import clsx from "clsx";
import { isBoolean, isEmpty } from "lodash";
import React, { useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useToggle, useOnClickOutside } from "usehooks-ts";

type PropsTypes = {
  className?: string;
  variant?: "primary" | "secondary";
  defaultValue?: React.ReactNode | any;
  options?: any[];
};

export default function Dropdown({
  className,
  variant = "primary",
  defaultValue,
  options = [],
}: PropsTypes) {
  const [value, toggle, setValue] = useToggle();
  const ref = useRef(null);
  const customToggle = (value?: boolean) =>
    setValue((x: boolean) => {
      if (isBoolean(value)) {
        return value;
      }
      return !x;
    });

  const handleClickOutside = () => {
    // Your custom logic here
    customToggle(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <section ref={ref} className={clsx("relative")}>
      <div
        className={clsx(
          "border-[0.5px] border-gray-300 py-1 px-2 min-w-[64px] rounded-full flex flex-row justify-center items-center  cursor-pointer",
          {
            "bg-white border-gray-300": variant === "primary",
            "bg-gray-100": variant === "secondary",
          },
          className
        )}
        onClick={toggle}
      >
        <div className={clsx()}>{defaultValue}</div>
        <div
          className={clsx(
            "flex flex-row justify-end flex-1 transition duration-150 ease-out"
          )}
        >
          {!value ? <FaChevronDown /> : <FaChevronUp />}
        </div>
      </div>
      {value && !isEmpty(options) && (
        <div className="min-w-[100px] min-h-[50px] bg-white absolute shadow-lg p-2 right-0 z-[5]">
          {options.map((item) => item)}
        </div>
      )}
    </section>
  );
}
