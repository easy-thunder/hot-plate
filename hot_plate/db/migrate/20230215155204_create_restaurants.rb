class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :Restaurant do |t|
      t.string :name 
      t.string :passKey
      t.timestamps
    end
    
  end
end
