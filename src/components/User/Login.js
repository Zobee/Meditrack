import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {AuthContext} from '../AuthContext'

function Login() {
    const [user, setUser] = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if(user) window.location = '/'

    let handleSubmit = (e) => {
        e.preventDefault()
        const login = {
            email,
            password
        }

        axios.post("http://localhost:5000/api/users/login", login)
        .then((res) => { 
            console.log(res.data)
            localStorage.setItem('auth-token', res.data)
            window.location = '/'
        })
        .catch(err => {
            console.log(err);
            //Find a way to match error with input field
        })
        
    }
    return (
        <div className='form-container'>
            <h1>Log In</h1>
            <div className='form'>
                <form>
                    <label>Email Address</label>
                    <input 
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit' onClick={(e)=>handleSubmit(e)}>Log in</button>
                </form>
            </div>
            <div>
                <p>Don't have an account yet? <Link to='signup'>Sign Up Here</Link></p>
            </div>
        </div>
    )
}

export default Login
