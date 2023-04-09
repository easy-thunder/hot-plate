class ChangeTypeChairs < ActiveRecord::Migration[6.1]
  def change
    change_column :chairs, :restaurant_id, :integer

  end
end
