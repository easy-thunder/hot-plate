import { checkTargetForNewValues } from "framer-motion"
import  Menu  from '../noUserInfo/Menu'






function UserHome ({userInfo, menuItems , addToCart}){
    let i = -1 
    const foodPreference = []
    const filteredMenuItems =[]
    const allItems = []
menuItems.map(menuItem => {
        if((userInfo.pescetarian===true && menuItem.pescetarian === true) || 
        (userInfo.vegitarian === true && menuItem.vegitarian === true)
        ) {
            foodPreference.push(menuItem)
        }
        else{allItems.push(menuItem)}
})

// console.log(foodPreference)
// console.log(allItems)
        if(foodPreference !== []){
        foodPreference.map(menuItem =>{ 
            
                if( 
            (userInfo.shellfish===true && menuItem.shellfish === true) || 
            (userInfo.gluten===true && menuItem.gluten === true) || 
           (userInfo.fish===true && menuItem.fish === true) ||
           (userInfo.dairy===true && menuItem.dairy === true) ||
           (userInfo.tree_nut===true && menuItem.tree_nut === true) ||
           (userInfo.soy===true && menuItem.soy === true) ||
           (userInfo.peanuts===true && menuItem.peanuts === true)
           ){
            null
           }
           else{filteredMenuItems.push(menuItem)}
        }
           )}

           if(foodPreference.length === 0){
            allItems.map(menuItem => {
                if(
                    (userInfo.shellfish===true && menuItem.shellfish === true) || 
                    (userInfo.gluten===true && menuItem.gluten === true) || 
                   (userInfo.fish===true && menuItem.fish === true) ||
                   (userInfo.dairy===true && menuItem.dairy === true) ||
                   (userInfo.tree_nut===true && menuItem.tree_nut === true) ||
                   (userInfo.soy===true && menuItem.soy === true) ||
                   (userInfo.peanuts===true && menuItem.peanuts === true)
                ){null}
                else{filteredMenuItems.push(menuItem)}
            })
           }


        
// foodPreference.map

        
        
        
//         ){null}
// //        
//         else{filteredMenuItems.push(menuItem)}

// console.log(filteredMenuItems)

return(
    <div>
        <button></button>
        Current menu
    
    {/* <MainPhoto /> */}
    <h3>Appetizer</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.appetizer === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id}addToCart = {addToCart}  index = {i}
             />)
    }
    })}
<br />
    <h3>Entree</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.entree === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id} addToCart = {addToCart}  index = {i}
             />)
    }
    })}
    <br />
    <h3>Dessert</h3>
    {filteredMenuItems.map(menuItem => {
    if(menuItem.dessert === true){
        
        return( <Menu menuItem={menuItem} key={menuItem.id} addToCart = {addToCart}  index = {i}
             />)
    }
    })}

    </ div>
)
}

export default UserHome















