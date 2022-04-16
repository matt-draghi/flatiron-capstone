class EquipmentTypesController < ApplicationController

    def index
        equipmentTypes = EquipmentType.all
        if equipmentTypes
            render json: equipmentTypes, status: :ok
        else
            render json: {error: equipmentTypes.error.full_messages}, status: :not_found
        end
    end

    def show
        equipmentType = EquipmentType.find_by(category: params[:id])
        if equipmentType
            render json: equipmentType, include: [:equipment_pieces],status: :ok
        else
            render json: {error: equipmentTypes.error.full_messages}, status: :not_found
        end
    end

end
