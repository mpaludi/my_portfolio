import React, { useEffect, useRef, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import Scrollspy from 'react-scrollspy'
import { FiChevronUp } from "react-icons/fi"
import Skills from './Skills'
import unc from '../images/unc2.png'

function Profile() {

  const size = ((0.15625 * window.innerWidth) > 100 ? 100 : 0.15625 * window.innerWidth)
  const [img_size, setImgSize] = useState({'width':`${size + "px"}`, 'height':`${size + "px"}`})
  const [display, setDisplay] = useState('none');
  const [opacity, setOpacity] = useState('0');
  const [selected_skill, setSelectedSkill] = useState('');

  const first_section = useRef();

  const style_backto_Top = {
    display: display,
    opacity: opacity,
  };

  const experiences_list = [
    {
      position: 'Front-End Developer',
      period: 'March 2021 - Currently',
      description: 'Adding experience I share one of my projects, this same personal portfolio (which is in process), created with React, in which I introduce myself, I give information about my skills, etc..'
    },
    {
      position: 'Frontend Developer - for Software Engineering professors (FAMAF-UNC)',
      period: 'August 2020 - December 2020',
      description: 'I was part of a team of developers, taking the position named above, and in turn performing some tasks of the backend, to carry out the realization of a game similar to Secret Voldemort. In it I was acquiring experience in React, in managing contexts, etc. In the projects section you will find a link to github to see it.'
    },
  ]

  const education_list = [
    {
      title: 'Computer Analyst',
      institute: 'National University of Cordoba',
      duration: '2018 - 2020',
    },
    {
      title: 'Computer Science',
      institute: 'National University of Cordoba',
      duration: '2018 - 2022',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const { y } = first_section.current.getBoundingClientRect()
      setOpacity(((y-100)<=0 ? '1' : '0'))
      setDisplay((y-100)<=0 ? 'flex' : 'none')
    }

    const handleResize = () => {
      const size = ((0.15625 * window.innerWidth) > 100 ? 100 : 0.15625 * window.innerWidth)
      const x = (size) + "px";
      setImgSize({'width':`${x}`, 'height':`${x}`})
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

  const list_experiences = () => {
    return (
      <div class='container-list'>
        <ul class='in-section experiences'>
            {
              experiences_list.map(
                (exp) => (
                  <li>
                    <h5>{exp.position}</h5>
                    <h6>{exp.period}</h6>
                    <p>{exp.description}</p>
                  </li>
                ))
            }
        </ul>
      </div>
    )
  } 

  const list_education = () => {
    return (
      <div class='container-list'>
        <ul class='in-section educations'>
            {
              education_list.map(
                (edu) => (
                  <li>
                    <div class='intra-li'>
                      <div class='container-logo'>
                        <img style={img_size} src={unc}/>
                      </div>
                      <div class='container-edu'>
                        <h5>{edu.title}</h5>
                        <h6>{edu.institute}</h6>
                        <p id='duration'>{edu.duration}</p>
                      </div>
                    </div>
                  </li>
                ))
            }
        </ul>
      </div>
    )
  }

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
            {list_experiences()}
          </div>
        </section>
        <section id="education" class="is-last">
          <div class="header-section">
            <h2 class="education">Education</h2>
          </div>
          <div className="page-content">
            {list_education()}
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
