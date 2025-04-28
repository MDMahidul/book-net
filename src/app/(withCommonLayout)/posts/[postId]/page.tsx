import PostDetails from "@/components/ui/PostDetails";
import { getPost } from "@/services/PostServices";
import React from "react";
type TProps = {
  params: {
    postId: string;
  };
};
const PostDetailsPage =async ({ params }: TProps) => {
    const post =await getPost(params.postId, true);
  return (
    <div className="p-5">
      <PostDetails post={post}/>
    </div>
  ); 
};

export default PostDetailsPage;
