class AddAllTimesToMenuItems < ActiveRecord::Migration[6.1]
  def change
    add_column :menu_items, :all_times, :boolean

  end
end
