import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostDetails = ({ post }) => {
  const navigate = useNavigate();
  const handelShowPost = () => {
    navigate(`/post/${post._id}`);
  };
  return (
    <div className=" border-4 rounded-xl " key={post.id}>
      <img src={post.image} alt={post.title} />
      <h1 className="text-center text-3xl">{post.title}</h1>
      <p>{post.details}</p>
      <p>{post.author}</p>
      <p>{post.category}</p>
      <p>{post.createdAt}</p>
      <p>{post.updatedAt}</p>
      <Link to={`/post/${post._id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </Link>
      <button
        onClick={handelShowPost}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Details
      </button>
    </div>
  );
};

export default PostDetails;
