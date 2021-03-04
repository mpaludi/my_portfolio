import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'

function Contact() {

  return(
    <div className="page-container">
        <h2 class="contact" >Contact</h2>
        <div className="page-content">
          <p> E-mail:   ______________________</p>
          <p> Asunto:   _____________________</p>
          <p> Texto:   ______________________</p>
          <button>Send</button>
        </div>
        <br/>
        <br/>
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