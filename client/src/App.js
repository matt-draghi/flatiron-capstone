import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header"
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Workouts from './components/Workouts';
import Account from './components/Account';


function App() {

  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [showSidebar, setShowSidebar] = useState("hide")

  const hideSideBar = () => {
    if(showSidebar === "show"){
      setShowSidebar("hide")
    }
  }

  useEffect(()=>{
    fetch(`/me`)
    .then(response => {
      if(response.ok){
        response.json().then((user)=>{
          setUser(user)
          setUsername(user.username)
          setEmail(user.email)
        })
      }
    })
  },[])

  return (
    <div className="App">

      <Sidebar user={user} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>

      <div className='window-container' onClick={hideSideBar}>
        <Header setShowSidebar={setShowSidebar}/>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/signup">
            <SignUp setUser={setUser}/>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/account">
            <Account 
              user={user} 
              setUser={setUser}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}  
            />
          </Route>

          <Route exact path="/workouts">
            <Workouts />
          </Route>

          {/* <Route exact path="/exercises">
            <Exercises />
          </Route> */}

          {/* <Route exact path="/equipment">
            <Equipment />
          </Route> */}

        </Switch>
      </div>
    </div>
  );
}

export default App;
