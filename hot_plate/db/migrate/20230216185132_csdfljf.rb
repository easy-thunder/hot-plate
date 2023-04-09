class Csdfljf < ActiveRecord::Migration[6.1]
  def change
    change_column :visits, :menu_item_uuid, :string
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
