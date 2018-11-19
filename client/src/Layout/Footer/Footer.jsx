import React from 'react'
import './Footer.css'

import portfolioIMG from '../../assets/005-hot-drink.svg'
import linkedinIMG from '../../assets/002-linkedin.svg'
import githubIMG from '../../assets/003-github.svg'
import twitterIMG from '../../assets/001-twitter.svg'

const footer = props => {
  const { deGato } = { ...props }
  return (
    <footer className='Footer'>
      <span className="" id="anchor_contact" />
      <h3 id='removal_plea'>Remove a picture of a cat?</h3><br />
      <button id="btn_remove_gato" onClick={ deGato }>Yes, please!!</button>
        <div className="social_label">
            {/* <!-- <img src="assets/red_arrow.svg" alt="" srcSet="">   -->
            <!-- <h3>Here are some of my profiles...</h3> --> */}
        </div>
        <div className="social-links">
          <div className="spacer" />
          <a
            href="https://github.com/bddowningjennings-dev"
            target="blank"
            className="social-icon github">
            <img src={githubIMG} />
          </a>
          <a
            href="https://www.linkedin.com/in/bddowningjennings/"
            target="blank"
            className="social-icon">
            <img src={linkedinIMG} />
          </a>
          <a
            href="https://twitter.com/blahmountain"
            target="blank"
            className="social-icon">
            <img src={twitterIMG} />
          </a>
          <div className="spacer" /> 
        </div>
    </footer>
  )
}

export default footer