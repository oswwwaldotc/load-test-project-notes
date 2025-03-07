# Module 1: 🚀 Introduction to Performance Testing with K6

> [!WARNING]  
> The current content was generated using AI.
> **Claude 3.7 Sonnet** + Formal style

## Course Overview

This module introduces the fundamentals of performance testing and establishes a foundation for working with K6, a modern JavaScript-based load testing tool. By the end of this module, you will understand why performance testing is critical in modern software development and how K6 fits into the performance testing landscape.

## Learning Objectives

By the end of this module, you will be able to:
- Define performance testing and explain its importance in the software development lifecycle
- Distinguish between different types of performance tests and their purposes
- Understand K6's position in the performance testing ecosystem
- Set up a complete K6 testing environment on your local machine
- Execute a basic performance test using K6

## Section 1: Performance Testing Fundamentals

### What is Performance Testing?

Performance testing is a type of software testing that evaluates how a system performs under a particular workload. Unlike functional testing, which verifies that a system works correctly, performance testing focuses on:

- Responsiveness
- Stability
- Scalability
- Resource usage
- Reliability

Performance testing seeks to answer questions such as:
- How quickly does the application respond to user requests?
- How many concurrent users can the system handle?
- What happens when the system is under heavy load?
- How efficiently does the system use resources?
- How does the system behave over extended periods of use?

### Why is Performance Testing Important?

Poor performance can have significant consequences for businesses:

**Business Impact**:
- Loss of revenue: Users abandon slow applications, leading to reduced conversions and sales
- Damaged reputation: Performance issues can harm brand perception
- Increased costs: Fixing performance issues after deployment is more expensive than addressing them early

**User Experience Impact**:
- Research shows that 40% of users abandon websites that take more than 3 seconds to load
- Mobile users are particularly sensitive to performance issues
- Poor performance leads to higher bounce rates and lower engagement

**Technical Impact**:
- Helps identify bottlenecks in the system architecture
- Validates that the system can handle expected and unexpected loads
- Provides insights for capacity planning and resource allocation

### Key Performance Metrics and KPIs

When performing performance testing, several key metrics are commonly tracked:

**Response Time**:
- Time taken for the system to respond to a request
- Typically measured in milliseconds or seconds
- Includes server processing time and network latency

**Throughput**:
- Number of requests processed per unit of time
- Usually measured in requests per second (RPS)
- Indicates the system's capacity to handle load

**Error Rate**:
- Percentage of requests that result in errors
- Helps identify breaking points in the system
- Often increases as load increases

**Concurrency**:
- Number of simultaneous users or connections
- Measures the system's ability to handle multiple requests

**Resource Utilization**:
- CPU, memory, disk I/O, and network usage
- Identifies resource bottlenecks
- Helps with capacity planning

**Percentiles**:
- Measurements that show the distribution of response times
- P95 (95th percentile) means 95% of requests were faster than this value
- More useful than averages for understanding user experience

## Section 2: Types of Performance Tests

Different types of performance tests serve various purposes and help uncover different aspects of system behavior.

### Load Testing

Load testing evaluates how the system performs under expected normal and peak load conditions.

**Purpose**:
- Verify that the system can handle expected user loads
- Measure response times, throughput, and resource utilization
- Identify bottlenecks before they impact users

**Scenario Example**:
- An e-commerce website testing how it handles Black Friday traffic
- Gradually increasing users from normal to peak expected levels
- Monitoring response times and error rates throughout

### Stress Testing

Stress testing pushes the system beyond normal operating capacity to find breaking points.

**Purpose**:
- Determine the system's robustness under extreme conditions
- Identify failure points and how the system recovers
- Understand the maximum capacity of the current infrastructure

**Scenario Example**:
- Gradually increasing load until the system fails
- Observing error handling and recovery mechanisms
- Determining the maximum number of concurrent users

### Spike Testing

Spike testing evaluates how the system responds to sudden, dramatic increases in load.

**Purpose**:
- Assess how the system handles sudden surges in traffic
- Test auto-scaling capabilities
- Verify system stability during unexpected traffic spikes

**Scenario Example**:
- Simulating a traffic spike from 100 to 5,000 users in seconds
- Measuring response time degradation during the spike
- Testing recovery time after the spike subsides

### Endurance Testing

Endurance testing (also called soak testing) evaluates how the system performs over an extended period.

**Purpose**:
- Uncover issues that appear only after prolonged use
- Identify memory leaks, resource depletion, or degradation
- Verify system stability over time

**Scenario Example**:
- Running a moderate load test for 24-72 hours
- Monitoring for slowly increasing response times
- Checking for memory usage growth over time

### Scalability Testing

Scalability testing determines how effectively the system can scale up or down to meet changing demands.

