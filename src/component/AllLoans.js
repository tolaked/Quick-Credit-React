import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";

import { getLoans } from "../state/actionCreator";

const AllLoans = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userLoans = user.currentUser.loans;
  useEffect(() => {
    dispatch(getLoans());
  }, []);
  return (
    <div>
      {userLoans.map(loans => (
        <div
          style={{
            width: 100,
            dispaly: "grid",
            gridRowGap: "50px"
          }}
          key={loans.id}
        >
          <Card
            style={{
              color: "black",
              width: 300,
              marginBottom: "0.5em",
              backgroundColor: "#A4A9AD"
            }}
          >
            <p>Amount:{loans.balance}</p>
            <p>payment installment:{loans.paymentinstallment}</p>
            <p>clientmail:{loans.clientemail}</p>
            <p>Date:{loans.createdon}</p>
            <p>Status:{loans.status}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllLoans;
