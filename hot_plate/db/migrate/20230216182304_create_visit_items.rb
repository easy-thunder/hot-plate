class CreateVisitItems < ActiveRecord::Migration[6.1]
  def change
    create_table :visit_items do |t|
      t.string :item_name
      t.float :item_price 
      t.integer :menu_item_id
    
      t.timestamps
    end
    
  end
end
