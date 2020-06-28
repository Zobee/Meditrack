import React from 'react'

function TimerEnd({timeUp, minsMeditated}) {
    const saveToDb = () => {
        console.log("Saved...");
    }
    return (
        <div>
            Time Up!
            You've meditated for {minsMeditated} Minutes!
            <div>
                <button className='btn' onClick={() => timeUp(0)}>Reset</button>
                <button className='btn' onClick={() => saveToDb()}>Save</button>
            </div>
        </div>
    )
}

export default TimerEnd
