import React, { useState } from 'react'
import './Home4.css'
import p1img from "../../assets/HImg/p1img.png"
import p2img from "../../assets/HImg/p2img.png"

const Home4 = () => {
  const [showProjects, setShowProjects] = useState(false); // <-- state for showing projects

  const toggleProjects = () => {
    setShowProjects(!showProjects); // toggle state on click
  };

  return (
    <>
      <div id="Home4">
        <div id="button" onClick={toggleProjects}>
          ViewProject
        </div>

      
        <div className={`project ${showProjects ? 'projectShow animated' : ''}`}>
          <div className="P-img">
            <img src={p1img} alt="" />
          </div>
          <div className="p-btn"><a href=" https://lokeshnakhale.github.io/shoppingApp/" target='__blank' >Zusbuy</a></div>
        </div>

        <div className={`project ${showProjects ? 'projectShow animated' : ''}`}>
          <div className="P-img">
            <img src={p2img} alt="" />
          </div>
          <div className="p-btn"><a href=" https://lokeshnakhale.github.io/Nike/" target='__blank' >Nike</a></div>
        </div>
      </div>
    </>
  );
};

export default Home4;
