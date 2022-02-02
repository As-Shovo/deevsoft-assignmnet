import React from 'react';
import useAuth from '../../Hook/useAuth';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {

  const { user, handleSignOut } = useAuth();


  return (
    <div>
    <Header />
     <div className="red-border">
     <div className="profile">
        <h2>User Email: </h2>
        <p>{user.email}</p>
        <div className="input">
          <div className="google-button" onClick={handleSignOut}> Logout </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Profile;
