import { useEffect, useState } from "react"

function ExerciseView({selectedExercise}){

    const [shownExercise, setShownExercise] = useState()

    useEffect(()=>{
        console.log(selectedExercise)
        fetch (`/exercises/${selectedExercise}`)
        .then(response => response.json())
        .then(exercise => {
            setShownExercise(exercise)
            console.log(exercise)
        })
    },[])

    return(
        <div className="exercise-view-container">
            {/* Add the exercise video */}
        </div>
    )
}

export default ExerciseView

// For reference:

// {id: 2, name: 'Forward Lunges', demo_url: 'https://www.youtube.com/embed/QE_hU8XX48I', description: 'This is a placeholder for the description', created_at: '2022-04-12T19:38:39.561Z', …}
// created_at: "2022-04-12T19:38:39.561Z"
// demo_url: "https://www.youtube.com/embed/QE_hU8XX48I"
// description: "This is a placeholder for the description"
// equipment_types: Array(2)
// 0:
// category: "Dumbbells"
// created_at: "2022-04-12T19:38:39.784Z"
// id: 1
// image_url: ""
// updated_at: "2022-04-12T19:38:39.784Z"
// [[Prototype]]: Object
// 1:
// category: "No Equipment"
// created_at: "2022-04-12T19:38:39.793Z"
// id: 4
// image_url: ""
// updated_at: "2022-04-12T19:38:39.793Z"
// [[Prototype]]: Object
// length: 2
// [[Prototype]]: Array(0)
// id: 2
// muscle_groups: Array(1)
// 0:
// created_at: "2022-04-12T19:38:39.695Z"
// id: 7
// name: "Legs"
// updated_at: "2022-04-12T19:38:39.695Z"
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)
// name: "Forward Lunges"
// updated_at: "2022-04-12T19:38:39.561Z"
// [[Prototype]]: Object