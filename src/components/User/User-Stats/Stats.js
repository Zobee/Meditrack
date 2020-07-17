import React from 'react'

function Stats() {
    return (
        <div>
            <h1 className='char-stat-header'>Stats</h1>
        <div className='stat-bar'>
            <h5>Happiness</h5>
            <div className='exp-bar'></div>
        </div>
        <div className='stat-bar'>
            <h5>Hunger</h5>
            <div className='exp-bar'></div>
        </div>
        <div className='stat-bar'>
            <h5>Health</h5>
            <div className='exp-bar'></div>
        </div>
            <div className='stat-bar'>
                <h5>Actualization</h5>
                <div className='exp-bar'></div>
            </div>
        </div>
    )
}

export default Stats
