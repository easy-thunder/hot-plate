class AddAllergiesToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gluten, :boolean
    add_column :users, :vegitarian, :boolean
    add_column :users, :fish, :boolean
    add_column :users, :tree_nut, :boolean
    add_column :users, :soy, :boolean
    add_column :users, :peanuts, :boolean
    add_column :users, :shellfish, :boolean
    add_column :users, :dairy, :boolean
  end
end
