# Tests

Using [Vitest](https://vitest.dev/) as our test runner, we can perform not only unit test, but component tests as well - mimicking how the user would normally interact with a component, similar to E2E (End 2 End) testing. E2E tests were excluded from this project given the goal and time constraints, but in production it's best to use an E2E framework that supports Vue's features, like [Cypress](https://www.cypress.io/).


```javascript
src
 |-- api.test.js 	  // tests the API service for SPARQL backend
 
```

### Component tests

Along with Vitest, the project tests components using the [Vue Test Utils](https://test-utils.vuejs.org/) to access the Vue APIs and [Happy DOM](https://github.com/capricorn86/happy-dom) to simulate the DOM.