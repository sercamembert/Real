import getCurrentUser from "@/actions/getCurrentUser";
import CommentSection from "@/components/CommentSection";
import CommentsCount from "@/components/CommentsCount";
import EditorOutput from "@/components/EditorOutput";
import PostLike from "@/components/PostLike";
import PostShare from "@/components/PostShare";
import UserAvatar from "@/components/UserAvatar";
import { db } from "@/lib/prismadb";
import { formatTimeToNow } from "@/lib/utils";
import { Dot } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    postId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const postId = params.postId;
  const currentUser = await getCurrentUser();
  const post = await db?.post.findFirst({
    where: {
      id: postId,
    },
    include: {
      likes: true,
      comments: true,
      author: true,
    },
  });

  if (!post) return notFound();

  return (
    <div className="break-words  w-full md:w-[600px] 2xl:w-[700px] bg-white rounded-xl border border-gray-200 flex flex-col p-4 py-6 gap-2">
      <div className="w-full flex items-center">
        <UserAvatar
          image={
            post.author.image ||
            "https://i1.sndcdn.com/artworks-flIE8AIPtmdDD8Tb-y63vwg-t500x500.jpg"
          }
          w={30}
          h={30}
        />
        <p className="font-semibold font-secoundary pl-1 text-dark">
          {post.author.name}
        </p>
        <div className="flex text-textGray items-center">
          <Dot width={15} height={15} />
          <p className="font-secoundary text-xs">
            {formatTimeToNow(new Date(post.createdAt))}
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-semibold py-2 leading-6 text-dark">
        {post.title}
      </h1>

      <EditorOutput content={post.content} />

      <hr className="w-full bg-outlineGray mt-5" />
      <div className="flex gap-3">
        <div className="flex gap-5 items-center">
          <PostLike post={post} userId={currentUser?.id} />
          <CommentsCount commentsCount={post.comments.length} />
          <PostShare path={`http://localhost:3000/post/${postId}`} />
        </div>
      </div>

      <CommentSection postId={postId} />
    </div>
  );
};

export default page;