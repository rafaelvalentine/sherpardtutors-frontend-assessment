"use client";
import React from "react";
import Spinner from "react-spinners/BounceLoader";
import { defaultTo } from "lodash";
import styled from "styled-components";
import clsx from "clsx";

type ButtonProps = {
  animation?: "border" | "grow";
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  content?: string;
  color?: string;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  loadingMessage?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  role?: string;
  size?: number | string;
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "tertiary";
  showLoadingText?: boolean;
};

export const Container = styled.button``;

function Button({
  animation,
  children,
  content,
  disabled = false,
  loading,
  loadingMessage,
  onClick,
  role = "button",
  size = 24,
  variant = "primary",
  showLoadingText = false,
  className,
  ...props
}: ButtonProps) {
  const text =
    loadingMessage && typeof loadingMessage === "string"
      ? defaultTo(loadingMessage, "Loading...")
      : "";

  return (
    <section
      className={clsx(
        "h-[40px] min-w-[80px] flex flex-row justify-center items-center"
      )}
    >
      {loading ? (
        <div className={clsx("p-2 flex flex-1 flex-row justify-center")}>
          <Spinner size={size} />
          {showLoadingText && <span className="ml-2">{text}</span>}
        </div>
      ) : (
        <Container
          disabled={disabled}
          onClick={onClick}
          role={role}
          className={clsx(
            "border-transparent outline-none rounded-md flex-1 font-medium h-[32px]",
            "disabled:opacity-25 disabled:bg-gray-50 disabled:pointer-events-none",
            "flex flex-row justify-center items-center text-sm",
            "hover:opacity-50",
            {
              "bg-blue-500 text-white": variant === "primary",
              "bg-white text-blue-500": variant === "secondary",
            },
            className
          )}
          {...props}
        >
          {children || content}
        </Container>
      )}
    </section>
  );
}

export default Button;
