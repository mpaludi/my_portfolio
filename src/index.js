import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
      <Route path="/" exact={true}>
        <div className="container-app">
          <Nav/>
          <AboutMe/>
        </div>
      </Route>
      <Route path="/profile">
        <div className="container-app">
          <Nav/>
          <Profile/>
        </div>
      </Route>
      <Route path="/contact">
        <div className="container-app">
          <Nav/>
          <Contact/>
        </div>
      </Route>
      <Route path="/projects">
        <div className="container-app">
          <Nav/>
          <Projects/>
        </div>
      </Route>
      <Route path="/interests">
        <div className="container-app">
          <Nav/>
          <Interests/>
        </div>
      </Route>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
