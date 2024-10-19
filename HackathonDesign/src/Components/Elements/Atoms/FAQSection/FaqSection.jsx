import React, { useState } from "react";
import FAQItem from "../FAQItems/FaqItems";
import "./FaqSection.css"; // Importing FAQItem component

// FaqSection Component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqData = [
    {
      question:
        "How does your service determine if a news article is real or fake? ",
      answer:
        "Our service uses the Gemini API, which analyzes news articles and compares them against a database of verified information. The API provides a verdict based on its findings, helping us inform you whether the article is credible or not.",
    },
    {
      question: "What types of news articles can I submit?",
      answer:
        "You can submit any news article, whether it's from a website, blog, or social media. However, the best results come from articles with clear sources and context.",
    },
    {
      question:
        "What should I do if I believe the fact-checking result is incorrect?",
      answer:
        "If you believe our result is inaccurate, please contact us through our feedback form. We value user input and continually strive to improve our verification process.",
    },
    {
      question: " Can I submit articles in languages other than English?",
      answer:
        "Currently, our service primarily supports articles in English. We are working on expanding to other languages in the future, so stay tuned!",
    },
    {
      question: "Do you store the articles I submit?",
      answer:
        "We do not store your submitted articles for privacy reasons. Each submission is processed in real-time, and we do not retain personal data or content.",
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
