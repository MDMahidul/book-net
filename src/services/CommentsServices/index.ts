"use server";

import { TComment } from "@/types";
import { delay } from "@/utils/delay";

export const getCommentsById = async (ipostId: string, wait = false) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${ipostId}`,
    {
      next: {
        tags: ["Comments"],
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  if (wait) {
    delay(2000);
  }

  return res.json();
};

export const createComment = async ( data: TComment) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error ${res.status}: ${errorText}`);
  }

  return res.json();
};
