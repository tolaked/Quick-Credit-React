import React from "react";
import "./App.css";
import Header from "./component/Admin/Header";
import Sidebar from "./component/Admin/Sidebar";
import AllContents from "./component/Admin/AllContents";
import SignUp from "./component/Auth/SignUp";
import Login from "./component/Auth/Login"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Sidebar />
      <AllContents /> */}
      {/* <SignUp /> */}
      <Login/>
    </div>
  );
}

export default App;
