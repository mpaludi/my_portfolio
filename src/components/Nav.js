import React from 'react'
import '../css/Nav.scss'
import me from '../images/me.jpg'


function Nav() {
  return (
    <div class="container-nav">
        <input type="checkbox" id="show-nav"/>
        <label for="show-nav" class="mi-header-toggler" id="open">
            <a class="lni-menu"/>
        </label>
      <nav class="mi-header" id="nav">
        <div class="mi-header-inner">
          <div class="mi-header-image">
            <a href="/">
            <img alt="marian" src={me}/>
            </a>
          </div>
          <ul class="mi-header-menu">
            <li> <a href="/resume"> <span>Resume</span> </a>
            </li>
            <li><a href="/profile"><span>Profile</span></a>
            </li>
            <li><a href="/projects">
              <span>Projects</span></a>
            </li>
            <li><a href="/interests"><span>Interests</span></a>
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