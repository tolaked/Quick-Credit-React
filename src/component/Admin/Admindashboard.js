import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import { getAllLoans } from "../../state/actionCreator";

const Admindashboard = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <div>
      <h1>Verify user</h1>
      <Modal show={show} handleClose={hideModal}></Modal>
      <button type="button" onClick={showModal}>
        open
      </button>
    </div>
  );
};

export default Admindashboard;
