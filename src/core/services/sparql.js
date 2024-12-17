/**
 * The backend API serves the SPARL query response in different formats by adding `.{json|xml|...}` to the
 * end of the query URL (e.g., `https://vocab.getty.edu/sparql.json`). Here I have split the base URL and
 * the format string into different constants. Then when making requests to the backend, we can easily build requests 
 * for different response formats.
 * 
 * Although, we only use the `.json` format to render the frontend, we can use the same `sparql.query()` method
 * defined below to easily create a `DownloadFormat` component.
 * 
 * However, in production, we might want to cache the `.json` url so we don't re-build the request url for every request.
 */
const BASE_URL = "https://vocab.getty.edu/sparql"
const DEFAULT_RESPONSE_FORMAT = "json"
const QUERY_PARAM_KEY = "query"

/**
 * Creates a default header object that should be used for
 * all SPARQL requests
 */
function getDefaultRequestHeaders() {
	const headers = new Headers()
	headers.append("Accept", "application/sparql-results+json")
}


/**
 * Builds the query params for the search api's URL
 * 
 * Wrapping the params with defaults prevents having to update multiple 
 * components if the backend has updates to it's param structure.
 * 
 * We also add the default params `{heandler: "sparql"}` 
 * in order to (very unsafely) fingerprint the calling service. In this case, the `sparql` service.
 *
 * @param sparqlQuery
 * @param params
 * @returns
 */
function buildUrlSearchParams(sparqlQuery, params) {
	const qp = {handler: 'sparql', ...params}
	qp[QUERY_PARAM_KEY] = sparqlQuery
	return new URLSearchParams(qp)
}


/**
 * Builds and returns the full URL string used to query the SPARQL backend
 * 
 * Example:
 * 	 buildSparqlUrl(`select * {...}`, {extra: param}, 'xml')
 * 	 returns "https://vocab.getty.edu/sparql.xml?query="select%20%2A%20%7B...%7D"&extra=params"
 * 	
 *
 * @param sparqlQuery The SPARQL query
 * @param params Additional params to be merged into the URL search params
 * @param [format=DEFAULT_RESULTS_FORMAT] Format for the results (e.g., json)
 * @returns The full SPARQL backend query URL
 */
function buildSparqlUrl(sparqlQuery, params = {}, format = DEFAULT_RESPONSE_FORMAT) {
	const baseUrl = BASE_URL + "." + format
	const queryParams = buildUrlSearchParams(sparqlQuery, params)

	return baseUrl + "?" + queryParams.toString()
}

function errorHandler(errResponse) {
	if (typeof errResponse === 'string') {
		
	}
}

/**
 * Working on this project is the most I've ever looks at SPARQL - deep magic indeed.
 * Knowing the complexities enough to know I don't really know the complexities, I've
 * opted for exporting `sparql` methods rather than just one function to encourage
 * extending the service with some fancier fanciness.
 */
const sparql = {
	/**
	 * Query the SPARQL backend
	 * 
	 *
	 * @async
	 * @param sparqlQuery The SPARQL query string
	 * @param params Additional params to be merged into the URL search params
	 * @returns Promise from fetch()
	 */
	async query(sparqlQuery, params) {
		const queryParams = {handler: "sparql", ...params}
		const headers = getDefaultRequestHeaders()
		const url = buildSparqlUrl(sparqlQuery, queryParams)
		const req = new Request(url, {
			method: "GET",
			headers: headers
		})

		return await fetch(req)

	},
}

export default sparql