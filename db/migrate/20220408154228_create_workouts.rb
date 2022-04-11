class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
