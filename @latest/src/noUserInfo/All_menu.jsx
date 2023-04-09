import Menu from "./Menu"
import {motion} from "framer-motion"
import {fadeIn} from '../variants';




function AllMenu({menuItems}){ 

    // console.log(menuItems)
    let i = -1 
    return(
        <div> 
        <motion.h1 variants={fadeIn('down','tween',0.3, 1.1)} className='h1 mb-5'>Clean Slate</motion.h1>
        <p  className='text-white text-[24px] lg:text-[28px] font primary oregon lg: font-medium mb1'>delicious flavour of autumn</p>
          <div className='relative z-10 top-72 lg:top-52'  > 
            <div >
            {/* <motion.h1 variants={fadeIn('down','tween',0.3, 1.1)} className='h1 mb-5'> What We Offer</motion.h1> */}

        {/* { <Menu menuItems = {menuItems}/> } */}
        {menuItems.map(menuItem => {
            i++ 
            return(
            <Menu 
            menuItem={menuItem}
            key = {menuItem.id}
            index = {i}
            />)
        })}
          </div>  
          </div>
        // </div>
    )
}

export default AllMenu