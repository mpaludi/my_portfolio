import React, { useState } from 'react'
import '../css/Page.scss'
import '../css/Button.scss'
import '../css/Profile.scss'

function Courses(props) {

    const listCourses = [
        {
            title: 'English Course - ispeakteam.com',
            start: 'Started in May-2021',
            duration: '4 months',
            status: 'In progress',
            img: 'https://ispeakteam.com/wp-content/uploads/2020/09/05-300x175.png',
            alt: 'ISPEAK TEAM',
            href: 'https://ispeakteam.com/'
        },
        {
            title: 'E-Commerce Course - Ministerio de Educacion',
            start: 'Started in March 2018',
            duration: '6 months',
            status: 'Completed',
            img: 'https://pbs.twimg.com/profile_images/1205629746551361537/b9pcf5gA_400x400.jpg',
            alt: 'Ministerio de educacion',
            href: ''
        }
    ]

    const list_courses = () => {
        return (
          <div class='container-list' style={{'padding-left':'1rem'}}>
            <ul class='in-section educations'>
                {
                listCourses.map(
                    (course) => (
                      <li>
                        <div class='intra-li'>
                          <div ref={props.content_logo} class='container-logo'>
                            <a href={course.href}>
                                <img style={props.logo_size} src={course.img} alt={course.alt}/>
                            </a>
                          </div>
                          <div class='container-edu' style={props.margin_left}>
                            <h5>{course.title}</h5>
                            <h6>{course.duration}</h6>
                            <p id='duration'>{course.start}</p>
                            <h6>{course.status}</h6>
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
            <h2 class="education">Courses</h2>
            <div className="page-content">
                {list_courses()}
            </div>
        </div>
    )
}
export default Courses