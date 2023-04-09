class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.string :name 
      t.float :price 
      t.text :description 
      t.string :image
      t.string :heat_level 
      t.boolean :raw
      t.boolean :gluten 
      t.boolean :vegitarian
      t.boolean :fish 
      t.boolean :tree_nut
      t.boolean :soy
      t.boolean :peanuts
      t.boolean :shellfish
      t.boolean :dairy
      
    
      # t.timestamps
    end
    
  end
end
