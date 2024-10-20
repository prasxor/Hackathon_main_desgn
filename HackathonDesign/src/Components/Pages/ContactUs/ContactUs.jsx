import React from 'react'
import Navbar from '../../Elements/Navbar/Navbar'
import KeyHighlights from '../../Elements/Atoms/KeyHighlights/KeyHighlights'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div id='ContactUsMainContainer'>
      <div className="NavbarContactUsContainer">
        <Navbar/>
      </div>
      <div className='KeyHighlightsContactUsContainer'>
        <KeyHighlights text={"Contact Us"}/>
      </div>
      <div className='ContactUsInputContainer'>
        <div className="ContactUsInputContainerTop">
          <h1>We’d Love to Hear From You!</h1>
        </div>
        <div className="ContactUsInputContainerBottom">
          <div className="ContactUsInputContainerBottomLeft">
            <form action="#">
              <input type="text" />
              <input type="email" name="" id="" />
              <textarea name="" id=""></textarea>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>

          </div>
          <div className="ContactUsInputContainerBottomRight"></div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
