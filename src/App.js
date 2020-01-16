import React from "react";
import "./App.css";
import Header from "./component/Admin/Header";
import Sidebar from "./component/Admin/Sidebar";
import AllContents from "./component/Admin/AllContents";
import SignUp from "./component/Auth/SignUp"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Sidebar />
      <AllContents /> */}
      <SignUp />
    </div>
  );
}

export default App;
