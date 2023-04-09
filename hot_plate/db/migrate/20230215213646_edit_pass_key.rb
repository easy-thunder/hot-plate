class EditPassKey < ActiveRecord::Migration[6.1]
  def change
rename_column :restaurants, :passKey, :pass_key
#Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
