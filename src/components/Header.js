import React from 'react'
import {Link} from 'react-router-dom'

//Assign header vals a state of logged in. If logged, then certain header items will be present.
//Ternary operator

function Header() {
    //let toggleMenu = () => {
        //let sidebar = document.querySelector(".sidebar")
        //!sidebar.classList.contains('open') ? 
        //sidebar.classList.add('open') :
        //sidebar.classList.remove('open')
    //} 
    return (
        <div>
            <header className="header">
            <div className="brand">
                <Link to="/">Meditrack</Link>
            </div>
            <div className="header-links">
                <Link to="/login    ">Sign In</Link>{/*Change to sign out route*/}
                <Link to='/about'>About</Link>
                {/*<Link to="/user:id">Character</Link>*/}
                {/*<Link to="/user:id/settings">Settings</Link>*/}
            </div>
        </header>
        </div>
    
    )
}

export default Header
