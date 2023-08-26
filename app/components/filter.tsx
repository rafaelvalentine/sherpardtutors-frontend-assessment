import clsx from "clsx";
import React from "react";
import { FiSliders, FiArrowRight } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

import Dropdown from "./dropdown";
import Button from "./button";

export default function Filter() {
  return (
    <section className={clsx("px-4 md:px-24 text-gray-400 text-sm")}>
      <div
        className={clsx(
          "flex flex-row justify-start items-start md:items-center flex-wrap"
        )}
      >
        <div
          className={clsx("flex flex-row items-center flex-1 md:flex-[0_0_0%]")}
        >
          <FiSliders />
          <div className={clsx("mx-2")}>
            <p>Filter</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-end md:justify-start flex-[4_4_0%] w-full font-semibold">
          <Dropdown
            className={clsx("m-1")}
            defaultValue={
              <div className={clsx("mx-2")}>
                <div>
                  <p>Subject</p>
                </div>
              </div>
            }
          />
          <Dropdown
            className={clsx("m-1")}
            defaultValue={
              <div className={clsx("mx-2")}>
                <div>
                  <p>Level</p>
                </div>
              </div>
            }
          />
          <Dropdown
            className={clsx("m-1")}
            defaultValue={
              <div
                className={clsx(
                  "mx-2 flex flex-row justify-center items-center"
                )}
              >
                <div>
                  <p>Avail</p>
                </div>
                <FiArrowRight className={clsx("h-3 w-3 mx-1")} />
                <div className={clsx("text-blue-400 capitalize font-semibold")}>
                  <p>{["mon", "tue", "wed"].join(", ")}</p>
                </div>
              </div>
            }
          />
          <Dropdown
            className={clsx("m-1")}
            defaultValue={
              <div className={clsx("mx-2")}>
                <div>
                  <p>Price</p>
                </div>
              </div>
            }
          />
          <Dropdown
            className={clsx("m-1")}
            defaultValue={
              <div
                className={clsx(
                  "mx-2 flex flex-row justify-center items-center"
                )}
              >
                <div>
                  <p>Rating</p>
                </div>
                <FiArrowRight className={clsx("h-3 w-3 mx-1")} />
                <div
                  className={clsx(
                    "font-semibold flex flex-row justify-center items-center"
                  )}
                >
                  <GoStarFill
                    className={clsx("h-3 w-3 mx-1 text-yellow-400")}
                  />
                  <p>{null || "4"}</p>
                </div>
              </div>
            }
          />
        </div>
        <div
          className={clsx(
            "w-full md:w-[30%] flex flex-row justify-end md:justify-end items-center mt-4 md:mt-0"
          )}
        >
          <Button variant="secondary" className={clsx("capitalize m-3")}>
            clear filters{" "}
          </Button>
          <Button className={clsx("capitalize px-4")}>apply filter</Button>
        </div>
      </div>
    </section>
  );
}
