import React from 'react';
import '../css/Profile.scss'
import '../css/Button.scss'

function Contact() {

  return(
    <div className="profile-container">
        <h2>Contact</h2>
        <div className="profile-content">
          <p> E-mail:   ______________________</p>
          <p> Asunto:   _____________________</p>
          <p> Texto:   ______________________</p>
          <button>Send</button>
        </div>
        <br/>
        <br/>
        <ul id='container-buttons'>
          <li>
            <h4>Instagram</h4>
          </li>
          <li>
            <h4>LinkedIn</h4>
          </li>
          <li>
            <h4>WhatsApp</h4>
          </li>
          <li>
            <h4>Telegram</h4>
          </li>
        </ul>
    </div>
  )
}

export default Contact;