class EquipmentTypesController < ApplicationController

    def index
        equipmentTypes = EquipmentType.all
        if equipmentTypes
            render json: equipmentTypes, status: :ok
        else
            render json: {error: equipmentTypes.error.full_messages}, status: :not_found
        end
    end

end
