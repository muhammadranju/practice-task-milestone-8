import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <div className="text-center">User: {users.length}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="text-center border-4 rounded-xl p-3">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
            <p>{user.company.catchPhraseArea}</p>
            <p>{user.company.profile}</p>
            <p>{user.company.type}</p>
            <p>{user.company.website}</p>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
            <Link to={`/user/${user.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
