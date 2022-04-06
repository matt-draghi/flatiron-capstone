import "../styles/Login.css"
import {useState} from "react"
import { BiShowAlt, BiHide } from 'react-icons/bi';

function Login(){
    const [primaryIdentifier, setPrimaryIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const changePasswordState = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const passwordType = showPassword ? "text":"password"
    const showIcon = showPassword ? <BiShowAlt className="password-icon" onClick={changePasswordState}/>:<BiHide className="password-icon" onClick={changePasswordState}/>

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <div className="login-input">
                <label>User Name</label><br/>
                <input type="text" value={primaryIdentifier} onChange={e=>setPrimaryIdentifier(e.target.value)}/><br/>
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