import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'

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
        <p>
          Computer science student, in his fourth year, eager to enter the working world,
          with a great ability to solve problems,
          and an easy adaptation to any technology.
          <br/> 
          Sociable, so I like to work in a team and help others. (I love the SCRUM method)
          I really like new challenges as they are the ones that drive me to improve every day.
          <br/>
          Proactive, and eager to keep learning.
        </p>
      )
    }
  };

  return(
    <div className="page-container">
        <h2 class="profile" >Profile</h2>
        <div className="page-content">
          <div class="content-text">
            {text("EN")}
          </div>
        </div>
    </div>
  )
}

export default Profile;