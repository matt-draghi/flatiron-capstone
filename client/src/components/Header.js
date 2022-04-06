import "../styles/Header.css"

function Header({setShowSidebar}){

    // Will toggle the class state of the sidebar to shown/hidden; will need to use a state set in App.js
    const showSidebar = () =>{
        setShowSidebar("show")
    }

    return(
        <header className="header-container">
            <div className="menu-button-container" onClick={showSidebar}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="app-name-header">
                <div>Diem Fitness</div>
            </div>
            <div className="search-bar">
                {/* Add search bar component that handles search functionality */}
                <input type="text" value="Search"/> {/* Placeholder */}
            </div>
        </header>
    )
}

export default Header