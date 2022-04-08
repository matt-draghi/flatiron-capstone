class CreateEquipmentTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment_types do |t|
      t.string :category
      t.string :image_url

      t.timestamps
    end
  end
end
