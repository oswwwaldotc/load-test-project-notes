/**
 * Load Test Script using K6 Counter Metrics
 * This script performs load testing on a product API endpoint using Counter metrics
 * to track the number of calls to different endpoints
 * 
 * Features:
 * - Randomly calls one of three API endpoints
 * - Tracks number of calls to each endpoint using Counter metrics
 * - Simulates multiple virtual users
 */

import http from "k6/http";
import { Counter } from "k6/metrics";

// Test configuration options
export const options = {
  vus: 100,      // Number of virtual users (concurrent users)
  duration: "30s" // Test duration in seconds
};

// Initialize counters to track API calls
const categoriesCounter = new Counter("called_categories");
const usersCounter = new Counter("called_users"); 
const productsCounter = new Counter("called_products");

/**
 * Default function that K6 runs for each virtual user
 * Makes random HTTP GET requests to one of three endpoints
 * and increments the corresponding counter
 * 
 * @returns {void}
 */
export default function () {
  // Randomly select which endpoint to call
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      let categoriesResponse = http.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      categoriesCounter.add(1);
      break;

    case 1:
      let usersResponse = http.get("https://api.escuelajs.co/api/v1/products");
      usersCounter.add(1);
      break;
    case 2:
      let productsResponse = http.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      productsCounter.add(1);
      break;
    default:
      break;
  }
}
