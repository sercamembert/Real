import AuthForm from "@/components/AuthForm";
import Logo from "@/components/Logo";
import React from "react";

interface Props {}

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 w-[280px] md:w-[320px] xl:w-[380px]">
        <div className="flex items-center gap-2 h-[39px] lg:h-[45px] justify-center">
          <p className="text-lg font-secoundary self-end lg:text-xl">
            Welcome back to
          </p>

          <div className="text-dark font-secoundary font-semibold text-[32px] lg:text-[45px] flex items-end">
            Real<p className="text-logoYellow">.</p>
          </div>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default page;
