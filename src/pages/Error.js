import "./Error.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Error = () => (
  <div className="error-page">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Not Found</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="error-title">404: Not Found.</h1>
    <div className="error-grid">
      <div className="error-image">
        <a href="/">
          <img alt="Error" className="frustration" src="/images/error.png" />
        </a>
      </div>

      <div className="error-text">
        <p>
          The page you are looking for might have been removed, had its named
          changed, or is temporarily unavailable.
        </p>
        <a href="/">
          <button className="big-blue-button">Go home</button>
        </a>
      </div>
    </div>
  </div>
);

export default Error;
