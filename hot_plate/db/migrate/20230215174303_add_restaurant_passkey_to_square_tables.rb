class AddRestaurantPasskeyToSquareTables < ActiveRecord::Migration[6.1]
  def change
    add_column :square_tables, :restaurant_id, :string 
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
