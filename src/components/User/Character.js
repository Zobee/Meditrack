import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../AuthContext'

//Do basic CRUD stuff here. Change character's name, delete account, view meditation history, etc

function Character() {
    const [user, setUser] = useContext(AuthContext)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        console.log(user);
        user === null ? setLoaded(false) : setLoaded(true)
    },[user])

    const deleteUser = () => {
        if(window.confirm("Are you sure?")){
            axios.delete("http://localhost:5000/posts/delete", {headers : {"auth-token":localStorage.getItem("auth-token")}})
            localStorage.removeItem("auth-token")
            window.location = '/'
        }
    }
    return (
        <div className='body'>
            {loaded ? 
            (<div>
                <img src={`img/medichan-${user.character.color}.png`}/>
                Hello {user.username},
            You've meditated for a total of {user.character.status.timesMeditated} Minutes!
            You've meditated {user.character.status.meditationHistory.length} times!
            The longest amount of time you've meditated for is 
            {user.character.status.meditatedToday ? 
            <div>
                You've meditated today! Nice job!
            </div> : 
            <div>
                You haven't meditated yet.
                <Link to='/'>GO MEDITATE</Link>
            </div>
            }
            <Link to='/update'>Edit</Link>
            <button onClick={()=> deleteUser()}>DELETE</button>
            </div>) 
            : <div>Loading...</div>}

        </div>
    )
}

export default Character