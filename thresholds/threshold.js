/**
 * Load Test Script with Basic Thresholds
 * This script performs load testing on a product API endpoint with thresholds
 * for request duration and failure rates
 * 
 * Features:
 * - Makes HTTP GET requests to random product IDs
 * - Sets thresholds for request duration (95th percentile < 500ms)
 * - Sets threshold for failure rate (< 35%)
 * - Checks response status and timing
 */

import { check } from "k6";
import http from "k6/http";

// Test configuration with thresholds
export const options = {
  vus: 20,                    // Run with 20 virtual users
  duration: "15s",            // For 15 seconds
  thresholds: {
    // 95% of requests should complete within 500ms
    http_req_duration: ["p(95)<500"],
    // Fail if error rate exceeds 35%
    http_req_failed: ["rate<0.35"],
  },
};

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET request to random product ID and verifies response
 * 
 * @returns {void}
 */
export default function () {
  // Get random product between ID 1-300
  const response = http.get(
    `https://api.escuelajs.co/api/v1/products/${Math.floor(
      Math.random() * 300
    )}`
  );

  // Verify response status and timing
  check(response, {
    "status is 200": (r) => r.status === 200,
    "transaction is below 500ms": (r) => r.timings.duration < 500,
  });
}
