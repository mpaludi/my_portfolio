import React from 'react';
import me from '../images/me.jpg'
import '../css/AboutMe.css'
import { useMediaQuery } from "react-responsive";

function AboutMe(props) {

  const isPhone = useMediaQuery({query: `(max-width: 760px)`});
  const userScreen = {
    width: window.screen.width, 
    height: window.screen.height
  }
  console.log(userScreen)
  const styles = {
    "vertical-align": "bottom"
  }

  return(
    <div className="AboutMe">

      <div id='container'>
        <p id='aboutme-intro'>
          <cite>
            ¡hola!, soy
          </cite>
        </p>
        <p id='name'>
          <strong>Mariano Paludi</strong>
        </p>
        <p id='aboutme'>
          <cite>
            Tengo 21 años, soy Desarrollador de Software JR,
            actualmente estoy en el cuarto año de mi carrera Licenciatura en Ciencias
            de la Computación de FAMAF-UNC.
            Acá vengo a hablarles un poco acerca de mí, asi que adelante!
          </cite>
        </p>
        <br/>
        <br/>
        <ul id='container-options'>
          <li>
            <h3>Concacto</h3>
          </li>
          <li>
            <h3>Get CV</h3>
          </li>
          <li>
            <h3>Projectos</h3>
          </li>
          <li>
            <h3>Habilidades</h3>
          </li>
          <li>
            <h3>Lenguajes</h3>
          </li>
        </ul>
      </div>
      {
        isPhone ? "" :
      <div id="container-img" style={styles}>
        <img src={me} alt="me"/>
      </div>
      }

    </div>
  )
}

export default AboutMe;