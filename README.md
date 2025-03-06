# Test Performance with Node.js and K6
A practical example demonstrating how to implement load testing using K6 and Node.js.

## Overview
This project showcases basic load testing patterns using K6, a modern load testing tool, integrated with a Node.js backend. It demonstrates how to:
- Create simple load test scenarios
- Measure API performance
- Generate performance reports

### Features
- Basic load test scenarios using K6
- HTTP endpoint testing examples
- Performance metrics collection including:
  - Response times
  - Request rates
  - Error rates
  - Virtual user simulation

### Prerequisites
- Node.js (v14 or higher)
- K6 ([Installation Guide](https://grafana.com/docs/k6/latest/set-up/install-k6/))

## Running Tests
```bash
# Run basic test
k6 run first-steps/first-test.js

# Run with specific number of virtual users
k6 run --vus 10 --duration 30s first-steps/first-test.js
```

### Common Test Scenarios
- **Smoke Test**: Quick test with minimal load
- **Load Test**: Test with expected normal load
- **Stress Test**: Test system limits with high load
- **Spike Test**: Sudden burst of users

### Metrics Collected
- Virtual Users (VUs)
- Request Duration
- HTTP Request Rate
- Error Rate
- Response Time Percentiles

### Best Practices
1. Start with smoke tests
2. Gradually increase load
3. Monitor system resources
4. Use realistic scenarios
5. Include think time between requests

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Disclaimer
- The project is a simple example and is not meant to be a full application.
- The current README was generated using AI and is not meant to be a good example of how to write a README.