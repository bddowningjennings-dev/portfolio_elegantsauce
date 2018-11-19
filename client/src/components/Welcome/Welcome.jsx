import React, { Component } from 'react'

import me from '../../assets/me.jpg'
import redArrow from '../../assets/red_arrow.svg'

const handlePortraitClick = e => {
  e && e.stopPropagation()
  const portrait_label = document.getElementById('portrait_label')
  const { target } = { ...e }
  if (target.className.split(' ').includes('hover_portrait')) {
    target.classList.remove('hover_portrait')
    portrait_label.classList.remove('hover_label')
  } else {
    target.classList.add('hover_portrait')
    portrait_label.classList.add('hover_label')
  }
}

const phraseFactory = (phrase, spacer) => {
  const tidbits = [
    "and I'm currently available for hire...",
    'and I enjoy food...',
    'and I know Mathematics...',
    'and I have 100+ years experience...',
    'and I love dogs...',
    'and I guess I like humor just fine...',
    '& ❤❤❤ long walks on the beach.......',
  ]
  let letter_count = 0,
    phrase_count = 0,
    counter = 0

  const printPhrase = () => {
    if (phrase.innerHTML.length < tidbits[phrase_count].length) {
      phrase.innerHTML = phrase.innerHTML + tidbits[phrase_count][letter_count]
      letter_count++
    } else if (counter < 10) {
      counter++
      if (spacer.className.split(' ').includes('flash')) {
        spacer.classList.remove('flash')
      } else {
        spacer.classList.add('flash')
      }
    } else {
      counter = 0
      letter_count = 0
      phrase.innerHTML = ''
      phrase_count++
      if (phrase_count === tidbits.length) {
        phrase_count = 0
      }
    }
  }
  const shufflePhrases = (num = 1) => {
    for (let round in Array(num).fill()) {
      for (let order in tidbits) {
        let indx = Math.floor(Math.random() * (tidbits.length - order))
        tidbits.push(tidbits[indx])
        tidbits.splice(indx, 1)
      }
    }
  }
  const getPhrases = setInterval(printPhrase, 120)
  const stopPhrases = () => {
    clearInterval(getPhrases)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
  return {
    shufflePhrases: shufflePhrases,
    printPhrase: printPhrase,
    getPhrases: () => getPhrases,
  }
}

export default class Welcome extends Component {
  componentDidMount() {
    let phrase = document.getElementById('phrase')
    let spacer = document.getElementById('spacer')
    const phrasePlace = phraseFactory(phrase, spacer)
    phrasePlace.shufflePhrases(7)
    phrasePlace.getPhrases()
  }
  render() {
    return (
      <section className="Welcome" id="welcome">
        <div className="portraits">
          <img id="portrait" src={me} alt="portrait of meee" srcSet="" onClick={handlePortraitClick} />
        </div>
        <div id="portrait_label" className="portrait_label">
          <img src={redArrow} alt="<<" srcSet="" />
          <h1>Hi, that's my face!</h1>
        </div>
        <h3>
          <span>
            I'm a problem solver and <em>solution</em> developer{' '}
          </span>{' '}
          <br />
          <span id="phrase" />
          <span id="spacer" className="spacer" />
        </h3>
      </section>
    )
  }
}
