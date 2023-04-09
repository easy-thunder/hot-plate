import { useEffect, useState } from "react"
import ContextMenu from "react-jsx-context-menu"
import RoundTable from "./RoundTable"





function Grid({number, restaurantInfo}){

    function deleteTable(){
        setGrid(()=>"grid")
        setRound(()=>false)
        setText(()=>'')
    }






    const [grid, setGrid] = useState('grid')
    const [text, setText] = useState('')
    const [round, setRound] = useState(false)
    const [radius, setRadius] = useState(2)
    

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
            fetch(`http://localhost:9292/restaurants/${number}`,{
            method: "DELETE"
            })
            setRound(()=>false)
            setGrid(()=>"grid")
            setText(()=>'')
        }
        else{alert('you need to mark a table type or chair')}


    }


    // chairArray.map((chairGrid) => {
    //     if(chairGrid === number){
    //         setGrid(()=>'chair')
    //         .then(setText(()=>e.target.chairNumber.value))
    //     }
    //     // console.log(chairGrid)
    // })


    return (

    <ContextMenu
        menu={
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              zIndex: 25,
              border: `1px solid red`,
              backgroundColor: `blue`
              
            }}
          >
            <p>{restaurantInfo.name}</p>
            <form 
            onSubmit={handleGrid}
            >
                <label>Square Table</label>
                <input type='checkbox' id="squareTable" />
                <br />
                <label>Grid</label>
                <input type='checkbox' id="grid" />
                <br />
                <label>Round Table</label>
                <input type='checkbox' id="roundTable" />
                <br />
                <label>Chair</label>
                <input type='checkbox' id="chair" />
                <br />
                <br />
                <p> only include table section and table number when working with tables</p>
                <br />
                <label>TableSection</label>
                <input type='text' id="tableSection" />
                <br />
                <label>TableNumber</label>
                <input type='number' id="tableNumber" />
                <br />
                <br />
                <p> only include chair number if working with a chair</p>
                <br />
                <label>chairNumber</label>
                <input type='text' id="chairNumber" />
                <br />
                <p>only include radius if you are working with a round table</p>
                <br />
                <label>radius</label>
                <input type='number' id='radius' />
                <br /> 
                <input type='submit' className="pointer" />
            </form>
          </div>
        }
      >
        {round ? <RoundTable radius={radius} number={number} 
        next={text}
        deleteTable={deleteTable}
        /> : <div  
    className={`pointer ${grid}`} 
    >
    <p>{text}</p>
    <p>{number}</p>
    </div>}
      </ContextMenu>
    
    )
}

export default Grid