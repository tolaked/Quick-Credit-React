import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "../component/Dashboard";
import AdminViewLoans from "./Admin/AllLoans";
import AdminDashboard from "./Admin/Admindashboard";
const Container = () => {
  return (
    <div>
      <nav>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/view" component={AdminViewLoans} />
        {/* <Route exact path="/admin" component={AdminDashboard} /> */}
      </nav>
    </div>
  );
};

export default Container;
