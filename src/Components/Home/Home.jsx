import { useRef, useState } from 'react'
import './Home.css'
import Tilttext from './Tilttext'
import Myimg from '../../assets/HImg/Img1.jpg'
const Home = () => {

const tiltRef = useRef(null)
const [xVal, setXVal] = useState(0)
const [yVal, setYVal] = useState(0)
// .getBoundingClientRect() isse vo div  ke dimaintations ka pata chalta hai
  const mouseMoving=(e)=>{
    setXVal(e.clientX/50)
    setYVal(e.clientY/50)
  //  console.log(tiltRef.current.getBoundingClientRect());
   tiltRef.current.style.transform=`rotateX(${yVal}deg) rotateY(${xVal}deg) `
    
  }
  return (


    <div onMouseMove={(e)=>{mouseMoving(e)}} id='home'>

       <div  id='T-text-cont'>
        <div ref={tiltRef} className="text">
            <h3><span style={{color:'	#BF00FF'}} >Hi,</span> I am</h3>
            <h1>Lokesh Nakhale</h1>
           <p>MERN Stack <span style={{color:'	#BF00FF'}}  >Developer</span></p>
        </div>
      
    </div>



      <div id="right">
            <div id="home-img">
                <img src={Myimg} alt="" />
            </div>
      </div>
      
          
    </div>
  )
}

export default Home
