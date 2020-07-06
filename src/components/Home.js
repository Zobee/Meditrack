import React from 'react'

function Home() {
    return (
        <div>
            <div className='landing-header'>
                <div className='landing-header-text'>
                    <h1 className='landing-title'>Meditrack</h1>
                    <h5 className='landing-subtitle'>Make Meditation Fun</h5>
                    <p>This is my mission statement. It's really gonna make you want to sign up.</p>
                </div>
        
                <div className='header-content-container'>
                    <div className='header-content-left'>
                        <img src='#' className="header-img"/>
                    </div>
                    <div className='header-content-right'>
                        <p>COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONTENT CONTENT COOOOONENTTNRNT</p>
                        <button className='header-btn'>Let's Get Started</button>
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
                        <button>Facebook</button>
                        <button>Instagram</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
