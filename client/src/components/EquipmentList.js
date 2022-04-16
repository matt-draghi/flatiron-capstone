import {useEffect, useState} from 'react'
import EquipmentPieceCard from './EquipmentPieceCard'

function EquipmentList({setSelectedEquipmentPiece, selectedEquipmentType}){
    const [equipmentPieceArray, setEquipmentPieceArray] = useState([])
    const [sort, setSort] = useState("name")

    useEffect(()=>{
        // console.log(selectedEquipmentType)
        fetch (`/api/equipment-types/${selectedEquipmentType}`)
        .then(response => response.json())
        .then(equipmentType => {
            setEquipmentPieceArray(equipmentType.equipment_pieces)
        })
    },[])

    const displayEquipmentPieces = () => {
        if(equipmentPieceArray?.length > 0){
            let sortedEquipmentPieceArray = []
            if(sort === "name"){
                sortedEquipmentPieceArray = equipmentPieceArray.sort((equipmentPieceA, equipmentPieceB)=> equipmentPieceA.name - equipmentPieceB.name)
            }
            else{
                sortedEquipmentPieceArray = equipmentPieceArray.sort((equipmentPieceA, equipmentPieceB)=> equipmentPieceA.price - equipmentPieceB.price)
            }
            console.log(sortedEquipmentPieceArray)
            return sortedEquipmentPieceArray.map((equipmentPiece)=>{
                return <EquipmentPieceCard equipmentPiece={equipmentPiece} />
            })
        }
        else{
            return(
                <h3>Loading...</h3>
            )
        }    
    }

    return(
        <div className='list-container'>
            <div className='list-container-header'>
                <h1>{selectedEquipmentType}</h1>
                <form>
                    <label>Sort by:</label>
                    <select defaultValue={sort} onChange={(e)=>setSort(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </form>
            </div>
            <div className='card-list-container'>
                {displayEquipmentPieces()}
            </div>
        </div>
    )
}
export default EquipmentList