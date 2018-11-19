import React, { Component } from 'react'
import axios from 'axios'

import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import Modal from './Layout/Modal/Modal'
import Footer from './Layout/Footer/Footer'
import Gatos from './components/Gatos/Gatos'

import './App.css'

import gatoImg from './assets/gato.jpg'

const hoverNonPortrait = e => {
  e && e.stopPropagation()
  
  document.getElementById('portrait').classList.remove('hover_portrait')
  document.getElementById('portrait_label').classList.remove('hover_label')
}

// let lastPosition = 0
// const handleScroll = e => {
//   e && e.preventDefault()

//   const header_nav = document.getElementById('header_nav')
//   window.onscroll = () => {
//     if (window.scrollY - lastPosition > 0) {
//       header_nav.classList.add('shrink')
//     } else if (window.scrollY - lastPosition < 0) {
//       header_nav.classList.remove('shrink')
//     }
//     lastPosition = window.scrollY
//   }
// }

class App extends Component {
  state = {
    gatos: [],
    showModal: false,
  }
  async componentDidMount() {
    // window.addEventListener('scroll', handleScroll)
  }
  componentWillUnmount() {
    // window.removeEventListener('scroll', handleScroll)
  }
  toggleModal = e => {
    e && e.preventDefault()
    this.setState( prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
    }))
  }
  addGato = async e => {
    e && e.preventDefault()
    this.setState(prevState => ({ 
      ...prevState,
      gatos: [ ...prevState.gatos, { img: gatoImg } ]
    }))
    const { data } = await axios('https://aws.random.cat/meow')
    this.setState(prevState => {
      const newGatos = prevState.gatos
      newGatos.pop()
      return { 
      ...prevState,
      gatos: [ ...newGatos, { img: data.file } ]
    }})
  }
  deGato = e => {
    e && e.preventDefault()
    const { gatos } = { ...this.state }
    if (gatos.length > 0) {
      gatos.shift()
      this.setState(prevState => ({ ...prevState, gatos }))
    } else {
      alert('All gatos gato removed already...')
    }
  }
  render() {
    const { gatos, showModal } = this.state
    const modalProps = {
      showModal,
      toggleModal: this.toggleModal,
    }
    return (
      <div className="App" onClick={ hoverNonPortrait } >
        <Modal {...modalProps} />
        <Header addGato={ this.addGato }/>
        <Main />
        <Gatos gatos={ gatos } showModal={ showModal } />
        <Footer deGato={ this.deGato }/>
      </div>
    )
  }
}

export default App
