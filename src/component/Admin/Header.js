import React from "react";
import "../pages.css";
import logo from "../../asset/kwikapp1.png";

const Header = () => {
  return (
    <div>
      <div className="headerr">
        <div className="logo-container">
          <span className="logo-icon">
            <img src={logo} />
          </span>
        </div>
        <div className="dropdown">
          <button className="dropicon">
            <i class="fas fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
