import React from 'react'
import { Route, Switch } from 'wouter'
import Home from './Components/Pages/Home/Home'

function App() {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default App

