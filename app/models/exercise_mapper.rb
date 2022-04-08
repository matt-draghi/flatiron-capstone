class ExerciseMapper < ApplicationRecord
    belongs_to :exercise
    belongs_to :equipment_type
end
