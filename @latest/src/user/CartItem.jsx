

import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from "../variants"

function CartItem ({item}){
    console.log(item)
    console.log("test")

    return(
    <div> 
    <motion.div
    initial="hidden" 
    whileInView={'show'}
    viewport={{ once:false, amount:0.1}}
    className='.container .mx-auto flex flex-col items-center text-center' 
    >
        {/* <motion.h3 
        variants={fadeIn('down','tween', 0.2, 1.6)}
        className="text-white">{item.name}</motion.h3> */}
        {/* <h3>
            {item.name}
        </h3> */}

        <motion.h3 
        variants={fadeIn('down','tween', 0.4, 1.6)}
        className='my-1 text-[20px] lg:text-[30px] lg:my-6 text-accent font-semibold'>${item.price}.00</motion.h3>
        
        
        {/* <img src = {imageList[index]} width = "270px"  /> */}

        <motion.h3 
         variants={fadeIn('down','tween', 0.5, 1.6)}
        className='.container.mx-auto text-white/70 capitalize mb-8 font-Josefin Sans Itemwidth '> {item.description} </motion.h3>

        {/* <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className='btn capitalize w-full lg:max-w-[240px] buttonFont '
        onClick={handleCart}
        >add too order</motion.button> */}

    </motion.div>



    </div>
    
    )
}



export default CartItem