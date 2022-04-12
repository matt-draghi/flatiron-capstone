import { useEffect, useState } from "react"
import ExerciseRow from "./ExerciseRow"
import "../styles/WorkoutView.css"

function WorkoutView(){
    const url = window.location.href.split('/')
    const selectedWorkout = url.at(-1)
    const [workout, setWorkout] = useState([])
    const [workoutMapperArray, setWorkoutMapperArray] = useState([])

    useEffect(()=>{
        fetch (`/workouts/${selectedWorkout}`)
        .then(response => response.json())
        .then(workout => {
            setWorkout(workout)
            setWorkoutMapperArray(workout.workout_mappers)
        })
    },[])

    const handleDelete = (id) =>{
                
                fetch(`/workout-mapper/${id}`,{
                    method: "DELETE"
                })
                .then(()=>{
                    const updatedWorkoutMapperArray = workoutMapperArray.filter((mapper)=> mapper.id != id)
                    setWorkoutMapperArray(updatedWorkoutMapperArray)
                })
            }

    const listExercises = () => {
        return workoutMapperArray?.map((workoutMapper)=>{
          
            return(
                <ExerciseRow 
                    handleDelete={handleDelete}
                    id={workoutMapper.id}
                    exercise={workoutMapper.exercise}
                    reps={workoutMapper.reps}
                    sets={workoutMapper.sets}
                    weight={workoutMapper.weight}
                />
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