# Search Module

Provides components and services for "full text" searches of the SPARQL backend. 

### File Overview

Breaking the search module into sub-components makes it easier to add new features. Right now, only [SearchInput.vue](components/SearchInput.vue) exists, but in the future we might want to add new components to track/affect full text searching (e.g., a toggle to get `Breif <> Full` results from the backend)  

```javascript
search
 |-- components  
	  |--- SearchInput.vue // main search input/box component
 |-- services
      |--- search.js // service used to perform full text searches of the SPARQL backend
```

### Where's the search results component?

The [ResultsList](/src/core/components/ResultsList.vue) component is in the [core module](../core/README.md). Packaging the results list module as a reusable, global component will make it easier to add new search/query interfaces that return the same type of data (e.g., a SPARQL query UI).

### Decoupling the api module from search

The [api service](/src/core/services/api.js) in the `core` acts as the gateway for calls to the backend. Here we wrap the API service with a `search` service to allow passing search terms to a templated SPARQL "ful text" query.

By having higher-level SPARQL services decoupled from the core api service, we make it easier to consume, refactor, and extend.

---

**Next, see the [core/README.md](../core/README.md)**