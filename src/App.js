import AboutMe from './components/AboutMe';
import Nav from './components/Nav';
import './css/App.scss';

/*
# 1 -> AboutMe
# 2 -> Profile
# 3 -> Contact
# 4 -> Projects
*/


function App(props) {

  console.log(props.page)

  return (
    <div>
      { (props.page === "1") ? 
      ( <div className="container-pages">
          <Nav/>
          <AboutMe/>
        </div>
      ) 
      : (
          (props.page === "2") ?
          ( <div className="container-pages">
              <Nav/>
              <div className="profile-container">
                <a>En proceso</a>
              </div>
            </div>
          )
          : (
            <div> 404 - Page not found</div>
          )
        ) 
      }
    </div>
  )
}

export default App;
