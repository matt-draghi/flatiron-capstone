class CreateEquipmentPieces < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment_pieces do |t|
      t.string :brand
      t.string :description
      t.integer :price
      t.string :purchase_url
      t.string :name
      t.integer :equipment_type_id

      t.timestamps
    end
  end
end
