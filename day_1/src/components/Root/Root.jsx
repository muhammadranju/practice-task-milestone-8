import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Home from "../Home/Home";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div className="container mx-auto  ">
        <Header />
        {navigation.state === "loading" ? (
          <div className="flex  items-center justify-center text-2xl font-semibold h-screen">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
