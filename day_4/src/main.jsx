import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// dependencies packages
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import App from "./App.jsx";
import Books from "./pages/Book/Books.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
