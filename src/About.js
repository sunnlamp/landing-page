import React from 'react'

const About = () => (
  <div className="about container">
    <h2>About</h2>
    <p className="tagline">React. Node.js. Ruby. JavaScript. All things Web.</p>
    <p>I'm currently a TA with Northwestern University's Coding Bootcamp where
       I get to cement my knowledge and understanding by working on a team, 
       teaching students.
    </p>
    <p>I like to keep myself busy by keeping up with new trends in tech, 
      learning new languages, and playing Go.
    </p>
    <p>When I'm not behind a keyboard, I opt for strings, playing guitar 
      or bass in one of my bands here in Chicago. 
    </p>
    <p>
      Feel free to get in touch with me 
      <a className="contact" href="mailto:rzamudiojr@gmail.com">
        <i className="fas fa-envelope"></i>  
      </a>.
    </p>
  </div>
)

export default About
