import React, {useContext} from 'react'
import {AuthContext} from '../AuthContext'
import axios from 'axios'

function TimerEnd({timeUp, minsMeditated}) {
    const [user, setUser] = useContext(AuthContext)
    const saveToDb = () => {
        axios.post("http://localhost:5000/posts/addMeditation", {duration : minsMeditated}, {headers : {"auth-token":localStorage.getItem("auth-token")}})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        window.location = '/'
    }
    return (
        <div>
            Time Up!
            You've meditated for {minsMeditated} Minutes!
            <div>
                <button className='btn' onClick={() => timeUp(0)}>Reset</button>
                <button className='btn' onClick={() => saveToDb()}>Save</button>
            </div>
        </div>
    )
}

export default TimerEnd
