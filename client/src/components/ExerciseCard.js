import {NavLink} from "react-router-dom"

function ExerciseCard({exercise, setSelectedExercise}){

    const handleExerciseSelect = () =>{
        localStorage.setItem('selectedExercise', exercise.name)
        setSelectedExercise(exercise.name)
    }

    return(
        <div className="exercise-list">
            <NavLink to={`/exercises/${exercise.name}`} onClick={handleExerciseSelect} className="text">
                <p>{exercise.name}</p>
            </NavLink>
        </div>
    )
}

export default ExerciseCard