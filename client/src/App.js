import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header"
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {

  const [user, setUser] = useState()
  const [showSidebar, setShowSidebar] = useState("show")

  const hideSideBar = () => {
    if(showSidebar === "show"){
      setShowSidebar("hide")
    }
  }

  return (
    <div className="App">

      <Sidebar user={user} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>

      <div className='window-container' onClick={hideSideBar}>
        <Header setShowSidebar={setShowSidebar}/>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/workouts">
            <Workouts />
          </Route>

          <Route exact path="/exercises">
            <Exercises />
          </Route>

          <Route exact path="/equipment">
            <Equipment />
          </Route> */}

        </Switch>
      </div>
    </div>
  );
}

export default App;
