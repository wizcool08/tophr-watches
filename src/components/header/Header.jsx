import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

import Logo from "./images/tophrs_logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="tophrs_logo" width="100px" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact_us">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
