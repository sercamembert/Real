import getCurrentUser from "@/actions/getCurrentUser";
import Feed from "@/components/Feed";
import { db } from "@/lib/prismadb";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="w-[90%] md:w-[500px] lg:w-[600px] 2xl:w-[700px] flex items-center justify-center ">
      <Feed currentUserId={user?.id} />
    </div>
  );
};

export default page;
