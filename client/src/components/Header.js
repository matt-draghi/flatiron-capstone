import "../styles/Header.css"

function Header(){

    const showSidebar = () =>{
        
    }

    return(
        <header className="header-container">
            <div className="menu-button-container" onClick={showSidebar}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>
    )
}

export default Header