import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../error-page";
import Users from "../components/Users/Users";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
