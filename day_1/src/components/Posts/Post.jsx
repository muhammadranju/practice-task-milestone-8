import { useLoaderData, useNavigate } from "react-router-dom";

const Post = () => {
  const post = useLoaderData();
  const { title, details, image, liveLink, sourceCode } = post.project;
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handelBack}
      >
        Back
      </button>
      <div className=" rounded-2xl p-4">
        <img
          src={image}
          className="rounded-2xl shadow-2xl shadow-indigo-500 hover:shadow-indigo-700 "
          alt={title}
        />
      </div>
      <h1>{title}</h1>
      <p>{details}</p>
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Live
          </button>
        </a>
      )}
      {sourceCode && (
        <a href={sourceCode} target="_blank" rel="noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Source Code
          </button>
        </a>
      )}
    </div>
  );
};

export default Post;
