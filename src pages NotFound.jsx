import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function NotFound() {
  useDocumentTitle("404 - Page Not Found");

  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="text-muted">Sorry, that page doesn't exist.</p>
      <Link to="/" className="btn btn-dark mt-2">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
