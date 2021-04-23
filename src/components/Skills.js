import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import '../css/ImageSkill.scss';
import GitIcon from '../images/GitIcon.png'
import ReactIcon from '../images/ReactIcon.png'
import CIcon from '../images/CIcon.png'
import PythonIcon from '../images/PythonIcon.png'
import HtmlIcon from '../images/HtmlIcon.png'
import CssIcon from '../images/CssIcon.png'
import JsIcon from '../images/JsIcon.png'
import MysqlIcon from '../images/MysqlIcon.png'
import Angular from '../images/angular.png'
import Django from '../images/django.jpg'

function Skills(type, img_style) {

  const strList = [
    {
      title: "Sociable",
      desc: "I emphasize this point, as I consider it is essential to create a good working environment."
    },
    {
      title: "Good communication",
      desc: "I consider that when communicating with my colleagues, I always do it in the best way and in a respectful manner."
    },
    {
      title: "Good leader",
      desc: "In general I like to carry out this role, as I consider that I can organize the work team in the most efficient way, and establish a good intercommunication between the members of the team."
    },
    {
      title: "Problem solving",
      desc: "One thing I can guarantee at this point, backed up by the knowledge I have acquired during these years in my career, is that I can find good and efficient solutions."
    },
    {
      title: "Quick learning and adaptability",
      desc: "If there are any changes in the technology used, I adapt very quickly. I am always willing to acquire new knowledge, and I am very fast at it."
    },
  ]

  const knowList = [
    {
      title: "Functional programming",
      desc: ""
    },
    {
      title: "Imperative programming",
      desc: ""
    },
    {
      title: "FrontEnd development",
      desc: ""
    },
    {
      title: "Successful architecture designs",
      desc: ""
    },
    {
      title: "Scrum methodology",
      desc: ""
    },
    {
      title: "Testing",
      desc: ""
    },
  ]

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
    {
      name: "Angular",
      img: Angular
    },
    {
      name : "Django",
      img: Django
    }
  ]
    
  switch (type) {
    case "technological":
      return (
        <ul class={"in-section " + type}>
        <h4 class='description-skill'>
        These are some of the technological skills that I handle with great performance,
        but I am always ready to incorporate new ones.
        </h4>
          {
            techList.map(
              (tech) => (
                <li>
                  <h5>{tech.name}</h5>
                  <a class='img-skill'>
                    <img style={img_style} src={tech.img}/>
                    <div class="glow-wrap">
                      <i class="glow"></i>
                    </div>
                  </a>
                </li>
              ))
          }
        </ul>);
  
    case "knowledge":

      return (
        <ul class={"in-section " + type}>
          <h4 class='description-skill'>
          These are some of the concepts I have worked with, and consider of great importance.
          </h4>
          {
            knowList.map(
              (knowledge) => (
                <li>
                  <h5>{knowledge.title}</h5>
                  <p>{knowledge.desc}</p>
                </li>
              )
            )
          }
        </ul>);

    case "strengths":

      return (
        <ul class={"in-section " + type}>
          <h4 class='description-skill'>
          These are some of my strengths in the workspace.
          </h4>
          {
            strList.map(
              (strength) => (
                <li>
                  <h5>{strength.title}</h5>
                  <p>{strength.desc}</p>
                </li>
              )
            )
          }
        </ul>);

    default:
      return (<>
      </>);
  }
}

export default Skills;