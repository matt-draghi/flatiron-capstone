import { useEffect, useState } from "react"

function ExerciseView({selectedExercise, workoutsList}){

    const [shownExercise, setShownExercise] = useState()
    const [addToWorkout, setAddToWorkout] = useState("Choose a Workout")
    const [chosenWorkout, setChosenWorkout] = useState()

    useEffect(()=>{
        // console.log(selectedExercise)
        fetch (`/api/exercises/${selectedExercise}`)
        .then(response => response.json())
        .then(exercise => {
            setShownExercise(exercise)
        })
    },[])

    const mapWorkoutOptions = () => {
        return (
            workoutsList?.map((workout)=>{
                return <option value={workout.name}>{workout.name}</option>
            })
        )
    }

    const handleChangeSelection = (e) => {
        setAddToWorkout(e.target.value)
        setChosenWorkout(workoutsList.find(workout => workout.name === e.target.value))
    }

    const addExerciseToWorkout = () => {
        // console.log(shownExercise) //grab the id from shown exercise to set as the exercise_id
        // console.log(chosenWorkout) //grab the id from chosen workout to set as the workout_id

        const newMapper = {
            workout_id: chosenWorkout.id,
            exercise_id: shownExercise.id,
            reps: 0,
            sets: 0,
            weight: 0
        }

        fetch('/api/workout-mapper',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newMapper)
        })
        .then(response => response.json())
        .then(newMapper => {
            console.log(newMapper)
            alert(`${shownExercise.name} has been added to ${chosenWorkout.name}!`)
        }) 
    }

    return(
        <div className="exercise-view-container">
            <div className="exercise-video-container">
                <iframe width="560" height="315" src={shownExercise?.demo_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="exercise-view-header">
                <h1>{selectedExercise}</h1>
                <select defaultValue={addToWorkout} onChange={handleChangeSelection}>
                    <option value={addToWorkout} disabled hidden>Choose a Workout</option>
                    {mapWorkoutOptions()}
                </select>
                <button onClick={addExerciseToWorkout}>Add to Workout</button>
            </div>
            <h3>Description:</h3>
            <p>{shownExercise?.description}</p>
            <h3>Equipment Used:</h3>
            <ul>
                {shownExercise?.equipment_types.map((equipment_type)=>{
                    return <li>{equipment_type.category}</li>
                })}
            </ul>
            <h3>Muscles Hit:</h3>
            <ul>
                {shownExercise?.muscle_groups.map((muscle_group)=>{
                    return <li>{muscle_group.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ExerciseView