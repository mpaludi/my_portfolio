import React, { useEffect, useRef, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"

function Profile() {

  const [opacity, setOpacity] = useState('0')

  const style_backto_Top = {
    opacity: opacity,
  }

  const first_section = useRef();

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
                <a href={`#${item}`}>{`${item}`}</a>
              ))
            }
          </Scrollspy>
          </nav>
      </div>
    )
  }

  function skills(type) {
    
    switch (type) {
      case "Technologies":
        return (<div>

        </div>);
    
      case "Knowledge":

        return (<div>

          </div>);

      case "Strengths":

        return (<div>

          </div>);

      default:
        return (<></>);
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
        <section id="profile-home">
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
            nav("Skills", ['Technologies', 'Knowledge', 'Strengths'])
          }
          <div className="page-content">
              Skills ...
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
        <section id="Education">
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
{
              (area === undefined) ? (
                items.map(
                  (item, key) => (
                    (key !== (length-1)) ? (
                      <a href={`#${item}`}>{`${item}`}</a>
                     ): (
                      <>
                        <a href={`#${item}`}>{`${item}`}</a>
                        <a href="#profile-home" class="backto-top">
                              <FiChevronUp/>
                        </a>
                      </>
                     )
                  )
                )
              )
              :
              items.map(
                (item) => (
                  <a href={`#${item}`}>{`${item}`}</a>
                )
              )
            }
*/