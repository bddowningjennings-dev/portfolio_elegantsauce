import React from 'react'

import worxImg from '../../assets/worx.jpg'
import ysfsImg from '../../assets/ysfs.png'

const projects = props => {
  return (
    <section id='projects' className="Projects card">
      <span className="anchor" id="anchor_projects" />
        <div className="underline"></div>
        <h1>Sample Projects</h1>
        <div className="card content">

            <p></p>  
        </div>
      <div id="projects_container">
        <div id="worx" className="project card hoverable">
          W O R X
            <div className="underline"></div>
            <img src={ worxImg } width="100%" alt="worx" srcSet="" />              
        </div>
        <div id="ysfs" className="project card hoverable">
          Your Stuff 4 Sale
            <div className="underline"></div>
            <img src={ ysfsImg } width="100%" alt="ysfs" srcSet="" />               
        </div>
        <div id="worx" className="project card hoverable">
          W O R X
            <div className="underline"></div>
            <img src={ worxImg } width="100%" alt="worx" srcSet="" />              
        </div>
        {/* <!-- <div class="card hoverable">
            <div class="underline"></div>
        </div> --> */}
      </div>
    </section>
  )
}

export default projects
