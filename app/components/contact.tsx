import clsx from "clsx";
import React from "react";
import Image from "next/image";
import HR from "../assets/images/hr-animation.jpeg";
import Button from "./button";

export default function Contact() {
  return (
    <section
      className={clsx(
        "fixed bottom-[24px] md:bottom-[48px] right-[24px] md:right-[40px]"
      )}
    >
      <div
        className={clsx(
          "min-h-[250px] w-[240px] md:w-[300px] shadow-lg bg-white rounded-lg overflow-clip"
        )}
      >
        <div className={clsx("h-[30%]")}>
          <Image src={HR} alt="hr" className={clsx("h-full w-full")} />
        </div>

        <div className={clsx("p-5 flex-1 text-center")}>
          <div className={clsx("flex flex-col justify-center")}>
            <div className={clsx("text-sm mb-4 font-medium")}>
              <p>Can&apos;t find your desired tutor? </p>
            </div>
            <div className={clsx("text-xs mb-4 text-gray-400")}>
              <p>
                Send us a mail and we&apos;ll find you <br /> a perfect match
              </p>
            </div>
          </div>
          <div className={clsx("mb-2 md:mb-4")}>
            <Button>Send us a Mail</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
