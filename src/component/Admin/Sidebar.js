import React from "react";
import { NavLink, withRouter, Route } from "react-router-dom";
import MainPage from './MainPage';
import "../pages.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-icon">
        <section className="sidebar">
          <NavLink className="navlink" to="/loans" activeClassName="active">
            Loan Applications
          </NavLink>
          <NavLink className="navlink" to="/profile">
            Profile
          </NavLink>
          <NavLink className="navlink" to="/repaid">
            Repaid Loans
          </NavLink>
          <NavLink className="navlink" to="/verify">
            Verify User
          </NavLink>
          <NavLink className="navlink" to="/repayment">
            Loan repayment
          </NavLink>
          {/* <Route to='/mainpage' component={MainPage}/> */}
        </section>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
