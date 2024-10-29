import { useNavigate, useRouteError } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <>
        <Header />
        <div
          id="error-page"
          className="flex flex-col items-center justify-center text-2xl font-semibold"
        >
          <h1 className="text-4xl">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>{error.statusText || error.message}</p>
          <p>{error.status}</p>{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handelBack}
          >
            Back
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div
        id="error-page"
        className="flex flex-col items-center justify-center text-2xl font-semibold"
      >
        <h1 className="text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <p>{error.status}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handelBack}
        >
          Back
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
