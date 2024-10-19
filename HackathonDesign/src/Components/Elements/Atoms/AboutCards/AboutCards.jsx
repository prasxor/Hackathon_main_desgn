import React from 'react'
import './AboutCards.css'
import Image from '../../../../assets/FooterCardsimg.png'

const AboutCards = () => {
  return (
    <div id='AboutCardsContainer'>
      <div className="AboutCardsContainerLeft">
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio iusto hic ullam dolores laborum dolor culpa officiis quas voluptate. Placeat, harum dolore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus culpa perspiciatis deserunt autem voluptatem ad similique magnam, explicabo vero velit? Cum sequi nam corporis earum velit consectetur unde dolorem quasi, nostrum necessitatibus corrupti molestias harum adipisci odit iure reiciendis deleniti? Dolorem at minima voluptates animi beatae ad odit. Eveniet tenetur est quia, modi possimus at? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat provident saepe consequuntur assumenda eum quisquam quas eaque eveniet corporis nihil. Pariatur, corporis expedita!</p>
      </div>
      <div className="AboutCardsContainerRight">
        <img src={Image} alt="" />
      </div>
    </div>
  )
}

export default AboutCards
