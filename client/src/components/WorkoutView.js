import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import ExerciseRow from "./ExerciseRow"
import "../styles/WorkoutView.css"

function WorkoutView({setSelectedWorkout, selectedWorkout}){
    const url = window.location.href.split('/')   //This is the encoded version of the url split
    const workoutFromUrl = url.at(-1)  //This is the encoded workout name
    const workoutName = decodeURI(workoutFromUrl) //Normal name
    const [workoutMapperArray, setWorkoutMapperArray] = useState([])
    const [videoPlaying, setVideoPlaying] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [nameModalShow, setNameModalShow] = useState(false)
    const [editedName, setEditedName] = useState(selectedWorkout)
    const history = useHistory()



    useEffect(()=>{
        console.log(workoutName)
        fetch (`/workouts/${workoutName}`) //Grabs the workout mappers based on the decoded workout name
        .then(response => response.json())
        .then(workout => {
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

    const editWorkout = () => {
        setNameModalShow(true)
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

    const handleNameChange = (e) =>{
        e.preventDefault()
        fetch(`/workouts/${selectedWorkout}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: editedName
            }) 
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('selectedWorkout', data.name)
            setSelectedWorkout(data.name)
            history.push(`/workout/${data.name}`)
        })
        setNameModalShow(false)
    }

    return(
        <>
            <div className="workout-view-header">
                <h1 className='selected-workout-header'>{selectedWorkout}</h1>
                <button onClick={editWorkout}>Edit Workout Name</button>
                <dialog open={nameModalShow} className='workout-name-modal'>
                    <form onSubmit={handleNameChange}>
                        <label>Edit Workout Name</label>
                        <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)}/>
                        <input type="submit" value="Save"/>
                    </form>
                </dialog>
            </div>
            <div className="workout-exercise-list" >
                {listExercises()}
            </div>
        </>

    )
}

export default WorkoutView