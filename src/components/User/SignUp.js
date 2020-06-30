import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, email, password);
    }
    return (
        <div className='form-container'>
            <h1>Sign Up</h1>
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
                    <label>Email Address</label>
                    <input 
                    type="email"
                    placeholder="Email Address"
                    id='email'
                    name='email'
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
                    <button type='submit' onClick={(e)=>handleSubmit(e)}>Sign Up</button>
                </form>
                <h1>Sign Up With Facebook/Google/Pornhub</h1>
            </div>
            <div>
                <p>Already have an account? <Link to='login'>Sign in</Link></p>
            </div>
        </div>
    )
}

export default SignUp
