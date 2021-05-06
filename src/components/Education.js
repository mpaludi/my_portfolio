import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'
import unc from '../images/unc2.png'

function Education(props) {

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

    const list_education = () => {
        return (
          <div class='container-list' style={{'padding-left':'1rem'}}>
            <ul class='in-section educations'>
                {
                  education_list.map(
                    (edu) => (
                      <li>
                        <div class='intra-li'>
                          <div ref={props.container_logo} class='container-logo'>
                            <img style={props.logo_size} src={unc}/>
                          </div>
                          <div class='container-edu' style={props.marginleft}>
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

    return (
        <div class="header-section">
            <h2 class="education">Education</h2>
            <div className="page-content">
                {list_education()}
            </div>
        </div>
    )
}
export default Education