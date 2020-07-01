import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        const login = {
            email,
            password
        }

        axios.post("http://localhost:5000/api/users/login", login)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('auth-token', res.data)
        })

        //Create a conditional here so redirection only happens on a real login
        //window.location = '/character'
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
