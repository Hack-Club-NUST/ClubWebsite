 
import { Switch, Route } from "react-router-dom";
 //css
 import './App.css'
 //pages
 import HomePage from './components/HomePage'
 import NewNavbar from './components/Navbar/NewNavbar'
import Aboutus from './components/Aboutus'
 import Navbar from './components/Navbar'
 import Event from './components/Event/Event'
 import JoinUs from "./components/JoinUs";
import NavbarEvent from './components/NavbarEvent'
import Team from "./components/Team";
function App() {
  return (
    <>
   <NewNavbar/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/navbarevent" component={NavbarEvent} />
      <Route exact path="/join" component={JoinUs} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/aboutus" component={Aboutus} />
      <Route exact path="/event" component={Event} />
      
    </Switch>
  </>
    )
       
}

export default App;
