import React, {useState, useEffect} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({timeUp}) {
    const [seconds, setSeconds] = useState(20)
    const [minutes, setMinutes] = useState(0)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(20)
    const [circleVal, setCircleVal] = useState(100)
  
    const validateTime = (time) => {
      if(time <= 0 || time > 999){
        alert("Please input a valid time!") 
      } else {
        setSeconds(parseInt(time))
        setTime(parseInt(time))
      }
    }
  
    useEffect(() => {
      let interval;
      if (!isPaused) {
        interval = setInterval(() => {
          setCircleVal(((seconds - 1)/time)*100)
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else if (isPaused && seconds !== 0) {
        clearInterval(interval);
      }
      if(seconds === 0){
          if(minutes === 0){
              timeUp()
          } else {
              setMinutes(minutes => minutes - 1)
          }
      }

      return () => clearInterval(interval);
    }, [isPaused, seconds, time]);
  
    return (
        <div className='timer'>
          <CircularProgressbar 
          value={circleVal} 
          text={seconds < 10 ? `0${seconds} sec`:`${seconds} sec`}/>
          <div>
            {isPaused &&
              <input 
              className='timer-input' 
              type='number' 
              onChange={(e) => validateTime(e.target.value)} 
              value={Number(seconds)} 
              min={1} 
              max={1000}
            />
            }
          </div>
          <div className='btn-container'>
            <button className='btn'
              onClick={() => setIsPaused(false)}>Start</button>
            <button className='btn' 
              onClick={() => setIsPaused(true)}>Pause
            </button>
            <button className='btn'
              onClick={() => {setSeconds(1); setCircleVal(100); setIsPaused(true)}}>Reset</button>
          </div>
        </div>
    );
}

export default Timer
