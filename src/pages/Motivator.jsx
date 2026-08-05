import "./Motivator.css";
import { Helmet } from "react-helmet-async";
import motivator from "../components/MotivatorList";

const i = Math.floor(Math.random() * motivator.length);

const refreshPage = () => {
  window.location.reload();
};

const Motivator = () => (
  <div className="motivator">
    <Helmet>
      <title>Motivator</title>
    </Helmet>
    <h2 className="motivation">{motivator[i]}</h2>
    <div className="affirm-button">
      <button className="another-motivator" onClick={refreshPage}>
        Another
      </button>
    </div>
  </div>
);

export default Motivator;
