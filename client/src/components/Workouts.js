import { useEffect, useState } from "react"
import "../styles/Workouts.css"
import WorkoutCard from "./WorkoutCard"

function Workouts({user, selectedWorkout, setSelectedWorkout, setWorkoutsList, workoutsList}){

    const [showGenerateWorkoutModal, setShowGenerateWorkoutModal] = useState(false)
    const [backCount, setBackCount] = useState("0")

    useEffect(()=>{
        if(user){
          fetch(`/api/workouts`)
          .then(response => response.json())
          .then(workouts => {
            const sortedWorkouts = workouts.sort((workoutA, workoutB) => workoutA.id - workoutB.id)
            setWorkoutsList(sortedWorkouts)
          })
        }
    })

    const showWorkouts = () => {
        if(workoutsList.length > 0){
            return workoutsList.map((workout)=>{
                return <WorkoutCard key={workout.id} workout={workout} setSelectedWorkout={setSelectedWorkout}/>
            })
        }
        else{
            return(
                <h3>You do not have any workouts. Click here to create a new workout!</h3>
            )
        }
    }
    

    const handleCreateWorkout = () => {
        fetch('/api/workouts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(workout => {
            // console.log("Encoded", encodeURI(workout.name))
            localStorage.setItem('selectedWorkout', workout.name)
            setSelectedWorkout(workout.name)
            // console.log("Selected workout: ", selectedWorkout)
            setWorkoutsList(workoutsList => [...workoutsList, workout])
            localStorage.setItem('workoutsList', [...workoutsList, workout])
        })
    }

    const handleCreateRandomWorkout = () => {
       setShowGenerateWorkoutModal(true)
    }

    if(user){
        return(
            <div className="list-container">
                <div className="list-container-header">
                    <h1>Your Workouts</h1>
                    <button onClick={handleCreateWorkout}><span>Create Workout</span></button>
                    <button onClick={handleCreateRandomWorkout}><span>Generate Random Workout</span></button>
                    <dialog open={showGenerateWorkoutModal}>
                         <div>
                             <h2>Select Your Exercises</h2>
                             <h3>Back Exercises</h3>
                             <input type="text" value={backCount} onChange={(e)=>setBackCount(e.target.value)}/>
                             <input type="range" min="0" max="10" value={backCount} class="slider" onChange={(e)=>setBackCount(e.target.value)}/>
                         </div>
                    </dialog>
                </div>
                <br/>
                <div className="card-list-container">
                    {showWorkouts()}
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="workouts-container">
                <h1>Sign Up or Login to create your own workout plans</h1>
            </div>
        )
    }
}

export default Workouts