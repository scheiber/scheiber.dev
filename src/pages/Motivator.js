import "./Motivator.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const motivator = require("../components/MotivatorList").default;
const i = Math.floor(Math.random() * motivator.length);

const refreshPage = () => {
  window.location.reload();
};

const Motivator = () => (
  <div className="motivator">
    <HelmetProvider>
      <Helmet>
        <title>Motivator</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="motivation">{motivator[i]}</h1>
    <div className="affirm-button">
      <button className="another-motivator" onClick={refreshPage}>
        Another
      </button>
    </div>
  </div>
);

export default Motivator;
