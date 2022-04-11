function ExerciseRow({exercise}){
    return(
        <div className="exercise-row">
            <p>{exercise.name}</p>
            {/* Should have a model pop up that shows a demo video */}
            <button>Demo</button>
            {/* Add selectors to let user choose reps, sets, weights - will need to then do a 
                fetch to update the specified mapper */}
            <p>Reps</p>
            <p>Sets</p>
            <p>Weight</p>
            <button>Remove Exercise</button>
        </div>
    )
}

export default ExerciseRow