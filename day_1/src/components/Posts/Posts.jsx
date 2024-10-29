import { useLoaderData } from "react-router-dom";
import PostDetails from "./PostDetails";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      Posts:{posts.project.length}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
        {posts.project.map((post) => (
          <PostDetails post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
