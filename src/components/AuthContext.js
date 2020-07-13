import React, {useState, createContext, useEffect, useMemo} from 'react'
import axios from 'axios'

export const AuthContext = createContext(null)


export const AuthProvider = props => {
    const [user, setUser] = useState(null)

    // useEffect(async () => {
    //     const token = localStorage.getItem('auth-token')
        
    //     if(token){
    //         const result = await axios.get("http://localhost:5000/posts/", {
    //         headers : {
    //             'auth-token':token
    //         }
    //     })
    //         setUser(result.data.user)
    //     }
    // }, [])
    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        if(token){
            axios.get("http://localhost:5000/posts/", {
                headers : {
                    'auth-token': token
                }
            })
            .then(
                res => setUser(res.data.user)
            )
            .catch(err => {
                console.log(err);
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider> 
    )
}


