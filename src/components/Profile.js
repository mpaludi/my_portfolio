import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"
import ScrollToTop from 'react-scroll-up'

function Profile() {
  
  function text(language){
    if (language === "ES") {
      return(
        <p>
          Estudiante de computación, cursando el cuarto año, 
          con muchas ganas de insertarse en el mundo laboral 
          garantizando una gran capacidad para resolver problemas, 
          y una fácil adaptación ante cualquier tecnología.
          <br/> 
          Sociable, por lo que me gusta trabajar en equipo y ayudar al resto. (Amo el metodo SCRUM)
          Me gustan mucho los nuevos desafios
          ya que son los que me impulsan a mejorar cada dia.
          <br/>
          Proactivo, y con muchas ganas de seguir aprendiendo. 
        </p>
      )
    } else {
      return(
        <p class="text">
          Computer science student, in his fourth year, eager to enter the working world,
          with a great ability to solve problems,
          and an easy adaptation to any technology.
          <br/> 
          Sociable, so I like to work in a team and help others (I love the SCRUM method).
          I really like new challenges as they are the ones that drive me to improve every day.
          <br/>
          Proactive, and eager to keep learning.
        </p>
      )
    }
  };

  return(
    <div className="page-container">
      <div class="section-container">
        <div class="nav-container">
          <nav class="nav-profile">
          <Scrollspy class="nav-menu" items={['skills','experiences','education']} currentClassName="is-current">
            <a href="#skills">Skills</a>
            <a href="#experiences">Experiences</a>
            <a href="#education">Education</a>
          </Scrollspy>
          </nav>
        </div>
        <section id="profile-home">
          <h2 class="profile" >Profile</h2>
          <div className="page-content">
              {text("EN")}
          </div>
        </section>
        <section id="skills">
          <div class="header-section">
            <h2 class="skills">Main skills</h2>
          </div>
          <div className="page-content">
              Skills ...
          </div>
        </section>
        <section id="experiences">
          <div class="header-section">
            <h2 class="experiences">Experiences</h2>
          </div>
          <div className="page-content">
              Experiences ...
          </div>
        </section>
        <section id="education">
          <div class="header-section">
            <h2 class="education">Education</h2>
          </div>
          <div className="page-content">
              Education ...
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile;

/*
Auto scroll-up not found corretly

const style = {
    position: 'fixed',
    bottom: 16,
    right: 30,
    cursor: 'pointer',
    transitionDuration: '0.05s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s'
  }

<div className="backto-top">
  <ScrollToTop style={style} showUnder={160} topPosition={10} duration={5}>
    <FiChevronUp />
  </ScrollToTop>
</div>
*/
