"use client";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { GoBookmarkFill, GoStarFill } from "react-icons/go";
import { useToggle } from "usehooks-ts";
import TutorImage from "../assets/images/tutor-alt.jpg";

export default function Card() {
  const [value, toggle] = useToggle();
  return (
    <section
      className={clsx(
        "w-full md:w-1/3 md:max-w-[480px] h-[250px] drop-shadow-lg rounded-lg bg-white mb-4 md:mr-4 overflow-clip "
      )}
    >
      <div
        className={clsx(
          "flex flex-row justity-start items-start p-4 relative w-full h-full"
        )}
      >
        <div
          className={clsx("absolute top-2 right-2 w-5 h-5")}
          onClick={toggle}
        >
          <GoBookmarkFill
            className={clsx("h-full w-full cursor-pointer", {
              "text-blue-700": value,
              "text-gray-200": !value,
            })}
          />
        </div>
        <div className={clsx("h-full min-w-[33.3%]")}>
          <div className={clsx("w-full h-full ")}>
            <Image
              src={TutorImage}
              alt="tutor"
              className={clsx("w-full h-[220px] rounded-tl-lg rounded-bl-lg")}
            />
          </div>
        </div>
        <div className={clsx("p-4")}>
          <div className={clsx("")}>
            <div className={clsx("capitalize text-black font-bold")}>
              <p>leslie a. peters</p>
            </div>
            <div className={clsx("capitalize text-sm text-gray-800")}>
              <p>bsc economics (bachelors)</p>
            </div>
          </div>
          <div className={clsx("text-xs my-4 text-gray-500")}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              necessitatibus, temporibus eveniet tempore.
            </p>
          </div>
          <div
            className={clsx("mt-8 flex flex-row justify-between items-center")}
          >
            <div className={clsx("font-semibold")}>
              <p>$ 22.00/hr</p>
            </div>
            <div className={clsx("flex flex-row justify-between items-center")}>
              <div>
                <GoStarFill className={clsx("h-3 w-3 mx-1 text-yellow-400")} />
              </div>
              <div className={clsx("text-xs text-gray-400")}>
                <p>4.2(175)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
