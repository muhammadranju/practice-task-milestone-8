import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Home from "../Home/Home";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto h-screen text-center">
        <Header />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
