class Workout < ApplicationRecord
    belongs_to :user
    has_many :workout_mappers, dependent: :destroy
    has_many :exercises, through: :workout_mappers
    has_one_attached :image, dependent: :destroy
end
