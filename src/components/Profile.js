import React, { useEffect, useRef, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"
import Skills from './Skills'

function Profile() {

  const [img_size, setImgSize] = useState({'width':`${(0.15625 * window.screen.width) + "px"}`, 'height':`${(0.15625 * window.screen.width) + "px"}`})

  const [display, setOpacity] = useState('0');
  const [selected_skill, setSelectedSkill] = useState('');

  const style_backto_Top = {
    display: 'none',
  };

  const first_section = useRef();


  useEffect(() => {
    const handleScroll = () => {
      const { y } = first_section.current.getBoundingClientRect()
      setOpacity((y<=0 ? '1' : '0'))
    }

    const handleResize = () => {

      const x = (0.15625 * window.screen.width) + "px";
      setImgSize({'width':`${x}`, 'height':`${x}`})
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }

  }, []);

  function nav(area, items) {

    return (
      <div class={`nav-container${(area !== undefined) ? ("-" + area) : ("")}`}>
          <nav class={`nav-profile${(area !== undefined) ? (" " + area) : ("")}`}>
          { (area !== "main") ? (
            <Scrollspy class="nav-menu" items={items}>
              {
                items.map((item, i) => (
                  <a style={{'cursor':'pointer'}} class={selected_skill === item ? "is-current" : ""}
                  onClick={() => {setSelectedSkill(item)}}>
                    {item}
                  </a>
                ))
              }
            </Scrollspy>
            )
            :
            (
              <Scrollspy class="nav-menu" items={items} currentClassName="is-current">
              {
                items.map((item) => (
                  <a style={{'cursor':'pointer'}} href={`#${item}`}>
                    {item}
                  </a>
                ))
              }
            </Scrollspy>
            )

          }
          </nav>
      </div>
    )
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
        {nav('main',['skills', 'experiences', 'education'])}
        <section id="profile-home" class='is-first'>
          <h2 class="profile" >Profile</h2>
          <div className="page-content">
              {text("EN")}
          </div>
        </section>
        <section ref={first_section} id="skills">
          <div class="header-section">
            <h2 class="skills">Main skills</h2>
          </div>
          {
            nav('skills', ['technological', 'knowledge', 'strengths'])
          }
          <div className="page-content">
              {Skills(selected_skill, img_size)}
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
        <section id="education" class="is-last">
          <div class="header-section">
            <h2 class="education">Education</h2>
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
