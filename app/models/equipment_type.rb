class EquipmentType < ApplicationRecord
    has_many :exercise_mappers
    has_many :exercises, through: :exercise_mappers
    has_many :equipment_pieces
end
