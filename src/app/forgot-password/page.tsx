import EmailForm from "@/components/EmailForm";
import React from "react";

interface Props {}

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 w-[280px] md:w-[320px] xl:w-[380px]">
        <div>
          <p className="text-xl font-semibold">Reset password</p>
          <p className="text-sm mt-1">
            Enter your email adress to get instructions for resetting your
            password.
          </p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default page;
