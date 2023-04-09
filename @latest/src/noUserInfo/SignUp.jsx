import {v4 as uuidv4} from 'uuid'
import { useHistory } from 'react-router-dom'
import{motion} from 'framer-motion';

function SignUp({handleLoginInfo}){
let myuuid = uuidv4()
const history = useHistory()


function signUp(e){
e.preventDefault()


console.log('history')

const newUser = 
    {
    uuid: myuuid,
    name: e.target.name.value,
    email: e.target.sign_up_email.value,
    phone_number: e.target.phone.value,
    gluten:  e.target.gluten.checked,
    vegitarian: e.target.vegetarian.checked,
    pescetarian: e.target.pescetarian.checked,
    tree_nut: e.target.tree_nut.checked,
    soy: e.target.soy.checked,
    peanuts: e.target.peanuts.checked,
    shellfish: e.target.shellfish.checked,
    dairy: e.target.dairy.checked,
    any_other: e.target.anyOther.value,
    password: e.target.sign_up_password.value,
    points: 0
}

if(newUser.password === e.target.confirm.value && newUser.password.length >= 8){
fetch(`http://localhost:9292/users
`,{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(newUser)
})
.then(r=>r.json())
.then(handleLoginInfo(newUser),
history.push(`/userHome/:${newUser.uuid}`)
)


}
else{alert("passwords Don't match or your password isn't long enough or you need a unique password and email")}
}


    return(
        <div className="relative z-0 w-full mb-6 group">
            <form /*</div>className="w-full max-w-lg"*/ onSubmit={signUp}>
                <label className="block text-white-700 text-sm font-bold mb-2" 
                // for="name"
                >
                Name</label>
                <input className="input input-bordered w-full max-w-xs relative z-0 w-full mb-6 group"
                 type="text" placeholder="name" id="name" name="floating_first_name  " />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                >email</label>
                <input 
                className="input input-bordered w-full max-w-xs" 
                type= 'email' placeholder="email" id="sign_up_email" />
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                id='phone'
                // for="username"
                 >phone number</label>
                <input className="input input-bordered w-full max-w-xs"
                 type='tel' placeholder="(xxx)-xxx-xxxx" id = "phone"/>

                <h2 className="mb-4 font-semibold text-gray-900 dark:text-white">Do you have any of the following allergies or food preferences?</h2>
                {/* <ul
                className=" textBlockw-48 text-sm font-medium text-gray-900 bg-white border 
                border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">  */}
                {/* <ul className='textBlock text-sm font-medium text-gray-900  '>  */}
                <li> 
                <label className=''>gluten </label>
                <input type='checkbox' id="gluten"  className="checkbox" />
                </li>
                <br />
                <li>
                <label>vegetarian   </label>
                <input type='checkbox' id="vegetarian" className="checkbox" />
                </li>
                <br />
                <li>
                <label>fish         </label>
                <input type='checkbox' id="fish"  className="checkbox " />
                </li>
                <br />
                <li>
                <label>tree_nut     </label>
                <input type='checkbox' id="tree_nut"  className="checkbox" />
                </li>
                <br />
                <li>
                <label>soy          </label>
                <input type='checkbox' id="soy"  className="checkbox" />
                </li>
                <br />
                <label>peanuts       </label>
                <input type='checkbox' id="peanuts"   className="checkbox"/>
                <br />
                <li> 
                <label>shellfish     </label>
                <input type='checkbox' id="shellfish"   className="checkbox"/>
                </li>
                <br />
                <li> 
                <label>dairy         </label>
                <input type='checkbox' id="dairy"   className="checkbox"/>
                </li>
                <br />
                <li> 
                <label>pescetarian   </label>
                <input type='checkbox' id="pescetarian"  className="checkbox" />
                </li>
                <br />
                {/* </ul> */}

                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >any other conditions</label>
                <input className="input input-bordered w-full max-w-xs" type='text' placeholder="any other" id="anyOther" />
                <br />


                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >password</label>
                <input className="input input-bordered w-full max-w-xs" type='password' placeholder="password"  id="sign_up_password"/>
                <br />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                // for="username"
                 >confirm password</label>
                <input className="input input-bordered w-full max-w-xs" type='password' placeholder="confirm" id="confirm"/>
                <br />
                <input 
                whileHover={ {scale:1.1} }
                whileTap={ {scale:0.9} }
                className="btn glass Itemwidth HeaderCenter"
                 type='submit'  />
                 </form>
        </div>
    )
}


export default SignUp