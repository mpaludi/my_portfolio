import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

function Skills(type, techList, img_style) {
    
  switch (type) {
    case "technological":
      return (
        <ul class={type}>
        <h4 class='description-skill'>
        These are some of the technological skills that I handle with great performance,
        but I am always ready to incorporate new ones.
        </h4>
          {
            techList.map(
              (tech) => (
                <li>
                  <h5>{tech.name}</h5>
                  <img style={img_style} src={tech.img}/>
                </li>
              ))
          }
        </ul>);
  
    case "knowledge":

      return (
        <ul class={type}>
          <h4 class='description-skill'>
          These are some of the concepts I have worked with, and consider of great importance.
          </h4>
          <li>
            <h5>Programacion funcional</h5>
          </li>
          <li>
            <h5>Programacion imperativa</h5>
          </li>
          <li>
            <h5>Desarrollo front-end con react</h5>
          </li>
          <li>
            <h5>Buenos diseños de arquitectura</h5>
          </li>
        </ul>);

    case "strengths":

      return (<div class={type}>
          <a>Front-End</a>
          <a>Pepe</a>
        </div>);

    default:
      return (<>
      <h4 class='description-skill'>
        Please select a skill class and get to know my skills. 
      </h4>
      <div class='loader-skills'>
        <BeatLoader color="#25d366" size={30} margin={16}/>
      </div>
      </>);
  }
}

export default Skills;