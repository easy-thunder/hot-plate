class AddTableNumberTooVisit < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :table_number, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
