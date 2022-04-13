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
        handleUpdate(id, e.target.value, updateSets, updateWeight)
    }

    const handleSetCount = (e) => {
        console.log(e.target.value)
        setUpdateSets(e.target.value)
        handleUpdate(id, updateReps, e.target.value, updateWeight)
    }

    const handleWeightAmount = (e) => {
        console.log(e.target.value)
        setUpdateWeight(e.target.value)
        handleUpdate(id, updateReps, updateSets, e.target.value)
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
            <button className="demo-button" onClick={showDemo}>Demo</button>
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