import { NavLink } from "react-router-dom"
import "../styles/Sidebar.css"

function Sidebar({user, showSidebar, setShowSidebar}){

    const handleLogout = () => {
        //fetch request to destroy session
        fetch('/logout_rails',{
            method: "DELETE",
        })
        .then(()=> {
            window.location = '/'
            alert("Logout Successful")
        })
    }

    const firstLink = () => user ? 
        <li><NavLink to="/account">Account</NavLink></li>
        :
        <li><NavLink to="/login">Login</NavLink></li> 

    const secondLink = () => user ? 
        null
        :
        <li><NavLink to="/signup">Sign Up</NavLink></li>

    const lastLink = () => user ? 
    // going to need to call a logout function here
        <li onClick={handleLogout}><NavLink to="/">Logout</NavLink></li>
        :
        null

    const hideSideBar = () => {
        setShowSidebar("hide")
    }

    return(
        <div className="sidebar" id={showSidebar}>
            <div className="sidebar-menu-button-container" onClick={hideSideBar}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className="nav-links">
                {firstLink()}
                {secondLink()}
                <li><NavLink to="/workouts">Workouts</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/equipment">Equipment</NavLink></li>
                {lastLink()}

            </ul>
        </div>
    )
}

export default Sidebar