import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "../component/Dashboard";

const Container = () => {
  return (
    <div>
      <nav>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </nav>
    </div>
  );
};

export default Container;
