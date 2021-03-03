import React from 'react';
import '../css/Profile.scss'
import '../css/Button.scss'

function Profile() {

  return(
    <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-content">
          <p> Bla bla bla bla bla  </p>
        </div>
        <ul id='container-buttons'>
          <li>
            <h4>Fortalezas</h4>
          </li>
          <li>
            <h4>Debilidades</h4>
          </li>
        </ul>
    </div>
  )
}

export default Profile;