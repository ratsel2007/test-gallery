import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import {Main} from "./components/Main"
import {Album} from "./components/Album"

const App = () => {
  return (
      <Router>
        <Route exact path='/' component={Main}/>
        <Route path='/:id' component={Album}/>
      </Router>
  );
}

export default App
