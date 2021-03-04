import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'

function Resume() {

  return(
    <div className="page-container">
        <h2 class="resume" >Resume</h2>
        <div className="page-content">
        <p>
         Desarollador de Software JR de 21 años, en busca 
         de comenzar a adquirir experiencia 
         y lograr profecionalizarse como Desarollador Full-Stack. 
        </p>
        </div>
        <br/>
        <br/>
        <br/>
        <ul id='container-buttons'>
            <li >
              <h4>Get CV</h4>
            </li>
          </ul>
    </div>
  )
}

export default Resume;