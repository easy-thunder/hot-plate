class ChangeMenuItemIdToUuid < ActiveRecord::Migration[6.1]
  def change
    rename_column :visits, :menu_item_id, :menu_item_uuid
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")

  end
end
