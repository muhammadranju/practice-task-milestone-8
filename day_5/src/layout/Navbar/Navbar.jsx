import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/coffees">Coffees</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
};
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          COFFEE_BOOK
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold ">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
