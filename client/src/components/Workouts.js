import { useEffect, useState } from "react"
import "../styles/Workouts.css"
import WorkoutCard from "./WorkoutCard"

function Workouts({user, selectedWorkout, setSelectedWorkout, setWorkoutsList, workoutsList}){

    const [showGenerateWorkoutModal, setShowGenerateWorkoutModal] = useState(false)
    const [chestCount, setChestCount] = useState("0")
    const [shouldersCount, setShouldersCount] = useState("0")
    const [coreCount, setCoreCount] = useState("0")
    const [bicepsCount, setBicepsCount] = useState("0")
    const [tricepsCount, setTricepsCount] = useState("0")
    const [backCount, setBackCount] = useState("0")
    const [legsCount, setLegsCount] = useState("0")
    const [cardioCount, setCardioCount] = useState("0")


    useEffect(()=>{
        if(user){
          fetch(`/api/workouts`)
          .then(response => response.json())
          .then(workouts => {
            const sortedWorkouts = workouts.sort((workoutA, workoutB) => workoutA.id - workoutB.id)
            setWorkoutsList(sortedWorkouts)
          })
        }
    })

    const showWorkouts = () => {
        if(workoutsList.length > 0){
            return workoutsList.map((workout)=>{
                return <WorkoutCard key={workout.id} workout={workout} setSelectedWorkout={setSelectedWorkout}/>
            })
        }
        else{
            return(
                <h3>You do not have any workouts. Click here to create a new workout!</h3>
            )
        }
    }
    

    const handleCreateWorkout = () => {
        fetch('/api/workouts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(workout => {
            // console.log("Encoded", encodeURI(workout.name))
            localStorage.setItem('selectedWorkout', workout.name)
            setSelectedWorkout(workout.name)
            // console.log("Selected workout: ", selectedWorkout)
            setWorkoutsList(workoutsList => [...workoutsList, workout])
            localStorage.setItem('workoutsList', [...workoutsList, workout])
        })
    }

    const handleGenerateWorkout = () => {
       setShowGenerateWorkoutModal(true)
    }

    if(user){
        return(
            <div className="list-container">
                <div className="list-container-header">
                    <h1>Your Workouts</h1>
                    <button onClick={handleCreateWorkout}><span>Create Blank Workout</span></button>
                    <button onClick={handleGenerateWorkout}><span>Generate Workout</span></button>
                    <dialog open={showGenerateWorkoutModal}>
                         <div className="generate-workout"> 
                             <div id="header">
                                <h2>Select Your Exercises</h2>
                                <p onClick={()=>setShowGenerateWorkoutModal(false)}>x</p>
                             </div>
                             <div>
                                <h3>Chest Exercises</h3>
                                <input type="text" value={chestCount} onChange={(e)=>setChestCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={chestCount} class="slider" onChange={(e)=>setChestCount(e.target.value)}/>

                                <h3>Shoulder Exercises</h3>
                                <input type="text" value={shouldersCount} onChange={(e)=>setShouldersCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={shouldersCount} class="slider" onChange={(e)=>setShouldersCount(e.target.value)}/>

                                <h3>Core Exercises</h3>
                                <input type="text" value={coreCount} onChange={(e)=>setCoreCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={coreCount} class="slider" onChange={(e)=>setCoreCount(e.target.value)}/>

                                <h3>Bicep Exercises</h3>
                                <input type="text" value={bicepsCount} onChange={(e)=>setBicepsCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={bicepsCount} class="slider" onChange={(e)=>setBicepsCount(e.target.value)}/>

                                <h3>Tricep Exercises</h3>
                                <input type="text" value={tricepsCount} onChange={(e)=>setTricepsCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={tricepsCount} class="slider" onChange={(e)=>setTricepsCount(e.target.value)}/>

                                <h3>Back Exercises</h3>
                                <input type="text" value={backCount} onChange={(e)=>setBackCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={backCount} class="slider" onChange={(e)=>setBackCount(e.target.value)}/>

                                <h3>Leg Exercises</h3>
                                <input type="text" value={legsCount} onChange={(e)=>setLegsCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={legsCount} class="slider" onChange={(e)=>setLegsCount(e.target.value)}/>

                                <h3>Cardio Exercises</h3>
                                <input type="text" value={cardioCount} onChange={(e)=>setCardioCount(e.target.value)}/>
                                <br/>
                                <input type="range" min="0" max="10" value={cardioCount} class="slider" onChange={(e)=>setCardioCount(e.target.value)}/>
                             </div>
                            <button><span>Generate</span></button>
                         </div>
                    </dialog>
                </div>
                <br/>
                <div className="card-list-container" onClick={()=>setShowGenerateWorkoutModal(false)}>
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