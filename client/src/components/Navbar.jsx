import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "./LandingPage.scss";
import logosmall from "../assets/images/logo300.png";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img className="navbarLogo" src={logosmall} alt="logo Art from home" />
      </a>

      <ul className="navbarList">
        <li>
          <Link rel="stylesheet" to="/" className="buttonAccueil">
            Home
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClick}
            onKeyDown={handleClick}
            className="dropDown"
          >
            Category
          </button>
          {isDropdownVisible && <DropdownMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
