import React from "react";
import ProfileImage from "../asset/myIm.png";
import "./pages.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <header>
        <img src={ProfileImage} />

        <h1>Name: Ademola Bamidele</h1>
        <hr />
        <h1>
          Role: Admin <i class="fas fa-users-cog"></i>
        </h1>
        <hr />
        <h1>Email: Ademols@gmail.com</h1>
        <hr />
        <h1>Phone: 08097835421</h1>
      </header>
    </div>
  );
};

export default ProfileCard;
