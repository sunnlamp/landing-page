import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <li>
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp">
              <i className="fab fa-github" aria-hidden="true">
              </i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rogelio-zamudio-b78180133/">
              <i className="fab fa-linkedin-in" aria-hidden="true">
              </i>
            </a>
          </li>
          <li>
            <a target="_top" rel="noopener noreferrer" href="mailto:rzamudiojr@gmail.com">
              <i className="fas fa-envelope" aria-hidden="true">
              </i>
            </a>
          </li>
        </nav>
      </header>  
    )
  }
}
