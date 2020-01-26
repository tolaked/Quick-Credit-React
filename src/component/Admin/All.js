import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import Login from '../Auth/Login'

function All() {
  return (
    <div>
      <Route  path="/" component={MainPage} />
      <Route  path="/login" component={Login} />
    </div>
  );
}

export default All;
