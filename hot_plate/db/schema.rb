# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_16_204058) do

  create_table "chairs", force: :cascade do |t|
    t.integer "chair_number"
    t.integer "grid_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "restaurant_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.text "description"
    t.string "image"
    t.string "heat_level"
    t.boolean "raw"
    t.boolean "gluten"
    t.boolean "vegitarian"
    t.boolean "fish"
    t.boolean "tree_nut"
    t.boolean "soy"
    t.boolean "peanuts"
    t.boolean "shellfish"
    t.boolean "dairy"
    t.boolean "need_how_cooked"
    t.string "how_cooked"
    t.string "notes"
    t.boolean "dinner"
    t.boolean "lunch"
    t.boolean "breakfast"
    t.boolean "brunch"
    t.boolean "happy_hour"
    t.boolean "custom"
    t.boolean "monday"
    t.boolean "tuesday"
    t.boolean "wednesday"
    t.boolean "thursday"
    t.boolean "friday"
    t.boolean "saturday"
    t.boolean "sunday"
    t.boolean "drink"
    t.boolean "alcohol"
    t.boolean "entree"
    t.boolean "appetizer"
    t.boolean "dessert"
    t.boolean "all_times"
    t.boolean "pescetarian"
    t.integer "visit_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "pass_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "round_tables", force: :cascade do |t|
    t.string "section"
    t.integer "table_number"
    t.integer "grid_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "restaurant_id"
    t.integer "radius"
  end

  create_table "square_tables", force: :cascade do |t|
    t.string "section"
    t.integer "table_number"
    t.integer "grid_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "last_visit"
    t.string "uuid"
    t.integer "points"
    t.string "phone_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "gluten"
    t.boolean "vegitarian"
    t.boolean "fish"
    t.boolean "tree_nut"
    t.boolean "soy"
    t.boolean "peanuts"
    t.boolean "shellfish"
    t.boolean "dairy"
    t.boolean "pescetarian"
    t.string "any_other"
  end

  create_table "visit_items", force: :cascade do |t|
    t.string "item_name"
    t.float "item_price"
    t.integer "menu_item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "visit_id"
  end

  create_table "visits", force: :cascade do |t|
    t.integer "user_id"
    t.string "menu_item_uuid"
    t.float "price_total"
    t.integer "check_number"
    t.string "table_number"
    t.string "uuid"
    t.integer "menu_item_id"
    t.string "items"
  end

end
