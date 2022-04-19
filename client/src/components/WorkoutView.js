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
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const [editedName, setEditedName] = useState(selectedWorkout)
    const [editedImage, setEditedImage] = useState("")
    const history = useHistory()
    const [fullWorkoutInfo, setFullWorkoutInfo] = useState()
    const [displayedImage, setDisplayedImage] = useState("https://content3.jdmagicbox.com/comp/def_content/gymnasiums/default-gymnasiums-5.jpg")



    useEffect(()=>{
        // console.log(workoutName)
        fetch (`/api/workouts/${workoutName}`) //Grabs the workout mappers based on the decoded workout name
        .then(response => response.json())
        .then(workout => {
            const sortedWorkoutMapperArray = workout.workout_mappers.sort((workoutMapperA, workoutMapperB) => workoutMapperA.id - workoutMapperB.id)
            setWorkoutMapperArray(sortedWorkoutMapperArray)
            setFullWorkoutInfo(workout)
            if(workout.image){
                setDisplayedImage(workout.image.url)
            }
        })
    },[])

    const handleDelete = (id) =>{
        if(modalShow == false){
            fetch(`/api/workout-mapper/${id}`,{
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
        fetch(`/api/workout-mapper/${id}`,{
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
        setDeleteModalShow(false)

    }

    const deleteWorkout = () =>{
        setNameModalShow(false)
        setDeleteModalShow(true)
    }

    const closeModals = () => {
        setNameModalShow(false)
        setDeleteModalShow(false)
    }

    const listExercises = () => {
        return workoutMapperArray?.map((workoutMapper)=>{
          
            return(
                <div onClick={closeModals}>
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

                </div>
            )
        })
    }

    const handleWorkoutChange = (e) =>{
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', editedName)
        if(editedImage){
            formData.append('image', editedImage)
        }

        fetch(`/api/workouts/${selectedWorkout}`,{
            method: "PATCH",
            body: formData 
        })
        .then(response => response.json())
        .then(data => {
            console.log("this is it", data)
            localStorage.setItem('selectedWorkout', data.name)
            setSelectedWorkout(data.name)
            // history.push(`/workouts/${data.name}`)
            window.location = '/workouts'
        })
        setNameModalShow(false)
    }

    const handleDeleteWorkout = () => {
        console.log(workoutName)
        fetch(`/api/workouts/${workoutName}`,{
            method:"DELETE",
        })
        .then((response) => response.json())
        .then(()=>{
            setDeleteModalShow(false)
            window.location = `/workouts`
        })
    }
    
    const handleImageChange = (e) => {
        setEditedImage(e.target.files[0])
    }

    return(
        <>
        
            <div className="workout-view-header">
                <div>
                    <img src={displayedImage}/>
                    <h1 className='selected-workout-header'>{selectedWorkout}</h1>
                </div>
                <div className="workout-view-buttons">
                    <button onClick={editWorkout}><span>Edit Workout</span></button>
                        
                    <button onClick={deleteWorkout}><span>Delete Workout</span></button>
                  <dialog open={modalShow} className='exercise-modal'>
                        <div className="inner-modal">
                            <div className='modal-header'>
                                <button onClick={closeModal}><span>x</span></button>
                            </div>
                            <iframe width="560" height="315" src={videoPlaying} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </dialog>
                <dialog open={nameModalShow} className='workout-edit-modal'>
                    <form className="edit-workout-form" onSubmit={handleWorkoutChange}>
                        <div className="edit-name">
                            <label>Edit Workout Name</label>
                            <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)}/>
                            <br/>
                            <label>Edit Workout Image</label>
                            <input type="file" accept="image/*" multiple={false} onChange={handleImageChange}/>
                        </div>
                        <button className="profile-save-button" type="submit" value="Save"><span>Save</span></button>
                    </form>
                </dialog>
                <dialog open={deleteModalShow} className='workout-delete-modal'>
                    <h3>Are you sure you want to delete this workout?</h3>
                    <div className="delete-modal-buttons">
                        <button onClick={handleDeleteWorkout}><span>Yes</span></button>
                        <button onClick={()=>setDeleteModalShow(false)}><span>No</span></button>
                    </div>
                </dialog>
                </div>
                 
            </div>
            <div className="workout-exercise-list" >
                {listExercises()} 
                
            </div>

        </>

    )
}

export default WorkoutView