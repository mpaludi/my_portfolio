import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import sv from '../images/sv.png'
import pf from '../images/portfolio.png'

function Projects() {

  const project_list = [
    {
      name:'Secret Voldemort',
      img:sv,
      desc:'This project is a web version of a board game similar to Voldemort Secret. In which users can register, edit their profile, etc. In this project I worked from the frontend using React.',
      link:'https://github.com/Marian00P/Front-Pytherin-1',
    },
    {
      name:'Personal Portfolio',
      img:pf,
      desc:'This project is a web site developed with React, in which I post information about myself, my knowledge, skills, studies, interests, etc.',
      link:'https://github.com/Marian00P/my_portfolio',
    },
  ]

  const list_projects = () => {
    return(
      <div class='container-list'>
        <ul class='educations'>
            {
              project_list.map(
                (proj) => (
                  <li>
                    <div class='intra-li'>
                      <div class='container-logo'>
                        <img style={{'width':'100px', 'heigth':'100px'}} src={proj.img}/>
                      </div>
                      <div class='container-edu'>
                        <h5>{proj.name}</h5>
                        <p>{proj.desc}</p>
                        <a id='duration' href={proj.link}>See project here!</a>
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
              <h2 class="projects" >Projects</h2>
              <div className="page-content">
                {list_projects()}
              </div>
      </div>
    )
}

export default Projects;