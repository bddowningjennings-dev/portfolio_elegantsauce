import React from 'react'

import Welcome from '../../components/Welcome/Welcome'
import AboutMe from '../../components/AboutMe/AboutMe'
import Resume from '../../components/Resume/Resume'
import Projects from '../../components/Projects/Projects'

const main = props => {
  return (
    <section className='Main' id='main'>
      <div id="nav_spacer" />
      <Welcome />
      <AboutMe />
      <Resume />
      <Projects />
    </section>
  )
}

export default main
