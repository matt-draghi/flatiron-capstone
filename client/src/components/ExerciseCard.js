import {NavLink} from "react-router-dom"

function ExerciseCard({exercise, setSelectedExercise}){

    const handleExerciseSelect = () =>{
        localStorage.setItem('selectedExercise', exercise.name)
        setSelectedExercise(exercise.name)
    }

    return(
        <div className="card-container">
            <img className="card-image" src={exercise.image} alt="exercise-image"/>
            <div className="middle">
                <NavLink to={`/exercises/${exercise.name}`} onClick={handleExerciseSelect} className="text">{exercise.name}</NavLink>
            </div>
        </div>
    )
}

export default ExerciseCard