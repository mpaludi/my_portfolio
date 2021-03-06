import React from 'react';
import '../css/Nav.scss';
import me from '../images/me.jpg'

function Nav() {
  return (
    <div class="container-nav">
      <nav class="mi-header">
        <div class="mi-header-inner">
          <div class="mi-header-image">
            <a href="/my_portfolio">
            <img alt="marian" src={me}/>
            </a>
          </div>
          <ul class="mi-header-menu">
            <li> <a href="/my_portfolio/resume"> <span>Resume</span> </a>
            </li>
            <li><a href="/my_portfolio/profile"><span>Profile</span></a>
            </li>
            <li><a href="/my_portfolio/projects">
              <span>Projects</span></a>
            </li>
            <li><a href="/my_portfolio/interests"><span>Interests</span></a>
            </li>
            <li><a href="/my_portfolio/contact"><span>Contact</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;