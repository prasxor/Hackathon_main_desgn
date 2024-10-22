import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
import "./ContactUs.css";
import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn"
import Footer from "../../Elements/Footer/Footer"
import InputNumber from "../../Elements/Atoms/InputNumber/InputNumber";

const ContactUs = () => {
  return (
    <div id="ContactUsMainContainer">
      {/* <div className="NavbarContactUsContainer">
        <Navbar />
      </div> */}
      <div className="KeyHighlightsContactUsContainer">
        <KeyHighlights text={"Contact Us"} />
      </div>
      <div className="ContactUsInputContainer">
        <div className="ContactUsInputContainerTop">
          <h1>We’d Love to Hear From You!</h1>
        </div>
        <div className="ContactUsInputContainerBottom">
          <form action="#">
            <div className="ContactUsInputContainerBottomMainInput">
              <ContactInput type={"text"} label={"Name"} />
              <ContactInput type={"email"} label={"Email address"} />
              {/* <ContactInput type={"number"} label={"Phone number"} /> */}
              <ContactInput type={"number"} label={"Phone number"} minLength={10} maxLength={11} />
              <ContactInput type={"text"} label={"Interested in"} />
              <div className="ContactUsTextarea">
                <textarea
                  name="textarea"
                  id=""
                  placeholder="How can we help ?"
                ></textarea>
              </div>
              <div className="contactBtn">
                <ContactBtn title={"Submit"}/>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="Contactfooter">
        <Footer/>
      </div> */}
    </div>
  );
};

export default ContactUs;
