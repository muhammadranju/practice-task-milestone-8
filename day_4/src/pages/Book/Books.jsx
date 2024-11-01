import { NavLink } from "react-router-dom";

const Books = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-7xl font-bold">Books</div>
      <NavLink to="/book">
        <button className="btn btn-primary">View Book</button>
      </NavLink>
    </div>
  );
};

export default Books;
