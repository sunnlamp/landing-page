import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'
import About from './About'

const App = () => (
  <Router>
    <div>
      <Nav />
      <div>
        <Main />
        <About />
      </div>
    </div>
  </Router>
)

export default App
