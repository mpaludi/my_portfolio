import React, { useEffect, useRef, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"
import Skills from './Skills'
import unc from '../images/unc2.png'
import Courses from './Courses'
import Education from './Education'
import Experience from './Experience'

function Profile() {

  /* Properties of images */
  const size = ((0.15625 * window.innerWidth) > 100 ? 100 : 0.15625 * window.innerWidth)
  const size_logo = ((0.05625 * window.innerWidth) > 100 ? 100 : 0.05625 * window.innerWidth)
  const [img_size, setImgSize] = useState({'width':`${size + "px"}`, 'height':`${size + "px"}`})
  const [logo_size, setLogosize] = useState({'width':`${size_logo + "px"}`, 'height':`${size_logo + "px"}`})
  /* Properties of backtoTop button */
  const [display, setDisplay] = useState('none');
  const [opacity, setOpacity] = useState('0');
  const style_backto_Top = {
    display: display,
    opacity: opacity,
  };
  /* Properties of container-edu */
  const margin = size_logo + 30
  const [marginleft, setMarginleft] = useState({'margin-left':`${margin + "px"}`})

  const [selected_skill, setSelectedSkill] = useState("");

  const sec_profile = useRef();
  const container_logo = useRef();



  useEffect(() => {

    setSelectedSkill('technological')

    const handleScroll = () => {
      const { y } = sec_profile.current.getBoundingClientRect()
      setOpacity(((y)<=0 ? '1' : '0'))
      setDisplay((y)<=0 ? 'flex' : 'none')
    }

    const handleResize = () => {
      const size = ((0.15625 * window.innerWidth) > 100 ? 100 : 0.15625 * window.innerWidth)
      const logo_size = ((0.05625 * window.innerWidth) > 100 ? 100 : 0.05625 * window.innerWidth)
      const x = (size) + "px"
      const y = (logo_size) + "px"
      setImgSize({'width':`${x}`, 'height':`${x}`})
      setLogosize({'width':`${y}`, 'height':`${y}`})
      const margin = logo_size + 30
      setMarginleft({'margin-left':`${margin + "px"}`})
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }

  }, []);

  const nav = (area, items) => {

    return (
      <div class={`nav-container${(area !== undefined) ? ("-" + area) : ("")}`}>
          <nav class={`nav-profile${(area !== undefined) ? (" " + area) : ("")}`}>
          { (area !== "main") ? (
            <Scrollspy className="in-section" items={items}>
              {
                items.map((item) => (
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
              <Scrollspy className="in-section" items={items} currentClassName="is-current">
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
  
  const text = (language) => {
    if (language === "ES") {
      return(
        <p>
          <b>Estudiante de computación</b>, cursando el cuarto año, 
          con muchas ganas de insertarse en el mundo laboral 
          garantizando una gran capacidad para resolver problemas, 
          y una <b>fácil adaptación</b> ante cualquier tecnología.
          <br/> 
          <b>Buen compañero de trabajo</b>, siempre dispuesto a ayudar al resto.
          Me gustan mucho los nuevos desafios
          ya que son los que me impulsan a mejorar cada dia.
          <br/>
          <b>Proactivo</b>, y con muchas ganas de seguir aprendiendo. 
          Aunque no tengo experiencia bajo una relación de dependencia formal, puedo garantizar que con todos los conocimientos adquiridos en mi carrera durante estos años, junto con mi entusiasmo y ganas de seguir aprendiendo, puedo desempeñarme correcta y eficazmente en cualquier área a la que se me convoque.
        </p>
      )
    } else {
      return(
        <p class="text">
          <b>Computer science student</b>, in his fourth year, eager to enter the working world,
          with a great ability to solve problems,
          and an <b>easy adaptation</b> to any technology.
          <br/> 
          <b>Good coworker</b>, always willing to help others.
          I really like new challenges as they are the ones that drive me to improve every day.
          <br/>
          <b>Proactive</b>, and eager to keep learning.
          <br/>
          Although I do not have experience under a formal dependency relationship, I can guarantee that with all the knowledge acquired in my career during these years, along with my enthusiasm and desire to continue learning, I can perform correctly and efficiently in any area that I am assigned.
        </p>
      )
    }
  };


  return(
    <div className="page-container">
      <div class="section-container">
        <section id="profile-home">
          <h2 ref={sec_profile} class="profile" >Profile</h2>
          <div className="page-content">
              {text("EN")}
          </div>
        </section>
        <section id="skills">
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
          <Experience/>
        </section>
        <section id="education">
          <Education marginleft={marginleft} content_logo={container_logo} logo_size={logo_size}/>
        </section>
        <section id="courses" class="is-last">
          <Courses margin_left={marginleft} content_logo={container_logo} logo_size={logo_size}/>
        </section>
      </div>
      <a style={style_backto_Top} href="#home" class="backto-top">
        <FiChevronUp/>
      </a>
    </div>
  )
}

export default Profile;
