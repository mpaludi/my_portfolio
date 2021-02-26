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

      <div>
        <h4>
          ¡Hola! Soy
        </h4>
        <h1>Mariano Paludi</h1>
        <p>
          Tengo 21 años, soy Desarrollador de Software JR,
          actualmente estoy en el cuarto año de mi carrera Licenciatura en Ciencias
          de la Computación de FAMAF-UNC.
          Acá vengo a hablarles un poco acerca de mí, asi que adelante!
        </p>
      </div>
      {
        isPhone ? "" :
      <div style={styles}>
        <img src={me} alt="me"/>
      </div>
      }

    </div>
  )
}

export default AboutMe;