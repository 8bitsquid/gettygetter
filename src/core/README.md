# Core

The `core` acts as a "shell" for the app. Reusable components, services, composables, etc.., should be placed here for use by top level modules like [search](../search/README.md).

```javascript
search
 |-- assets // app-wide assets go here  
 |-- components  
	  |--- ResultsList.vue // main search input/box component
 |-- services
      |--- api.js // main entry point for SPARQL backend service
      |--- sparql.js // SPARQL endpoint handler for the API
 |-- composables
      |--- pagination.js //[not implemented] composable to handle paging state for the results list
```

