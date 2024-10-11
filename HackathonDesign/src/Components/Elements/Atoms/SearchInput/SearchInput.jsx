// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import "./SearchInput.css";
// import TopBtn from "../Button/TopBtn/TopBtn";

// const SearchInput = ({ label, searchPlaceholder, onDataReceived }) => {
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

//       // Extract truthValue and link
//       const truthValue = responseData.slice(0, 5);
//       const link = responseData.slice(5).trim(); // Remove any leading whitespace
//       // const [truthValue, link] = answer.split(" ", 2);

//       // Send data to parent
//       onDataReceived(truthValue, link);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

//   return (
//     <>
//       <form
//         className="SearchInputContainer"
//         action="#"
//         onSubmit={generateAnswer}
//       >
//         <input
//           type="Text"
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
//           title={"Search"}
//         />
//       </form>
//       <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-black my-4 shadow-lg transition-all duration-500 transform">
//         <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
//       </div>
//     </>
//   );
// };

// export default SearchInput;


import React from "react";
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./SearchInput.css";
import TopBtn from "../Button/TopBtn/TopBtn";

const SearchInput = ({ label, searchPlaceholder, onDataReceived }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const finalInput = `Given the following news information, determine whether it is true or false. If the information is true, provide the corresponding URL of the website where the data was gathered from. If it is false, simply return 'False'. News: "${question}"`;

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: finalInput }] }],
        },
      });

      const responseData = response.data.candidates[0].content.parts[0].text;

      setAnswer(responseData);

      // Process the response to extract truthValue and link
      const { truthValue, link } = processResponseData(responseData);

      // Send data to parent
      onDataReceived(truthValue, link);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  // Function to process the response data
  const processResponseData = (data) => {
    // Trim the data to remove extra spaces
    const trimmedData = data.trim();
    
    // Initialize variables
    let truthValue = "";
    let link = "";

    // Check if the data starts with "True" or "False"
    if (trimmedData.startsWith("True")) {
      truthValue = "true"; // Normalize to lowercase
      link = extractLink(trimmedData);
    } else if (trimmedData.startsWith("False")) {
      truthValue = "false"; // Normalize to lowercase
      link = ""; // No link for false values
    } else {
      console.log("Unexpected truthValue format:", trimmedData);
      return { truthValue, link }; // Return empty values for unexpected format
    }

    return { truthValue, link };
  };

  // Function to extract link from the string
  const extractLink = (data) => {
    // Remove "URL: " if it exists and split to extract the URL
    const urlRegex = /URL:\s*(https?:\/\/[^\s]+)/; // Regex to match URLs

    // Check if the data contains "URL:"
    const match = urlRegex.exec(data);
    if (match) {
      return match[1]; // Return the matched URL
    } else {
      // If no "URL:", look for a URL directly in the string
      const words = data.split(" ");
      const possibleLink = words.find(word => word.startsWith("http"));
      return possibleLink ? possibleLink : ""; // Return found URL or empty string
    }
  };

  return (
    <>
      <form
        className="SearchInputContainer"
        action="#"
        onSubmit={generateAnswer}
      >
        <input
          type="Text"
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
          title={"Search"}
        />
      </form>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-black my-4 shadow-lg transition-all duration-500 transform">
        <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
      </div>
    </>
  );
};

export default SearchInput;
