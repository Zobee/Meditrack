import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {AuthContext} from './AuthContext'

//Assign header vals a state of logged in. If logged, then certain header items will be present.
//Ternary operator

const Header = () => {
    //let toggleMenu = () => {
        //let sidebar = document.querySelector(".sidebar")
        //!sidebar.classList.contains('open') ? 
        //sidebar.classList.add('open') :
        //sidebar.classList.remove('open')
    //} 
    const [user, setUser] = useContext(AuthContext)

    const signOut = () => {
        localStorage.removeItem('auth-token',user)
        setUser(null)
    }

    return (
        <div>
            <header className="header">
            <div className="brand">
                <Link to={user ? "/" : "/landing"}><img src='img/logo.png' /></Link>
                <Link to={user ? "/" : "/landing"}>Ponder</Link>
            </div>
            <div className="header-links">
                {!user ? <Link to="/login">Sign In</Link> : <Link to="/character">Character</Link>}
                {user && 
                    <span>
                        <Link to="/settings">Settings</Link>
                        <Link to='/' onClick={signOut}>Sign Out</Link>
                    </span>
                }
            
            </div>
        </header>
        </div>
    
    )
}

export default Header
