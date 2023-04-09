import { wrap } from "framer-motion"
import { useState } from "react";
import { red } from "tailwindcss/colors";





function RoundTable({radius, number}){


    const [user, setUser]=useState(false)
function userHere(){
setUser(()=>!user)
}


    const y = Math.floor((number/67)*2)
    const x = number%67*2;
    console.log(`${x}x`)
    console.log(`${y}y`)
    return(
        
        <div>
        <div
        style={{
            position: "absolute",

            marginTop: `${y}em `,
            // top: `${y}px`,
            // paddingLeft: `${x}px`,
            marginLeft: `${x}em`,
            height: radius*2+"em",
            width: radius*2+"em",
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
            <p>{number}</p>
            {/* <p>{next}</p> */}
        </div>
            </div>
    )
}

export default RoundTable