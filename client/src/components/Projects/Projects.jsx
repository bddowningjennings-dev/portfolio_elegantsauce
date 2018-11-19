import React from 'react'

import Project from './Project/Project'

import ysfsImg from '../../assets/YS4$.jpg'
import worxImg from '../../assets/worx.png'
import ysfsOldImg from '../../assets/ysfs.png'
import worxOldImg from '../../assets/worx_old.jpg'

const ys4sProps = {
  url: 'https://ys4s.elegantsauce.xyz',
  title: 'YS4$',
  name: 'ys4s',
  imgSrc: ysfsImg,
}
const worxProps = {
  url: 'https://github.com/bddowningjennings-dev/worx.elegantsauce.xyz',
  title: 'W O R X',
  name: 'worx',
  imgSrc: worxImg,
}
const ys4sOldProps = {
  url: 'https://github.com/bddowningjennings-dev/yourstuff4sale',
  title: 'Your Stuff 4 Sale',
  name: 'oldy-s4s',
  imgSrc: ysfsOldImg,
}
const worxOldProps = {
  url: 'https://github.com/bddowningjennings-dev/worx_-valley_hackathon-',
  title: 'W O R X (original: Valley Works Hackathon)',
  name: 'old-worx',
  imgSrc: worxOldImg,
}

const projects = props => {
  return (
    <section id="projects" className="Projects card">
      <span className="anchor" id="anchor_projects" />
      <div className="underline" />
      <h1>Sample Projects</h1>
      <div className="card content">
        <p />
      </div>
      <div id="projects_container">
        <Project {...ys4sProps} />
        <Project {...worxProps} />
        <Project {...ys4sOldProps} />
        <Project {...worxOldProps} />
      </div>
    </section>
  )
}

export default projects
