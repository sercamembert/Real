import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Notifications from "./Notifications";
import Link from "next/link";

interface Props {}

const NavMobile = () => {
  return (
    <div className="flex md:hidden py-3 pr-[25px] items-center justify-between fixed top-0 z-10 w-full">
      <Link href="/">
        <Logo />
      </Link>
      <Searchbar />
      <Notifications />
    </div>
  );
};

export default NavMobile;
