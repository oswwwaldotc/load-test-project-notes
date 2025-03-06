/**
 * Load Test Script using K6 Trend Metrics
 * This script performs load testing on multiple API endpoints using Trend metrics
 * to track waiting times across different endpoints
 * 
 * Features:
 * - Makes HTTP GET requests to categories, users and products endpoints
 * - Tracks waiting time trends for each endpoint
 * - Simulates multiple virtual users
 */

import http from "k6/http";
import { Trend } from "k6/metrics";

// Test configuration options
export const options = {
  vus: 100,      // Number of virtual users (concurrent users)
  duration: "30s" // Test duration in seconds
};

// Initialize trend metrics to track waiting times for each endpoint
const myTrend01 = new Trend("waiting_time_01"); // Categories endpoint waiting time
const myTrend02 = new Trend("waiting_time_02"); // Users endpoint waiting time
const myTrend03 = new Trend("waiting_time_03"); // Products endpoint waiting time

/**
 * Default function that K6 runs for each virtual user
 * Makes HTTP GET requests to three different endpoints and records waiting times
 * 
 * Metrics tracked:
 * - waiting_time_01: Waiting time trend for categories endpoint
 * - waiting_time_02: Waiting time trend for users endpoint
 * - waiting_time_03: Waiting time trend for products endpoint
 * 
 * @returns {void}
 */
export default function () {
  let categoriesResponse = http.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  myTrend01.add(categoriesResponse.timings.waiting);
  let usersResponse = http.get("https://api.escuelajs.co/api/v1/users");
  myTrend02.add(usersResponse.timings.waiting);
  let productsResponse = http.get("https://api.escuelajs.co/api/v1/products");
  myTrend03.add(productsResponse.timings.waiting);
}
