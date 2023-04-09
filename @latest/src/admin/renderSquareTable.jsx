import { wrap } from "framer-motion";
import { useState } from "react";




function RenderSquareTable({squareTable}){

    const [user, setUser]=useState(false)
    function userHere(){
    setUser(()=>!user)
    }

const y = Math.floor((squareTable.grid_number/67)*2);
const x = (squareTable.grid_number%67)*2;


return(
    <div>
    <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            marginLeft: `${x}em`,
            height: '2em',
            width: "2em",
            border: "solid 1px",
            float: "left",
            flexWrap: wrap,
            backgroundColor: user ? "red" : "yellow",
            center: Text,
            
            
        }}
        onClick={userHere}
        className='pointer'
        >
            <p>{squareTable.section}</p>
            <p>{squareTable.table_number}</p>
            {/* <p>{next}</p> */}
        </div>
    </div>
)
}


export default RenderSquareTable