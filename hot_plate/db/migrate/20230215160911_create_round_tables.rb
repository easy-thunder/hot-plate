class CreateRoundTables < ActiveRecord::Migration[6.1]
  def change
    create_table :round_tables do |t|
      t.string :section 
      t.integer :table_number
      t.integer :grid_number
    
      t.timestamps
    end
    
  end
end
