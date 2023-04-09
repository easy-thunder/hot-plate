import { useState, useEffect } from 'react'
import './App.css'
import "./index.css"
import { Switch, Route} from "react-router-dom"
import CreateTable from './admin/createTable'
import ViewVisits from './admin/viewVisits'

import Home from "./noUserInfo/Home"
import Header from "./noUserInfo/Header"
import AllMenu from './noUserInfo/All_menu'
import SignUp from './noUserInfo/SignUp'

import UserHeader from './user/UserHeader'
import UserHome from './user/UserHome'
import Profile from './user/Profile'
import Table from './user/Table'
import AdminHome from './admin/AdminHome'



function App() {
// const [test, setTest]= useState([])
const [menuItems, setMenuItems] = useState([])
const [login, setLogin] = useState('')
const [userInfo, setUserInfo] = useState({})
const [cart, setCart] = useState([])
const [visit, setVisits] = useState([])
const [info,setInfo] = useState('')
const [menuItemInfo, setMenuItemInfo] = useState({})



useEffect(()=>{
  fetch("http://localhost:9292/menu_items")
  .then(r => r.json())
  .then(setMenuItems)
 .then(console.log(menuItems))
},[])

console.log(menuItems)

function clearCart(){
  setCart(()=>{[[]]})

}

function clearLoginInfo(){
  setLogin(()=>{''})
  setUserInfo(()=>{{}})
}

function addToCart(menu_item){
setCart([...cart ,menu_item ]) 
}
// console.log(cart)

function handleAddMenuItem(menuItem){
  setInfo(info => (info + menuItem))
  setMenuItemInfo(menuItem)
}


function handleLoginInfo(user){
  
    
  setLogin(login => (login+":"+user.uuid))

  setUserInfo(user)
  // setCart(loginInfo.cart)

}


function checkUserInfo(){
  console.log(login)
  console.log(userInfo)
}




// console.log("test")


  return (
    <div className="App">
      <button onClick={checkUserInfo}>check user info</button>
      {login ? <UserHeader
      login={login}
      clearLoginInfo = {clearLoginInfo}
      cart = {cart}
      /> 
      :
      <Header 
      handleLoginInfo = {handleLoginInfo} 
      />}

    <Switch>

{/* user info below */}
    <Route exact path = {`/userHome/${login}`}>
        <UserHome 
        userInfo={userInfo}
        menuItems = {menuItems}
        addToCart = {addToCart}

        />
      </Route>

        <Route exact path = {`/profile/${login}`}>
          <Profile userInfo={userInfo} 
          setLogin={setLogin}
          handleLoginInfo = {handleLoginInfo}
          clearLoginInfo = {clearLoginInfo}
          // setUserInfo = {setUserInfo}
          login = {login}
          />
        </Route>


        <Route exact path = {`/table/${login}`}>
          <Table cart={cart}
          clearCart = {clearCart}
          login = {login}
          userInfo = {userInfo}
          />
        </Route>

{/* no user info below */}
      <Route exact path= "/">
        <Home menuItems ={menuItems}/>
      </Route>

      <Route exact path = "/all_menu">
        <AllMenu menuItems = {menuItems}/>
      </Route>

      <Route exact path = "/sign_up">
        <SignUp handleLoginInfo={handleLoginInfo}/>
      </Route>

      {/* admin */}
        <Route exact path = "/AdminHome/jqw9repj493j984334uidsjp9934">
          <AdminHome 
        handleAddMenuItem = {handleAddMenuItem}
          />
        </Route>


        {/* createTable */}

        <Route exact path = "/AdminHome/jqw9repj493j984334uidsjp9934/createTable">
          <CreateTable/>
        </Route>

        {/* ViewVisits*/}
        <Route exact path = "/AdminHome/jqw9repj493j984334uidsjp9934/viewVisits">
          <ViewVisits
           visit={visit}
          setVisits = {setVisits}
          />
          </Route>
          </Switch>
    
    </div>
  )
}

export default App
