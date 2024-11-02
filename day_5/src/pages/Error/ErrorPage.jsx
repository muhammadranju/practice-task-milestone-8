import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>This is the error page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
