import React from "react"
import{motion} from 'framer-motion';
import MenuImg1 from '../assets/img/menu/1.png'
import MenuImg2 from '../assets/img/menu/2.png'
import MenuImg3 from '../assets/img/menu/3.png'
import MenuImg4 from '../assets/img/menu/4.png'
import{fadeIn,staggerContainer} from '../variants';


function Menu({menuItem, index , addToCart}){
 const imageList = [MenuImg1, MenuImg2, MenuImg3, MenuImg4]
//  console.log(menuItem.id)

 function handleCart(){
   addToCart(menuItem)
 }
//  console.log(menuItem.name)
    return(
 <motion.div 
 variants={staggerContainer} 
 initial="hidden" 
 whileInView={'show'}
 viewport={{ once:false, amount:0.1}}
 className='container mx-auto flex flex-col items-center text-center' 
 > 
 <div className='.container mx auto' > 
 <div> 
<motion.div 
variants={fadeIn('down','tween', 0.2, 1.6)}
className= "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
    <div className="md:flex" >
      <div className="md:shrink-0">
        <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src = {imageList[index] || menuItem.image} width = "270px" />
      </div>
      <div className="p-8">
     <div className="uppercase tracking-wide text-lg leading-tight text-lg text-black-500 font-semibold">{menuItem.name}</div>
     <motion.a href="" 
      variants={fadeIn('down','tween', 0.4, 1.6)}
     className=" block mt-1 text-lg leading-tight font-medium text-black hover:underline ">{menuItem.description}</motion.a>
     <p className=" mt-2 text-slate-500" >${menuItem.price}.00</p>
     <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className = 'button '
        onClick={handleCart}
        >add too order</motion.button>
      </div>
    </div>
</motion.div>
</div>
</div>

<br></br>






{/* 
    <motion.div
    initial="hidden" 
    whileInView={'show'}
    viewport={{ once:false, amount:0.1}}
    className='.container .mx-auto flex flex-col items-center text-center' 
    >
        <motion.h3 
        variants={fadeIn('down','tween', 0.2, 1.6)}
        className="text-white">{menuItem.name}</motion.h3>

        <motion.h3 
        variants={fadeIn('down','tween', 0.4, 1.6)}
        className='my-1 text-[20px] lg:text-[30px] lg:my-6 text-accent font-semibold'>${menuItem.price}.00</motion.h3>
        
        <img src = {imageList[index]} width = "270px"  />

        <motion.h3 
         variants={fadeIn('down','tween', 0.5, 1.6)}
        className='.container.mx-auto text-black/70 capitalize mb-8 font-Josefin Sans Itemwidth '>{menuItem.description}</motion.h3>



        <motion.button 
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className = 'button '
        onClick={handleCart}
        >add too order</motion.button>

    </motion.div> */}
    </motion.div>
    )
    
}

export default Menu