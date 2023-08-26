import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { BsSearch as Search } from "react-icons/bs";
import { isEmpty } from "lodash";
import {
  MdOutlineVisibility as Visibility,
  MdOutlineVisibilityOff as VisibilityClose,
} from "react-icons/md";
import styled from "styled-components";

import { StyledProps } from "../types";
import clsx from "clsx";

type MainProps = {
  label?: string;
  placeholder?: string;
  onKeyUp?: (event: React.SyntheticEvent) => void;
  onSetValue?:
    | string
    | {
        value: string;
        shouldValidate?: boolean;
      };
  small?: string;
  inputRef?:
    | ((
        | ((instance: HTMLLabelElement | null) => void)
        | React.RefObject<HTMLLabelElement>
        | null
      ) &
        React.RefObject<HTMLInputElement | HTMLLabelElement>)
    | undefined;
  validate?: (
    value: string | void
  ) => undefined | void | Promise<string | void>;
  multiple?: boolean;
  name?: string;
  className?: string;
  required?: boolean;
  type?: StyledProps["type"];
  value?: string;
  id?: string;
  margin?: string;
  search?: boolean | undefined;
  preend?: React.ReactNode | boolean | undefined;
  append?: React.ReactNode | boolean | undefined;
  disabled?: boolean;
};

export const MainLabelContainer = styled.label`
  display: block;
  text-align: left;
  /* max-width: "100vw"; */
  :focus-within {
    transition: 0.3s;
    .input-label {
    }
  }
`;

export const MainLabel = styled.div`
  margin-bottom: 0px;
`;

export const Label = styled.span`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
`;

export const BoldLabel = styled(Label)`
  font-size: 11px;
  line-height: 16px;
  span {
  }
`;

export const MainInputContainer = styled.div``;

export const SmallLabel = styled(Label)`
  font-size: 10px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
`;

export const MainInput = styled.input`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: "black";
  cursor: pointer;
  background: "white";
  border-radius: 0px;
  border: none;

  ::placeholder {
    font-size: 12px;
    color: "grey";
  }

  &:focus {
    background: "white";
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: "red";
  font-size: 12px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  margin: 0;
`;

function Input({
  label,
  placeholder,
  onKeyUp,
  className,
  required,
  small,
  inputRef,
  search,
  preend,
  append,
  disabled,
  ...props
}: MainProps) {
  const [type, setType] = useState<StyledProps["type"]>("text");

  const [field, meta, helpers] = useField({
    name: props?.name || props?.id || "",
    validate: props?.validate,
    type,
    multiple: props?.multiple,
    value: props?.value,
  });

  useEffect(() => {
    if (props?.type && props?.type.toLowerCase() === "password") {
      setType("password");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof props?.onSetValue === "string")
      helpers.setValue(props?.onSetValue);
    if (typeof props?.onSetValue === "object")
      helpers.setValue(
        props?.onSetValue.value,
        props?.onSetValue.shouldValidate
      );
  }, [props?.onSetValue, helpers]);
  return (
    <MainLabelContainer
      htmlFor={field.name}
      className={clsx(className)}
      ref={inputRef}
    >
      {label ? (
        <MainLabel className={clsx("input-label")}>
          <BoldLabel>
            {" "}
            {label}{" "}
            <span className={clsx("asterisk")}>{required ? "*" : ""}</span>{" "}
          </BoldLabel>{" "}
          <br />
        </MainLabel>
      ) : null}
      <MainInputContainer
        className={clsx(
          "flex items-center justify-start input-container border-slate-300 border rounded-md px-1 w-[55vw] md:w-[20vw]",
          props?.name,
          {
            "border-red-500": !isEmpty(meta?.error) || isEmpty(meta?.value),
          }
        )}
      >
        {search && !preend && (
          <Search
            className={clsx("w-4 h-4 mr-2 md:mx-2 search-icon text-gray-300")}
          />
        )}
        {!search && preend}
        <MainInput
          className={clsx(`${props?.name}-input rounded-md flex-1 h-[32px]`)}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
          type={type}
          disabled={disabled}
          {...props}
          {...field}
        />
        {append}
        {props?.type &&
          props?.type.toLowerCase() === "password" &&
          type === "password" &&
          !append && (
            <Visibility
              className={clsx("w-4 h-4 mx-2 cursor-pointer icon visibility")}
              onClick={() => setType("text")}
            />
          )}
        {props?.type &&
          props?.type.toLowerCase() === "password" &&
          type !== "password" &&
          !append && (
            <VisibilityClose
              className={clsx("w-4 h-4 mx-2 cursor-pointer icon visibility")}
              onClick={() => setType("password")}
            />
          )}
      </MainInputContainer>

      <SmallLabel className={clsx("input-small")}>{small}</SmallLabel>
      {meta?.error && meta?.touched ? (
        <ErrorMessage
          data-testid={`${props?.name}-error`}
          className={clsx("input-error", {
            "text-red-500": !isEmpty(meta?.error) || isEmpty(meta?.value),
          })}
        >
          {meta?.error}
        </ErrorMessage>
      ) : null}
    </MainLabelContainer>
  );
}

export default Input;
