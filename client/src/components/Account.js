import {useState} from 'react'
import "../styles/Account.css"

function Account({user, setUser, username, setUsername, email, setEmail}){

    const [editAccount, setEditAccount] = useState(false)
    const [modalShow, setModalShow] = useState(false)
 
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const nonEditableInfo = () => {
        return(
            <div className='non-editable-info-container'>
                <div className='non-editable-account-info'>
                    <h3>Username</h3>
                    <p>{username}</p>
                    <h3>Email</h3>
                    <p>{email}</p>
                    {/* STRETCH TODO: Make it so user can edit their password */}
                </div>
                <div className='account-buttons'>
                    <button onClick={() => setEditAccount(true)}>Edit Account</button>
                    <button onClick={handleDeleteButton}>Delete Account</button>
                </div>
            </div>
        )
    }

    const editableInfo = () => {
        return(
            <div className='editable-info-container'>
                <form className='editable-account-info'>
                    <h3>Username</h3>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <h3>Email</h3>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {/* STRETCH TODO: Make it so user can edit their password */}
                </form>
                <div className='account-buttons'>
                    <button onClick={updateAccount}>Save Changes</button>
                    <button onClick={cancelChanges}>Cancel</button>
                </div>
            </div>
        )
    }

    const updateAccount = (e) =>{
        e.preventDefault()
        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                username: username,
            })
        })
        .then(resp => resp.json())
        .then(renderResponse => {
            if(renderResponse["errors"]){
                const errorsArray = renderResponse["errors"]
                errorsArray.map(error => alert(error))
            }
            else{
               setEditAccount(false)
            }
        })
    }

    const cancelChanges = (e) => {
        e.preventDefault()
        setUsername(user.username)
        setEmail(user.email)
        setEditAccount(false)
    }

    const accountDisplay = () => editAccount ? editableInfo() : nonEditableInfo()

    const handleDeleteButton = ()=>{
        setModalShow(true)
    }
    
    const closeModal = () => {
        setModalShow(false)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const showErrors = errors.length > 0 ?
    <div className="error-message">
        <i class="fa fa-times"></i>
        {errors}
    </div>
    :
    null    

    const deleteAccount = (e) => {
        e.preventDefault()
        // Fetch to delete here
        fetch(`/users/${user.id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password:password
            })
        })
        .then(resp => resp.json())
        .then(renderResponse => {
            if(renderResponse["error"]){
                setErrors(renderResponse["error"])
                showErrors()            
            }
            else{
                window.location = '/'        
            }
        })
    }

    if(user){
        return(
            <div className='account-container'>
                <h1>Your Account</h1>
                <div className='account-info-container'>
                    {accountDisplay()}
                </div>

                <dialog open={modalShow} className='modal'>
                    <h1>Are you sure you want to delete your account?</h1>
                    {showErrors}
                    <h3>Confirm by entering your password:</h3>
                    
                    <div className='input-container'>
                        <form className='delete-form' onSubmit={deleteAccount}>
                            <input type="password" value={password} onChange={handlePasswordInput}/>
                        
                            <div className='delete-buttons'>
                                <input type="submit" value="Yes, delete my account"/>
                            </div>
                        </form>
                        <button onClick={closeModal}>Nope</button>
                    </div>

                </dialog>
            </div>
        )
    }
    else{
        return(
            <div className='loading-container'>
                <h1>Loading</h1>
            </div>
        )
    }
}

export default Account