**Purpose**:
- Verify that performance remains acceptable as the system scales
- Test auto-scaling configurations
- Determine the relationship between resources and performance

**Scenario Example**:
- Gradually increasing load while adding more servers
- Measuring if throughput scales linearly with resources
- Testing downscaling after peak load periods

## Section 3: K6 Framework Overview

### History and Development

K6 (pronounced "kay-six") is a modern open-source load testing tool developed by Grafana Labs (previously Load Impact).

**Key Milestones**:
- Initially released in 2017 as an open-source project
- Acquired by Grafana Labs in 2021
- Rapidly gained popularity due to its developer-friendly approach
- Now part of the Grafana observability ecosystem

**Philosophy**:
- Developer-centric: Designed to be used by developers, not just QA teams
- Code-based: Tests are written in JavaScript, making them maintainable and version-controllable
- Modern: Built with modern software development practices in mind
- Open-source: Core functionality is free and open-source

### Comparison with Other Tools

K6 has several advantages and differences compared to other popular load testing tools:

**K6 vs. JMeter**:
- JMeter uses a GUI-based approach; K6 is code-based
- JMeter tests are XML files; K6 tests are JavaScript
- JMeter has been around longer and has more plugins
- K6 is more developer-friendly and integrates better with CI/CD

**K6 vs. Locust**:
- Locust uses Python; K6 uses JavaScript
- K6 typically offers better performance and lower resource usage
- Locust has a web UI included; K6's UI is separate (Grafana)
- K6 has better built-in metrics and reporting

**K6 vs. Gatling**:
- Gatling uses Scala DSL; K6 uses JavaScript
- Gatling has sophisticated reporting built-in
- K6 is generally easier for developers to adopt
- Both offer good CI/CD integration

### K6 Architecture and Execution Model

K6 has a unique architecture designed for efficient load testing:

**Core Components**:
- JavaScript runtime: Custom JavaScript runtime based on Goja
- Protocol handlers: HTTP, WebSockets, gRPC, etc.
- Metrics engine: Collects and processes performance data
- Execution engine: Manages virtual users and scenarios

**Execution Model**:
- Virtual Users (VUs): Simulated users executing the test script
- Iterations: Each VU executes the script multiple times
- Stages: Allows for ramping up/down of VUs
- Thresholds: Pass/fail criteria for metrics

**Runtime Environments**:
- Local execution: Running on a developer's machine
- Distributed execution: Running across multiple machines
- Cloud execution: Running in K6 Cloud or other cloud providers

### Key Features and Capabilities

K6 offers a range of features that make it powerful for performance testing:

**Core Features**:
- HTTP/HTTPS testing with full request/response control
- WebSocket support for real-time application testing
- Metrics collection and thresholds
- Checks for validating responses
- Parameterization using CSV, JSON, or JavaScript objects

**Advanced Capabilities**:
- Custom metrics and measurements
- Extensibility through JavaScript modules
- Browser-based user journey testing
- Integration with CI/CD pipelines
- Visualization through Grafana dashboards

**Limitations**:
- Not a full browser (though browser testing is possible with extensions)
- Limited support for some protocols (requires extensions)
- JavaScript compatibility is not 100% with Node.js or browsers

## Section 4: Environment Setup

### Installing Node.js Prerequisites

While K6 doesn't require Node.js to run, having Node.js installed is useful for:
- Managing JavaScript dependencies
- Using npm packages for test data generation
- Running support scripts

