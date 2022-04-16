function EquipmentPieceCard({equipmentPiece}){

    return(
        // TODO: style this to have the hover effect and add image
        <div className="equipment-piece-card-container">
            <img/>
            <div className="middle">
                <a href={`${equipmentPiece.purchase_url}`} target="_blank" className="text">{equipmentPiece.name}</a>
            </div>
        </div>
    )
}

export default EquipmentPieceCard