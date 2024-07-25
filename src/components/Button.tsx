"use client";

import clsx from "clsx";
import { MouseEventHandler } from "react";

type ButtonProps = {
  name?: string;
  variant?: "blue" | "red" | "yellow" | "green" | "orange" | "transparent";
  fontColor?: "white" | "black";
  className?: string;
  type?: "submit" | "button";
  baseStyle?: "default" | "none";
  onClick?: MouseEventHandler;
  id?: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  variant = "blue",
  type = "button",
  baseStyle = "default",
  fontColor = "white",
  onClick,
  id,
  icon,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      className={clsx(
        {
          "flex gap-2 items-center justify-center font-medium rounded-lg text-base px-8 text-center":
            baseStyle === "default",
        },
        {
          "bg-blue-500 hover:bg-blue-800 py-2":
            variant === "blue" && baseStyle === "default",
          "bg-red-500 hover:bg-red-800 py-3":
            variant === "red" && baseStyle === "default",
          "bg-transparent py-3 border border-white border-solid":
            variant === "transparent" && baseStyle === "default",
          " bg-yellow-400 hover:bg-yellow-600 py-2":
            variant === "yellow" && baseStyle === "default",
          "bg-schoolarioOrange hover:bg-schoolarioOrangeHovered py-2":
            variant === "orange" && baseStyle === "default",
          "bg-green-600 hover:bg-green-800 py-2":
            variant === "green" && baseStyle === "default",
          "text-white": fontColor === "white" && baseStyle === "default",
          "text-black": fontColor === "black" && baseStyle === "default",
        },
        className
      )}
    >
      {name}
      {icon}
    </button>
  );
};

export default Button;
