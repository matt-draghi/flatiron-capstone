class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :demo_url
      t.string :description

      t.timestamps
    end
  end
end
