import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import {AuthContext} from '../AuthContext'

//Do basic CRUD stuff here. Change character's name, delete account, view meditation history, etc

function Character() {
    const [user, setUser] = useContext(AuthContext)
    
    return (
        <div>
            {user ? (<div>
                Hello {user.username},
                {console.log(user.character.status.meditatedToday)}
            You've meditated for a total of Time Hours!
            </div>) : <div>Access Denied</div>}
        </div>
    )
}

export default Character