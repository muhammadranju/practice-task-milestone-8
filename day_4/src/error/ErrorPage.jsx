import { Navigate, useRouteError } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container mx-auto">
      <Header />
      <div className="text-center text-5xl font-bold text-red-500 min-h-[calc(100vh-120px)]">
        <h1>Oops! Something went wrong.</h1>
        <h2>
          <i>{error.statusText || error.message}</i>
        </h2>
        <button onClick={() => Navigate(-1)} className="btn btn-primary">
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
