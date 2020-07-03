import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import TimerRoute from './components/Timer/TimerRoute'
import Login from './components/User/Login'
import About from './components/About'
import SignUp from './components/User/SignUp';
import Character from './components/User/Character'


import {AuthProvider} from './components/AuthContext'

function App() {

  return(
    <div>
      <AuthProvider>
      <Header/>
      </AuthProvider>
      <Switch>
        <Route exact path='/' component={TimerRoute}/>
        <Route path='/about' component={About}/>
        <AuthProvider>
        <Route path='/character' component={Character}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        </AuthProvider>
      </Switch>
    </div>

  )
}

export default App;
