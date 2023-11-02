"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
interface Props {}

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <Button onClick={() => signOut()} className="w-full">
        log out
      </Button>
    </div>
  );
};

export default page;
