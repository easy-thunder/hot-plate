class ChangeRestaurantTableNameTryAgain < ActiveRecord::Migration[6.1]
  def change
    rename_table :Restaurant, :restaurants
  end
end
