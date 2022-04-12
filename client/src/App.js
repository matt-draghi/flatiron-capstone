import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header"
import Home from './components/Home';
import {Switch, Route, NavLink} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Workouts from './components/Workouts';
import Account from './components/Account';
import WorkoutView from './components/WorkoutView';
import Exercises from './components/Exercises';
import ExerciseView from './components/ExerciseView';


function App() {

  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [showSidebar, setShowSidebar] = useState("hide")
  const [selectedWorkout, setSelectedWorkout] = useState(localStorage.getItem('selectedWorkout'))
  const [selectedExercise, setSelectedExercise] = useState(localStorage.getItem('selectedExercise'))

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
      <Header setShowSidebar={setShowSidebar}/>
      <div className='window-container' onClick={hideSideBar}>
        
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
            <Workouts user={user} setSelectedWorkout={setSelectedWorkout}/>
          </Route>

          <Route path={`/workout/${selectedWorkout}`}>
            <NavLink to='/workouts' className='workout-back-button'>Back to Workouts</NavLink>
            <h1 className='selected-workout-header'>{selectedWorkout}</h1>
            <WorkoutView />
          </Route>

          <Route exact path={`/exercises`}>
            <Exercises user={user} setSelectedExercise={setSelectedExercise}/>
          </Route>

          <Route exact path={`/exercises/${selectedExercise}`}>
            <NavLink to='/exercises' className='exercise-back-button'>Back to Exercises</NavLink>
            <ExerciseView selectedExercise={selectedExercise}/>
          </Route>

          {/* <Route exact path="/equipment">
            <Equipment />
          </Route> */}

        </Switch>
      </div>
    </div>
  );
}

export default App;
