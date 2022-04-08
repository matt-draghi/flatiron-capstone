class Exercise < ApplicationRecord
    has_many :workout_mappers, dependent: :destroy
    has_many :workouts, through: :workout_mappers
    has_many :exercise_mappers, dependent: :destroy
    has_many :equipment_types, through: :exercise_mappers
    has_many :muscle_group_mappers, dependent: :destroy
    has_many :muscle_groups, through: :muscle_group_mappers
end
