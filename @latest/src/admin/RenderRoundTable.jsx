import { wrap } from "framer-motion"
import { useState } from "react"





function RenderRoundTable({roundTable}){

    // function removeTable(){
    //    if (confirm('Are you sure you want to delete this table')===true){
    //     deleteTable()
    //    }
    // }

    const [user, setUser]=useState(false)
    function userHere(){
    setUser(()=>!user)
    }


    const y = Math.floor((roundTable.grid_number/67)*2)
    const x = roundTable.grid_number%67*2;

    return(
        
        <div>
        <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,

            marginLeft: `${x}em`,
            height: roundTable.radius*2+"em",
            width: roundTable.radius*2+"em",
            border: "solid 1px",
            borderRadius: "100%",
            float: "left",
            flexWrap: wrap,
            backgroundColor: user ? "red" : "yellow",
            center: Text,
            // zIndex: "7",
            
            
        }}
        onClick={userHere}
        className='pointer'
        >
            <p>{roundTable.section}</p>
            <p>{roundTable.table_number}</p>
        </div>
            </div>
    )
}

export default RenderRoundTable