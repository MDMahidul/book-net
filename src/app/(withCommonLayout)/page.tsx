import Banner from "@/components/banner/Banner";
import LatestPost from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/PostServices";

const HomePage =async () => {
  const posts=await getAllPosts();
  return (
    <>
      <Banner/>
      <LatestPost posts={posts} />
    </>
  );
};

export default HomePage;
