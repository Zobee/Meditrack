import React, {useContext} from 'react'
import {AuthContext} from '../../AuthContext'
import Achievement from './Achievement'

const achObj = [
    {
    id: 1,
    img: "img/ach.png",
    imgLck: "img/ach-lock.png", 
    title: "Your First Time", 
    text: "Meditated for the first time!",
    unlocked: false},
    {
    id: 2,
    img: "img/ach.png", 
    imgLck: "img/ach-lock.png", 
    title: "Hour 1", 
    text: "You've meditated for an hour!", 
    unlocked: false},
    {
    id: 3,
    img: "img/ach.png", 
    imgLck: "img/ach-lock.png", 
    title: "Streakin'", 
    text: "You've gotten a five day streak!", 
    unlocked: false},
    {
    id: 4,
    img: "img/ach.png", 
    imgLck: "img/ach-lock.png", 
    title: "Title", 
    text: "Achievement Text", 
    unlocked: false},
    {
    id: 5,
    img: "img/ach.png", 
    imgLck: "img/ach-lock.png", 
    title: "Title", 
    text: "Achievement Text", 
    unlocked: false},
    {
    id: 6,
    img: "img/ach.png", 
    imgLck: "img/ach-lock.png", 
    title: "Title", 
    text: "Achievement Text", 
    unlocked: false}
]

function Achievements() {
    const [user, setUser] = useContext(AuthContext)
    return (
        <div>
            <h1 className='char-stat-header'>Achievements</h1>
            <div className='achievement-container'>
                {achObj.map(ach => {
                    return <Achievement key={ach.id} achievements={ach}/>
                })}
            </div>
        </div>
    )
}

export default Achievements
