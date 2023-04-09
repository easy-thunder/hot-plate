class ChangeTypeSquareTables < ActiveRecord::Migration[6.1]
  def change
    change_column :square_tables, :restaurant_id, :integer

  end
end
