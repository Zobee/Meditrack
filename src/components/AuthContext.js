import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const AuthContext = createContext(null)


export const AuthProvider = props => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        
        if(token){
            axios.get("http://localhost:5000/posts/", {
            headers : {
                'auth-token':token
            }
        })
        .then(res => {
            setUser(res.data.user)
        })
        }
    }, [])
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    )
}


