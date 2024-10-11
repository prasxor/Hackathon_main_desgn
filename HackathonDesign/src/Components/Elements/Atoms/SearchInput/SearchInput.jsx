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
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Match any valid URL
    const match = data.match(urlRegex);
    return match ? match[0] : ""; // Return the first match, or empty if not found
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
          title={"Search"}
        />
      </form>
      {/* <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-black my-4 shadow-lg transition-all duration-500 transform">
        <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
      </div> */}
    </>
  );
};

export default SearchInput;
