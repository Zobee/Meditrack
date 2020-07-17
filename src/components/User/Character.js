import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {AuthContext} from '../AuthContext'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//Status Components
import Stats from './User-Stats/Stats'
import Calendar from './User-Stats/Calendar'
import Metrics from './User-Stats/Metrics'
import Achievements from './User-Stats/Achievements'

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
  });

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
                setCurrentScreen(<Stats/>)
                break;
            case 1:
                setCurrentScreen(<Calendar/>)
                break;
            case 2:
                setCurrentScreen(<Metrics/>)
                break;
            case 3:
                setCurrentScreen(<Achievements/>)
                break;
        }}
    },[activeStep, loaded])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const achieve = () => {
        axios.post("http://localhost:5000/posts/addAchievement", {id: 1, name: "Frank"}, {headers : {"auth-token":localStorage.getItem("auth-token")}})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

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
                </div> : <div>One sec</div>}
                <div className='character-stats'>
                    {currentScreen}
                    
                </div>
            </div>
            <div className='char-btn-container'>
                <Button>Edit</Button>
                <Button onClick={deleteUser}>Delete</Button>
            </div>
            <MobileStepper
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
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
                    <button onClick={() => achieve()}>Click to achieve!</button>
        </div>
    )
}

export default Character