import {NavLink} from "react-router-dom"

function EquipmentCard({equipmentType, setSelectedEquipmentType}){

    const handleEquipmentTypeSelect = () =>{
        localStorage.setItem('selectedEquipmentType', equipmentType.category)
        setSelectedEquipmentType(equipmentType.category)
    }

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container">
            <img className="card-image" src={equipmentType.image} alt="equipment-image"/>
            <div className="middle">
                <NavLink to={`/equipment/${equipmentType.category}`} onClick={handleEquipmentTypeSelect} className="text">{equipmentType.category}</NavLink>
            </div>
        </div>
    )
}

export default EquipmentCard