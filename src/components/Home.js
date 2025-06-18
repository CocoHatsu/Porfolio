import React, { useState } from 'react'
import { a } from 'react-scroll'
import Skills from './Skills'

const Home = () => {

  return (
    <div className='wrapper' id='wrapper'>

      <div className='nav' >
        <ul>

          <a href='#wrapper'><li>Home</li></a>
          <a href='#skillss'><li>Skills</li></a>
          <a href='#projectss'><li>Projects</li></a>
          <a href='#resumee'><li>Resume</li></a>
          <a href='#contacts'><li>Contact</li></a>
        </ul>
      </div>
      {/* <div className='Introduction' >
        <div className='img-container'>
          <div className='text-inside-container'><h3>Hello I'm</h3>
          <h1>Ngozahmo</h1>
          </div>
        <div class='img-inside-container'><img className="profile" src="/Profile.png" /></div>
        
        </div>
        <div className='Intro'>
          <div className='intro-text'><h2>Who am I?</h2></div>
         <div className='intro-span'><span>A passionate and results-driven Computer Application postgraduate with hands-on experience in web development, Java programming, and automation projects.
            Proficient in Java, C++, Spring Boot, React.js, MySQL, and Git.
            Known for building practical solutions such as a Face Recognition Attendance System and an Automatic Parking System using Arduino. 
            Adept at using tools like OpenCV, GitHub, and phpMyAdmin, with a strong foundation in backend and frontend technologies.
            Eager to contribute to dynamic development teams and grow as a full-stack developer.</span></div> 
        </div>
     

      
     </div> */}

      <div className="landing-page">
        <div className="container">
          <div className="row flex  pos-relative">
            <div className="left flex center-center col-3-10 ">
              <div className="content color-white ">
                <h1 className="regular ">Hi,</h1>
                <h1 className="regular">
                  I&apos;m
                  <span className="name font-bold"> Ngozahmo</span>
                </h1>

                <p className="small font-light l-h-1-5 color-light-grey">
                  Full stack Developer
                </p>
                <div className="btn">
                  {/* <ButtonIcon
                  title="Get started"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="#fff"
                          d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
                        />
                      </g>
                    </svg>
                  }
                /> */}
                </div>
              </div>
            </div>

            <div className="gradient-image cover-img pos-relative" />

            <div className="right mar-l-a   col-1-3">
              <div className="content">
                <h3 className="font-regular small color-light-grey ">About </h3>
                <h1 className="medium color-white">Me <span>...</span></h1>
                <p className="about tiny l-h-1-5 color-light-grey">
                  <span>  Proficient in Java, C++, Spring Boot, React.js, MySQL, and Git.
                    Known for building practical solutions such as a Face Recognition Attendance System and an Automatic Parking System using Arduino.
                    Adept at using tools like OpenCV, GitHub, and phpMyAdmin, with a strong foundation in backend and frontend technologies.
                    Eager to contribute to dynamic development teams and grow as a full-stack developer.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='Skills' id='skillss'>
        <div><h5 >Skills</h5></div>
        <ul className='skills-ul'>
          <li><a>Java</a></li>
          <li><a>Spring Boot</a></li>
          <li><a>C++</a></li>
          <li><a>HTML</a></li>
          <li><a>CSS</a></li>
          <li><a>Reactjs</a></li>
        </ul> </div> */}
      {/* skills section */}
      <Skills />


      <div className='Projects' id='projectss'><h1 className='projecthead' > </h1>
        <div class='project font-bold small'><h1>Projects</h1></div>
        <div className='project-container'>
          <div className='Automatic col-w-h shadow-pur animate-con b-r-20'><h3>Automatic Parking System</h3>
            <ol>
              <li><p className='t-a-l'>Designed and programmed an Arduino-based control system href detect available parking slots using Ultrasonic Sensors.</p></li>
              <li><p className='t-a-l'>Controlled Servo Motors for automated gate operation upon successful verification.</p></li>
              <li><p className='t-a-l'>Ensured seamless data flow between Arduino and the LED screen for real-time display</p></li>
            </ol>

          </div>

          <div className='Face col-w-h shadow-r b-r-20'><h3>Face Recognition</h3>
            <div className='points '>
              <ol>
                <li><p className='t-a-l'>Developed real-time face detection using OpenCV and Haar Cascades for efficient image processing.</p></li>
                <li><p className='t-a-l'>Implemented face alignment and image augmentation techniques href improve model accuracy and robustness</p></li>
                <li><p className='t-a-l'>Employed deep learning models (FaceNet, VGG-Face) for accurate facial feature extraction and face matching.</p></li>

              </ol>
            </div>
          </div>
          <div className='Upload col-w-h shadow-pur b-r-20'><h3>Upload and Download file </h3>
            <ol>
              <li><p className='t-a-l'>Designed a user-friendly web interface for secure file upload and download operations.</p></li>
              <li><p className='t-a-l'>Developed a PHP backend href handle file uploads, server-side validation, and error management.</p></li>
              <li><p className='t-a-l'>Enabled dynamic listing of available files for easy download by users.</p></li>
            </ol>
          </div>
        </div>
      </div>
      <div className='Resume' id='resumee'>
        <h4 >Resume</h4>
        <div><button>Download</button></div>
      </div>

      <div className='Contact'>
        <div className='bor-r center-center mar-bottom'><h2 id='contacts'>Get in Touch</h2></div>

        <div className='bor-r left-center bor-r flex-con'>

          <div className='flex center-center phone bor-w'>
            <div className=' bor-r col-1-5 flex center-center phone'>
              <div className=' center-center '><a href=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m8.135 3.595l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983M15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a4 4 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2" /></g></svg></a></div>
              <div className=' center-center pad'><h4>+91 9862617334</h4></div>
            </div>
          </div>
        
        <div className='flex center-center phone bor-w'>
        <div className=' bor-r col-1-5 flex center-center phone'>
              <div className=' center-center '><a href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5zm16 14v-2h-4v-2h4v-2l3 3z" /></svg></a></div>
            <div className=' center-center pad'><h4>Ngozahmo1@gmail.com</h4></div>
          </div>
        </div>
        
          <div className='  flex center-center phone'>
            <div className='bor-r col-1-5 flex center-center phone' >
            <div className=' center-center '><a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="#fff" d="M20.82 5.63H16.9V3.866L12 .73L7.1 3.866V5.63H3.18L1.22 23.27h21.56z" /><path fill="#bbd8ff" d="M12 .73v3.43l1.96 1.274v1.96L12 8.57v6.86l4.9-7.35V3.866z" /><path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.86 5.63h1.96l1.96 17.64H1.22L3.18 5.63h1.96M1.906 17.39h20.188m-4.214-6.86h3.528m-18.816 0H6.12m.49 12.74l.686-10.29M17.39 23.27l-.686-10.29" stroke-width="1" /><path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m12 15.43l4.9-7.35V3.866L12 .73L7.1 3.866V8.08z" stroke-width="1" /><path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.96 7.394L12 8.57l-1.96-1.176v-1.96L12 4.16l1.96 1.274z" stroke-width="1" /></g></svg>
            </a></div>
            <div className=' center-center pad'><h4>Bangalore,Kormangla </h4></div>
          </div>
          </div>




        </div>

      </div>

    </div>
  )
}

export default Home