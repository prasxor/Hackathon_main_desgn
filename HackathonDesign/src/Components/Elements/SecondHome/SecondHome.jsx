import React from 'react'
import KeyHighlights from '../Atoms/KeyHighlights/KeyHighlights'
import HightlightCards from '../Atoms/Cards/HightlightCards/HightlightCards'
import './SecondHome.css'
import Logo1 from '../../../../src/assets/firstCardsfirst.png'
import Logo2 from '../../../../src/assets/firstCardsSecond.png'
import Logo3 from '../../../../src/assets/firstCardsThird.png'


const SecondHome = () => {

  const cardsData = {
    card1: {
      logo: Logo1,
      title: "Trusted Sources",
      description: "We accurate information from a wide array of vetted and reputable sources, including established news organizations and respected fact-checking agencies."
    },
    card2: {
      logo: Logo2,
      title: "Real-Time Updates",
      description: "Stay informed with our real-time updates on breaking news and trending stories. Our platform continuously monitors developments, ensuring you receive the latest information as it happens."
    },
    card3: {
      logo: Logo3,
      title: "Personalized Alerts",
      description: "Stay ahead of misinformation with our personalized alerts. We send you timely email notifications about trending fake news stories relevant to your interests, helping you stay informed and vigilant."
    }
  };

  return (
    <div className='SecondHomeContainer'>
      <KeyHighlights text={'Key Highlights'}/>
      <p className='SecondHomePara'>What Sets Us Apart</p>
      <div className='HightlightCardsMain'>
        <HightlightCards logo={cardsData.card1.logo} title={cardsData.card1.title} desc={cardsData.card1.description}/>
        <HightlightCards logo={cardsData.card2.logo} title={cardsData.card2.title} desc={cardsData.card2.description}/>
        <HightlightCards logo={cardsData.card3.logo} title={cardsData.card3.title} desc={cardsData.card3.description}/>
      </div>
    </div>
  )
}

export default SecondHome
