import React from 'react'
import '../css/Nav.scss'
import me from '../images/me.jpg'


function Nav() {
  const hideNav = () => {
    document.getElementById("show-nav").click()
  }
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
            <img alt="marian" src={me} alt="designer"/>
            </a>
          </div>
          <ul class="mi-header-menu">
            <li> <a onClick={hideNav} href="#home"><span>Home</span></a>
            </li>
            <li><a onClick={hideNav} href="#profile"><span>Profile</span></a>
            </li>
            <li><a onClick={hideNav} href="#skills"><span>Skills</span></a>
            </li>
            <li><a onClick={hideNav} href="#experiences"><span>Experience</span></a>
            </li>
            <li><a onClick={hideNav} href="#education"><span>Education</span></a>
            </li>
            <li><a onClick={hideNav} href="#projects"><span>Projects</span></a>
            </li>
            <li><a onClick={hideNav} href="#contact"><span>Contact</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;