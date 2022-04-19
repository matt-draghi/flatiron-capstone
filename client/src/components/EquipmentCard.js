import {NavLink} from "react-router-dom"

function EquipmentCard({equipmentType, setSelectedEquipmentType}){

    const handleEquipmentTypeSelect = () =>{
        localStorage.setItem('selectedEquipmentType', equipmentType.category)
        setSelectedEquipmentType(equipmentType.category)
    }

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container">
            <NavLink to={`/equipment/${equipmentType.category}`} onClick={handleEquipmentTypeSelect} className="text">
                <img className="card-image" src={equipmentType.image_url} alt="equipment-image"/>
                <p>{equipmentType.category}</p>
            </NavLink>
        </div>
    )
}

export default EquipmentCard