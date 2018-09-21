

import React from 'react'

import youHere from '../../assets/you_here.jpg'

const clickAbout = e => {
  e && e.preventDefault()
  document.getElementById('anchor_about_me').scrollIntoView()
  window.scrollBy(0, -30)
}
const clickProjects = e => {
  e && e.preventDefault()
  document.getElementById('anchor_projects').scrollIntoView()
  window.scrollBy(0, -30)
}
const clickResume = e => {
  e && e.preventDefault()
  let resume = document.getElementById('resume')
  if (resume.className.split(' ').includes('hidden')) {
    resume.classList.remove('hidden')
  } else {
    resume.classList.add('hidden')
  }
  document.getElementById('anchor_resume').scrollIntoView()
  window.scrollBy(0, -30)
}

const header = props => {
  const { addGato } = { ...props }
  return (
    <header id='header_nav' className='Header'>
      <div className="left_header" />
      <h2>
        <img id='here' src={youHere} alt="logo thing" srcSet="" />
        Blane Downing-Jennings: Stuff and Things
      </h2>
      <nav>
        {/* <a href="#anchor_about_me" onClick={ clickAbout }>About</a>
        <a href="#anchor_resume" onClick={ clickResume }>Resume</a>
        <a href="#anchor_projects" onClick={ clickResume }>Projects</a>
        <a href="#anchor_contact" onClick={ clickGato }>+ Gato</a> */}
        <button onClick={ clickAbout }>About</button>
        <button onClick={ clickResume }>Resume</button>
        <button onClick={ clickProjects }>Projects</button>
        <button onClick={ addGato }>+ Gato</button>
      </nav>
    </header>
  )
}

export default header