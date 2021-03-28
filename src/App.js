import { render } from '@testing-library/react'
import React from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
    render(
        <>
        <Nav/>
        <section id='home' class='is-first'>
            <Home/>
        </section>
        <section id='profile'>
            <Profile/>
        </section>
        <section id='projects'>
            <Projects/>
        </section>
        <section id='contact' class='is-last'>
            <Contact/>
        </section>
        </>
    )
}

export default App()