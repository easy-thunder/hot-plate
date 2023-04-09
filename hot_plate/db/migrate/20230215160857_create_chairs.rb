class CreateChairs < ActiveRecord::Migration[6.1]
  def change
    create_table :chairs do |t|
      t.integer :chair_number 
      t.integer :grid_number
      t.timestamps
    end
    
  end
end
