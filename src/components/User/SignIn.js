import React from 'react'
import {Link} from 'react-router-dom'

function SignIn() {
    return (
        <div>
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
                Want to Join? <Link to='signup'>Sign Up Here</Link>
            </div>
        </div>
    )
}

export default SignIn
