import React from 'react'

import resumeImg from '../../assets/bddowningjennings_resume.jpg'
import resumePDF from '../../assets/bddowningjennings_resume.pdf'
import resumeRTF from '../../assets/bddowningjennings_resume.rtf'

const resume = props => {
  return (
    <section id='resume_section' className="Resume card">
              <a href={resumePDF} download='bddowningjennings_resume'> PDF </a>

      <span className="anchor" id="anchor_resume" />
      <div className="underline"></div>
      <h1>Resume</h1>
      <div className="card content">
          Here's an abridged outline of my skills, work history, and education.<br /><br />
          You can download a 
          <a href={resumePDF} download='bddowningjennings_resume'> PDF </a>
          or 
          <a href={resumeRTF} download="bddowningjennings_resume"> Rich Text </a> 
            file by clicking on the links or buttons.<br /><br />
          <div id="download">Download my Resume: 
            <div className="btn">
              <a href={resumePDF} download='bddowningjennings_resume'> PDF </a>
            </div>
            <div className="btn">
              <a href={resumeRTF} download="bddowningjennings_resume"> Rich Text </a> 
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
