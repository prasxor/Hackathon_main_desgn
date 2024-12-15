// import fs from "fs";
// import fetch from "node-fetch";

// const API_KEY = "6cd7f944a31643dfb09807fcb927c73f";
// const baseUrl = "https://newsapi.org/v2/top-headlines";

// const fetchNews = async () => {
//   try {
//     // Fetch latest news
//     const latestNewsResponse = await fetch(`${baseUrl}?country=us&pageSize=10&apiKey=${API_KEY}`);
//     const latestNewsData = await latestNewsResponse.json();

//     // Fetch news by categories
//     const categories = ["technology", "education", "sports"];
//     const categoryNews = {};

//     for (const category of categories) {
//       const response = await fetch(`${baseUrl}?country=us&category=${category}&pageSize=5&apiKey=${API_KEY}`);
//       const data = await response.json();
//       categoryNews[category.charAt(0).toUpperCase() + category.slice(1)] = data.articles;
//     }

//     // Combine data
//     const combinedData = {
//       latestNews: latestNewsData.articles,
//       categories: categoryNews,
//     };

//     // Write to JSON file
//     const filePath = "./newsData.json";
//     fs.writeFileSync(filePath, JSON.stringify(combinedData, null, 2), "utf-8");
//     console.log("News data saved to:", filePath);
//   } catch (error) {
//     console.error("Error fetching news:", error);
//   }
// };

// fetchNews();

import fs from 'fs';
import fetch from 'node-fetch';
import cron from 'node-cron'; // Importing node-cron for scheduling

const API_KEY = '6cd7f944a31643dfb09807fcb927c73f';
const baseUrl = 'https://newsapi.org/v2/top-headlines';

// Function to fetch news data and save to JSON file
const fetchNews = async () => {
  try {
    // Fetch latest news
    const latestNewsResponse = await fetch(
      `${baseUrl}?country=us&pageSize=10&apiKey=${API_KEY}`
    );
    const latestNewsData = await latestNewsResponse.json();

    // Fetch news by categories
    const categories = ['technology', 'business', 'sports', 'entertainment', 'health', 'general', 'science'];
    const categoryNews = {};

    for (const category of categories) {
      const response = await fetch(
        `${baseUrl}?country=us&category=${category}&pageSize=5&apiKey=${API_KEY}`
      );
      const data = await response.json();
      categoryNews[category.charAt(0).toUpperCase() + category.slice(1)] = data.articles;
    }

    // Combine data
    const combinedData = {
      latestNews: latestNewsData.articles,
      categories: categoryNews,
    };

    // Path to save the JSON file
    const filePath = './newsData.json'; // Adjust the path based on your project structure

    // Write to JSON file
    fs.writeFileSync(filePath, JSON.stringify(combinedData, null, 2), 'utf-8');
    console.log('News data saved to:', filePath);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};

// Schedule the task to run every 24 hours (cron job)
cron.schedule('0 0 * * *', () => {
  console.log('Fetching and saving news data...');
  fetchNews();
});

// Run the news fetch immediately to ensure the initial update
fetchNews();

