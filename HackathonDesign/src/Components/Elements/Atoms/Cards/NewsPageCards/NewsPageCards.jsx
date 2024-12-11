import React from 'react'
import "./NewsPageCards.css"
import Image from '../../../../../assets/banner-sizes.jpg'

const NewsPageCards = () => {
  return (
      <div className="NewsPageCardsSubContainer">
        <div className="NewsPageSubContainerTop">
          <img src={Image} alt="" />
        </div>
        <div className="NewsPageSubContainerBottom">
          <h3>Hellow there was an new news from the outsider</h3>
        </div>
      </div>
  )
}

export default NewsPageCards
