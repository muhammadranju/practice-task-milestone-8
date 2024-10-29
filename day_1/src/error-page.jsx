import { useRouteError } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <div
        id="error-page"
        className="flex flex-col items-center justify-center h-screen text-2xl font-semibold"
      >
        <h1 className="text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
