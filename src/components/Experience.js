import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import unc from '../images/unc2.png'

function Experience(props) {

    const experiences_list = [
        {
          position: 'Front-End Developer',
          period: 'March 2021 - Currently',
          description: 'Adding experience I share one of my projects, this same personal portfolio (which is in process), created with React, in which I introduce myself, I give information about my skills, etc..'
        },
        {
          position: 'FullStack Developer - for Software Engineering professors (FAMAF-UNC)',
          period: 'August 2020 - December 2020',
          description: 'I was part of a team of developers, taking the position frontend developer, and in turn performing some tasks of the backend, to carry out the realization of a game similar to Secret Voldemort. In it I was acquiring experience in React, in managing contexts, etc. In the projects section you will find a link to github to see it.'
        },
        {
          position: 'Software Developer - for Sum Tech Labs',
          period: 'April 2021 - At present',
          description: 'I am currently part of SumTechLabs, a software development company. In which I am in charge of the development of a web application for a company that offers maintenance to facilities. The objective is that they have to be able to track the incidents reported by their customers. I had to develop a login for three different types of users, and develop all the incident log logic. The technologies I decided to use were Angular (Front) and Django with its RestFramework (Back).'
        },
      ]

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

    return (
        <div class="header-section">
            <h2 class="education">Experience</h2>
            <div className="page-content">
                {list_experiences()}
            </div>
        </div>
    )
}
export default Experience