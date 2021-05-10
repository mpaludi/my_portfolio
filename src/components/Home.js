import React from 'react';
import '../css/Home.scss'
import '../css/Button.scss'
import { useMediaQuery } from "react-responsive";
import '../css/Nav.scss';
import me from '../images/me.jpg'

function Home() {

  const isPhone = useMediaQuery({query: `(max-width: 600px)`});

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

  return(
    <> 
      <div className="home">
        <div id='container'>
          {
            isPhone ? (
              <div class="mi-header-image">
                <a>
                  <img alt="marian" src={me}/>
                </a>
              </div>
              ) : (<div/>)
          
          }
          <p id='home-intro'>
            <cite>
              {texts.introEN}
            </cite>
          </p>
          <p id='name'>
            <strong>Mariano Paludi</strong>
          </p>
          <p id='home'>
            <cite>
              {texts.aboutmeEN}
            </cite>
          </p>
          <div class='container-button'>
            <button class="button-style check-profile" onClick={()=>{window.location.href = "#profile"}}>Check profile</button>
          </div>
          <div class="get-cv">
          <button class="button-style get-cv" onClick={() => {window.location.href = "https://drive.google.com/file/d/1-Ft7kt79cja9td31k4MnsODtQGsk_I1X/view?usp=sharing"}}>
          Get CV
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home;
