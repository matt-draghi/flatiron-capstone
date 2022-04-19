function EquipmentPieceCard({equipmentPiece}){

    return(
        // TODO: style this to have the hover effect and add image
        <div className="card-container">
            <a href={`${equipmentPiece.purchase_url}`} target="_blank">
                <img className="card-image" src={equipmentPiece.image} alt="piece-image"/>
                <p>{equipmentPiece.name}</p>
            </a>
        </div>
    )
}

export default EquipmentPieceCard