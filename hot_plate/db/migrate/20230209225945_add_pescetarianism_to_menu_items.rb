class AddPescetarianismToMenuItems < ActiveRecord::Migration[6.1]
  def change
    add_column :menu_items, :pescetarian, :boolean

  end
end
