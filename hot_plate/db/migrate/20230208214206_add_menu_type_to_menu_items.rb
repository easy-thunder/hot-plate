class AddMenuTypeToMenuItems < ActiveRecord::Migration[6.1]
  def change
    add_column :menu_items, :dinner, :boolean
    add_column :menu_items, :lunch, :boolean
    add_column :menu_items, :breakfast, :boolean
    add_column :menu_items, :brunch, :boolean
    add_column :menu_items, :happy_hour, :boolean
    add_column :menu_items, :custom, :boolean
    add_column :menu_items, :monday, :boolean
    add_column :menu_items, :tuesday, :boolean
    add_column :menu_items, :wednesday, :boolean
    add_column :menu_items, :thursday, :boolean
    add_column :menu_items, :friday, :boolean
    add_column :menu_items, :saturday, :boolean
    add_column :menu_items, :sunday, :boolean
    add_column :menu_items, :drink, :boolean
    add_column :menu_items, :alcohol, :boolean
    add_column :menu_items, :entree, :boolean
    add_column :menu_items, :appetizer, :boolean
    add_column :menu_items, :dessert, :boolean


  end
end
