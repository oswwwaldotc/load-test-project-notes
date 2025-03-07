/**
 * Load Test Script using K6 Gauge Metrics
 * This script performs load testing on a product API endpoint using Gauge metrics
 * to track the waiting time of API calls
 * 
 * Features:
 * - Makes HTTP GET requests to products endpoint
 * - Tracks waiting time using Gauge metric
 * - Simulates multiple virtual users
 */

import http from "k6/http";
import { Gauge } from "k6/metrics";

// Test configuration options
export const options = {
  vus: 100,      // Number of virtual users (concurrent users)
  duration: "30s" // Test duration in seconds
};

// Initialize gauge to track API call waiting time
const myGauge = new Gauge("last_call_time");

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET request to products endpoint and records waiting time
 * 
 * Metrics tracked:
 * - last_call_time: Waiting time for most recent API call
 * 
 * @returns {void}
 */
export default function () {
  const request = http.get("https://api.escuelajs.co/api/v1/products");
  myGauge.add(request.timings.waiting);
  console.log(myGauge.name);
}
