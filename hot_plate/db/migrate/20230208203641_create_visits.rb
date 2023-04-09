class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.integer :user_id 
      t.integer :menu_item_id 
      t.float :price_total 
      t.integer :check_number 
    
    end
    
  end
end
