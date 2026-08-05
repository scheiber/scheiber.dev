import "./Error.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="error-page">
    <Helmet>
      <title>Jonathan Scheiber | Not Found</title>
    </Helmet>
    <h2 className="error-title">404: Not Found.</h2>
    <div className="error-grid">
      <div className="error-image">
        <Link to="/">
          <img alt="Error" className="frustration" src="/images/error.png" />
        </Link>
      </div>

      <div className="error-text">
        <p>
          The page you are looking for might have been removed, had its named
          changed, or is temporarily unavailable.
        </p>
        <Link className="big-button" to="/">
          Go home
        </Link>
      </div>
    </div>
  </div>
);

export default Error;
