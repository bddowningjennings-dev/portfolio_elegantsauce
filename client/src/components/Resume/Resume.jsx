import React from 'react'

import resumeImg from '../../assets/bddowningjennings_resume.jpg'

const resume = props => {
  return (
    <section id='resume_section' className="Resume card">
      <span className="anchor" id="anchor_resume" />
      <div className="underline"></div>
      <h1>Resume</h1>
      <div className="card content">
          Here's an abridged outline of my skills, work history, and education.<br /><br />
          You can download a 
          <a href="assets/bddowningjennings_resume.pdf" download=""> PDF </a>
          or 
          <a href="assets/bddowningjennings_resume.rtf" download=""> Rich Text </a>
            file by clicking on the links or buttons.<br /><br />
          <div id="download">Download my Resume: 
            <div className="btn">
              <a href="assets/bddowningjennings_resume.pdf" download=""> PDF </a> 
            </div>
            <div className="btn">
              <a href="assets/bddowningjennings_resume.rtf" download=""> Rich Text </a> 
            </div>
          </div>
      </div>

      <section id="resume" className="hoverable card-panel">
        <img id="resume_pdf" alt='bddowningjennings_resume' src={ resumeImg } />
      </section>
    </section>
  )
}

export default resume
