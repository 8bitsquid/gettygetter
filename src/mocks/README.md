# Mocks

Here we define mock services and data used when testing the SPARQL backend. [Mock Service Worker](https://mswjs.io/) is used to provide the mock server and tools.

```javascript
mocks
 |-- data // app-wide assets go here  
 |-- handlers.js // Defines handlers for mock requests to different endpoints
 |-- node.js // Provides the mock Node server
```