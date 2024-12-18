// import React from "react";
// import Navbar from "../../Elements/Navbar/Navbar";
// import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
// import "./ContactUs.css";
// import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
// import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";
// import Footer from "../../Elements/Footer/Footer";
// import InputNumber from "../../Elements/Atoms/InputNumber/InputNumber";

// const ContactUs = () => {
//   return (
//     <div id="ContactUsMainContainer">
//       {/* <div className="NavbarContactUsContainer">
//         <Navbar />
//       </div> */}
//       <div className="KeyHighlightsContactUsContainer">
//         <KeyHighlights text={"Contact Us"} />
//       </div>
//       <div className="ContactUsInputContainer">
//         <div className="ContactUsInputContainerTop">
//           <h1>We’d Love to Hear From You!</h1>
//         </div>
//         <div className="ContactUsInputContainerBottom">
//           <form action="#">
//             <div className="ContactUsInputContainerBottomMainInput">
//               <div className="ContactUsInputContainerBottomMainInputSubContainer">
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput typepurpose={"text"} label={"Name"} />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput typepurpose={"email"} label={"Email address"} />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput
//                     typepurpose={"number"}
//                     label={"Phone number"}
//                     minLength={10}
//                     maxLength={11}
//                   />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput typepurpose={"text"} label={"Interested in"} />
//                 </div>
//               </div>
//               <div className="ContactUsTextarea">
//                 <textarea
//                   name="textarea"
//                   id=""
//                   placeholder="How can we help ?"
//                 ></textarea>
//               </div>
//               <div className="contactBtn">
//                 <ContactBtn title={"Submit"} />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

// import React, { useState } from "react";
// import Navbar from "../../Elements/Navbar/Navbar";
// import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
// import "./ContactUs.css";
// import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
// import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";
// import Footer from "../../Elements/Footer/Footer";
// import InputNumber from "../../Elements/Atoms/InputNumber/InputNumber";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interestedIn: "",
//     message: "",
//   });


//   // Add your Google Apps Script URL here
//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbxODzz7Y0AfEftyVsZeEi3muGXfiGMzsgayzOA9EfHdDijerx0iO-xJA34oUZB9In0/exec"; // Replace with your script URL

//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value // Update the correct part of state based on field name
//       }));
//     };
  
