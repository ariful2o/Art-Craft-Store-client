
import { Link, useRouteError } from "react-router-dom";
import error404 from '../assets/404.svg'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center space-y-6">
      <img className="w-full h-[600px]" src={error404} alt="" />
      <h1 className="text-9xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl text-red-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-outline btn-error">Back Home</Link>
    </div>
  );
}