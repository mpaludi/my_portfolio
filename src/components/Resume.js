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
          21 year old JR Software Developer, looking to start gaining experience and become a professional Full-Stack Developer. 
          </p>
          <p>
            Although I do not have experience under a formal dependency relationship, I can guarantee that with all the knowledge acquired in my career during these years, together with my enthusiasm and desire to continue learning, I can perform correctly and effectively in any area where I am called upon.
          </p>
        </div>
        <div class="get-cv">
          <button class="button-style get-cv" onClick={() => {window.location.href = "https://drive.google.com/file/d/1HBrgH2phYVpgcXlZtRy7HXt3WOvPYSWX/view?usp=sharing"}}>
          Get CV
          </button>
        </div>
    </div>
  )
}

export default Resume;