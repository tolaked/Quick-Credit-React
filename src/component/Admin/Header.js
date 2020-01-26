import React from "react";
import {Link,Route} from 'react-router-dom';

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
       <span><Link  to='/login'>Logout</Link></span>
      </div>
    </div>
  );
};

export default Header;
