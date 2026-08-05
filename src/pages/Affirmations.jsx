import "./Affirmations.css";
import { Helmet } from "react-helmet-async";
import affirmations from "../components/AffirmationsList";

const i = Math.floor(Math.random() * affirmations.length);

const refreshPage = () => {
  window.location.reload();
};

const Affirmations = () => (
  <div className="affirmations">
    <Helmet>
      <title>Affirmations</title>
    </Helmet>
    <h2 className="affirmation">{affirmations[i]}</h2>
    <div className="affirm-button">
      <button className="another" onClick={refreshPage}>
        Another
      </button>
    </div>
  </div>
);

export default Affirmations;
