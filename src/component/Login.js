import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Axios from "axios";
import Styled from "styled-components";
import jwt_decode from "jwt-decode";

const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const submitInfo = (event, credentials) => {
    event.preventDefault();
    Axios.post(
      "https://my-quick-credit-app.herokuapp.com/api/v2/auth/signin",
      credentials
    )
      .then(({ data }) => {
        localStorage.setItem("token", data.data[0].token);
        const decoded = jwt_decode(data.data[0].token);
        localStorage.setItem("userId", decoded.id);
        console.log(data.data[0].token);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <StyledForm onSubmit={e => submitInfo(e, user)}>
        <StyledH3>Please enter your credentials to sign up</StyledH3>
        <Label>email</Label>
        <StyledInput
          type="text"
          value={user.email}
          name="email"
          onChange={handleChange}
        />

        <Label>password</Label>
        <StyledInput
          type="text"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <StyledButton>Join the platform</StyledButton>
        <StyledParagraph>
          Don't have an account?
          <Link to="/signup">Signup</Link>
        </StyledParagraph>
      </StyledForm>
    </div>
  );
};

export default withRouter(Login);

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
