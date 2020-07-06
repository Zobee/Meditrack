import React, {useState, useContext, useEffect} from 'react'
import { AuthContext } from '../AuthContext'

import axios from 'axios'

function EditCharacter() {
    const [user, setUser] = useContext(AuthContext)
    const [name, setName] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        console.log(user);
        user === null ? setLoaded(false) : setLoaded(true)
    },[user])

    const updateChar = (e) => {
        e.preventDefault()
        console.log(name);
    }

    const cancelUpdate = (e) => {
        e.preventDefault()
        if(window.confirm("Are you sure you want to cancel updating?")){
            setName("")
        }
    }

    const overload = () => {
        console.log(loaded);
    }

    setTimeout(() => {
        overload()
    },1000)

    return (
        <div>
            {loaded ? 
            <div>
                <form>
                <input 
                name='name'
                placeholder='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />

            <div>
                <button onClick={(e) => updateChar(e)}>Update</button>
                <button onClick={(e) => cancelUpdate(e)}>Clear</button>
            </div>
            </form>
            </div> : 
            <div>
                loading...
            </div>}
            
        </div>
    )
}

export default EditCharacter
