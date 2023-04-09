class User < ActiveRecord::Base
has_many :visits 
has_many :menu_items, through: :visits

def self.user_match(email, password)

email_valid =  self.all.find do |user|
if user.email == email && user.password == password
    user
else false
end
end
end

def self.user_authorize(email, password)
email_valid = self.all.find do |user| 
    if user.email == email || user.password == password
        true
    else false
    end

end

if email_valid == nil
true
else false
end
end

# def user_params
# params.permit(:name, :email, :password, :last_visit, :uuid, :points, :phone_number, :created_at, :updated_at, :gluten, :vegitarian, :fish, :tree_nut, :soy, :peanuts, :shellfish, :dairy, :pescetarian)
# end

def create_user 
user = User.create!(params)
user.to_json
end

end






