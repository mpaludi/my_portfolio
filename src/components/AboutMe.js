import React from 'react';
import Nav from "./Nav";
import me from '../images/me.jpg'
import '../css/AboutMe.scss'
import '../css/SkillProgress.scss'
import { useMediaQuery } from "react-responsive";

function AboutMe() {

  const isPhone = useMediaQuery({query: `(max-width: 760px)`});

  const texts = {
    introES: "¡hola! yo soy",
    introEN: "¡hello! i'm",
    contactES: "Contacto",
    contactEN: "Contact",
    skillsES: "Habilidades",
    skillsEN: "Skills",
    projectES: "Proyectos",
    projectEN: "Projects",
    techES: "Tecnologías",
    techEN: "Technologies",
    getcvES: "Obtener CV",
    getcvEN: "Get CV",
    aboutmeES: "Tengo 21 años, soy Desarrollador de Software JR, actualmente estoy en el cuarto año de mi carrera Licenciatura en Ciencias de la Computación de FAMAF-UNC. Acá vengo a hablarles un poco acerca de mí, asi que adelante!",
    aboutmeEN: "21 year old Software Developer JR, I'm currently in the fourth year of my degree in Computer Science at FAMAF-UNC. Here I come to tell you a little about myself, so go ahead!" 
}

  const styles = {
    "vertical-align": "bottom"
  }

  return(
      <div className="AboutMe">
        <div id='container'>
          <p id='aboutme-intro'>
            <cite>
              {texts.introEN}
            </cite>
          </p>
          <p id='name'>
            <strong>Mariano Paludi</strong>
          </p>
          <p id='aboutme'>
            <cite>
              {texts.aboutmeEN}
            </cite>
          </p>
          <br/>
          <br/>
          <ul id='container-options'>
            <li>
              <h4>{texts.contactEN}</h4>
            </li>
            <li>
              <h4>{texts.getcvEN}</h4>
            </li>
            <li>
              <h4>{texts.projectEN}</h4>
            </li>
            <li>
              <h4>{texts.skillsEN}</h4>
            </li>
            <li>
              <h4>{texts.techEN}</h4>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default AboutMe;