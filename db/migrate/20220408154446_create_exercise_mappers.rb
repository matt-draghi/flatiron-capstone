class CreateExerciseMappers < ActiveRecord::Migration[7.0]
  def change
    create_table :exercise_mappers do |t|
      t.integer :equipment_type_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
