import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import TimerRoute from './components/Timer/TimerRoute'
import SignIn from './components/User/SignIn'
import About from './components/About'
import SignUp from './components/User/SignUp';

function App() {


  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TimerRoute}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>

  )
}

export default App;
