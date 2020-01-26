import React from "react";
import { Route } from "react-router-dom";
import LoanApplications from "./LoanApplications";
import RepaidLoans from "./RepaidLoans";
import VerifyUser from "./VerifyUser";
import LoanRepayment from "./LoanRepayment";

import ProfileCard from "../ProfileCard";
const AllContents = () => {
  return (
    <div className="allcontents">
      <Route  path="/profile" component={ProfileCard} />
      <Route path="/loans" component={LoanApplications} />
      <Route path="/repaid" component={RepaidLoans} />
      <Route path="/verify" component={VerifyUser} />
      <Route path="/repayment" component={LoanRepayment} />
    
      
    </div>
  );
};

export default AllContents;
