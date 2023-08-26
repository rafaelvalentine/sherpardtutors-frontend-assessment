import clsx from "clsx";
import React from "react";
import { GoBellFill } from "react-icons/go";

export default function Notification() {
  //   clsx;
  return (
    <div className={clsx("", {})}>
      <div
        className={clsx(
          "w-[32px] h-[32px] flex-1 border-[0.5px] border-gray-300 flex justify-center items-center rounded-full",
          "relative cursor-pointer hover:opacity-40"
        )}
      >
        <div>
          <GoBellFill className={clsx("h-[20px] w-[20px] text-gray-600")} />
        </div>

        <div
          className={clsx(
            "absolute top-1 right-2 p-[3px] border-[0.5px] border-white bg-red-500 rounded-full"
          )}
        />
      </div>
    </div>
  );
}
