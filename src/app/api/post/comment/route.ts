import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/prismadb";
import { CommentValidator } from "@/lib/validators/comment";
import { z } from "zod";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { postId, text, replyToId } = CommentValidator.parse(body);

    const user = await getCurrentUser();

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    await db?.comment.create({
      data: {
        text,
        postId,
        authorId: user.id,
        replyToId,
      },
    });
    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }
    return new Response("Could not create comment, please try again later", {
      status: 500,
    });
  }
}
