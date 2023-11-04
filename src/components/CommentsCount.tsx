import { MessageSquare } from "lucide-react";
import React from "react";

interface Props {
  commentsCount: number;
}

const CommentsCount = ({ commentsCount }: Props) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 cursor-pointer hover:bg-gray-200 p-1 rounded-xl font-semibold">
      <MessageSquare />
      {commentsCount}
    </div>
  );
};

export default CommentsCount;
