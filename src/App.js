import React from "react";
import {Route} from 'react-router-dom';

import "./App.css";
import AllContents from './component/Admin/AllContents'
import Header from './component/Admin/Header'
import Sidebar from './component/Admin/Sidebar'
import All from './component/Admin/All'
import Login from "./component/Auth/Login"

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Sidebar/>
      <AllContents/> */}
     <All/>
     {/* <Route  path="/login" component={Login} /> */}
    
     
    </div>
  );
}

export default App;
