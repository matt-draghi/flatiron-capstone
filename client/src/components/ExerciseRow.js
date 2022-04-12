function ExerciseRow({exercise, reps, sets, weight, handleDelete, id, setModalShow, setVideoPlaying}){


    const showDemo = () => {
        setModalShow(true)
        setVideoPlaying(exercise.demo_url)
    }

 
    return(
        <div className="exercise-row">
            <p className="exercise-name">{exercise.name}</p>
            {/* Should have a model pop up that shows a demo video */}
            <button className="demo-button" onClick={showDemo}>Demo</button>
            {/* Use edit button to change reps sets weight or add selector in place */}
            <button>edit</button>
            {/* Add selectors to let user choose reps, sets, weights - will need to then do a 
                fetch to update the specified mapper */}
            <p>Reps: {reps}</p>
            <p>Sets: {sets}</p>
            <p>Weight: {weight}lbs.</p>
            <button onClick={()=>handleDelete(id)}>Remove Exercise</button> 

        </div>
    )
}

export default ExerciseRow