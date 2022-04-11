import { useEffect } from "react"
import "../styles/Workouts.css"

function Workouts({user}){

    useEffect(()=>{
        //Fetch the user's workouts and then map them to workout cards - will need to add images to workouts, exercises and equipment

    })

    if(user){
        return(
            <div className="workouts-container">
                <h1>Your Workouts</h1>
                <div className="workouts-list-container">

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