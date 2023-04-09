import { useHistory } from "react-router-dom"
import { useState } from "react"
// import {fadeIn ,staggerContainer} from "framer-motion"

function Profile({userInfo, setLogin,  clearLoginInfo, setUserInfo, handleLoginInfo, login}){
const history = useHistory()
const [open, setOpen] = useState(false)


function deleteProfile(){
    if(confirm("are you sure you want to delete your profile. You will lose all of your points and rewards. We won't be able to track your allergies or dietary preferences. Once you delete a profile there will be no way to get it back.") == true){
        fetch(`http://localhost:9292/users/${userInfo.id}`,{
            method: "DELETE"
        })
        .then(clearLoginInfo())
        .then(history.push(`/`))
        .catch(Error)
    }
}

function updateProfile(e){
e.preventDefault()
let newPassword
let passwordCheck
if (e.target.sign_up_password.value === '') {newPassword = userInfo.password, passwordCheck = userInfo.password}
else{newPassword = e.target.sign_up_password.value, passwordCheck = e.target.confirm.value}





    const updateUser = 
    {
    uuid: userInfo.uuid,
    id:userInfo.id,
    name: e.target.name.value,
    email: e.target.sign_up_email.value,
    phone_number: e.target.phone.value,
    gluten:  e.target.gluten.checked,
    vegitarian: e.target.vegetarian.checked,
    pescetarian: e.target.pescetarian.checked,
    tree_nut: e.target.tree_nut.checked,
    fish: e.target.fish.checked,
    soy: e.target.soy.checked,
    peanuts: e.target.peanuts.checked,
    shellfish: e.target.shellfish.checked,
    dairy: e.target.dairy.checked,
    any_other: e.target.anyOther.value,
    password: newPassword,
    points: 0
}


if(e.target.currentPassword.value === userInfo.password && newPassword === passwordCheck && newPassword.length >= 8 && newPassword === passwordCheck ){
    fetch(`http://localhost:9292/users/${userInfo.id}`,{
        method: "PATCH",
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(updateUser)
    })
    .then(clearLoginInfo())
    .then(handleLoginInfo(updateUser))    
}
if(e.target.currentPassword.value !== userInfo.password){alert("Your current password does not match our records")}
if(newPassword !== passwordCheck){alert("The password you are trying to change does not match with your check password")}
if(newPassword.length < 8){alert("Your new password must be longer than 8 characters")}





}



const allergies = []
const dietaryPreference = []
if(userInfo.gluten === true){allergies.push("gluten")}
if(userInfo.fish === true){allergies.push("fish")}
if(userInfo.tree_nut === true){allergies.push("tree_nut")}
if(userInfo.soy === true){allergies.push("soy")}
if(userInfo.peanuts === true){allergies.push("peanuts")}
if(userInfo.shellfish === true){allergies.push("shellfish")}
if(userInfo.dairy === true){allergies.push("lactose intolerant")}
if(userInfo.vegitarian === true){dietaryPreference.push("vegetarian")}
if(userInfo.pescetarian === true){dietaryPreference.push("pescetarian")}


    return(

        <div>
            <div>
            <h1  className='h1 capitalize' >Your profile</h1>
            <label className="text-white" >name:</label>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{userInfo.name}</h3>
            <label className="text-white" >email:</label>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{userInfo.email}</h3>
            <label className="text-white" >points 0 </label>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{userInfo.points}</h3>
            <label className="text-white" >phone number</label>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{userInfo.phone_number}</h3>
            <h2 className="text-white" >Your allergies</h2>
            {allergies.map(allergy => <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{allergy}</h3>)}
            <h2 className="text-white" >Your dietary preference</h2>
            {dietaryPreference.map(preference => <h3>{preference}</h3>)}

            <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Any other preference or allergy you want your chef to know.</h2>
            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >{userInfo.any_other}</p>
            </div>
            <button className="btn inputPlace " onClick={deleteProfile}>delete profile</button>
            <h2 className="pointer btn " onClick={()=> setOpen(open=>(!open))}>update your profile</h2>
              <form className={`${open ? "block" : "hidden"}`} onSubmit={updateProfile}>
                <label>name</label>
                <input type="text" placeholder="name" defaultValue={userInfo.name} id="name"/>
                <br />
                <label>email</label>
                <input type="text" placeholder="email" defaultValue ={userInfo.email} id = "sign_up_email"/>
                <br />
                <label>phone number</label>
                <input type='tel' placeholder="xxx-xxx-xxxx" defaultValue={userInfo.phone_number} id = "phone"/>
                <h2>Do you have any of the following allergies or food preferences?</h2>
                <label>gluten</label>
                <input type='checkbox' defaultChecked = {userInfo.gluten ? true: false}  id="gluten" />
                <br />
                <label>vegetarian</label>
                <input type='checkbox' defaultChecked={userInfo.vegitarian ? true: false} id="vegetarian" />
                <br />
                <label>fish</label>
                <input type='checkbox' defaultChecked = {userInfo.fish ? true: false} id="fish" />
                <br />
                <label>tree_nut</label>
                <input type='checkbox' defaultChecked = {userInfo.tree_nut ? true: false} id="tree_nut" />
                <br />
                <label>soy</label>
                <input type='checkbox' defaultChecked = {userInfo.soy ? true: false} id="soy" />
                <br />
                <label>peanuts</label>
                <input type='checkbox' defaultChecked = {userInfo.peanuts ? true: false} id="peanuts" />
                <br />
                <label>shellfish</label>
                <input type='checkbox' defaultChecked = {userInfo.shellfish ? true: false} id="shellfish" />
                <br />
                <label>dairy</label>
                <input type='checkbox' defaultChecked = {userInfo.dairy ? true: false} id="dairy" />
                <br />
                <label>pescetarian</label>
                <input type='checkbox' defaultChecked = {userInfo.pescetarian ? true: false} id="pescetarian" />

                <br />

                <label>any other conditions</label>
                <input type='text' placeholder="any other" defaultValue={userInfo.any_other}id="anyOther" />
                <br />


                <label>change password</label>
                <input type='password' placeholder="new password"  id="sign_up_password"/>
                <br />
                <label>confirm changes too password</label>
                <input type='password' placeholder="confirm" id="confirm"/>
                <br />
                <label>Enter your current password for any changes too take place</label>
                <input type='password' placeholder="current password" id="currentPassword" />
                <br />
                <input type='submit' />


                
            </form>
        </div>
    )
}



export default Profile

