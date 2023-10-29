"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
interface Props {}

const Searchbar = () => {
  const [input, setInput] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="relative ">
      <Input
        type="text"
        placeholder="Search recipes..."
        className="mx-auto w-[100%] sm:w-[350px] rounded-[6px] pr-10"
        value={input}
        onChange={handleInputChange}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 ">
        <Search className="h-5 w-5 cursor-pointer" color="#828282" />
      </div>
    </div>
  );
};

export default Searchbar;
