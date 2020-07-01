import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import TimerRoute from './components/Timer/TimerRoute'
import Login from './components/User/Login'
import About from './components/About'
import SignUp from './components/User/SignUp';
import Character from './components/User/Character'

function App() {


  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TimerRoute}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about' component={About}/>
        <Route path='/character' component={Character}/>
      </Switch>
    </div>

  )
}

export default App;
