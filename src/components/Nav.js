import React from 'react';
import '../css/Nav.scss';
import me from '../images/me.jpg'

function Nav() {
  return (
    <div>
      <nav class="mi-header">
        <button class="XXXmi-header-toggler">
          <i class="lni-menu size-md "></i>
        </button>
        <div class="mi-header-inner">
          <div class="mi-header-image">
            <a href="/">
            <img alt="marian" src={me}/>
            </a>
          </div>
          <ul class="mi-header-menu">
            <li> <a href="/"> <span>Home</span> </a>
            </li>
            <li><a href="/about"><span>About</span></a>
            </li>
            <li><a href="/resume">
              <span>Resume</span></a>
            </li>
            <li><a href="/portfolios"><span>Portfolios</span></a>
            </li>
            <li><a href="/blogs"><span>Blogs</span></a>
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