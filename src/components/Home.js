import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from './AuthContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
let Home = () => {
    const [user, setUser] = useContext(AuthContext)

    //if(user) window.location = '/'

    return (
        <div>
            <div className='landing-header'>
                <div className='landing-header-text'>
                    <h1 className='landing-title'>Ponder</h1>
                    <h5 className='landing-subtitle'>Dive Deeper</h5>
                </div>
        
                <div className='header-content-container'>
                    <div className='header-content-left'>
                        <img src='img/jelly.png' className="header-img"/>
                    </div>
                    <div className='header-content-right'>
                        <h1>Mindfulness Made Easy</h1>
                        <Link to='/signup' className='header-btn'>Let's Get Started</Link>
                    </div>
                </div>
                <div className='landing-content'>
                    <div>
                        <h5>Title</h5>
                        <p>Text text text text text text text</p>
                    </div>
                    <div>
                        <h5>Title</h5>
                        <p>Text text text text text text text</p>
                    </div>

                    <div className='social-buttons'>
                        <h5>Socials</h5>
                        <a className='social-btn' href='http://www.facebook.com'><FontAwesomeIcon size="2x" icon={faFacebook}/></a>
                        <a className='social-btn' href='http://www.twitter.com'><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
                        <a className='social-btn' href='http://www.instagram.com'><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
                        <a className='social-btn' href='http://www.linkedin.com'><FontAwesomeIcon size="2x" icon={faLinkedin}/></a>
                    </div>
                </div>

            </div>
            <div className="home-page-circle-1"></div>
            <div className="home-page-circle-2"></div>
        </div>
    )
}

export default Home
