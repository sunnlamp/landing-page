import React from 'react'

const Portfolio = () => (
  <div className="portfolio">
    <div className="portfolio-card">
      <h4>Bloglive</h4>
      <div className="card-description">
        <p>
          Community driven blog engine 
          developed using Ruby on Rails.
        </p>
      </div>
      <div className="card-icons">
        <i className="far fa-gem">
        </i>
      </div>
      <div className="card-links">
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://powerful-basin-94829.herokuapp.com/">Bloglive</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp/bloglive">Repo</a></li>
        </ul>
      </div>
    </div>
    <div className="portfolio-card">
      <h4>Portfolio Site</h4>
      <div className="card-description">
        <p>
          Simple portfolio site written 
          in React using flexbox.
        </p>
      </div>
      <div className="card-icons">
        <i className="fab fa-react">
        </i>
        <i className="fab fa-node-js">
        </i>
      </div>
      <div className="card-links">
        <ul>
          <li><a href="#">Portfolio</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp/landing-page">Repo</a></li>
        </ul>
      </div>
    </div>
    <div className="portfolio-card">
      <h4>New Project</h4>
      <div className="card-description">
        <p>
          Social media React app for finding 
          new music from Spotify.
        </p>
      </div>
      <div className="card-icons">
        <i className="fab fa-react">
        </i>
        <i className="fab fa-node-js">
        </i>
      </div>
      <div className="card-links">
        <ul>
          <li><a href="#">BadMusic</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp/landing-page">Repo</a></li>
        </ul>
      </div>
    </div>
    <div className="portfolio-card">
      <h4>Geekd</h4>
      <div className="card-description">
        <p>
          Gaming review and news site, includes 
          analysis and design documents.
        </p>
      </div>
      <div className="card-icons">
        <i className="fab fa-php">
        </i>
        <i className="fas fa-code">
        </i>
      </div>
      <div className="card-links">
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp/Geekd/blob/master/public_html/ADD.pdf">A.D.D.</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sunnlamp/Geekd">Repo</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Portfolio