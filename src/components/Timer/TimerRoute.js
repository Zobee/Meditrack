import React, {useState, useContext} from 'react'
import Timer from './Timer'
import TimerEnd from './TimerEnd'
import {AuthContext} from '../AuthContext'

function TimerRoute() {
    const [user, setUser] = useContext(AuthContext)
    const [timerZero, setTimerZero] = useState(false)
    const [minsMeditated, setMinsMeditated] = useState(0)
  
    const timeUp = (time) => {
      setTimerZero(!timerZero)
      setMinsMeditated(time)
    }

    if(!user) window.location = '/landing'
    return (
        <div className='timer-page body'>
        {timerZero === false ? 
        <Timer timeUp={timeUp} /> :
        <TimerEnd timeUp={timeUp} minsMeditated={minsMeditated} />
        }
        </div>
    )
}

export default TimerRoute
