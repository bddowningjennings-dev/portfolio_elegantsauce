import React from 'react'

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
      <div className="social_links">
        <div className="spacer"></div>
        <a href="#" className="fa fa-facebook">a</a>
        <a href="#" className="fa fa-linkedin">a</a>
        <a href="#" className="fa fa-github">a</a>
        <div className="spacer" />     
      </div>
    </footer>
  )
}

export default footer