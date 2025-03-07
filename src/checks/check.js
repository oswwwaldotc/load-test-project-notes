/**
 * Basic Load Test Script using K6
 * This script performs load testing on a product API endpoint
 * 
 * Features:
 * - Tests API response status
 * - Measures response time performance
 * - Simulates multiple virtual users
 */

import { check } from "k6";
import http from "k6/http";

// Test configuration options
export const options = {
  vus: 20,        // Number of virtual users (concurrent users)
  duration: "15s", // Test duration in seconds
};

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET request to products API and performs checks
 * 
 * Checks performed:
 * 1. Response status code is 200
 * 2. Response time is under 500ms
 * 
 * @returns {void}
 */
export default function () {
  // Make GET request to products endpoint
  const response = http.get("https://api.escuelajs.co/api/v1/products");

  // Perform checks on the response
  check(response, {
    "status is 200": (r) => r.status === 200,                    // Verify successful response
    "transaction is below 500ms": (r) => r.timings.duration < 500 // Verify performance threshold
  });
}

/**
 * Usage:
 * Run the test with: k6 run check.js
 * 
 * Expected Output:
 * - Success rate of HTTP status checks
 * - Success rate of performance threshold checks
 * - Various metrics about the test execution
 * 
 * Example metrics:
 * - http_reqs: Total number of HTTP requests
 * - http_req_duration: HTTP request duration
 * - checks: Rate of successful checks
 * - vus: Number of virtual users
 */
