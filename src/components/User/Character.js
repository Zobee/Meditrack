import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Character() {
    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(false)

    const reDir = () => {
        alert("Please log in first!")
        window.location='/login'
    }

    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        console.log(token);

        if(!token){
            reDir()
        }
        axios.get("http://localhost:5000/posts/", {
            headers : {
                'auth-token':token
            }
        })
        .then(res => {
            setUser(res.data.user)
            setAuth(true)
        })
    },[])

    // const token = localStorage.getItem('auth-token')
    // console.log(token);

    // if(!token){
    //     alert("You need to login!")
    //     return <Redirect to="/login"/>
    // }


    return (
        <div>
            {auth ? (<div>
                Hello {user.username},
            You haven't meditated yet today.
            You've meditated for a total of Time Hours!
            </div>) : <div>Access Denied</div>}
        </div>
    )
}

export default Character