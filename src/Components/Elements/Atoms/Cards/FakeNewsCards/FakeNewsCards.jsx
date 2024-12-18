import React from 'react'
import './FakeNewsCards.css'
// import Img from '../../../../../assets/ThirdSectioncards.png'

const FakeNewsCards = ({Image, Title, Para}) => {
  console.log({Image})
  return (
    <div className='FakeNewsCardsContainer'>
      <div className="FakeNewsCardsContainerTop">
        <img src={Image} alt="" />
      </div>
      <div className="FakeNewsCardsContainerBottom">
        <h1>{Title}</h1>
        <p>{Para}</p>
      </div>
    </div>
  )
}

export default FakeNewsCards
