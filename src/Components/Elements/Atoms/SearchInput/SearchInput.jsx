// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import "./SearchInput.css";
// import TopBtn from "../Button/TopBtn/TopBtn";

// const SearchInput = ({ searchPlaceholder, onDataReceived }) => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const finalInput = `Given the following news information, determine whether it is true or false. Use reputable sources to verify the information. If the information is true, provide the accuracy as a percentage between 1 and 100% along with the URL of the website where the data was gathered. If the information is false, simply return 'False' with accuracy : News: "${question}"`;

//   async function generateAnswer(e) {
//     setGeneratingAnswer(true);
//     e.preventDefault();
//     setAnswer("Loading your answer... \n It might take up to 10 seconds");
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//           import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
//         }`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: finalInput }] }],
//         },
//       });

//       const responseData = response.data.candidates[0].content.parts[0].text;

//       setAnswer(responseData);
//       console.log(responseData);

//       // Process the response to extract truthValue, accuracy, and link
//       const { truthValue, accuracy, link } = processResponseData(responseData);

//       // Send data to parent
//       onDataReceived(truthValue, accuracy, link);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

//   // Function to process the response data
//   const processResponseData = (data) => {
//     const trimmedData = data.trim();

//     let truthValue = "";
//     let accuracy = "";
//     let link = "";

//     // Regex to match the accuracy percentage and URL
//     const accuracyRegex = /Accuracy:\s*(\d+)%/;
//     const urlRegex = /(https?:\/\/[^\s]+)/g;

//     if (trimmedData.startsWith("True")) {
//       truthValue = "true";
//       const accuracyMatch = trimmedData.match(accuracyRegex);
//       const urlMatch = trimmedData.match(urlRegex);

//       accuracy = accuracyMatch ? accuracyMatch[1] : "Unknown";
//       link = urlMatch ? urlMatch[0] : "";
//     } else if (trimmedData.startsWith("False")) {
//       truthValue = "false";
//       accuracy = "0"; // Assuming false has 0% accuracy
//       link = "";
//     } else {
//       console.log("Unexpected format:", trimmedData);
//     }

//     console.log("truthvalue:" + truthValue)
//     console.log("accuracy:" + accuracy)
//     console.log("link:" + link)

//     return { truthValue, accuracy, link };

//   };

//   return (
//     <>
//       <form
//         className="SearchInputContainer"
//         action="#"
//         onSubmit={generateAnswer}
//       >
//         <input
//           type="text"
//           id="SearchInputContainerFormInput"
//           placeholder={searchPlaceholder}
//           required
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <TopBtn
//           className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
//             generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={generatingAnswer}
//           type="submit"
//           title={
//             generatingAnswer ? (
//               <div
//                 className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"
//                 role="status"
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             ) : (
//               "Search"
//             )
//           }
//         />
//       </form>
//       {/* Display the answer if available */}
//       {answer && (
//         <div className="answer-section">
//           <h3>Answer:</h3>
//           <p>{answer}</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default SearchInput;

// backup

// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import "./SearchInput.css";
// import TopBtn from "../Button/TopBtn/TopBtn";

// const SearchInput = ({ searchPlaceholder, onDataReceived }) => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const finalInput = `Given the following news information, determine whether it is true or false. If the information is true, provide the corresponding URL of the website where the data was gathered from. If it is false, simply return 'False'. News: "${question}"`;

//   async function generateAnswer(e) {
//     setGeneratingAnswer(true);
//     e.preventDefault();
//     setAnswer("Loading your answer... \n It might take up to 10 seconds");
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//           import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
//         }`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: finalInput }] }],
//         },
//       });

//       const responseData = response.data.candidates[0].content.parts[0].text;

//       setAnswer(responseData);
//       console.log(responseData)

//       // Process the response to extract truthValue and link
//       const { truthValue, link } = processResponseData(responseData);

//       // Send data to parent
//       onDataReceived(truthValue, link);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

//   // Function to process the response data
//   const processResponseData = (data) => {
//     const trimmedData = data.trim();

//     let truthValue = "";
//     let link = "";

//     if (trimmedData.startsWith("True")) {
//       truthValue = "true";
//       link = extractLink(trimmedData);
//     } else if (trimmedData.startsWith("False")) {
//       truthValue = "false";
//       link = "";
//     } else {
//       console.log("Unexpected format:", trimmedData);
//     }

//     return { truthValue, link };
//   };

//   // Function to extract link from the string
//   const extractLink = (data) => {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     const match = data.match(urlRegex);
//     return match ? match[0] : "";
//   };

//   return (
//     <>
//       <form
//         className="SearchInputContainer"
//         action="#"
//         onSubmit={generateAnswer}
//       >
//         <input
//           type="text"
//           id="SearchInputContainerFormInput"
//           placeholder={searchPlaceholder}
//           required
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <TopBtn
//           className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
//             generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={generatingAnswer}
//           type="submit"
//           title={
//             generatingAnswer ? (
//               <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             ) : (
//               "Search"
//             )
//           }
//         />
//       </form>
//     </>
//   );
// };
// export default SearchInput;

// experiment code :

import React from "react";
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./SearchInput.css";
import TopBtn from "../Button/TopBtn/TopBtn";

const SearchInput = ({ searchPlaceholder, onDataReceived }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const finalInput = `Given the following news information, determine whether it is true or false. If the information is true, provide the corresponding URL of the website where the data was gathered from. If it is false, simply return 'False'. News: "${question}"`;

  // List of API keys
  const apiKeys = [
    import.meta.env.VITE_API_KEY_1,
    import.meta.env.VITE_API_KEY_2,
    import.meta.env.VITE_API_KEY_3,
  ];

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    let responseData = null;
    for (let i = 0; i < apiKeys.length; i++) {
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKeys[i]}`,
          method: "post",
          data: {
            contents: [{ parts: [{ text: finalInput }] }],
          },
        });

        // Process response
        responseData = response.data.candidates[0].content.parts[0].text;
        setAnswer(responseData);

        // Extract truthValue and link
        const { truthValue, link } = processResponseData(responseData);

        // Send data to parent
        onDataReceived(truthValue, link);
        break; // Exit the loop if successful
      } catch (error) {
        console.error(`API Key ${i + 1} failed`, error);

        // If all APIs fail, show an error
        if (i === apiKeys.length - 1) {
          setAnswer("Sorry - All APIs failed. Please try again later.");
        }
      }
    }

    setGeneratingAnswer(false);
  }

  // Function to process the response data
  const processResponseData = (data) => {
    const trimmedData = data.trim();

    let truthValue = "";
    let link = "";

    if (trimmedData.startsWith("True")) {
      truthValue = "true";
      link = extractLink(trimmedData);
    } else if (trimmedData.startsWith("False")) {
      truthValue = "false";
      link = "";
    } else {
      console.log("Unexpected format:", trimmedData);
    }

    return { truthValue, link };
  };

  // Function to extract link from the string
  const extractLink = (data) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = data.match(urlRegex);
    return match ? match[0] : "";
  };

  return (
    <>
      <form
        className="SearchInputContainer"
        action="#"
        onSubmit={generateAnswer}
      >
        <input
          type="text"
          id="SearchInputContainerFormInput"
          placeholder={searchPlaceholder}
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TopBtn
          className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
            generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={generatingAnswer}
          type="submit"
          title={
            generatingAnswer ? (
              <div
                className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Search"
            )
          }
        />
      </form>
    </>
  );
};

export default SearchInput;
