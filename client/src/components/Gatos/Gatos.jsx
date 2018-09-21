import React, { Component } from 'react'
import './Gatos.css'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class Gatos extends Component {
  async componentDidUpdate() {
    await sleep(40)
    document.getElementById('anchor_contact').scrollIntoView(true)
  }
  render() {
    const { gatos } = { ...this.props }
    const content = gatos.map((gato, i) => (<img key={i} className="gato" alt={`gato_${i}`} src={gato.img} />))
    return (
      <section className="Gatos">
        {content}
      </section>
    )
  }
}

export default Gatos
