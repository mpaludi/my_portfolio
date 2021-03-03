import React from 'react';
import '../css/Nav.scss';
import me from '../images/me.jpg'

function Nav() {
  return (
    <div class="container-nav">
      <nav class="mi-header">
        <div class="mi-header-inner">
          <div class="mi-header-image">
            <a href="/">
            <img alt="marian" src={me}/>
            </a>
          </div>
          <ul class="mi-header-menu">
            <li> <a href="/"> <span>Resume</span> </a>
            </li>
            <li><a href="/profile"><span>Profile</span></a>
            </li>
            <li><a href="/">
              <span>Projects</span></a>
            </li>
            <li><a href="/"><span>Interests</span></a>
            </li>
            <li><a href="/contact"><span>Contact</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;