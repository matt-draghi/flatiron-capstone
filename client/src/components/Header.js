import "../styles/Header.css"
import {NavLink} from "react-router-dom"

function Header({setShowSidebar}){

    // Will toggle the class state of the sidebar to shown/hidden; will need to use a state set in App.js
    const showSidebar = () =>{
        setShowSidebar("show")
    }

    return(
        <header className="header-container">
            <div className="menu-button-container" onClick={showSidebar}>
                <div className="header-bar"></div>
                <div className="header-bar"></div>
                <div className="header-bar"></div>
            </div>
            <div className="app-name-header">
                <div><NavLink to="/">Diem Fitness</NavLink></div>
            </div>
            {/* <div className="search-bar">
                Add search bar component that handles search functionality
                willl want the search to have a separate search display - the search display will render the 
                search results - broken down into sections: workouts, exercises, equipment, and display a few
                results - actual search functionality will be on the frontend, but viewable workouts and such
                need to be done on the backend
               
                <input type="text" value="Search"/> Placeholder
            </div> */}
        </header>
    )
}

export default Header