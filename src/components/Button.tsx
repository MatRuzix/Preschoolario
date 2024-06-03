import clsx from "clsx";
import { MouseEventHandler } from "react";

type ButtonProps = {
  name?: string;
  variant?: "blue" | "red" | "yellow" | "green" | "transparent";
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
          "bg-customBlue hover:bg-blue-800 py-2":
            variant === "blue" && baseStyle === "default",
          "bg-customRed hover:bg-red-800 py-3":
            variant === "red" && baseStyle === "default",
          "bg-transparent py-3 border border-white border-solid":
            variant === "transparent" && baseStyle === "default",
          " bg-customYellow hover:bg-yellow-600 py-2":
            variant === "yellow" && baseStyle === "default",
          "bg-customGreen hover:bg-green-800 py-2":
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
