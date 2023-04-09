import Menu from "./Menu"



function Home({menuItems}){
let i = -1 
    return(
        <div>
        {/* <MainPhoto /> */}
 
        {menuItems.map(menuItem => {
        if(menuItem.appetizer === true){
            i++ 
            return( <Menu menuItem={menuItem} key={menuItem.id}
            index = {i}
            />)
        }
        })}
<br />
        <h3>Entree</h3>
        {menuItems.map(menuItem => {
        if(menuItem.entree === true ){
            return( <Menu menuItem={menuItem} key={menuItem.id} 
                index = {i}
            />)

        }
        })}
        <br />
        <h3>Dessert</h3>
        {menuItems.map(menuItem => {
        if(menuItem.dessert === true ){

            
            
            return( <Menu menuItem={menuItem} key={menuItem.id}
                index = {i}
            />)
        }
        })}

        </ div>
    )
}

export default Home