import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoans } from "../state/actionCreator";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userLoans = user.currentUser.loans;
  useEffect(() => {
    dispatch(getLoans());
  }, []);
  return (
    <div>
      {userLoans.map(loans => (
        <div key={loans.id}>
          <p>Amount:{loans.balance}</p>
          <p>payment installment:{loans.paymentinstallment}</p>
          <p>clientmail:{loans.clientemail}</p>
          <p>Date:{loans.createdon}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
