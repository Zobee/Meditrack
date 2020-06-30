import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
    }
    return (
        <div className='form-container'>
            <h1>Log In</h1>
            <div className='form'>
                <form>
                    <label>Username</label>
                    <input 
                    type="text"
                    placeholder="username"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
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

export default SignIn
