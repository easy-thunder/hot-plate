class ChangeRestaurantTableName < ActiveRecord::Migration[6.1]
  def change
    def self.up
      rename_table :Restaurant, :restaurants
    end
  
    def self.down
      rename_table :restaurants, :Restaurant
    end
  end
end
