import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    return (
        <div className='form-container'>
            <h1>Sign Up</h1>
            <div className='form'>
                <form>
                    <input 
                    type='email'
                    placeholder="Email Address"
                    id="email"/>
                    <input 
                    type="text"
                    placeholder="Username"
                    id="username"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    />
                    <button type='submit'>Sign Up</button>
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
