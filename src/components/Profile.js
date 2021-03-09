import React, { useEffect, useRef, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"
import GitIcon from '../images/GitIcon.png'
import ReactIcon from '../images/ReactIcon.png'
import CIcon from '../images/CIcon.png'
import PythonIcon from '../images/PythonIcon.png'
import HtmlIcon from '../images/HtmlIcon.png'
import CssIcon from '../images/CssIcon.png'
import JsIcon from '../images/JsIcon.png'
import MysqlIcon from '../images/MysqlIcon.png'

function Profile() {

  const [opacity, setOpacity] = useState('0')
  const [selected_skill, setSelectedSkill] = useState("Technological")

  const style_backto_Top = {
    opacity: opacity,
  }

  const first_section = useRef();

  const techList = [
    {
      name: "Git",
      img: GitIcon
    },
    {
      name: "React",
      img: ReactIcon
    },
    {
      name: "C",
      img: CIcon
    },
    {
      name: "Javascript",
      img: JsIcon
    },
    {
      name: "Mysql",
      img: MysqlIcon
    },
    {
      name: "HTML5",
      img: HtmlIcon
    },
    {
      name: "Python",
      img: PythonIcon
    },
    {
      name: "CSS3",
      img: CssIcon
    },
  ]


  useEffect(() => {
    const handleScroll = () => {
      const { y } = first_section.current.getBoundingClientRect()
      setOpacity((y<=0 ? '1' : '0'))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, []);


  function nav(area, items) {

    return (
      <div class={`nav-container${(area !== undefined) ? ("-" + area) : ("")}`}>
          <nav class={`nav-profile${(area !== undefined) ? (" " + area) : ("")}`}>
          <Scrollspy class="nav-menu" items={items} currentClassName="is-current">
            {
              items.map((item) => (
                <a style={{'cursor':'pointer'}} onClick={() => {setSelectedSkill(item)}}>{item}</a>
              ))
            }
          </Scrollspy>
          </nav>
      </div>
    )
  }

  function skills(type) {
    
    switch (type) {
      case "Technological":
        return (
          <ul class={type}>
          <h4 class='description-skill'>
          These are some of the technological skills that I handle with great performance,
          but I am always ready to incorporate new ones.
          </h4>
            {
              techList.map(
                (tech) => (
                  <li>
                    <h5>{tech.name}</h5>
                    <img class='small' src={tech.img}/>
                  </li>
                ))
            }
          </ul>);
    
      case "Knowledge":

        return (
          <ul class={type}>
            <h4 class='description-skill'>
            These are some of the concepts I have worked with, and consider of great importance.
            </h4>
            <li>
              <h5>Programacion funcional</h5>
            </li>
            <li>
              <h5>Programacion imperativa</h5>
            </li>
            <li>
              <h5>Desarrollo front-end con react</h5>
            </li>
            <li>
              <h5>Buenos diseños de arquitectura</h5>
            </li>
          </ul>);

      case "Strengths":

        return (<div class={type}>
            <a>Front-End</a>
            <a>Pepe</a>
          </div>);

      default:
        return (<div>Nada</div>);
    }
  }
  
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
        {nav(undefined,['Skills', 'Experiences', 'Education'])}
        <section id="profile-home" class='is-first'>
          <h2 class="profile" >Profile</h2>
          <div className="page-content">
              {text("EN")}
          </div>
        </section>
        <section ref={first_section} id="Skills">
          <div class="header-section">
            <h2 class="Skills">Main skills</h2>
          </div>
          {
            nav("Skills", ['Technological', 'Knowledge', 'Strengths'])
          }
          <div className="page-content">
              {skills(selected_skill)}
          </div>
        </section>
        <section id="Experiences">
          <div class="header-section">
            <h2 class="Experiences">Experiences</h2>
          </div>
          <div className="page-content">
              Experiences ...
          </div>
        </section>
        <section id="Education" class="is-last">
          <div class="header-section">
            <h2 class="Education">Education</h2>
          </div>
          <div className="page-content">
              Education ...
          </div>
        </section>
      </div>
      <a style={style_backto_Top} href="#profile-home" class="backto-top">
            <FiChevronUp/>
      </a>
    </div>
  )
}

export default Profile;


/*
<li>
  <h3>{techList[0].name}</h3>
  <img class='small' src={techList[0].img}/>
</li>
*/