import clsx from "clsx";

type MaxWidthWrapperProps = { className?: string; children?: React.ReactNode };

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div
      id="max-w-wrapper"
      className={clsx("w-full max-w-screen-xl px-2 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
