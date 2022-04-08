class MuscleGroup < ApplicationRecord
    has_many :muscle_group_mappers, dependent: :destroy
    has_many :exercises, through: :muscle_group_mappers
end
