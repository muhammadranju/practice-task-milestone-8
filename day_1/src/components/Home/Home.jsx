import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Home;
