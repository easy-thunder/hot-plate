import { NavLink} from "react-router-dom"
import {useHistory} from 'react-router-dom'


function AdminHome({handleAddMenuItem}){

// const history = useHistory()

    function addMenuItem(e){
        e.preventDefault()
        console.log(e.target.gluten.checked, e.target.alcohol.checked, e.target.drink.checked, e.target.dessert.checked, e.target.dessert.checked,
            e.target.appetizer.checked, e.target.entree.checked, e.target.peanuts.checked)

        
        const newMenuItem = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            gluten:  e.target.gluten.checked,
            vegitarian: e.target.vegetarian.checked,
            fish: e.target.fish.checked,
            tree_nut: e.target.tree_nut.checked,
            soy: e.target.soy.checked,
            peanuts: e.target.peanuts.checked,
            shellfish: e.target.shellfish.checked,
            dairy: e.target.dairy.checked,
            pescetarian: e.target.pescetarian.checked,
            heat_level: e.target.value,
            raw: e.target.raw.checked,
            need_how_cooked: e.target.need_how_cooked.checked, 
            breakfast: e.target.breakfast.checked,
            lunch: e.target.lunch.checked,
            brunch: e.target.brunch.checked,
            dinner: e.target.dinner.checked,
            happy_hour: e.target.happy_hour.checked,
            all_times: e.target.all_times.checked,
            custom: e.target.custom.checked,
            monday: e.target.monday.checked,
            tuesday: e.target.tuesday.checked,
            wednesday: e.target.wednesday.checked,
            thursday: e.target.thursday.checked,
            friday: e.target.friday.checked,
            saturday: e.target.saturday.checked,
            sunday: e.target.sunday.checked,
            entree: e.target.entree.checked,
            appetizer: e.target.appetizer.checked,
            dessert: e.target.dessert.checked,
            drink: e.target.drink.checked,
            alcohol: e.target.alcohol.checked,
            image: e.target.photo.value
        }

        fetch(`http://localhost:9292/menu_items`,{

        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newMenuItem)
        })
        .then(r => r.json())
        .then(handleAddMenuItem(newMenuItem))
    
}

return(
    <div>
<NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/ViewVisits'>
    <button className="btn inputPlace " > View Visits </button>
</NavLink>
        <NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/createTable'exact>
        <button className="btn inputPlace " >Create New Table</button>
        </NavLink> 
        <NavLink to= '/AdminHome/jqw9repj493j984334uidsjp9934'exact>
        <button className="btn inputPlace " >Create New Dish</button>
        </NavLink>

<form className="w-full max-w-lg" onSubmit={addMenuItem}>
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="name"
                >
                Name</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="name" id="name" />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                >description</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="description" id = "description"/>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >price</label>
                <input className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight
                 focus:outline-none focus:shadow-outline" type='number' placeholder="price" id = "price"/>
                 <br />
                 <label>Photo?</label>
                 <input className="block w-full text-sm text-gray-900 border border-gray-300 
                 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                 dark:border-gray-600 dark:placeholder-gray-400" type='url' id="photo" />
                 <br />
                <h2>Mark any potential allergies and dietary preferences this dish caters too.</h2>
                <label className="text-black">gluten     </label>
                <input type='checkbox' id="gluten" className="checkbox" />
                <br />
                <label className="text-black">vegetarian  </label>
                <input type='checkbox' id="vegetarian"  className="checkbox" />
                <br />
                <label className="text-black">fish        </label>
                <input type='checkbox' id="fish"  className="checkbox" />
                <br />
                <label className="text-black">tree_nut     </label>
                <input type='checkbox' id="tree_nut" className="checkbox"  />
                <br />
                <label className="text-black">soy         </label>
                <input type='checkbox' id="soy" className="checkbox"  />
                <br />
                <label className="text-black">peanuts      </label>
                <input type='checkbox' id="peanuts" className="checkbox"  />
                <br />
                <label className="text-black">shellfish    </label>
                <input type='checkbox' id="shellfish" className="checkbox" />
                <br />
                <label className="text-black">dairy       </label>
                <input type='checkbox' id="dairy" className="checkbox" />
                <br />
                <label className="text-black">pescetarian  </label>
                <input type='checkbox' id="pescetarian" className="checkbox" />

                <br />
                <label className="text-black">heat Level   </label>
                <input type='number' id="heatLevel" min='0' max='10'/>
                <br />

                <label className="text-black">Is this raw?  </label>
                <input type='checkbox' id="raw"  className="checkbox" />
                <br />
                <label className="text-black" >Does the customer need to input how cooked they want this meal?</label>
                <input type='checkbox' id="need_how_cooked" className="checkbox"  />
                <h2>Dinner, lunch, brunch, breakfast, happyHour, or any time? You may only input one option</h2>
                <label className="text-black">breakfast     </label>
                <input type='checkbox' id="breakfast" className="checkbox" />
                <label className="text-black">lunch         </label>
                <input type='checkbox' id="lunch" className="checkbox"  />
                <label className="text-black">brunch        </label>
                <input type='checkbox' id="brunch" className="checkbox"  />
                <label className="text-black">dinner        </label>
                <input type='checkbox' id="dinner" className="checkbox"  />
                <label className="text-black">happyHour      </label>
                <input type='checkbox' id="happy_hour" className="checkbox"  />
                <label className="text-black">all_times      </label>
                <input type='checkbox' id="all_times" className="checkbox"  />
                <label className="text-black">Custom menu is applied anytime, but it gives you the option too make specials and remove quickly</label>
                <input type='checkbox' id="custom" className="checkbox"  />
                <h2>Day of the week special?</h2>
                <label className="text-black">monday          </label>
                <input type='checkbox' id="monday" className="checkbox"  />
                <label className="text-black">tuesday          </label>
                <input type='checkbox' id="tuesday" className="checkbox"  />
                <label className="text-black">wednesday        </label>
                <input type='checkbox' id="wednesday" className="checkbox" />
                <label className="text-black">thursday         </label>
                <input type='checkbox' id="thursday" className="checkbox" />
                <label className="text-black">friday           </label>
                <input type='checkbox' id="friday"className="checkbox"  />
                <label className="text-black">saturday         </label>
                <input type='checkbox' id="saturday" className="checkbox" />
                <label className="text-black">sunday            </label>
                <input type='checkbox' id="sunday" className="checkbox" />

                <h3>Entree, App, or dessert</h3>
                <label className="text-black">entree        </label>
                <input type='checkbox' id="entree" className="checkbox" />
                <label className="text-black">appetizer      </label>
                <input type='checkbox' id="appetizer" className="checkbox" />
                <label className="text-black">dessert          </label>
                <input type='checkbox' id="dessert" className="checkbox" />



                <h3>Drink?</h3>
                <p>please note that if it is an alcoholic drink only checkbox alcohol. If it's a non-alcoholic only checkbox drink.</p>
                <label className="text-black">drink          </label>
                <input type='checkbox' id="drink" className="checkbox"  />
                <label className="text-black">alcohol         </label>
                <input type='checkbox' id="alcohol" className="checkbox"  />


                



               

                <br />
                <input 
                whileHover={ {scale:1.1} }
                whileTap={ {scale:0.9} }
                // className="btn btn-block"
                onChange={addMenuItem}
                className=" submitTop btn"
                 type='submit'  />

                
            </form>



    </div>
)
}


export default AdminHome











