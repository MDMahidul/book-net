import { TPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={post.image} alt="item" width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <p>{post.name}</p>
          <div className="badge p-3 bg-fuchsia-500">{post.category}</div>
        </h2>

        <div className="card-actions justify-end">{post.description}</div>
        <Link
          href={`/posts/${post.id}`}
          className="font-semibold text-end text-sm text-fuchsia-800 underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
