import React, {useState} from 'react';
import Timer from "./components/Timer"
import TimerEnd from './components/TimerEnd'

function App() {
  const [timerZero, setTimerZero] = useState(false)

  const timeUp = () => {
    setTimerZero(!timerZero)
  }

  return(
    <div>
      <div className='timer-page'>
      <h2>Meditrack</h2>
      {timerZero === false ? 
      <Timer timeUp={timeUp} /> :
      <TimerEnd timeUp={timeUp} />
      }
      </div>
    </div>

  )
}

export default App;
