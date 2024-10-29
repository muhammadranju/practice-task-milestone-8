import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const User = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };

  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <button
        onClick={handelBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      <h1 className="text-center text-3xl">{user.name}</h1>
    </div>
  );
};

export default User;
