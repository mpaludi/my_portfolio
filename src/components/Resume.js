import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Resume.scss'

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
        <div class="get-cv">
          <button class="button-style get-cv" onClick={() => {window.location.href = "https://drive.google.com/file/d/1TPmCNO73v9L4xgVnyqG5alLQe6DVYC-6/view?usp=sharing"}}>
          Get CV
          </button>
        </div>
    </div>
  )
}

export default Resume;