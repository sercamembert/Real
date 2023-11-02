import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {}

const page = () => {
  return (
    <div className="flex h-screen flex-col justify-center gap-1">
      <Editor />

      <div className="w-full flex justify-end">
        <Button type="submit" className="w-full" form="post-form">
          Post
        </Button>
      </div>
      <Link
        href="/sign-in"
        className="text-textGray text-xs hover:text-dark cursor-pointer items-center flex"
      >
        <ChevronLeft width={13} height={13} /> Return to homepage
      </Link>
    </div>
  );
};

export default page;
