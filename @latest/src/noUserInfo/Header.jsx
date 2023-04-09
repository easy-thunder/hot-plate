import { NavLink, useHistory } from "react-router-dom"
import { useState } from "react"
import "../App.css"
import {motion} from "framer-motion"
import{fadeIn,staggerContainer} from '../variants';
// import { MenuItem } from "@material-tailwind/react";



function Header ({handleLoginInfo}){
    const [open, setOpen] = useState(false)
    const history = useHistory()

//  function addToCart(e){

//    const addToCart = e.target.menu_items_id.value 
   
//    fetch(`http://localhost:9292/users/${menu_items_id}`,{
//    method:"PATCH",
//    headers:"Content-type: application/json",
//    body: JSON.stringify(addToCart)
//    })
//    .then(r=>r.json())
//    .then(console.log(addToCart))
// }


function validateUser(e){
    e.preventDefault()

    const email = e.target.sign_in_email.value
    const password = e.target.sign_in_password.value
    const admin = e.target.admin.checked
    if (admin === false){
    fetch(`http://localhost:9292/users/${email}/${password}`)
    
    .then(r=>r.json())
    .then(user => {handleLoginInfo(user),
        history.push(`/userHome/:${user.uuid}`)
    })
}
/////////////////////////////////////////////////
// This fetch request is built out for you. I want you to look at the other application controllers, see how they verified the users and do the same with admin. You will have to build an admin table first to verify anything. You can make the admin password and email whatever you want in seed data. The only two things needed in the admin is their email and password for validation.
/////////////////////////////////////////////////////
// if (admin === true){
//     fetch(`http://localhost:9292/admin/${email}/${password}`)
//     .then(r=>r.json())
//     .then(history.push(`/AdminHome/jqw9repj493j984334uidsjp9934`))
// }




}


<dev>
    
</dev>

    return(
        
 <div> 
<div className="w-full text-white flex justify-between p-4 item-center"> 
<motion.div  
variants={staggerContainer} 
initial="hidden" 
whileInView={'show'}
viewport={{ once:false, amount:0.1}}
className='.container .mx-auto flex items-center text-center md:flex'
>

<motion.button
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter md: flex "onClick = {()=> setOpen(open=>(!open))} 
>sign in</motion.button>


<NavLink to = '/sign_up' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter"
>sign up</motion.button>
</NavLink>



<NavLink to= '/' exact>
<motion.button 
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter md: flex"
>home</motion.button>
</NavLink>

<NavLink to= '/all_menu' exact>
<motion.button
variants={fadeIn('down','tween', 0.2, 1.6)}
className="btn glass Itemwidth HeaderCenter md: flex">
all menu</motion.button>
</NavLink>
</motion.div> 
</div>
<div>
</div>
    <form 
    // className="w-full max-w-lg"  
    onSubmit={validateUser} className={`${open ? "block" : "hidden"}`}>
        <div> 
        <label className="label"> 
        
        {/* <span className="label-text text-black"> Your Email </span> */}
        </label>


        <label className="input-group">
        <span>Email</span>
        <input className="input input-bordered w-full max-w-xs inputPlace" type='email' id = "sign_in_email" />
        <label className="input-group passwordtext buttonLeft ">
            <br></br>
        <span>Password</span>
        <input className="input input-bordered w-full max-w-xs " type='password' id = "sign_in_password"/>
        </label>
        </label>
        </div>

        {/* <br />
        <div className="buttonLeft"> 
        <label className="label"> 
        <span className="label-text text-black passwordtext"> Your Password</span>
        </label>
        <label className="input-group passwordtext ">
        <span>Password</span>
        <input className="input input-bordered w-full max-w-xs " type='password' id = "sign_in_password"/>
        </label>
        </div>  
        <br /> */}

<br></br>
<br></br>

<div className="buttonLeft"> 
<button type="button" className="text-white bg-[#4285F4] 
hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50
 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
  dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2 -ml-1 " aria-hidden="true" 
  focusable="false" data-prefix="fab" data-icon="google"
   role="img" xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 488 512"><path fill="currentColor"
    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0
     393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 
     64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 
     69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 
     12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
</div>

<button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg 
text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  <svg className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3
    141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
  Sign in with Apple
</button>



        <label>Are you an administrator?</label>
        <input type="checkbox" id="admin"/>
        <br/>
        <br></br> 
        <input 
        type='submit'/>
    </form>

 </div>
    ) 
}

export default Header
