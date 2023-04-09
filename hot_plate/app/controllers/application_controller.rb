
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/menu_items" do
    menu_items = MenuItem.all.order(:price)
    menu_items.to_json
  end

  get "/users" do 
    users = User.all.order(:name)
    users.to_json
  end

get "/visits/:price_total" do 
  visits = Visit.find(params[:price_total])
  visits.to_json
end

get '/visits' do
  visits = Visit.all
  visits.to_json
end

  get "/users/:id" do 
    user = User.find(params[:id])
    user.to_json
  end

  post "/users" do

    authorize = User.user_authorize(params[:email], params[:password])

    if authorize == true
      user = User.create(params)
      user.to_json

  end
end


post '/visits' do 
  visit = Visit.create(user_id: params[:user_id], price_total: params[:price_total], table_number: params[:table_number], uuid: params[:uuid], items: params[:items])
  # visit.menu_items << params[:menu_items]
  visit.to_json
end


  patch '/users/:id' do 
    user = User.find(params[:id])
    user.update(params)
    user.to_json


  end

patch '/users/:id/orders' do 
user = User.find(params[:id])
user.menu_items << params
end

patch '/visits/:price_total' do
  visits = Visit.find(params[:price_total])
  visits.check_number + params
end

  get "/users/:email/:password" do 
   user = User.user_match(params[:email], params[:password])
   user.to_json
    # User.find(params[:email])
  end


  post '/users' do 
    user = User.find(params[:id])
    user.to_json
  end

  delete '/users/:id' do 
    user = User.find(params[:id])
    user.destroy
  end


  post '/menu_items' do
    menu_items = MenuItem.create(params)
    menu_items.to_json
  end
  






















































































































































































































































  # patch '/users/:id' do 
  #   user = User.find(params[:id])
  #   user.update(params)
  #   user.to_json


  # end
  # patch '/users/:id/orders' do 
  #   user = User.find(params[:id])
  #   user.menu_items << params
  #   end

# patch '/visits/:id' do
#     visit = Visit.find_visit(params[:id])
#     # menu_item_found = MenuItems.find (params[:id])

#     visit.menu_items << params

# end

# post '/visit_items' do 
#    visit_item = VisitItem.create(params[:id])
#     visit_item.to_json
# end

# post '/visits' do
#   Visit.create()
# end














# 

# patch '/visits/:price_total' do
# visits = Visit.find(params[:price_total])
# visits.check_number + params
# end

# get "/users/:email/:password" do 
#  user = User.user_match(params[:email], params[:password])
#  user.to_json
#   # User.find(params[:email])
# end





# post '/users' do 
#   user = User.find(params[:id])
#   user.to_json
# end

# delete '/users/:id' do 
#   user = User.find(params[:id])
#   user.destroy
# end

# get "/users/:id" do 
#   user = User.find(params[:id])
#   user.to_json
# end

# post "/users" do

#   authorize = User.user_authorize(params[:email], params[:password])

#   if authorize == true
#     user = User.create(params)
#     user.to_json

# end
# end

# patch '/users/:id/orders' do 
  # user = User.find(params[:id])
  # user.menu_items << params
  # end
  post '/restaurants/chairs' do
   Chair.create(params).to_json
  #  restaurant = Restaurant.find(params[:restaurant_id])
  #  chair.to_json
  #  restaurant << chair
    end
    
    post '/restaurants/round_tables' do
      round_table = RoundTable.create(params)
      round_table.to_json
      end
    
      post '/restaurants/square_tables' do
        square_table= SquareTable.create(params)
        square_table.to_json
        end


post '/restaurants' do
authorize = Restaurant.restaurant_authorize(params[:id])
if authorize == true 
    restaurant = Restaurant.create(params)
    restaurant.to_json
end
end





    delete '/restaurants/:grid_numbers/:id' do 
    


      Restaurant.find_item_to_delete(params[:grid_number ], params[:id])
    end

    get '/restaurants/:pass_key' do 
     restaurant = Restaurant.find do |restaurant|

        if restaurant.pass_key === params[:pass_key]
          restaurant
        end
      end
      chairs = restaurant.chairs
      round_tables = restaurant.round_tables
      square_tables = restaurant.square_tables
      chairs.to_json
      round_tables.to_json
      square_tables.to_json
      restaurant.to_json

    end

    get '/restaurants/:pass_key/chairs' do 
     restaurant = Restaurant.find do |restaurant|
      if restaurant.pass_key === params[:pass_key]
        restaurant
      end
    end
    
      chairs = restaurant.chairs
      chairs.to_json
    end

    get '/restaurants/:pass_key/round_tables' do 
      restaurant = Restaurant.find do |restaurant|
       if restaurant.pass_key === params[:pass_key]
         restaurant
       end
     end
     
       round_tables = restaurant.round_tables
       round_tables.to_json
     end

     get '/restaurants/:pass_key/square_tables' do 
      restaurant = Restaurant.find do |restaurant|
       if restaurant.pass_key === params[:pass_key]
         restaurant
       end
     end
     
       square_tables = restaurant.square_tables
       square_tables.to_json
     end
    
  


    get'/restaurants' do 
      restaurants =Restaurant.all 
      restaurants.to_json
    end

    get'/chairs' do
      chairs = Chair.all
      chairs.to_json
    end
    get'/square_tables' do
      square_tables = Chair.all
      square_tables.to_json
    end
    get'/round_tables' do
      round_tables = Chair.all
      round_tables.to_json
    end







end