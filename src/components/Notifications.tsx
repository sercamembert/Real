import { Bell } from "lucide-react";
import React from "react";

interface Props {}

const Notifications = () => {
  return (
    <div className="flex lg:gap-2  items-center md:mt-4 lg:hover:bg-gray-100 lg:w-full lg:p-2 lg:rounded-xl cursor-pointer">
      <Bell width={35} height={35} />
      <p className="hidden text-xl font-medium lg:inline pt-1">Notifications</p>
    </div>
  );
};

export default Notifications;
