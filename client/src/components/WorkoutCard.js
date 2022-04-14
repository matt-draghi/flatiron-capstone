import {NavLink} from "react-router-dom"

function WorkoutCard({workout, setSelectedWorkout}){

    const handleWorkoutSelect = () =>{
        localStorage.setItem('selectedWorkout', workout.name)
        setSelectedWorkout(workout.name)
    }

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container">
            <img/>
            <div className="middle">
                <NavLink to={`/workouts/${workout.name}`} onClick={handleWorkoutSelect} className="text">{workout.name}</NavLink>
            </div>
        </div>
    )
}

export default WorkoutCard