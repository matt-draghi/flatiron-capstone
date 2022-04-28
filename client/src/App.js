import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header"
import Home from './components/Home';
import {Switch, Route, NavLink, useHistory} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Workouts from './components/Workouts';
import Account from './components/Account';
import WorkoutView from './components/WorkoutView';
import Exercises from './components/Exercises';
import ExerciseView from './components/ExerciseView';
import Equipment from './components/Equipment';
import EquipmentList from './components/EquipmentList';


function App() {

  const [user, setUser] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [showSidebar, setShowSidebar] = useState("hide")
  const [selectedWorkout, setSelectedWorkout] = useState(localStorage.getItem('selectedWorkout'))
  const [selectedExercise, setSelectedExercise] = useState(localStorage.getItem('selectedExercise'))
  const [workoutsList, setWorkoutsList] = useState([])
  const [equipmentTypes, setEquipmentTypes] = useState(JSON.parse(localStorage.getItem('equipmentTypes')))
  const [selectedEquipmentType, setSelectedEquipmentType] = useState(localStorage.getItem('selectedEquipmentType'))
  const [selectedEquipmentPiece, setSelectedEquipmentPiece] = useState(localStorage.getItem('selectedEquipmentPiece'))
  const history = useHistory()


  const hideSideBar = () => {
    if(showSidebar === "show"){
      setShowSidebar("hide")
    }
  }


  useEffect(()=>{
    fetch(`/api/me`)
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
            <Workouts user={user} setSelectedWorkout={setSelectedWorkout} selectedWorkout={selectedWorkout} workoutsList={workoutsList} setWorkoutsList={setWorkoutsList}/>
          </Route>

          <Route path={`/workouts/${selectedWorkout}`}>
            <button onClick={()=> history.push(`/workouts`)}><span>Back to Workouts</span></button>
            <WorkoutView setSelectedWorkout={setSelectedWorkout} selectedWorkout={selectedWorkout}/>
          </Route>

          <Route exact path={`/exercises`}>
            <Exercises user={user} setSelectedExercise={setSelectedExercise} />
          </Route>

          <Route exact path={`/exercises/${selectedExercise}`}>
            <button onClick={()=> history.push(`/exercises`)} className='back-button'><span>Back to Exercises</span></button>
            <ExerciseView selectedExercise={selectedExercise} workoutsList={workoutsList}/>
          </Route>

          <Route exact path="/equipment">
            <Equipment equipmentTypes={equipmentTypes} setSelectedEquipmentType={setSelectedEquipmentType}/>
          </Route>

          <Route exact path={`/equipment/${selectedEquipmentType}`}>
            <button onClick={()=> history.push(`/equipment`)}><span>Back to Equipment Categories</span></button>
            <EquipmentList setSelectedEquipmentType={setSelectedEquipmentType} selectedEquipmentType={selectedEquipmentType} setSelectedEquipmentPiece={setSelectedEquipmentPiece}/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
