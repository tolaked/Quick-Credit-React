import React, { useState } from "react";
import styled from "styled-components";
import { connect,useDispatch } from 'react-redux';
import axios from 'axios';

import {doSignUp} from '../../state/actions/signUp'

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
const SignUp = ({doSignUp}) => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: ""
  };

  const initialErrors = {
    fNameError: "",
    lNameError: "",
    emailError: "",
    addressError: "",
    passError: ""
  };
  const [newUser, setNewUser] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const dispatch = useDispatch()
  const handleChange = event => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleErrors = () => {
    let emailError =''
    let fNameError = ''
    let lNameError =''
    let addressError =''
    let passError =''

    if(!newUser.firstname){
        fNameError='first name is required and must be at least 4 digits'
    }

    if(!newUser.lastname){
        lNameError='Last name is required and must be at least 4 digits'
    }


    if(!newUser.address){
        addressError='Address is required and must be at least 4 digits'
    }
    
    if(!newUser.password){
        passError='Address is required and must be at least 4 digits'
    }
    

    if(!newUser.email.includes('@'))
    {
        emailError='invalid email'
    }

    if(emailError || fNameError || passError || addressError ||lNameError){
        setErrors({emailError,fNameError,lNameError,addressError,passError})
        return false;
    }
      return true
  };


  const handleSubmit = event => {
    event.preventDefault();
    const isValid = handleErrors();
    if(isValid){
        setErrors(initialErrors)
    }
   doSignUp(newUser)
  };

  const {firstname,lastname,address,email,password} = newUser
  
    const isDisabled = (firstname,lastname,address,email,password) => {
        if (!firstname || !lastname || !address || !password || !email) {
          return true;
        } else {
          return false;
        }
      };
    


  return (
    <div>
      <Form onSubmit={event => handleSubmit(event)}>
        <InputDiv>
          <Label>firstName</Label>
          <Input
            type="text"
            name="firstname"
            value={newUser.firstname}
            onChange={handleChange}
          />
         <div style={{color:"red"}}>{errors.fNameError}</div>
        </InputDiv>

        <InputDiv>
          <Label>lastName</Label>
          <Input
            type="text"
            name="lastname"
            value={newUser.lastname}
            onChange={handleChange}
          />
            <div style={{color:"red"}}>{errors.lNameError}</div>
        </InputDiv>

        <InputDiv>
          <Label>email</Label>
          <Input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
           <div style={{color:"red"}}>{errors.emailError}</div>
        </InputDiv>

        <InputDiv>
          <Label>address</Label>
          <Input
            type="text"
            name="address"
            value={newUser.address}
            onChange={handleChange}
          />
            <div style={{color:"red"}}>{errors.addressError}</div>
        </InputDiv>

        <InputDiv>
          <Label>password</Label>
          <Input
            type="text"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
            <div style={{color:"red"}}>{errors.passError}</div>
        </InputDiv>
        <Button disabled = {isDisabled(firstname,lastname,address,email,password)}>SignUp</Button>
      </Form>
    </div>
  );
};

// const mapStateToProps =(state)=>({

// })

export default connect(state=>state,{doSignUp})(SignUp);
