import { useEffect, useState } from "react"
import "../styles/Workouts.css"
import WorkoutCard from "./WorkoutCard"

function Workouts({user, setSelectedWorkout}){

    const [workoutsList, setWorkoutsList] = useState([])

    useEffect(()=>{
        //Fetch the user's workouts and then map them to workout cards - will need to add images to workouts, exercises and equipment
        fetch(`/workouts`)
        .then(response => response.json())
        .then(workouts => setWorkoutsList(workouts))
    },[])

    const showWorkouts = () => {
        if(workoutsList.length > 0){
            return workoutsList.map((workout)=>{
                return <WorkoutCard workout={workout} setSelectedWorkout={setSelectedWorkout}/>
            })
        }
        else{
            return(
                <h3>You do not have any workouts. Click here to create a new workout!</h3>
            )
        }
    }

    if(user){
        return(
            <div className="workouts-container">
                <h1>Your Workouts</h1>
                <div className="workouts-list-container">
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