import React from "react";
import ResetForm from "@/components/ResetForm";

const page = ({ params }: { params: { token: string } }) => {
  const decodedToken = params.token.replace(/%7D/g, "");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 w-[280px] md:w-[320px] xl:w-[380px]">
        <p className="text-xl font-semibold">Reset password</p>
        <ResetForm token={decodedToken} />
      </div>
    </div>
  );
};

export default page;
