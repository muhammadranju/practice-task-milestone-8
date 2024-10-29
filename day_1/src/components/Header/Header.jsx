import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex justify-between items-center gap-5 cursor-pointer ">
        <Link to={"/"}>
          <li className="hover:underline hover:underline-offset-4">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:underline hover:underline-offset-4">About</li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:underline hover:underline-offset-4">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
