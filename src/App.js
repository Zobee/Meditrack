import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import TimerRoute from './components/Timer/TimerRoute'
import Login from './components/User/Login'
import SignUp from './components/User/SignUp';
import Character from './components/User/Character'
import EditCharacter from './components/User/EditCharacter';

import {AuthProvider} from './components/AuthContext'


function App() {

  return(
    <div>
      <AuthProvider>
      <Header/>
      </AuthProvider>
      <Switch>
        <Route path='/home' component={Home}/>
        <AuthProvider>
        <Route exact path='/' component={TimerRoute}/>
        <Route path='/character' component={Character}/>
        <Route path='/update' component={EditCharacter}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        </AuthProvider>
      </Switch>
    </div>

  )
}

export default App;
