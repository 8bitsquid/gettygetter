## Modular Project Structure

Project is meant to follow a modules monolithic structure, where the `core` module contains global `components`, `services`, `etc..`, and acts as a "shell" for the application.
App modules, like `search`, are created at the same level as the `core` directory and have their own scoped sub-dirs for `components`, `services`, `etc...`.

### File Overview

```javascript
src
 |-- core 	  // the "app shell"
 |-- mocks   // mock service and data to test the backend api
 |-- search  // the main module for the search components, services, etc...
 |-- tests  
 |-- App.vue // Main Vue SFC to render the app
 |-- main.js // creates/mounts the app - included in the `/index.html` file
```

---

**Next, see the [search/README.md](search/README.md)**