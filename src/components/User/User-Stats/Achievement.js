import React, {useContext} from 'react'
import {AuthContext} from '../../AuthContext'

const isUnlocked = (user, id) => {
    return user.character.status.achievements.some(ach => ach.id === id)
}

function Achievement({achievements}) {
    const [user, setUser] = useContext(AuthContext)
    let {id, img, imgLck, title, text} = achievements
    let popModal = () => {
        console.log("Hello");
    }
    return (
        <div className="achievement">
            <span>{title} <br/> {isUnlocked(user, id) ? text : "LOCKED"}</span>
            <img src={isUnlocked(user, id) ? img : imgLck} onClick={()=> popModal()}/>
        </div>
    )
}

export default Achievement
