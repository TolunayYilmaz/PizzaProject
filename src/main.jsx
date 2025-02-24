import React from 'react'
import ReactDOM from 'react-dom/client'
import "./reset.css"
import HomePage from "./HomePage/HomePage.jsx"
import MainMenu from './MenuPage/MainMenu.jsx'
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