**Installation Steps**:
1. Download Node.js from the official website (https://nodejs.org/)
2. Install the LTS version (recommended for stability)
3. Verify installation with:
   ```bash
   node --version
   npm --version
   ```

### Installing K6

K6 can be installed on various operating systems:

**Windows**:
1. Using Chocolatey:
   ```bash
   choco install k6
   ```
2. Using the Windows installer from the official website

**macOS**:
1. Using Homebrew:
   ```bash
   brew install k6
   ```

**Linux**:
1. Using apt (Ubuntu/Debian):
   ```bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
   echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
   sudo apt update
   sudo apt install k6
   ```
2. Using yum (CentOS/RHEL):
   ```bash
   sudo yum install https://dl.k6.io/rpm/repo.rpm
   sudo yum install k6
   ```

**Docker**:
```bash
docker pull grafana/k6
```

**Verify Installation**:
```bash
k6 version
```

### Configuration Options

K6 offers several configuration options:

**Configuration Methods**:
1. Command-line flags
2. Environment variables
3. Config file (JSON)
4. In-script options

**Common Configuration Options**:
- `--vus`: Number of virtual users
- `--duration`: Test duration
- `--http-debug`: Logging of HTTP requests
- `--out`: Output results to a specific format/destination

**Example Configuration**:
```bash
k6 run --vus 10 --duration 30s script.js
```

### IDE Integration and Tooling

Several tools can enhance the K6 development experience:

**Editor Extensions**:
- Visual Studio Code: K6 extension provides syntax highlighting and snippets
- IntelliJ/WebStorm: JavaScript support works well with K6

**Useful Tools**:
- Postman: For API exploration before writing tests
- Grafana: For visualizing test results
- InfluxDB: For storing test metrics
- Prometheus: Alternative for metrics storage

**Continuous Integration**:
- GitHub Actions: Easy integration with K6
- Jenkins: Plugins available for K6
- GitLab CI: Native support for K6 tests

## Section 5: Hands-On Exercises

### Exercise 1: Installing K6

**Objective**: Install K6 on your local machine and verify the installation.

**Steps**:
1. Follow the installation instructions for your operating system
2. Verify installation with `k6 version`
3. Review the help documentation with `k6 help`

**Expected Outcome**: Successfully installed K6 with version information displayed.

### Exercise 2: Creating Your First K6 Test

**Objective**: Create and run a simple K6 test script.

**Steps**:
1. Create a file named `first-test.js` with the following content:
   ```javascript
   import http from 'k6/http';
   import { check, sleep } from 'k6';

   export default function() {
     let res = http.get('https://httpbin.org/get');
     check(res, {
       'is status 200': (r) => r.status === 200,
     });
     sleep(1);
   }
   ```
2. Run the test with: `k6 run first-test.js`

**Expected Outcome**: The test should run successfully and display metrics including response time and success rate.

### Exercise 3: Configuring Test Parameters

**Objective**: Understand how to configure test parameters.

**Steps**:
1. Modify your `first-test.js` to include configuration:
   ```javascript
   import http from 'k6/http';
   import { check, sleep } from 'k6';

   export const options = {
     vus: 5,
     duration: '10s',
   };

   export default function() {
     let res = http.get('https://httpbin.org/get');
     check(res, {
       'is status 200': (r) => r.status === 200,
     });
     sleep(1);
   }
   ```
2. Run the test with: `k6 run first-test.js`
3. Run the test with different command-line parameters:
   ```bash
   k6 run --vus 10 --duration 15s first-test.js
   ```

**Expected Outcome**: Understand how different configuration methods affect test execution.

### Exercise 4: Exploring Test Results

**Objective**: Interpret K6 test results and understand key metrics.

**Steps**:
1. Run your test with output formatting:
   ```bash
   k6 run --summary-trend-stats="avg,min,med,max,p(90),p(95)" first-test.js
   ```
2. Analyze the output, focusing on:
   - HTTP request metrics
   - Response time statistics
   - Iterations and requests per second

**Expected Outcome**: Understanding of how to interpret test results and key performance metrics.

## Section 6: Recommended Reading and Resources

### Documentation

- [K6 Official Documentation](https://grafana.com/docs/k6/latest/)
- [K6 JavaScript API Reference](https://grafana.com/docs/k6/latest/javascript-api/)
- [K6 Examples Repository](https://github.com/grafana/k6-learn)

### Articles

- ["Introduction to Performance Testing with K6"](https://k6.io/blog/introduction-to-performance-testing-with-k6/) by Grafana Labs
- ["Modern Load Testing with K6"](https://dev.to/k6/modern-load-testing-with-k6-2jie) on Dev.to
- ["Continuous Performance Testing with K6"](https://www.infoq.com/articles/continuous-performance-testing-k6/) on InfoQ

### Videos

- ["Getting Started with K6"](https://www.youtube.com/watch?v=brasMBAezJY) on YouTube/Grafana channel
- ["K6 Performance Testing Crash Course"](https://www.youtube.com/watch?v=c5y-jOSVf_g) by Grafana Labs
- ["From Zero to Hero with K6"](https://www.youtube.com/watch?v=ZAq87eZ1w2U) - K6 Office Hours

### Books

- "Web Performance Testing with K6" by Grafana Labs
- "The Art of Performance Testing" by Ian Molyneaux (general performance testing concepts)
- "Site Reliability Engineering" by Google (relevant chapters on load testing)

## Section 7: Module Assessment

### Knowledge Check

1. What is the primary purpose of performance testing?
   - a) Finding functional bugs
   - *b) Evaluating how a system behaves under load*
   - c) Validating user interface design
   - d) Checking code quality

2. Which of the following is NOT a type of performance test?
   - a) Load testing
   - *b) Unit testing*
   - c) Stress testing
   - d) Endurance testing

3. What programming language is used to write K6 test scripts?
   - a) Python
   - b) Java
   - *c) JavaScript*
   - d) Go

4. In K6, what do VUs represent?
   - a) Virtual Updates
   - *b) Virtual Users*
   - c) Virtual Unique Machine
   - d) Virtual Updates Machine