import React from 'react'
import '../css/Page.scss'
import '../css/Button.scss'

function Profile() {

  return(
    <div className="page-container">
        <h2 class="profile" >Profile</h2>
        <div className="page-content">
          <p> Me considero alguien muy sociable, por lo que me gusta trabajar
           en equipo y ayudar al resto. Me gustan demasiado los desafios
           por lo que siempre estoy predispuesto ante nuevos problemas para
           encararlos con gran entusiasmo. Soy proactivo, y tengo muchas ganas de seguir aprendiendo. </p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <ul id='container-buttons'>
          <li>
            <h4>Fortalezas</h4>
          </li>
          <li>
            <h4>Debilidades</h4>
          </li>
        </ul>
    </div>
  )
}

export default Profile;