class AddNotesAndHowCookedToMenuItems < ActiveRecord::Migration[6.1]
  def change
    add_column :menu_items, :need_how_cooked, :boolean
    add_column :menu_items, :how_cooked, :string
    add_column :menu_items, :notes, :string
  end
end
