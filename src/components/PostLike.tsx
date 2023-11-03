"use client";
import { Like, Post } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { User } from "next-auth";
import React, { useState } from "react";
import { LikeRequest } from "@/lib/validators/like";
import axios, { AxiosError } from "axios";
import useCustomToast from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
interface ExtendedPost extends Post {
  likes: Like[];
}

interface Props {
  post: ExtendedPost;
  userId: string | undefined;
}
const PostLike = ({ post, userId }: Props) => {
  const { loginToast } = useCustomToast();
  const postId = post.id;
  const [isLiked, setIsLiked] = useState(
    post.likes.some((like) => like.userId === userId)
  );

  const [isRequesting, setIsRequesting] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(post.likes.length);

  const mutation = useMutation({
    mutationFn: async ({ isLiked, postId }: LikeRequest) => {
      const payload: LikeRequest = { isLiked, postId };
      const { data } = await axios.patch("/api/post/like", payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }
      return toast({
        title: "Something went wrong",
        description: "Your like was not registered please try again.",
        variant: "destructive",
      });
    },
    onMutate: () => {
      setIsRequesting(true);
    },
    onSettled: () => {
      setIsRequesting(false);
    },
    onSuccess: (data: any) => {
      setIsLiked(data.isLiked);
      setLikeCount((prevCount) =>
        data.isLiked ? prevCount + 1 : prevCount - 1
      );
    },
  });
  return (
    <div className="flex items-center gap-1">
      <Heart
        className="text-red-600 cursor-pointer"
        color={isLiked ? "#dc2626" : "#000"}
        fill={isLiked ? "#dc2626" : "none"}
        onClick={() => !isRequesting && mutation.mutate({ isLiked, postId })}
        width={25}
        height={25}
      />
      {likeCount}
    </div>
  );
};

export default PostLike;
