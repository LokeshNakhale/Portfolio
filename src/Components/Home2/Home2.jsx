import { useGSAP } from "@gsap/react";
import "./Home2.css";
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Home2 = () => {

  const home2Ref = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from(home2Ref.current.querySelectorAll('p'),{
      // transform:'rotateX(90deg)',
        y:40,
      opacity:0,
      duration:3,
      stagger:1,
      ease: 'power2.out',
      scrollTrigger:{
        trigger:home2Ref.current,
        // markers:true,
      start: 'top 70%', 
      end: 'bottom 90%',
      scrub: 1,
      }
    })
  })
  return (
    <>
      <div ref={home2Ref} id="home2">

        <h1>Introduction</h1>
         
          <p>Hello! I'm a dedicated MERN stack developer with hands-on experience</p>
          <p>in building full-stack web applications using MongoDB, Express.js,</p>
          <p> React, and Node.js. I enjoy crafting fast, scalable, and user-centric</p>
          <p>solutions that combine clean design with strong backend functionality.</p>
          <p>From designing intuitive front-end interfaces to developing robust</p>
          <p>server-side logic and working with databases, I aim to create seamless</p>
          <p>digital experiences. I'm passionate about coding, continuously</p>
          <p>learning, and staying up to date with the latest web technologies.</p>
          <p> Whether it's a personal project or a professional task, I approach</p>
          <p>every challenge with creativity, problem-solving, and a focus on</p>
          <p> delivering quality results.</p>
        
      </div>
    </>
  );
};

export default Home2;
