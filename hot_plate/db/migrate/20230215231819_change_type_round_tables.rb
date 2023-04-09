class ChangeTypeRoundTables < ActiveRecord::Migration[6.1]
  def change
    change_column :round_tables, :restaurant_id, :integer
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
