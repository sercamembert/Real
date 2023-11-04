import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";
interface Props {
  image: string;
  w: number;
  h: number;
}

const UserAvatar = ({ image, w, h }: Props) => {
  return (
    <Image
      src={image}
      alt="profile picture"
      width={w}
      height={h}
      className="rounded-[50%]"
    />
  );
};

export default UserAvatar;
