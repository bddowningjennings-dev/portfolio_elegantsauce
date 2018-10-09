import React from 'react'

import worxImg from '../../assets/worx.png'
import ysfsImg from '../../assets/ysfs.png'
import worxOldImg from '../../assets/worx_old.jpg'

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
          <a href='https://github.com/bddowningjennings-dev/worx.elegantsauce.xyz'>
          W O R X
            <div className="underline"></div>
            <img src={ worxImg } width="100%" alt="worx" srcSet="" />
          </a>
        </div>
        <div id="ysfs" className="project card hoverable">
          <a href='https://github.com/bddowningjennings-dev/yourstuff4sale'>
          Your Stuff 4 Sale
            <div className="underline"></div>
            <img src={ ysfsImg } width="100%" alt="ysfs" srcSet="" />
          </a>
        </div>
        <div id="worx" className="project card hoverable">
          <a href='https://github.com/bddowningjennings-dev/worx_-valley_hackathon-'>
          W O R X (original: Valley Works Hackathon)
            <div className="underline"></div>
            <img src={ worxOldImg } width="100%" alt="worx" srcSet="" />
          </a>
        </div>
        {/* <!-- <div class="card hoverable">
            <div class="underline"></div>
        </div> --> */}
      </div>
    </section>
  )
}

export default projects
