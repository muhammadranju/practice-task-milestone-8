import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="mx-auto xl:container md:w-11/12 lg:w-11/12 w-11/12 ">
        <Navbar />
        <div className="min-h-[calc(100vh-292px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
