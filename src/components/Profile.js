import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'

function Profile() {

  
  function text(language){
    if (language === "ES") {
      return(
        <p>
          Estudiante de computacion, cursando el 4to año, con muchas ganas de insertarme en
          el mundo laboral garantizando una gran capacidad para resolver problemas, y que ante
          el uso de una nueva tecnologia una facil adaptación.
          <br/> 
          Me considero alguien muy sociable, por lo que me gusta trabajar
          en equipo y ayudar al resto. Me gustan demasiado los desafios
          por lo que siempre estoy predispuesto ante nuevos problemas para
          encararlos con gran entusiasmo. 
          <br/>
          Proactivo, y con muchas ganas de seguir aprendiendo. 
        </p>
      )
    } else {
      return(
        <p>
          EN: Estudiante de computacion, cursando el 4to año, con muchas ganas de insertarme en
          el mundo laboral garantizando una gran capacidad para resolver problemas, y que ante
          el uso de una nueva tecnologia una facil adaptación.
          <br/> 
          Me considero alguien muy sociable, por lo que me gusta trabajar
          en equipo y ayudar al resto. Me gustan demasiado los desafios
          por lo que siempre estoy predispuesto ante nuevos problemas para
          encararlos con gran entusiasmo. 
          <br/>
          Proactivo, y con muchas ganas de seguir aprendiendo. 
        </p>
      )
    }
  };

  return(
    <div className="page-container">
        <h2 class="profile" >Profile</h2>
        <div className="page-content">
          {text("ES")}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
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