import "./Affirmations.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const affirmations = require("../components/AffirmationsList").default;
const i = Math.floor(Math.random() * affirmations.length);
// console.log(`This is affirmation number ${i} out of ${affirmations.length}.`);

const refreshPage = () => {
  window.location.reload();
};

const Affirmations = () => (
  <div className="affirmations">
    <HelmetProvider>
      <Helmet>
        <title>Affirmations</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="affirmation">{affirmations[i]}</h1>
    <div className="affirm-button">
      <button className="another" onClick={refreshPage}>
        Another
      </button>
    </div>
  </div>
);

export default Affirmations;
