import { NavLink } from "react-router-dom"
import Grid from "./Grid"
import { useState } from "react"
import RenderSquareChair from "./RenderSquareChair"
import RenderSquareTable from "./renderSquareTable"
import RenderRoundTable from "./RenderRoundTable"


function CreateTable (){
const [currentRestaurant, setCurrentRestaurant]=useState('')
const [hidden, setHidden] = useState(true)
const [restaurantInfo, setRestaurantInfo]=useState({})
const [chairArray, setChairArray] = useState([])
const [squareTableArray, setSquareTableArray] = useState([])
const [roundTableArray, setRoundTableArray] = useState([])
const [grid, setGrid] = useState('grid')
    const [text, setText] = useState('')
    const [round, setRound] = useState(false)
    const [radius, setRadius] = useState(2)






    function deleteTable(number){
        fetch(`http://localhost:9292/restaurants/${number}/${restaurantInfo.id}`,{
            method: "DELETE"
            })
            setRound(()=>false)
            setGrid(()=>"grid")
            setText(()=>'')
            setRadius(()=>2)
        }
    

    function handleGrid(e){
        e.preventDefault()
        if(e.target.chair.checked === true
             ){
                console.log(restaurantInfo.id)
                const newChair ={
                    chair_number: e.target.chairNumber.value,
                    grid_number: number,
                    restaurant_id: restaurantInfo.id
                }
                fetch(`http://localhost:9292/restaurants/chairs`,{
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(newChair)
                })
                .then(setGrid(()=>'chair'))
                .then(setText(()=>e.target.chairNumber.value))
        }
        else if(e.target.squareTable.checked === true){
            const newSquareTable={
            // section: e.target.tableSection.value,
            table_number: e.target.tableNumber.value,
            grid_number: number,
            restaurant_id: restaurantInfo.id
            }
            fetch(`http://localhost:9292/restaurants/square_tables`,{
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(newSquareTable)
                })
            .then(setGrid(()=>'square'))
            .then(setText(()=>e.target.tableSection.value + e.target.tableNumber.value))
        }

        else if(e.target.roundTable.checked === true){
            const newRoundTable = {
                section: e.target.tableSection.value,
                table_number: e.target.tableNumber.value,
                grid_number: number,
                radius: e.target.radius.value,
                restaurant_id: restaurantInfo.id
            }


            fetch(`http://localhost:9292/restaurants/round_tables`,{
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(newRoundTable)
                })
            .then(setRound(()=>true))
            .then(setRadius(()=>e.target.radius.value))
            .then(setText(()=>e.target.tableSection.value + e.target.tableNumber))
        }
        else if(e.target.grid.checked === true){
            fetch(`http://localhost:9292/restaurants/round_tables/${number}`,{
            method: "DELETE"
            })
            setRound(()=>false)
            setGrid(()=>"grid")
            setText(()=>'')
        }
        else{alert('you need to mark a table type or chair')}


    }





function createRestaurant(e){
    e.preventDefault()
// console.log(e.target.restaurantName.value)
const restaurant =
 {
    name: e.target.restaurantName.value,
    pass_key: e.target.restaurantPassword.value
}

fetch(`http://localhost:9292/restaurants`,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(restaurant)
})
// .then(setCurrentRestaurant(()=>{e.target.restaurantPassword.value}))
// .then(setHidden(()=>(!hidden)))
.then(alert("Congrats, now use your restaurant password too pull up your restaurant and start working on it "))
}


function getRestaurant(e){
e.preventDefault()
// console.log(e.target.restaurantPasswordSignIn.value)
fetch(`http://localhost:9292/restaurants/${e.target.restaurantPasswordSignIn.value}`)
.then(r=>r.json())
.then(data =>
    // console.log(data)
    {setCurrentRestaurant(()=>data.pass_key),
    
    setRestaurantInfo(()=>data)
    }
    )
.then(setHidden(()=>(!hidden)))

fetch(`http://localhost:9292/restaurants/${e.target.restaurantPasswordSignIn.value}/chairs`)
.then(r=>r.json())
.then(setChairArray)

fetch(`http://localhost:9292/restaurants/${e.target.restaurantPasswordSignIn.value}/square_tables`)
.then(r=>r.json())
.then(setSquareTableArray)

fetch(`http://localhost:9292/restaurants/${e.target.restaurantPasswordSignIn.value}/round_tables`)
.then(r=>r.json())
.then(setRoundTableArray)

}
const grids = []
for(let i=0; i <= 4488; i++){
    grids.push(
    
    
    <Grid key={i}
    number={i+1}
    currentRestaurant={currentRestaurant}
    restaurantInfo={restaurantInfo}
    handleGrid={handleGrid}
    grid ={grid}
    text = {text}
    round = {round}
    radius = {radius}
    />
    
    )
}


function check(){
    console.log(currentRestaurant)
}


    return (
        <div className> 
<button onClick={check}>CheckRestaurant</button>
<br />
        <NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/ViewVisits'>
    <button> View Visits </button>
</NavLink>

<br></br>
        <NavLink to='/AdminHome/jqw9repj493j984334uidsjp9934/createTable'exact>
        <button>Create New Table</button>
        </NavLink> 
        <br></br>
        <NavLink to= '/AdminHome/jqw9repj493j984334uidsjp9934'exact>
        <button>Create New Dish</button>
        </NavLink>
            <h3>PLEASE NOTE: YOU MUST add your round tables first. The round tables mutate the rest of the grid</h3>
            <h4>ADDITIONAL INSTRUCTIONS: Right click on the grid too add a chair or a table. You can not click multiple different check boxes. Every chair needs a chair number so that the server knows which person the food goes too. In the table section and number you only need to add the section and table number too one block on the square table so the server can reference what table the food goes too.</h4>
            <label>Make New Restaurant</label>
            <form onSubmit={createRestaurant}>
                <label>restaurant name</label>
                <input type='text' id="restaurantName" />
                <label>restaurant password</label> 
                <input type='password' id="restaurantPassword" />
                <input type='submit' />
            </form>
            <label>Edit existing restaurant</label>
            <form onSubmit={getRestaurant}>
                <label>restaurant password</label>
                <input type='password' id="restaurantPasswordSignIn" />
                <input type='submit' />
            </form>
            <div className={`console ${hidden ? "hidden" : "block"}`}>
            {grids}

            {chairArray.map(chair => <RenderSquareChair chair={chair}
            deleteTable={deleteTable}
            />)}



            {squareTableArray.map(squareTable => <RenderSquareTable squareTable={squareTable}
            deleteTable={deleteTable}
            />)}

            {roundTableArray.map(roundTable => <RenderRoundTable roundTable={roundTable} deleteTable={deleteTable} />)}
            </div>
        </div>
    )
}

export default CreateTable