import clsx from "clsx";

type DashboardTileProps = {
  color:
    | "green"
    | "blue"
    | "yellow"
    | "red"
    | "orange"
    | "purple"
    | "white"
    | "black";
  title: string;
  data: number | string;
  secondaryText?: string;
  icon?: React.ReactNode;
};

const DashboardTile: React.FC<DashboardTileProps> = ({
  title,
  color,
  data,
  secondaryText,
  icon,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col space-y-4 relative my-2 mx-4 px-3 rounded-lg grow",
        {
          "bg-green-500": color == "green",
          "bg-blue-500": color == "blue",
          "bg-yellow-500": color == "yellow",
          "bg-red-500": color == "red",
          "bg-orange-500": color == "orange",
          "bg-purple-500": color == "purple",
          "bg-white": color == "white",
          "bg-black": color == "black",
        }
      )}
    >
      <div className="absolute right-2 top-2">{icon}</div>
      <p className={clsx("text-sm", { "text-white": color != "white" })}>
        {title}
      </p>
      <p className={clsx("text-sm", { "text-white": color != "white" })}>
        {data.toString()}
      </p>
      <p className={clsx("text-sm", { "text-white": color != "white" })}>
        {secondaryText}
      </p>
    </div>
  );
};

export default DashboardTile;
