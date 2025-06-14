import React, { useState } from 'react'
import {a} from 'react-scroll'

const Home = () => {
   

  return (
    <div className='wrapper'>
  
      <div className='nav'>
        <ul>
          
          <a href='#home'><li>Home</li></a>
          <a href='#skillss'><li>Skills</li></a>
          <a href='#projectss'><li>Projects</li></a>
          <a href='#resumee'><li>Resume</li></a>
          <a href='#contacts'><li>Contact</li></a>
        </ul>
      </div>
      <div className='Introduction'>
        <div className='img-container'>
          <div className='text-inside-container'><h3>Hello I'm</h3>
          <h1>Ngozahmo</h1>
          </div>
        <div class='img-inside-container'><img className="profile" src="/Ngozahmo.png" /></div>
        
        </div>
        <div className='Intro'>
          <h2>Who am I?</h2>
          <span>A passionate and results-driven Computer Application postgraduate with hands-on experience in web development, Java programming, and automation projects.
            Proficient in Java, C++, Spring Boot, React.js, MySQL, and Git.
            Known for building practical solutions such as a Face Recognition Attendance System and an Automatic Parking System using Arduino. 
            Adept at using tools like OpenCV, GitHub, and phpMyAdmin, with a strong foundation in backend and frontend technologies.
            Eager to contribute to dynamic development teams and grow as a full-stack developer.</span>
        </div>
     

      
     </div>
      <div className='Skills'>
        <div><h5 id='skillss'>Skills</h5></div>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Reactjs</li>
        </ul>


      
      </div>
      <div className='Projects' ><h1 className='projecthead' id='projectss'> </h1>
      <div class='project'><h1>Projects</h1></div>
      <div className='project-container'>
      <div className='Automatic'><h5>Automatic Parking System</h5>
      <ol>
        <li>Designed and programmed an Arduino-based control system href detect available parking slots using Ultrasonic Sensors.</li>
        <li>Controlled Servo Motors for automated gate operation upon successful verification.</li>
        <li>Ensured seamless data flow between Arduino and the LED screen for real-time display</li>
      </ol>
     
      </div>
      
      <div className='Face'><h5>Face Recognition</h5>
       <div className='points'>
        <ol>
          <li>Developed real-time face detection using OpenCV and Haar Cascades for efficient image processing.</li>
          <li>Implemented face alignment and image augmentation techniques href improve model accuracy and robustness</li>
          <li>Employed deep learning models (FaceNet, VGG-Face) for accurate facial feature extraction and face matching.</li>
          
        </ol>
        </div>
        </div>
      <div className='Upload'><h5 >Upload and Download file(text,word,and PDF etc) </h5>
      <ol>
        <li>Designed a user-friendly web interface for secure file upload and download operations.</li>
        <li>Developed a PHP backend href handle file uploads, server-side validation, and error management.</li>
        <li>Enabled dynamic listing of available files for easy download by users.</li>
      </ol>
      </div>
      </div>
      </div>
      <div className='Resume'>
      <h4 id='resumee'>Resume</h4>
      <div><button>Download</button></div>
      </div>
      <div className='Contact'>
      <h2 id='contacts'>Contact Me</h2>
      <form className='form'>
        <div className='field'>
        <label>Name</label>
        <input type='text' name='Name' placeholder='Name'></input>
        </div>
         <div className='field'>
        <label>Email</label>
        <input type='text' name='email' placeholder='Email'></input>
        </div>
         <div className='field3 '>
        <label>Your Message</label>
        <input type='textarea' name='message me' placeholder=' Your Message'></input>
        </div>
      </form>

      </div>
 
    </div>
  )
}

export default Home