import clsx from "clsx";
import React from "react";
import Card from "./card";

export default function tutors() {
  return (
    <section className={clsx("px-4 md:pr-0 my-8 md:px-24")}>
      <div>
        <div
          className={clsx(
            "font-semibold text-gray-800 text-sm md:text-base mb-4"
          )}
        >
          <p>{null || 304} tutors available</p>
        </div>
      </div>

      <div className={clsx("flex flex-col md:flex-row md:flex-wrap")}>
        {new Array(10).fill(null).map(() => (
          <Card key={Math.random() * Math.random()} />
        ))}
      </div>
    </section>
  );
}
