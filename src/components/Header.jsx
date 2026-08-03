import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="header">
    <Link className="name-link" to="/">
      <h1 className="name">Jonathan Scheiber</h1>
    </Link>
  </div>
);

export default Header;
