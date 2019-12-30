import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoans } from "../../state/actionCreator";
import AdminDashboard from "./Admindashboard";

const AllLoans = () => {
  const dispatch = useDispatch();
  const loans = useSelector(state => state.loans);
  const allLoans = loans.loans.allLoans;
  useEffect(() => {
    dispatch(getAllLoans());
  }, []);

  return (
    <div>
      <AdminDashboard />
      {allLoans.map(loans => (
        <div
          style={{
            color: "black",
            width: 300,
            marginBottom: "0.5em",
            backgroundColor: "#A4A9AD"
          }}
          key={loans.id}
        >
          <p>Amount:{loans.balance}</p>
          <p>payment installment:{loans.paymentinstallment}</p>
          <p>clientmail:{loans.clientemail}</p>
          <p>Date:{loans.createdon}</p>
          <p>Status:{loans.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AllLoans;
