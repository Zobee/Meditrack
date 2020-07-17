import React, {useContext} from 'react'
import {AuthContext} from '../../AuthContext'

const getPastSunday = () => {
    const today = new Date()
    return new Date(today.setUTCHours(0,0,0) - (today.getUTCDay() * 86400000))
}

const getMinsThisWeek = (user) => {
    const sunday = getPastSunday()
    let meditationDates = user.character.status.meditationHistory.filter(date => Math.abs(new Date(date.Date)) >= Math.abs(sunday))
    let minutes = 0
    meditationDates.forEach(a => {
        minutes+=a.duration
    })
    return minutes
}

function Metrics() {
    const [user,setUser] = useContext(AuthContext)
    return (
        <div>
            <h1 className='char-stat-header'>Metrics</h1>
            <div>
                <h5>Sessions: {user.character.status.meditationHistory.length}</h5>
                <h5>Minutes meditated this week: {getMinsThisWeek(user)}</h5>
                <h5>Hours meditated all time: {Math.round(user.character.status.timesMeditated / 60)}</h5>
            </div>            
        </div>
    )
}

export default Metrics
