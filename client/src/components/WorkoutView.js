import { useEffect, useState } from "react"
import ExerciseRow from "./ExerciseRow"
import "../styles/WorkoutView.css"

function WorkoutView(){
    // const decodedURL = decodeURI(window.location)
    // console.log(decodedURL)
    const url = window.location.href.split('/')
    const selectedWorkout = url.at(-1)
    const [workoutMapperArray, setWorkoutMapperArray] = useState([])
    const [videoPlaying, setVideoPlaying] = useState(null)
    const [modalShow, setModalShow] = useState(false)



    useEffect(()=>{
        fetch (`/workouts/${selectedWorkout}`)
        .then(response => response.json())
        .then(workout => {
            console.log(workout.workout_mappers)
            const sortedWorkoutMapperArray = workout.workout_mappers.sort((workoutMapperA, workoutMapperB) => workoutMapperA.id - workoutMapperB.id)
            setWorkoutMapperArray(sortedWorkoutMapperArray)
        })
    },[])

    const handleDelete = (id) =>{
        if(modalShow == false){
            fetch(`/workout-mapper/${id}`,{
                method: "DELETE"
            })
            .then(()=>{
                const updatedWorkoutMapperArray = workoutMapperArray.filter((mapper)=> mapper.id != id)
                setWorkoutMapperArray(updatedWorkoutMapperArray)
            })
        }
        else{
            closeModal()
        }
    }
    
    const closeModal = () => {
        setModalShow(false)
        setVideoPlaying(null)
    }

    const handleUpdate = (id, updatedRepCount, updatedSetCount, updatedWeight) =>{
        console.log("Mapper Id: ", id)
        console.log("Updated Rep Count: ", updatedRepCount)
        console.log("Updated Set Count: ", updatedSetCount)
        console.log("Updated Weight Count: ", updatedWeight)
        fetch(`/workout-mapper/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                reps: updatedRepCount,
                sets: updatedSetCount,
                weight: updatedWeight
            })
        })
    }

    const listExercises = () => {
        return workoutMapperArray?.map((workoutMapper)=>{
          
            return(
                <>
                    <ExerciseRow 
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        id={workoutMapper.id}
                        exercise={workoutMapper.exercise}
                        reps={workoutMapper.reps}
                        sets={workoutMapper.sets}
                        weight={workoutMapper.weight}
                        setModalShow={setModalShow}
                        videoPlaying={videoPlaying}
                        setVideoPlaying={setVideoPlaying}
                    />
                    <dialog open={modalShow} className='exercise-modal'>
                        <div className="inner-modal">
                            <div className='modal-header'>
                                <button onClick={closeModal}>x</button>
                            </div>
                            <iframe width="560" height="315" src={videoPlaying} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </dialog>
                </>
            )
        })
    }

    return(
        <div className="workout-exercise-list" >
            {listExercises()}
        </div>
    )
}

export default WorkoutView