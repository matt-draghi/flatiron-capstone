import {NavLink} from "react-router-dom"

function ExerciseCard({exercise, setSelectedExercise}){

    const handleExerciseSelect = () =>{
        localStorage.setItem('selectedExercise', exercise.name)
        setSelectedExercise(exercise)
    }

    return(
        <div className="exercise-card-container">
            <img/>
            <div className="middle">
                <NavLink to={`/exercises/${exercise.name}`} onClick={handleExerciseSelect} className="text">{exercise.name}</NavLink>
            </div>
        </div>
    )
}

export default ExerciseCard