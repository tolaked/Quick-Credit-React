import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllLoans } from "../../state/actionCreator";
import "./modal.css";
const Modal = ({ handleClose, show, children }) => {
  const [status, Setstatus] = useState({ statu: "" });
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const dispatch = useDispatch();
  const loans = useSelector(state => state.loans);

  const allLoans = loans.loans.allLoans;
  console.log("modal lons", allLoans);
  useEffect(() => {
    dispatch(getAllLoans());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.target;
    Setstatus({ ...status, [name]: value });
  };

  const MakeItem = function(X, val) {
    console.log(val);
    return <option value={val}>{X}</option>;
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div>
          <form>
            <h3>User verification</h3>
            <div class="select">
              <select name="status" id="slct" onChange={handleChange}>
                <option>select a user</option>
                {allLoans.map(client =>
                  MakeItem(client.clientemail, client.id)
                )}
              </select>
            </div>
            <br />
            <div class="select">
              <select name="status" id="slct">
                <option selected disabled>
                  Choose an option
                </option>
                <option value="verified">Verified</option>
                <option value="unverified">Unverified</option>
              </select>
            </div>
            <button>submit</button>
          </form>
        </div>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
