import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./components/HomePage/HomePage.jsx"
import MainMenu from './components/MainMenuPage/MainMenu.jsx'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
    

<Router> 
  <Switch>
  <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/mainmenu">
        <MainMenu />
      </Route>
  </Switch>
</Router>
 
)
