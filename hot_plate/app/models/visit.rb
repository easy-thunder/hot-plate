class Visit < ActiveRecord::Base 
    belongs_to :user 
    belongs_to :menu_item
    has_many :menu_items
    has_many :visit_items
    
    # belongs_to :menu_item



   def self.find_visit(id)
     visit_valid = self.all.where do |visit|
        if visit.id== id
            visit
        end
      end
    end
end