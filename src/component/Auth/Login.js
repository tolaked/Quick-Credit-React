import React, { useState } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {doLogin} from '../../state/actions/signIn'

const Form = styled.form`
  width: 350px;
  height: auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding: 2.5rem 0;
  border-radius: 20px;
  margin: 0 auto;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  background: #f1eded;
  border: 0.5px solid #716969;
  outline: none;
  height: 40px;
  font-size: 1.6rem;
  width: 250px;
  border-radius: 20px;
`;

export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Button = styled.button`
  background: grey;
  height: 30px;
`;
const Login = (props) => {
  const doLogin = props.doLogin
  const initialState = {
    email: "",
    password: ""
  };

  
  const [existingUser, setExistingUser] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;
    setExistingUser({ ...existingUser, [name]: value });
  };


  const handleSubmit = event => {
    event.preventDefault();
   doLogin(existingUser)
   props.history.push('/profile')
  };

  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
       
        <InputDiv>
          <Label>email</Label>
          <Input
            type="text"
            name="email"
            value={existingUser.email}
            onChange={handleChange}
          />
        </InputDiv>

        

        <InputDiv>
          <Label>password</Label>
          <Input
            type="text"
            name="password"
            value={existingUser.password}
            onChange={handleChange}
          />
        </InputDiv>
        <Button>Login</Button>
        <span>Don't have an account,<Link to='/signup'> signup</Link></span>
      </Form>
    </div>
  );
};


export default connect(state=>state,{doLogin})(Login);
