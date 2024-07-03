"use client";

import clsx from "clsx";
import React from "react";

type InputProps = {
  id?: string;
  label?: string;
  labelTextColor?: "white" | "black";
  inputTextColor?: "white" | "black";
  placeholder?: string;
  type: "text" | "password" | "number";
  error?: string;
  className?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    label,
    placeholder,
    labelTextColor = "black",
    inputTextColor = "black",
    type,
    error,
    className,
    disabled = false,
    onChange,
    ...restProps
  },
  ref
) => {
  return (
    <div className={clsx("relative", className)}>
      <label
        htmlFor={id}
        className={clsx("block mb-2 text-sm font-medium text-left", {
          "text-white": labelTextColor === "white",
        })}
      >
        {label}
      </label>
      <input
        {...restProps}
        id={id}
        className={clsx(
          "bg-gray-300 border text-left text-sm rounded-lg block w-full p-2.5",
          {
            "border-red-500": error,
            "border-black": !error,
            "text-customLightGrey": disabled,
            "text-white": !disabled && inputTextColor === "white",
          }
        )}
        type={type}
        min={type === "number" ? 0 : undefined}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <p className="absolute mt-2 font-extralight text-sm text-red-500 bottom-errorSpacing">
          {error}
        </p>
      )}
    </div>
  );
};

export default React.forwardRef(Input);
