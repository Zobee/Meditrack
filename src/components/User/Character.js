import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../AuthContext'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
  });

const compareDate = (user) => {
    let currDate = new Date()
    let latestMeditation = new Date(user.character.status.meditationHistory[user.character.status.meditationHistory.length - 1].Date)
    return currDate.toDateString() === latestMeditation.toDateString()
}

let getConsecDays = (arr) => {
    let consec = 1
    for(let i = 0; i<arr.length-1;i++){
        if(Math.abs(arr[i]-86400000) === Math.abs(arr[i+1])){
            consec++
        } else {
            break;
        }
    }
    return consec
}

const checkStreak = (user) => {
    if(compareDate(user)){
        let history = user.character.status.meditationHistory.map(date => date.Date).reverse()
        return getConsecDays(history)
    } else {
        return 1
    }
}

const getTotalHours = (user) => {

}

const getMinsThisWeek = (user) => {

}

function Character() {
    const [user, setUser] = useContext(AuthContext)
    const [loaded, setLoaded] = useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [currentScreen, setCurrentScreen] = useState("")

    useEffect(() => {
        user === null ? setLoaded(false) : setLoaded(true)
    },[user])

    useEffect(() => {
        if(loaded){switch(activeStep){
            case 0:
                setCurrentScreen(
                <div>
                    <h1 className='char-stat-header'>Calendar</h1>
                    <div className='cal'>

                    </div>
                    {compareDate(user) ? 
                    <div>
                        <p>You meditated today!</p>
                        <h5>{checkStreak(user)} Day Streak!</h5>
                    </div> : 
                    <p>Go Meditate, you fuck</p>}
                    
                </div>)
                break;
            case 1:
                setCurrentScreen(
                <div>
                    <h1 className='char-stat-header'>Stats</h1>
                    <div>
                        <h5>Sessions: {user.character.status.meditationHistory.length}</h5>
                        <h5>Minutes meditated this week: 25</h5>
                        <h5>Hours meditated all time: 1</h5>
                    </div>
                </div>)
                break;
            case 2:
                setCurrentScreen(
                <div>
                    <h1 className='char-stat-header'>Achievements</h1>
                    <div className='achievement-container'>
                    <div className="achievement">
                        <span>Blow me</span>
                        <img src={"img/ach.png"}/>
                    </div>
                    <div className="achievement">
                        <span>Title<br/>Achievement</span>
                        {/*add a modal on click*/}
                        <img src={"img/ach.png"}/>
                    </div>
                    </div>
                </div>)
                break
        }}
    },[activeStep, loaded])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const deleteUser = () => {
        if(window.confirm("Are you sure?")){
            axios.delete("http://localhost:5000/posts/delete", {headers : {"auth-token":localStorage.getItem("auth-token")}})
            localStorage.removeItem("auth-token")
            window.location = '/'
        }
    }


    if(loaded && !user) window.location = '/landing'
    return (
        <div className='body'>
            <h1 className='character-title'>Your Statistics</h1>
            <div className='character-container'>
                {loaded ? <div className='character-img'>
                    <div>{user.character.name}</div>
                    <img src={`img/medichan-${user.character.color}.png`}/>
                    <div>Actualization Lv.9</div>
                    <div className='exp-bar'></div>
                </div> : <div>One sec</div>}
                <div className='character-stats'>
                    {currentScreen}
                    <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                    }
                    />
                </div>
            </div>
            <div className='char-btn-container'>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>
        </div>
    )
}

export default Character