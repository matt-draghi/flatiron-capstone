import "../styles/Header.css"

function Header(){

    // Will toggle the class state of the sidebar to shown/hidden
    const showSidebar = () =>{
        
    }

    return(
        <header className="header-container">
            <div className="menu-button-container" onClick={showSidebar}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="app-name-header">
                <div>App Name</div>
            </div>
            <div className="search-bar">
                {/* Add search bar component that handles search functionality */}
                <input type="text" value="Search"/> {/* Placeholder */}
            </div>
        </header>
    )
}

export default Header