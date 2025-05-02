import { createComment, getCommentsById } from "@/services/CommentsServices";
import { TComment, TPost } from "@/types";
import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import { revalidateTag } from "next/cache";

const PostDetails = async ({ post }: { post: TPost }) => {
  const comments = await getCommentsById(post.id, true);

  const handleSubmitComment = async (formData: FormData) => {
    "use server";
    const commentData = {
      postId: post.id,
      comment: formData.get("comment"),
      id: JSON.stringify(comments.length + 1),
    };
    console.log(commentData);
    try {
      const res = await createComment(commentData as TComment);
      if(res){
        revalidateTag("Comments");
        console.log("Comment created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={post.image} alt="book image" width={300} height={300} />
      </figure>
      <div className="p-12">
        <div className="flex justify-between mb-4">
          <h2 className="card-title">{post.name}</h2>
          <div className="badge p-4 bg-fuchsia-500">{post.category}</div>
        </div>
        <p>{post.description}</p>
        <Comments comments={comments} />
        <form action={handleSubmitComment} className="p-5 mt-12">
          <div className="form-control">
            <textarea
              name="comment"
              placeholder="Write your comment here..."
              className="textarea textarea-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent btn-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
