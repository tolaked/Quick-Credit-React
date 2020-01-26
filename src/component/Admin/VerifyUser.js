import React from "react";
import Styled from "styled-components";

const VerifyUser = () => {
  return (
    <div className="create-loan-form">
      <Form action="">
        <div class="message_wrapper">
          <ul>
            <li class="message_wrapper_header">
              <p class="cancel-form">x</p>
              <h1 class="message-header">User Verification</h1>
            </li>
          </ul>
          <div class="feed"></div>
        </div>

        <hr />
        <div class="modal-body">
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            required
          />

          <label for="verification">Verification status</label>

          <select name="verif" id="veriStatus" class="newStatus">
            <option value="verified">--Select--</option>
            <option value="verified">verified</option>
            <option value="unverified">unverified</option>
          </select>
        </div>
        <hr />

        <button type="submit" class="add-loan-button">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default VerifyUser;

const Form = Styled.form`
  width: 100%;
  height: 70%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 2;
  cursor: pointer;
  margin-left:30px
`;
