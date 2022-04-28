import { useEffect } from "react"
import EquipmentCard from "./EquipmentCard"

function Equipment({equipmentTypes, setSelectedEquipmentType}){

    useEffect(()=>{
        fetch(`/api/equipment-types`)
        .then(response => response.json())
        .then(data => {
          setEquipmentTypes(data)
          localStorage.setItem('equipmentTypes', JSON.stringify(data))
        })
    })

    const showEquipmentTypes = () => {
        if(equipmentTypes?.length > 0){
            return equipmentTypes.map((equipmentType)=>{
                return <EquipmentCard key={equipmentType.category + equipmentType.id} equipmentType={equipmentType} setSelectedEquipmentType={setSelectedEquipmentType}/>
            })
        }
        else{
            return(
                <h3>You do not have any workouts. Click here to create a new workout!</h3>
            )
        }
    }

    return(
        <div className="list-container">
            <div className="list-container-header">
                <h1>Select a Type of Equipment</h1>
            </div>
            <div className="card-list-container">
                {showEquipmentTypes()}
            </div>
        </div>
    )

    
}

export default Equipment