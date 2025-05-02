"use server";

import { delay } from "@/utils/delay";

export const getCommentsById = async (ipostId: string, wait = false) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${ipostId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  if (wait) {
    delay(2000);
  }

  return res.json();
};
