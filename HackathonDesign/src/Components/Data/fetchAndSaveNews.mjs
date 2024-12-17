// import fs from 'fs';
// import fetch from 'node-fetch';
// import cron from 'node-cron'; // Importing node-cron for scheduling

// const API_KEY = '6cd7f944a31643dfb09807fcb927c73f';
// const baseUrl = 'https://newsapi.org/v2/top-headlines';

// // Function to fetch news data and save to JSON file
// const fetchNews = async () => {
//   try {
//     // Fetch latest news
//     const latestNewsResponse = await fetch(
//       `${baseUrl}?country=us&pageSize=10&apiKey=${API_KEY}`
//     );
//     const latestNewsData = await latestNewsResponse.json();

//     // Fetch news by categories
//     const categories = ['technology', 'business', 'sports', 'entertainment', 'health', 'general', 'science'];
//     const categoryNews = {};

//     for (const category of categories) {
//       const response = await fetch(
//         `${baseUrl}?country=us&category=${category}&pageSize=5&apiKey=${API_KEY}`
//       );
//       const data = await response.json();
//       categoryNews[category.charAt(0).toUpperCase() + category.slice(1)] = data.articles;
//     }

//     // Combine data
//     const combinedData = {
//       latestNews: latestNewsData.articles,
//       categories: categoryNews,
//     };

//     // Path to save the JSON file
//     const filePath = './newsData.json'; // Adjust the path based on your project structure

//     // Write to JSON file
//     fs.writeFileSync(filePath, JSON.stringify(combinedData, null, 2), 'utf-8');
//     console.log('News data saved to:', filePath);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//   }
// };

// // Schedule the task to run every 24 hours (cron job)
// cron.schedule('0 0 * * *', () => {
//   console.log('Fetching and saving news data...');
//   fetchNews();
// });

// // Run the news fetch immediately to ensure the initial update
// fetchNews();

import fs from "fs";
import fetch from "node-fetch";
import cron from "node-cron";

const API_KEY = "6cd7f944a31643dfb09807fcb927c73f";
const baseUrl = "https://newsapi.org/v2/top-headlines";
const filePath = "./newsData.json"; // Path to save JSON file

/**
 * Fetch latest news headlines
 */
const fetchLatestNews = async () => {
  try {
    const response = await fetch(
      `${baseUrl}?country=us&pageSize=10&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (!data || !data.articles) {
      throw new Error("Invalid latest news data structure");
    }

    console.log("Fetched latest news.");
    return data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error.message);
    return [];
  }
};

/**
 * Fetch news by category
 * @param {string} category - The news category to fetch
 */
const fetchCategoryNews = async (category) => {
  try {
    const response = await fetch(
      `${baseUrl}?country=us&category=${category}&pageSize=5&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (!data || !data.articles) {
      throw new Error(`Invalid ${category} news data structure`);
    }

    console.log(`Fetched ${category} news.`);
    return data.articles;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error.message);
    return [];
  }
};

/**
 * Combine and save news data to a file
 * @param {Object} data - Data to save
 */
const saveNewsData = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, "utf-8");
    console.log("News data saved to:", filePath);
  } catch (error) {
    console.error("Error saving news data:", error.message);
  }
};

/**
 * Main function to fetch and save news
 * Allows fetching only specific categories if needed
 * @param {Array<string>} categories - Optional list of categories to fetch
 * @param {boolean} fetchLatest - Whether to fetch latest news
 */
const fetchAndSaveNews = async (categories = [], fetchLatest = true) => {
  try {
    const newsData = {};

    // Fetch latest news only if needed
    if (fetchLatest) {
      newsData.latestNews = await fetchLatestNews();
    }

    // Fetch categories
    const targetCategories =
      categories.length > 0
        ? categories
        : [
            "technology",
            "business",
            "sports",
            "entertainment",
            "health",
            "general",
            "science",
          ];

    for (const category of targetCategories) {
      const categoryNews = await fetchCategoryNews(category);
      if (categoryNews.length > 0) {
        newsData[category] = categoryNews;
      } else {
        console.warn(`No articles fetched for ${category}`);
      }
    }

    saveNewsData(newsData);
  } catch (error) {
    console.error("Error in fetchAndSaveNews:", error.message);
  }
};

/**
 * Cron job to fetch news every 24 hours
 */
cron.schedule("0 0 * * *", () => {
  console.log("Running scheduled task to fetch all news...");
  fetchAndSaveNews();
});

// Immediate fetch (default: fetch all news)
fetchAndSaveNews();

/**
 * Example: Fetch only specific categories when required
 * Uncomment the line below to fetch only technology and sports news
 */
// fetchAndSaveNews(['technology', 'sports'], false);

