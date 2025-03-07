/**
 * Load Test Script using K6 Rate Metrics
 * This script performs load testing on a product API endpoint using Rate metrics
 * to track the success rate of product requests
 * 
 * Features:
 * - Makes HTTP GET requests to random product IDs
 * - Tracks success rate using Rate metric
 * - Simulates multiple virtual users
 */

import http from "k6/http";
import { Rate } from "k6/metrics";

// Test configuration options
export const options = {
  vus: 100,      // Number of virtual users (concurrent users)
  duration: "30s" // Test duration in seconds
};

// Initialize rate metric to track successful product requests
const myRate = new Rate("called_products");

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET request to a random product ID and records success/failure
 * 
 * Metrics tracked:
 * - called_products: Rate of successful product requests (non-404 responses)
 * 
 * @returns {void}
 */
export default function () {
  const request = http.get(
    `https://api.escuelajs.co/api/v1/products/${Math.floor(
      Math.random() * 300
    )}`
  );
  if (request.status != 404) {
    myRate.add(1); // Success
  } else {
    myRate.add(0); // Failure
  }
}
