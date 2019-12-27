import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const Container = () => {
  return (
    <div>
      <nav>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/login" component={Login} />
      </nav>
    </div>
  );
};

export default Container;
