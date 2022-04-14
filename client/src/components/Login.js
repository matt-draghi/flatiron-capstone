import "../styles/Login.css"
import {useState} from "react"
import { BiShowAlt, BiHide } from 'react-icons/bi';

function Login(){
    // const [primaryIdentifier, setPrimaryIdentifier] = useState("") //want to eventually make it so you can login with either username or password
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])


    const changePasswordState = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors([])
        // fetch request to create session
        fetch('/login_rails', {
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
        .then((session) => {
            console.log(session)
            if(session["error"]){
                setErrors(session["error"])
            }
            else{
                window.location='/'
            }
        })
        // send user back to home screen - now logged in
    }

    const showErrors = errors.length > 0 ?
            <div className="error-message">
                <i class="fa fa-times"></i>
                {errors}
            </div>
            :
            null    

    const passwordType = showPassword ? "text":"password"
    const showIcon = showPassword ? <BiShowAlt className="password-icon" onClick={changePasswordState}/>:<BiHide className="password-icon" onClick={changePasswordState}/>

    return(
        <div className="login-container">
            {showErrors}
            <form className="login-form" onSubmit={handleLogin}>
                <div className="login-input">
                <label>Username</label><br/>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/><br/>
                </div>

                <div className="login-input">
                <label>Password</label><br/>
                <input type={passwordType} value={password} onChange={e=>setPassword(e.target.value)}/>{showIcon}<br/>
                </div>

                <input type="submit" value="Login"/>
                {/* On submit, send request to create session*/}
            </form>
        </div>
    )
}

export default Login