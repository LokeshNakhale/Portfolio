import React from 'react'
import './Home3.css'
import htmlimg from '../../assets/Skillimg/html.png' 
import cSS from '../../assets/Skillimg/css.png'
import tailwind from '../../assets/Skillimg/Tailwind.png'
import javascript from '../../assets/Skillimg/javascript.png'
import react from '../../assets/Skillimg/react.png'
import mongodb from '../../assets/Skillimg/mongo-db.png'
import nodejs from '../../assets/Skillimg/nodejs.png'
import express from '../../assets/Skillimg/express.png'

const Home3 = () => {
  return (
    <>
        <h1 id='skill'>---Skills---</h1>
      <div id="home3">
        <div className="skill">
          <h2>HTML</h2>
          <div className="skill-img">
            <img src={htmlimg} alt="" />
          </div>
          <span>82%</span>
        </div>
        <div className="skill">
          <h2>CSS</h2>
          <div className="skill-img">
            <img src={cSS} alt="" />
          </div>
          <span>79%</span>
        </div>
         <div className="skill">
          <h2>Tailwind Css</h2>
          <div className="skill-img">
            <img src={tailwind} alt="" />
          </div>
          <span>82%</span>
        </div>
        <div className="skill">
          <h2>JavaScript</h2>
          <div className="skill-img">
            <img src={javascript} alt="" />
          </div>
          <span>50%</span>
        </div>
        <div className="skill">
          <h2>React</h2>
          <div className="skill-img">
            <img src={react} alt="" />
          </div>
          <span>54%</span>
        </div>
        <div className="skill">
          <h2>MongoDB</h2>
          <div className="skill-img">
            <img src={mongodb} alt="" />
          </div>
          <span>30%</span>
        </div>
        <div className="skill">
          <h2>Node js</h2>
          <div className="skill-img">
            <img src={nodejs} alt="" />
          </div>
          <span>40%</span>
        </div>
        <div className="skill">
          <h2>Express</h2>
          <div className="skill-img">
            <img src={express} alt="" />
          </div>
          <span>33%</span>
        </div>
       
      </div>
    </>
  )
}

export default Home3
