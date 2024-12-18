import React from 'react'
import './HightlightCards.css'
// import Logo from '../../../../../assets/firstCardsfirst.png'

const HightlightCards = ({logo, title, desc}) => {
  return (
    <div className='HightlightCardsContainer'>
      <div className='HightlightCardsTop'>
        <img src={logo} alt="" />
        <p>{title}</p>
      </div>
      <div className='HightlightCardsBottom'>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default HightlightCards
