import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const Router = () => {
  const router = {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  };

  return router;
};

export default Router;
