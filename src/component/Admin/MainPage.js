import React from 'react'
import { NavLink, withRouter, Route } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import AllContents from './AllContents';
import LoanApplications from "./LoanApplications";
import RepaidLoans from "./RepaidLoans";
import VerifyUser from "./VerifyUser";
import LoanRepayment from "./LoanRepayment";
import ProfileCard from "../ProfileCard";


const MainPage = () => {
    return (
        <div>
             <Header />
      <Sidebar />
      <AllContents />
        </div>
    )
}

export default withRouter(MainPage)
