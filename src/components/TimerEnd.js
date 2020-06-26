import React from 'react'

function TimerEnd({timeUp}) {
    return (
        <div>
            Time Up
            <button className='btn' onClick={() => timeUp()}>Reset</button>
        </div>
    )
}

export default TimerEnd