//     // Handle form submission
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       const formBody = new URLSearchParams({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         interestedIn: formData.interestedIn,
//         message: formData.message
//       });
  
//       // Make the API call to Google Apps Script to save the data
//       fetch(scriptURL, {
//         method: 'POST',
//         body: formBody
//       })
//         .then((response) => {
//           console.log("Success:", response);
//           // Reset form after successful submission
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             interestedIn: "",
//             message: ""
//           });
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     };
  
//     return (
//       <div id="ContactUsMainContainer">
//         <div className="KeyHighlightsContactUsContainer">
//           <KeyHighlights text={"Contact Us"} />
//         </div>
//         <div className="ContactUsInputContainer">
//           <div className="ContactUsInputContainerTop">
//             <h1>We’d Love to Hear From You!</h1>
//           </div>
//           <div className="ContactUsInputContainerBottom">
//             <form onSubmit={handleSubmit}>
//               <div className="ContactUsInputContainerBottomMainInput">
//                 <div className="ContactUsInputContainerBottomMainInputSubContainer">
//                   <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                     <ContactInput
//                       typepurpose="text"
//                       label="Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                     <ContactInput
//                       typepurpose="email"
//                       label="Email address"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                     <ContactInput
//                       typepurpose="number"
//                       label="Phone number"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                     <ContactInput
//                       typepurpose="text"
//                       label="Interested in"
//                       name="interestedIn"
//                       value={formData.interestedIn}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="ContactUsTextarea">
//                   <textarea
//                     name="message"
//                     placeholder="How can we help?"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                   ></textarea>
//                 </div>
//                 <div className="contactBtn">
//                   <ContactBtn title="Submit" />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default ContactUs;

//   import React, { useState } from "react";
// import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
// import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
// import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";

// const ContactUs = () => {
//   // State to manage form values
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interestedIn: "",
//     message: ""
//   });

//   // Handle input changes
//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value // Update the specific field based on name
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formBody = new URLSearchParams({
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       interestedIn: formData.interestedIn,
//       message: formData.message
//     });

//     // Simulate a submit action
//     console.log("Form submitted:", formBody);

//     // Reset form data after submission
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       interestedIn: "",
//       message: ""
//     });
//   };

//   return (
//     <div id="ContactUsMainContainer">
//       <div className="KeyHighlightsContactUsContainer">
//         <KeyHighlights text={"Contact Us"} />
//       </div>
//       <div className="ContactUsInputContainer">
//         <div className="ContactUsInputContainerTop">
//           <h1>We’d Love to Hear From You!</h1>
//         </div>
//         <div className="ContactUsInputContainerBottom">
//           <form onSubmit={handleSubmit}>
//             <div className="ContactUsInputContainerBottomMainInput">
//               <ContactInput
//                 typepurpose="text"
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//               <ContactInput
//                 typepurpose="email"
//                 label="Email address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               <ContactInput
//                 typepurpose="number"
//                 label="Phone number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//               <ContactInput
//                 typepurpose="text"
//                 label="Interested in"
//                 name="interestedIn"
//                 value={formData.interestedIn}
//                 onChange={handleInputChange}
//               />

//               <div className="ContactUsTextarea">
//                 <textarea
//                   name="message"
//                   placeholder="How can we help?"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 ></textarea>
//               </div>
//               <div className="contactBtn">
//                 <ContactBtn title="Submit" />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


// import React, { useState } from "react";
// import Navbar from "../../Elements/Navbar/Navbar";
// import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
// import "./ContactUs.css";
// import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
// import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";
// import Footer from "../../Elements/Footer/Footer";
// import SubscribedMsg from "../../Elements/Atoms/SubscribedMsg/SubscribedMsg";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interestedIn: "",
//     message: "",
//   });

//   // Add your Google Apps Script URL here
//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbxODzz7Y0AfEftyVsZeEi3muGXfiGMzsgayzOA9EfHdDijerx0iO-xJA34oUZB9In0/exec"; // Replace with your script URL

//   // Handle input changes and update form state
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Update the specific field in formData
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formBody = new URLSearchParams({
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       interestedIn: formData.interestedIn,
//       message: formData.message,
//     });

//     // Make the API call to Google Apps Script to save the data
//     fetch(scriptURL, {
//       method: 'POST',
//       body: formBody,
//     })
//       .then((response) => {
//         console.log("Success:", response);
//         // Reset form after successful submission
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           interestedIn: "",
//           message: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div id="ContactUsMainContainer">
//       <div className="KeyHighlightsContactUsContainer">
//         <KeyHighlights text={"Contact Us"} />
//       </div>
//       <div className="ContactUsInputContainer">
//         <div className="ContactUsInputContainerTop">
//           <h1>We’d Love to Hear From You!</h1>
//         </div>
//         <div className="ContactUsInputContainerBottom">
//           <form onSubmit={handleSubmit}>
//             <div className="ContactUsInputContainerBottomMainInput">
//               <div className="ContactUsInputContainerBottomMainInputSubContainer">
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput
//                     typepurpose="text"
//                     label="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput
//                     typepurpose="email"
//                     label="Email address"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput
//                     typepurpose="number"
//                     label="Phone number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
//                   <ContactInput
//                     typepurpose="text"
//                     label="Interested in"
//                     name="interestedIn"
//                     value={formData.interestedIn}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="ContactUsTextarea">
//                 <textarea
//                   name="message"
//                   placeholder="How can we help?"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 ></textarea>
//               </div>
//               <div className="contactBtn">
//                 <ContactBtn title="Submit" />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
import "./ContactUs.css";
import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";
import Footer from "../../Elements/Footer/Footer";
import SubscribedMsg from "../../Elements/Atoms/SubscribedMsg/SubscribedMsg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // To control form visibility

  // Add your Google Apps Script URL here
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxODzz7Y0AfEftyVsZeEi3muGXfiGMzsgayzOA9EfHdDijerx0iO-xJA34oUZB9In0/exec"; // Replace with your script URL

  // Handle input changes and update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interestedIn: formData.interestedIn,
      message: formData.message,
    });

    // Make the API call to Google Apps Script to save the data
    fetch(scriptURL, {
      method: 'POST',
      body: formBody,
    })
      .then((response) => {
        console.log("Success:", response);
        // Set form submission state to true
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="ContactUsMainContainer">
      <div className="KeyHighlightsContactUsContainer">
        <KeyHighlights text={"Contact Us"} />
      </div>
      <div className="ContactUsInputContainer">
        <div className="ContactUsInputContainerTop">
          <h1>We’d Love to Hear From You!</h1>
        </div>
        <div className="ContactUsInputContainerBottom">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="ContactUsInputContainerBottomMainInput">
                <div className="ContactUsInputContainerBottomMainInputSubContainer">
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="text"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="email"
                      label="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="number"
                      label="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="text"
                      label="Interested in"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="ContactUsTextarea">
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="contactBtn">
                  <ContactBtn title="Submit" />
                </div>
              </div>
            </form>
          ) : (
            <SubscribedMsg
              title={formData.name} // Display the name here after submission
              msgAbove={"Thank you for your interest in us."}
              messageData={"We will get back to you shortly."}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


