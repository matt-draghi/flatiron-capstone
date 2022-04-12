class WorkoutMapperSerializer < ActiveModel::Serializer
  attributes :exercise, :reps, :sets, :weight, :id

  belongs_to :workout
  belongs_to :exercise
end
