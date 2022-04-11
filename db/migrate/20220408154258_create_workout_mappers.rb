class CreateWorkoutMappers < ActiveRecord::Migration[7.0]
  def change
    create_table :workout_mappers do |t|
      t.integer :workout_id
      t.integer :exercise_id
      t.integer :reps
      t.integer :sets
      t.integer :weight

      t.timestamps
    end
  end
end
