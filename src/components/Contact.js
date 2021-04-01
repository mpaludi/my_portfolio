import React, { useState } from 'react'
import wapp from '../images/social networks/wapp.png'
import link from '../images/social networks/link.png'
import emailjs from 'emailjs-com'
import github from '../images/social networks/github.png'
import apikeys from "../services/apikeys"

import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Contact.scss'

function Contact() {

  const icon_style = {'width': '50px', 'heigth': '50px'};

  const social_networks_list = [
    {
      img: wapp,
      href: 'https://chatwith.io/s/6042bd6c999b8'
    },
    {
      img: link,
      href: 'https://www.linkedin.com/in/mpaludi00/'
    },
    {
      img: github,
      href: 'https://github.com/Marian00P'
    },
  ]

  const [sendingStatus, setSendingstatus] = useState("");
  const [emptyEmail, setEmptyemail] = useState("");
  const [emptySubject, setEmptysubject] = useState("");
  const [emptyMessage, setEmptymessage] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [incorrectEmail, setIncEmail] = useState("");

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
    setEmptymessage("");
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(document.getElementById("email").value)
    setEmptyemail("");
    setIncEmail("");
  }

  const handleSubject = (e) => {
    setSubject(e.target.value)
    setEmptysubject("");
  }

  const sendMessage = (templateID, senderEmail, receiverEmail, message, user, subject) => {
    emailjs.send('service_2xam9ga',templateID, 
    {
      senderEmail,
      receiverEmail,
      message,
      subject,
    },
    user
    ).then((res) => {
      if(res.status === 200) {
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        setSendingstatus("Message sent successfully.")
      }
    })
    .catch((err) => console.error('Failed to send message. Error: ', err))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(email !== ""){
      if(subject !== "") {
        if(message !== "") {
          if(validateEmail(email)) {
            sendMessage(apikeys.TEMPLATE_ID, email, "mpaludi00@gmail.com", message, apikeys.USER_ID, subject)
          } else {
            setIncEmail(email +' '+ 'is not valid.')
          }
        } else {
          setEmptymessage("This field is required");
        }
      } else {
        setEmptysubject("This field is required");
      }
    } else {
      setEmptyemail("This field is required");
    }
        
  }

  const social_networks = () => {
    return (
      <div class='social-networks'>
          <ul id='container-buttons'> 
          {
            social_networks_list.map(
              (sc) => (
                <li class='social-network'>
                  <a href={sc.href}>
                    <img style={icon_style} src={sc.img}/>
                  </a>
                </li>
              )
            )
          }
          </ul>
      </div>
    )
  }

  return(
    <div className="page-container">

        <h2 class="contact" >Contact</h2>

        <div className="page-content contact">
          <form id='email-form' action='#' class="send-message-form" onSubmit={onSubmit}>
            <div class='form-field'>
              <label>Enter your e-mail * </label> 
              <input id='email' name="email" onChange={handleEmail}></input>
              <p id='error-message'>{(incorrectEmail !== "") ? incorrectEmail : emptyEmail}</p>
              
            </div>
            <div class='form-field'>
              <label>Enter your subject * </label> 
              <input id='subject' name="subject" onChange={handleSubject}></input>
              <p id='error-message'>{emptySubject}</p>
            </div>
            <div class='form-field'>
              <label for='conctact-form-message'>Enter your message * </label> 
              <textarea id='message' name="message" class="contact-form-message" cols="45" rows="4"
                onChange={handleMessage}
              />
              <p id='error-message'>{emptyMessage}</p>
            </div>
          </form>

          <div class='button-send-field'>
            <button class='button-style submit' onClick={onSubmit}>Send</button>
            <p id='status'> {sendingStatus}</p>
          </div>


        </div>

        {social_networks()}

    </div>
  )
}

export default Contact;
