import React from 'react'

class Project extends React.Component {
  state = {
    toggle: false,
  }
  handleToggle = e => {
    // e & e.preventDefault()
    this.setState(prevState => ({ ...prevState, toggle: !prevState.toggle }))
  }
  preventDefault = e => e && e.preventDefault()
  render() {
    const { toggle } = { ...this.state }
    const { name, title, url, imgSrc } = { ...this.props }
    let content = (<img src={ imgSrc } width="100%" alt={ `${name}` } srcSet="" />)
    if (toggle) content = (<div className='project-info' >this</div>)
    return (
      <div
        id={ `${name}` }
        className="Project card hoverable"
      >
        <a href={ `${url}` }>
          {title}
          <div className="underline"></div>
          <div className='project-img'
          // style={{ backgroundImage: `url(${imgSrc})` }}
        // onMouseEnter={this.handleToggle}
        // onMouseLeave={this.handleToggle}
          
          >
          
            { content }
          </div>
        </a>
      </div>
    )
  }
}

export default Project
