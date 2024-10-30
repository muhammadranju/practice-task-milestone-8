import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../error-page";
import Users from "../components/Users/Users";
import Posts from "../components/Posts/Posts";
import User from "../components/Users/User";
import Post from "../components/Posts/Post";

const App = () => {
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
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
          element: <Users />,
        },
        {
          path: "/user/:userId",
          loader: ({ params }) =>
            fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            ),
          element: <User />,
        },
        {
          path: "/posts",
          loader: () =>
            fetch(
              "https://portfolio-project-api-sooty.vercel.app/v1/api/project"
            ),
          element: <Posts />,
        },
        {
          path: "/post/:postId",
          loader: ({ params }) =>
            fetch(
              `https://portfolio-project-api-sooty.vercel.app/v1/api/project/${params.postId}`
            ),
          element: <Post />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
