class MenuItem < ActiveRecord::Base
    has_many :visits 
    has_many :users, through: :visits 
    belongs_to :visit
end