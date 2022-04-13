import {useState} from 'react'

function ExerciseRow({exercise, reps, sets, weight, handleDelete, id, setModalShow, setVideoPlaying, handleUpdate}){

    const [updateReps, setUpdateReps] = useState(reps)
    const [updateSets, setUpdateSets] = useState(sets)
    const [updateWeight, setUpdateWeight] = useState(weight)


    const showDemo = () => {
        setModalShow(true)
        setVideoPlaying(exercise.demo_url)
    }



    const handleSetReps = (e) => {
        console.log(e.target.value)
        setUpdateReps(e.target.value)
        handleUpdate(id, updateReps, updateSets, updateWeight)
    }

    const handleSetCount = (e) => {
        console.log(e.target.value)
        setUpdateSets(e.target.value)
        handleUpdate(id, updateReps, updateSets, updateWeight)
    }

    const handleWeightAmount = (e) => {
        console.log(e.target.value)
        setUpdateWeight(e.target.value)
        handleUpdate(id, updateReps, updateSets, updateWeight)
    }

    const createOptions = () =>{
        const optionsArray = []
        for(let i=0; i < 101; i++){
            optionsArray.push(i)
        }
        return optionsArray.map((option)=>{
            return <option>{option}</option>
        })
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
            <p>Reps:
                <select defaultValue={updateReps} onChange={handleSetReps} className="option-selector">
                    {createOptions()}
                </select>
            </p>

            <p>Sets:          
                <select defaultValue={updateSets} onChange={handleSetCount} className="option-selector">
                    {createOptions()}
                </select>
            </p>
   
            <p>Weight: 
                <select defaultValue={updateWeight} onChange={handleWeightAmount} className="option-selector">
                    {createOptions()}
                </select>
            lbs.</p>
            <button onClick={()=>handleDelete(id)}>Remove Exercise</button> 

        </div>
    )
}

export default ExerciseRow