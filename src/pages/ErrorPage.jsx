
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page" className="text-center mt-44">
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <h1 className="text-4xl font-sotify my-6">Oops!</h1>
      <p className="italic text-xl my-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-6xl text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="mt-10">
        <Link to="/">
          <button className="btn btn-primary rounded-3xl">Go Home</button>
        </Link>
      </p>
    </div>
  );
}