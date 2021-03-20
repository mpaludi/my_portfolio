import React, { useEffect, useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Project.scss'
import sv from '../images/sv.png'
import pf from '../images/portfolio.png'

function Projects() {

  const [img_size, setImgSize] = useState({'width':`${(0.15625 * window.innerWidth) + "px"}`, 'height':`${(0.15625 * window.screen.width) + "px"}`})

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

  useEffect(() => {

    const handleResize = () => {

      const x = (0.15625 * window.innerWidth) + "px";
      setImgSize({'width':`${x}`, 'height':`${x}`})
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, []);

  const list_projects = () => {
    return(
      <div>
        <ul class='project-list'>
            {
              project_list.map(
                (proj) => (
                  <li>
                    <div class='container-project'>
                      <div>
                        <img style={img_size} src={proj.img}/>
                      </div>
                      <div class='info-container'>
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