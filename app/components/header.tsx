"use client";
import { useEffect } from "react";
import { clsx } from "clsx";
import { Form, FormikProps, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { GoPlus } from "react-icons/go";
import { first } from "lodash";
import { useDebounce } from "usehooks-ts";

import Input from "./input";
import Button from "./button";
import Notification from "./notification";
import Dropdown from "./dropdown";

interface Values {
  search: string;
}

export default function Header() {
  const AutoSubmitToken = () => {
    // Grab values and submitForm from context

    const { values, submitForm } = useFormikContext<Values>();
    const debouncedValue = useDebounce<string>(values.search, 500);

    useEffect(() => {
      // Submit the form imperatively as an effect as soon as form values.token are 6 digits long

      if (debouncedValue.length >= 3 && debouncedValue.length <= 50) {
        submitForm();
      }
    }, [debouncedValue, submitForm]);

    return null;
  };

  const SearchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, "Name is too Short!")
      .max(50, "Name is too Long!")
      .required("Required"),
  });

  const sectionClassName = clsx(
    "p-4 md:pt-6 md:pb-4 md:px-24 flex flex-row justify-between md:items-center flex-wrap border-b-[0.5px] border-gray-200 relative",
    {}
  );

  return (
    <section className={sectionClassName}>
      <Formik
        validationSchema={SearchSchema}
        initialValues={{
          search: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form
            className={clsx(
              "flex flex-row items-start flex-1 md:flex-[4_4_0%] justify-between md:pr-12 flex-wrap relative order-1"
            )}
          >
            <Input
              search
              placeholder="Search by name"
              name="search"
              type="text"
            />
            <AutoSubmitToken />
          </Form>
        )}
      </Formik>

      <div
        className={clsx(
          "relative order-last md:order-1 flex flex-row items-center"
        )}
      >
        <Button type="submit" className={clsx("md:w-[150px]")}>
          <GoPlus className={clsx("w-[24px] h-[24px]")} />
          <span className={clsx("hidden md:inline px-2")}> Create New</span>
        </Button>
        <div
          className={clsx(
            "border-[0.5px] border-gray-300 hidden md:block h-[20px] mx-4"
          )}
        />
      </div>

      <section
        className={clsx(
          "flex flex-row justify-end  md:items-center flex-1 order-1"
        )}
      >
        <Notification />
        <div className={clsx("mx-2")}>
          <Dropdown
            variant="secondary"
            defaultValue={
              <div className={clsx("flex flex-row items-center md:mr-2")}>
                <div
                  className={clsx(
                    "rounded-full h-5 w-5  bg-green-600 text-white flex flex-row justify-center items-center mr-2"
                  )}
                >
                  <p className={clsx("uppercase text-sm")}>
                    {first("liam kelly")}
                  </p>
                </div>
                <div className={clsx("hidden md:block")}>
                  <div>
                    <p className={clsx("capitalize")}>liam kelly</p>
                  </div>
                </div>
              </div>
            }
            options={[
              <div
                key={Math.random() * Math.random()}
                className={clsx(
                  "h-[24px] w-[120px] text-black flex flex-row justify-center items-center hover:bg-gray-100 cursor-pointer"
                )}
              >
                <p className={clsx("capitalize text-black")}>settings</p>
              </div>,
              <div
                key={Math.random() * Math.random()}
                className={clsx(
                  "h-[24px] w-[120px] text-black flex flex-row justify-center items-center hover:bg-gray-100 cursor-pointer"
                )}
              >
                <p className={clsx("capitalize")}>log out</p>
              </div>,
            ]}
          />
        </div>
      </section>
    </section>
  );
}
