import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Coffees from "../pages/Coffees/Coffees";
import Coffee from "../pages/Coffees/Coffee";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "../layout/Root/Root";
import CoffeeCategory from "../layout/Categories/CoffeeCategory";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:catId",
            element: <CoffeeCategory />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/coffee/:id",

        element: <Coffee />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Router;
