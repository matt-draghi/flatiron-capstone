import "../styles/Workouts.css"
import WorkoutCard from "./WorkoutCard"

function Workouts({user, selectedWorkout, setSelectedWorkout, setWorkoutsList, workoutsList}){

    console.log(workoutsList)
    const showWorkouts = () => {
        if(workoutsList?.length > 0){
            console.log(workoutsList)
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
    

    const handleCreateWorkout = () => {
        fetch('/workouts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(workout => {
            console.log("Encoded", encodeURI(workout.name))
            localStorage.setItem('selectedWorkout', workout.name)
            setSelectedWorkout(workout.name)
            console.log("Selected workout: ", selectedWorkout)
            setWorkoutsList(workoutsList => [...workoutsList, workout])
            localStorage.setItem('workoutsList', [...workoutsList, workout])
            // window.location = `/workouts/${workout.name}`
        })
    }

    if(user){
        return(
            <div className="list-container">
                <div className="list-container-header">
                    <h1>Your Workouts</h1>
                    <button onClick={handleCreateWorkout}>Create Workout</button>
                </div>
                <div className="card-list-container">
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