import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/services/PostServices";
import { TPost } from "@/types";
import React, { Suspense } from "react";
import PostLoading from "./loading";

const AllPostsPage = async () => {
  const posts = await getAllPosts("ssr",true);
  return (
    <div className="my-10 w-[90%] mx-auto">
      <div className="grid grid-cols-3 my-12 gap-8">
        <Suspense
          fallback={
            <>
              {Array.from({ length: posts.length }).map((_, index) => (
                <PostLoading key={index} />
              ))}
            </>
          }
        >
          {posts.map((post: TPost) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllPostsPage;
