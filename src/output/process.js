/**
 * Load Test Script with Staged Load Profile
 * This script performs load testing on a product API endpoint using a staged approach
 * to gradually ramp up and down the number of virtual users
 * 
 * Features:
 * - Makes HTTP GET requests to products endpoint
 * - Uses stages to control virtual user count over time
 * - Can export test results to JSON file using:
 *   k6 run --out json=file.json output/process.js
 */

import http from "k6/http";

export const options = {
  stages: [
    { duration: "60s", target: 100 }, // Ramp up to 100 VUs over 1 minute
    { duration: "180s", target: 100 }, // Stay at 100 VUs for 3 minutes
    { duration: "60s", target: 0 },    // Ramp down to 0 VUs over 1 minute
  ],
};

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET request to products endpoint
 * 
 * @returns {void}
 */
export default function () {
  let response = http.get("https://api.escuelajs.co/api/v1/products");
}
