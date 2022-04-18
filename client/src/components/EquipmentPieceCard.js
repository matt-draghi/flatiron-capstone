function EquipmentPieceCard({equipmentPiece}){

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container">
            <img className="card-image" src={equipmentPiece.image} alt="piece-image"/>
            <div className="middle">
                <a href={`${equipmentPiece.purchase_url}`} target="_blank" className="text">{equipmentPiece.name}</a>
            </div>
        </div>
    )
}

export default EquipmentPieceCard