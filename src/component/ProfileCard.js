import React,{useEffect,useState} from "react";
import {connect} from 'react-redux';

import {doLogin} from '../state/actions/signIn'
import ProfileImage from "../asset/myIm.png";
import "./pages.css";

const ProfileCard = ({user,doLogin}) => {

  const name = user.lastname;
  const email=user.email
 
  return (
    <div className="profile-card">
      <header>
        <img src={ProfileImage} />

  <h1>Name: {name}</h1>
        <hr />
        <h1>
          Role: Admin <i class="fas fa-users-cog"></i>
        </h1>
        <hr />
  <h1>Email: {email}</h1>
        <hr />
        <h1>Phone: 08097835421</h1>
      </header>
    </div>
  );
};

const mapStateToProps = (state) =>({
user: state.login.user
})

export default connect(mapStateToProps,{doLogin})(ProfileCard);
