import React from "react";
import Image from "next/image";

import collage from "../assets/images/image.webp";
import clsx from "clsx";

export default function banner() {
  return (
    <section className={clsx("px-4 md:px-24 my-8")}>
      <div
        className={clsx(
          "h-[200px] w-full  rounded-lg bg-black overflow-clip relative"
        )}
      >
        <div
          className={clsx(
            "text-white text-center md:text-left flex-1 flex-col flex justify-center items-center md:items-start z-2 absolute h-full md:px-12"
          )}
        >
          <div className={clsx("text-xl md:text-2xl capitalize font-semibold")}>
            <p>discover top tutors</p>
          </div>
          <div
            className={clsx(
              "text-xs md:text-sm capitalize font-light px-8 md:px-0 text-slate-50"
            )}
          >
            <p>
              Find expert instructors to help meet your learning goals with{" "}
              <br />
              as much flexibility as you need
            </p>
          </div>
        </div>
        <div
          className={clsx(
            "absolute flex-1 flex flex-row justify-end items-center w-full h-full pr-4 md:pr-12 "
          )}
        >
          <Image
            className={clsx(
              "h-[100px] md:h-[150%] w-[60%] md:w-[55%] opacity-25 md:opacity-90 md:block"
            )}
            src={collage}
            alt="Picture of the author"
            layout="fixed"
          />
        </div>
      </div>
    </section>
  );
}
