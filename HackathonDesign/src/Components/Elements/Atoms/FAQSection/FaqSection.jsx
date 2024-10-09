import React, { useState } from "react";
import FAQItem from "../FAQItems/FaqItems";
import './FaqSection.css' // Importing FAQItem component

// FaqSection Component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqData = [
    {
      question:
        "How does your service determine if a news article is real or fake?",
      answer:
        "The verification process is usually quick, often taking just a few seconds. However, depending on the complexity of the article or current system load, it might take a bit longer.",
    },
    {
      question: "What types of news articles can I submit?",
      answer:
        "You can submit any news articles, blogs, or reports. We support a wide range of formats.",
    },
    {
      question:
        "What should I do if I believe the fact-checking result is incorrect?",
      answer:
        "You can reach out to our support team with the article details and we will reassess the case.",
    },
    {
      question: "Can I submit articles in languages other than English?",
      answer:
        "Currently, we only support articles in English, but we are working on adding more language support.",
    },
    {
      question: "Do you store the articles I submit?",
      answer:
        "No, we do not store any articles. Your submissions are processed in real-time and not kept in any database.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen FaqSectionMainComp">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-2xl mx-auto FaqSectionMainCompContainer">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
