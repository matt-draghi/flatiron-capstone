import "../styles/SignUp.css"
import {useState} from "react"
import { BiShowAlt, BiHide } from 'react-icons/bi';


function SignUp({setUser}){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
    const [errors, setErrors] = useState([])
    
    
    const changePasswordState = () => {
        setShowPassword(!showPassword)
    }

    const changePasswordConfState = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation)
    }

    const handleCreateAccount = (e) => {
        e.preventDefault()
        setErrors([])
        // fetch post to create a new user
        fetch('/users',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                email: email
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user["errors"]){
                // console.log(user["errors"])
                setErrors(user["errors"])
            }
            else{
                // nested fetch to create a session for the user
                fetch('/login', {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // send user to home screen
                    window.location = '/'
                })
                //STRETCH TODO: provide confirmation of account being created - using email
            }
        })
        

        
    }

    const showErrors = errors.length > 0 ?
            <div className="error-message">
                <i class="fa fa-times"></i>
                {errors}
            </div>
            :
            null    
            
    

    const passwordType = showPassword ? "text":"password"
    const passwordConfirmationType = showPasswordConfirmation ? "text":"password"
    const showIcon = showPassword ? <BiShowAlt className="password-icon" onClick={changePasswordState}/>:<BiHide className="password-icon" onClick={changePasswordState}/>
    const showIconConf = showPasswordConfirmation ? <BiShowAlt className="password-icon" onClick={changePasswordConfState}/>:<BiHide className="password-icon" onClick={changePasswordConfState}/>



    return(
        <div className="sign-up-container">
            {showErrors}
            <form className="sign-up-form" onSubmit={handleCreateAccount}>
                <div className="sign-up-input">
                <label>Username</label><br/>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/><br/>
                </div>

                <div className="sign-up-input">
                <label>Email</label><br/>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
                </div>

                <div className="sign-up-input">
                <label>Password</label><br/>
                <input type={passwordType} value={password} onChange={e=>setPassword(e.target.value)}/>{showIcon}<br/>
                </div>

                <div className="sign-up-input">
                <label>Confirm Password</label><br/>
                <input type={passwordConfirmationType} value={passwordConfirmation} onChange={e=>setPasswordConfirmation(e.target.value)}/>{showIconConf}<br/>
                </div>

                <input type="submit" value="Create Account"/>
                {/* On submit, send request to create user and log that user in (create session) */}
            </form>
        </div>
    )
}

export default SignUp