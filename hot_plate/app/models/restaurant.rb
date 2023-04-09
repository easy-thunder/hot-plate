class Restaurant < ActiveRecord::Base
    has_many :chairs 
    has_many :round_tables 
    has_many :square_tables

    def self.find_restaurant_to_patch(password)
        current_restaurant = self.all.find do |restaurant|
            if restaurant.pass_key == password
                restaurant
            end
          end
          current_restaurant
        end


        def self.restaurant_authorize(password)
            restaurant_valid = self.all.find do |restaurant| 
                if restaurant.pass_key == password
                    true
                else false
                end
            
            end
            
            if restaurant_valid == nil
            true
            else false
            end
            end

        def self.find_item_to_delete(grid_number, id)
            restaurant = self.find(id)
            restaurant.chairs.find do |chair|
                if chair.grid_number == grid_number
                    chair.destroy
                end
            end
            restaurant.round_tables.find do |round_table|
                if round_table.grid_number == grid_number 
                    round_table.destroy 
                end
            end
            restaurant.square_tables.find do |square_table|
                if square_table.grid_number == grid_number
                    square_table.destroy
                end
            end
        end

        


end