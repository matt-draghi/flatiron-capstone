class CreateMuscleGroupMappers < ActiveRecord::Migration[7.0]
  def change
    create_table :muscle_group_mappers do |t|
      t.integer :muscle_group_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
