class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  belongs_to :user
  has_many :workout_mappers
  has_many :exercises, through: :workout_mappers
end
