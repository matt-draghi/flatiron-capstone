import { useEffect, useState } from "react"
import ExerciseRow from "./ExerciseRow"
import "../styles/WorkoutView.css"

function WorkoutView(){
    const url = window.location.href.split('/')
    const selectedWorkout = url.at(-1)
    const [workout, setWorkout] = useState([])

    useEffect(()=>{
        fetch (`/workouts/${selectedWorkout}`)
        .then(response => response.json())
        .then(workout => setWorkout(workout))
    },[])

    const listExercises = () => {
        const exerciseArray = workout.exercises
        console.log(exerciseArray)
        return exerciseArray?.map((exercise)=>{
            return(
                <ExerciseRow exercise={exercise}/>
            )
        })
    }

    return(
        <div className="workout-exercise-list">
            {listExercises()}
        </div>
    )
}

export default WorkoutView