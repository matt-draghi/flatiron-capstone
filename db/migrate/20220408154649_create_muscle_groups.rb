class CreateMuscleGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :muscle_groups do |t|
      t.string :name

      t.timestamps
    end
  end
end
