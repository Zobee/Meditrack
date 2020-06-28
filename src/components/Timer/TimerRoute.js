import React, {useState} from 'react'
import Timer from './Timer'
import TimerEnd from './TimerEnd'

function TimerRoute() {
    const [timerZero, setTimerZero] = useState(false)
    const [minsMeditated, setMinsMeditated] = useState(0)
  
    const timeUp = (time) => {
      setTimerZero(!timerZero)
      setMinsMeditated(time)
    }
    return (
        <div className='timer-page'>
        {timerZero === false ? 
        <Timer timeUp={timeUp} /> :
        <TimerEnd timeUp={timeUp} minsMeditated={minsMeditated} />
        }
        </div>
    )
}

export default TimerRoute
