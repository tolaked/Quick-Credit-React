import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Styled from "styled-components";
import jwt_decode from "jwt-decode";
import { currentUser } from "../state/actionCreator";

const Register = props => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: ""
  });
  let user;
  const submitInfo = (e, credentials) => {
    e.preventDefault();
    console.log("submitted");
    axios
      .post(
        "https://my-quick-credit-app.herokuapp.com/api/v2/auth/signup",
        credentials
      )
      .then(res => {
        console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        const decoded = jwt_decode(res.data.data.token);
        localStorage.setItem("userId", decoded.id);
        user = res.data.data.newUser;
        dispatch(currentUser(user));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  return (
    <div>
      <StyledForm onSubmit={e => submitInfo(e, newUser)}>
        <StyledH3>Please enter your credentials to sign up</StyledH3>
        <Label>firstname</Label>
        <StyledInput
          type="text"
          value={newUser.firstname}
          name="firstname"
          onChange={handleChange}
        />
        <Label>lastname</Label>
        <StyledInput
          type="text"
          value={newUser.lastname}
          name="lastname"
          onChange={handleChange}
        />
        <Label>email</Label>
        <StyledInput
          type="text"
          value={newUser.email}
          name="email"
          onChange={handleChange}
        />
        <Label>address</Label>
        <StyledInput
          type="text"
          value={newUser.address}
          name="address"
          onChange={handleChange}
        />
        <Label>password</Label>
        <StyledInput
          type="text"
          value={newUser.password}
          name="password"
          onChange={handleChange}
        />
        <StyledButton>Join the platform</StyledButton>
        <StyledParagraph>
          Already have an account?
          <Link to="/login">Log in</Link>
        </StyledParagraph>
      </StyledForm>
    </div>
  );
};

export default Register;

const StyledForm = Styled.form`
padding: 0px 30px 25px 30px;
width: 310px;
height:400px;
margin:0 auto;
background: #f3f3f3;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
justify-content: center;
position:relative
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 16x;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center;
font-size:18px;
font-style:italic;
padding-bottom:30px;
padding-top:10px;
color:#323f58;
font-weight:bolder
`;

const StyledButton = Styled.button`
background: #323f58;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 80%
margin: 0 auto;
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
&:hover{
  background:#323f58d7;
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:35px
`;
