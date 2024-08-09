import clsx from "clsx";

import Button from "./Button";

type ModalProps = {
  title: string;
  firstParagraph?: string;
  secondParagraph?: string;
  buttonName: string;
  handleClick?: React.MouseEventHandler;
  borderColor?: "red" | "green" | "none" | "blue";
  buttonColor?: "yellow" | "blue" | "green" | "red" | "transparent";
  fontColor?: "red" | "green" | "white" | "black";
};

const Modal: React.FC<ModalProps> = ({
  title,
  firstParagraph,
  secondParagraph,
  buttonName,
  handleClick,
  borderColor,
  buttonColor = "blue",
  fontColor = "white",
}) => {
  return (
    <>
      <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur">
        <div
          className={clsx(
            "w-175 bg-customGrey rounded-lg p-8 flex flex-col justify-center items-center",
            {
              "border border-solid border-customRed": borderColor === "red",
              "border border-solid border-customGreen": borderColor === "green",
              "border border-solid border-customBlue": borderColor === "blue",
            }
          )}
        >
          <div
            className={clsx("text-center flex flex-col gap-8 mb-8", {
              "text-white": fontColor === "white",
              "text-black": fontColor === "black",
              "text-customRed": fontColor === "red",
              "text-customGreen": fontColor === "green",
            })}
          >
            <h1 className="text-2xl font-extralight text-inherit">{title}</h1>
            {firstParagraph && (
              <h3 className="font-medium text-sm text-inherit">
                {firstParagraph}
              </h3>
            )}
            {secondParagraph && (
              <h3 className="font-medium text-sm text-inherit">
                {secondParagraph}
              </h3>
            )}
          </div>
          <Button
            name={buttonName}
            className="w-75 justify-center"
            variant={buttonColor}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
