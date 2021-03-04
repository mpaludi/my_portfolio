import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Contact.scss'

function Contact() {

  return(
    <div className="page-container">
        <h2 class="contact" >Contact</h2>
        <div className="page-content">
          <a> E-mail: </a> <input placeholder="Insert your email"></input>
          <br/>
          <br/>
          <br/>
          <a> Subject: </a> <input placeholder="Insert your subject"></input>
          <br/>
          <br/>
          <br/>
          <a> Text: </a> <input placeholder="Insert text" class="text"></input>
          <br/>
          <br/>
          <br/>
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