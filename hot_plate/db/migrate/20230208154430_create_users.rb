class CreateUsers < ActiveRecord::Migration[6.1]
  def change

    create_table :users do |t|
      t.string :name 
      t.string :email
      t.string :password 
      t.datetime :last_visit
      t.integer :uuid 
      t.integer :points
      t.string :phone_number
      
    t.timestamps
    end
    

  end
end
