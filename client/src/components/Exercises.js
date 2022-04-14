import { useEffect, useState } from "react"
import "../styles/Exercises.css"
import ExerciseCard from "./ExerciseCard"

function Exercises({user, setSelectedExercise}){

    const [exerciseList, setExerciseList] = useState([])

    useEffect(()=>{
        //Fetch the user's workouts and then map them to workout cards - will need to add images to workouts, exercises and equipment
        fetch(`/exercises`)
        .then(response => response.json())
        .then(exercises => setExerciseList(exercises))
    },[])

    const showExercises = () => {
        if(exerciseList.length > 0){
            return exerciseList.map((exercise)=>{
                return <ExerciseCard exercise={exercise} setSelectedExercise={setSelectedExercise}/>
            })
        }
        else{
            return(
                <h3>Loading...</h3>
            )
        }
    }

    if(user){
        return(
            <div className="exercise-container">
                <h1>Available Exercises</h1>
                <div className="exercise-list-container">
                    {showExercises()}
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="exercise-container">
                <h1>Sign Up or Login to view available exercises and create your own workout plans</h1>
            </div>
        )
    }
}

export default Exercises