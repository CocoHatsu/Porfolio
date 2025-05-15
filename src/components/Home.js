import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <div className='nav'>
        <ul>
          <p></p><li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='Introduction'>
        <div className='img-container'>
        <img src="/Ngozahmo.png" />
        <h3>Ngozahmo</h3>
        </div>
        <div className='Intro'>
          <h4>Objective</h4>
        </div>
     

      
     </div>
      <div className='Skills'>
        <div><h5>Skills</h5></div>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Reactjs</li>
        </ul>


      
      </div>
      <div className='Projects'>
      <h4>Projects</h4>
      </div>
      <div className='Resume'>
      <h4>Resume</h4>
      </div>
      <div className='Contact'>
      <h4>Contact</h4>
      </div>

    </div>
  )
}

export default Home