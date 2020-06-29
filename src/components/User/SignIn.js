import React from 'react'
import {Link} from 'react-router-dom'

function SignIn() {
    return (
        <div className='form-container'>
            <h1>Log In</h1>
            <div className='form'>
                <form>
                    <input 
                    type="text"
                    placeholder="username"
                    id="username"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    id="password"
                    />
                    <button type='submit'>Log in</button>
                </form>
            </div>
            <div>
                <p>Want to Join? <Link to='signup'>Sign Up Here</Link></p>
            </div>
        </div>
    )
}

export default SignIn
