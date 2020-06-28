import React, {useState, useEffect} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({timeUp}) {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(minutes*60+seconds)
    const [circleVal, setCircleVal] = useState(100)

    const countDown = () => {
      let currTime = (minutes*60)+seconds-1
      let fullTime = time
      setCircleVal((currTime/fullTime)*100);
    }
  
    const validateTime = (time) => {
      if(time <= 0 || time > 999){
        alert("Please input a valid time!") 
      } else {
        setMinutes(parseInt(time))
        setSeconds(0)
        setTime(parseInt(time*60)+seconds)
      }
    }
  
    useEffect(() => {
      let interval;
      if (!isPaused) {
        interval = setInterval(() => {
          //setCircleVal((((minutes*60+(seconds-1))/((time*60)+seconds)))*100)
          //console.log(circleVal);
          countDown()
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else if (isPaused && seconds !== 0) {
        clearInterval(interval);
      }
      if(seconds === 0){
          if(minutes === 0){
              timeUp(time/60)
          } else if(isPaused){
            clearInterval(interval);
          } else {
              setTimeout(() => {
                setMinutes(minutes => minutes - 1)
                setSeconds(59)
              }, 1000)
              
          }
      }

      return () => clearInterval(interval);
    }, [isPaused, seconds, time]);
  
    return (
        <div className='timer'>
          <CircularProgressbar 
          value={circleVal} 
          text={seconds < 10 ? `${minutes}:0${seconds}`:`${minutes}:${seconds}`}/>
          <div>
            {isPaused &&
              <input 
              className='timer-input' 
              type='number' 
              onChange={(e) => validateTime(e.target.value)} 
              value={minutes} 
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
              onClick={() => {
              validateTime(5)
              setCircleVal(100); 
              setIsPaused(true);
              }}>Reset</button>
          </div>
        </div>
    );
}

export default Timer
