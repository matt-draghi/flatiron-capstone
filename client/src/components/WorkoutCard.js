import {NavLink} from "react-router-dom"

function WorkoutCard({workout, setSelectedWorkout}){


    const handleWorkoutSelect = () =>{
        localStorage.setItem('selectedWorkout', workout.name)
        setSelectedWorkout(workout.name)
    }

    const displayedImage = workout.image ? workout.image.url : "https://content3.jdmagicbox.com/comp/def_content/gymnasiums/default-gymnasiums-5.jpg"

    return(
        <div className="card-container" >
            <NavLink to={`/workouts/${workout.name}`} onClick={handleWorkoutSelect} className="text">
            <img className="card-image" src={displayedImage} alt="workout-image"/>
            {workout.name}
            </NavLink>
        </div>
    )
}

export default WorkoutCard