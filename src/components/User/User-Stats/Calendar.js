import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../AuthContext'

//date is an optional arg. If not used, date defaults to the current date
const compareDate = (user, date) => {
    if(!date){
        date = new Date()
    }
    return date.toDateString() === new Date(user).toDateString()
}

let getConsecDays = (arr) => {
    let consec = 1
    for(let i = 0; i<arr.length-1;i++){
        //Set time to midnight for easier comparing
        let date1 = new Date(arr[i]).setHours(0,0,0,0)
        let date2 = new Date(arr[i+1]).setHours(0,0,0,0)
        if(Math.abs(date1-86400000) === Math.abs(date2)){
            consec++
        //Ignore duplicate days
        } else if(Math.abs(date1) === Math.abs(date2)) {
            continue;
        } else {
            break;
        }
    }
    return consec
}

const checkStreak = (user) => {
    if(compareDate(user.character.status.meditationHistory[user.character.status.meditationHistory.length - 1].Date)){
        let history = user.character.status.meditationHistory.map(date => date.Date).reverse()
        return getConsecDays(history)
    } else {
        return 1
    }
}

function Calendar() {
    const [user, setUser] = useContext(AuthContext)
    return (
            <div>
                <h1 className='char-stat-header'>Calendar</h1>
                <div className='cal'>
                </div>
                {compareDate(user.character.status.meditationHistory[user.character.status.meditationHistory.length - 1].Date) ? 
                <div>
                    <p>You meditated today!</p>
                    <h5>{checkStreak(user)} Day Streak!</h5>
                </div> : 
                <p>Go Meditate, you fuck <Link to="/">Meditate</Link></p>}
            </div>
    )
}

export default Calendar