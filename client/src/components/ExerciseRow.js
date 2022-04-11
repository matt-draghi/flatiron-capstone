function ExerciseRow({exercise}){
    return(
        <div className="exercise-row">
            <p>{exercise.name}</p>
            <button>Demo</button>
            <button>Edit</button>
            {/* If I want to add the ability to add rep count, set count, and weight
            I will need to add those columns to the workout mapper */}
            <p>Reps</p>
            <p>Sets</p>
            <p>Weight</p>
            <button>Remove Exercise</button>
        </div>
    )
}

export default ExerciseRow