"use client";

import React from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faHouse,
  faUserGroup,
  faChildDress,
  faPlus,
  faCalendarCheck,
  faCalendar,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const t = useTranslations("sidebar");

  return (
    <div>
      <button
        id="sidebar-toggle-button"
        className={clsx(
          "flex absolute w-5 h-10 mt-4 px-4 top-20 left-2 z-50 text-white"
        )}
        onClick={() => setIsSidebarOpen((value) => !value)}
      >
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={clsx("transition all duration-200", {
            "rotate-180": isSidebarOpen,
          })}
        />
      </button>
      <div className="flex flex-col mt-14 space-y-7 absolute top-20 left-0 z-50">
        <SidebarLink
          name={t("dashboard")}
          icon={<FontAwesomeIcon icon={faHouse} />}
          path="/dashboard"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("groups")}
          icon={<FontAwesomeIcon icon={faUserGroup} />}
          path="/groups"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("children")}
          icon={
            <FontAwesomeIcon
              icon={faChildDress}
              className="scale-150 translate-x-1 mr-2"
            />
          }
          path="/children"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("calendar")}
          icon={
            <FontAwesomeIcon
              icon={faCalendar}
              className="scale-125 translate-x-1 mr-2"
            />
          }
          path="/calendar"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("events")}
          icon={
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="scale-125 translate-x-1 mr-2"
            />
          }
          path="/events"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("payments")}
          icon={
            <FontAwesomeIcon
              icon={faCreditCard}
              className="scale-125 translate-x-1 mr-2"
            />
          }
          path="/payments"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarLink
          name={t("add")}
          icon={
            <FontAwesomeIcon
              icon={faPlus}
              className="scale-125 translate-x-1 mr-2"
            />
          }
          path="/add"
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div
        className={clsx(
          "flex flex-col h-full w-60 fixed bg-gray-800 mt-20 transition all duration-200 ease-out",
          { "-translate-x-44": !isSidebarOpen, "-translate-x-0": isSidebarOpen }
        )}
      ></div>
    </div>
  );
};

export default Sidebar;
