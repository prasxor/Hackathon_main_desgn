import React from 'react'
import './FakeNewsCards.css'
// import Img from '../../../../../assets/ThirdSectioncards.png'

const FakeNewsCards = ({Image, Title}) => {
  console.log({Image})
  return (
    <div className='FakeNewsCardsContainer'>
      <div className="FakeNewsCardsContainerTop">
        <img src={Image} alt="" />
      </div>
      <div className="FakeNewsCardsContainerBottom">
        <p>{Title}</p>
      </div>
    </div>
  )
}

export default FakeNewsCards
