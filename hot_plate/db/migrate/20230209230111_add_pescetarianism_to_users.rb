class AddPescetarianismToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :pescetarian, :boolean
  end
end
