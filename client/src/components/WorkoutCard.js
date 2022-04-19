import {NavLink} from "react-router-dom"

function WorkoutCard({workout, setSelectedWorkout}){


    const handleWorkoutSelect = () =>{
        localStorage.setItem('selectedWorkout', workout.name)
        setSelectedWorkout(workout.name)
    }

    const displayedImage = workout.image ? workout.image.url : "https://content3.jdmagicbox.com/comp/def_content/gymnasiums/default-gymnasiums-5.jpg"

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container" >
            <img className="card-image" src={displayedImage} alt="workout-image"/>
            <div className="middle">
                <NavLink to={`/workouts/${workout.name}`} onClick={handleWorkoutSelect} className="text">{workout.name}</NavLink>
            </div>
        </div>
    )
}

export default WorkoutCard