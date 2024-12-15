/**
 * Declares mock request handlers to be used during tests
 */
import { http, HttpResponse } from 'msw'
import SEARCH_MOCK_RESULTS from './data/search'
import SPARQL_MOCK_RESULTS from './data/sparql'

export const handlers = [
	/**
	 * Mocks GET requests to the Getty Vocab SPARQL enpoint
	 */
	http.get('https://vocab.getty.edu/sparql.json', ({request}) => {
		/**
		 * Since MSW mocks backend services, we don't specify the URL search params
		 * in the endpoint URL above. We need to check the request URL's `searchParams()` to
		 * better handle mocking different GET requests to the same resource
		 */
		const url = new URL(request.url)
		const apiHandler = url.searchParams.get("handler")
		
		
		/**
		 * Each service wraps the request URL search params with `{handler: HANDLER_TYPE}`
		 * to tag which service made the request. Here we check for those values and return
		 * the corresponding mock response
		 */
		if (apiHandler === 'search') {
			return HttpResponse.json(SEARCH_MOCK_RESULTS)
		}
		if (apiHandler === 'sparql') {
			return HttpResponse.json(SPARQL_MOCK_RESULTS)
		}
		return HttpResponse.json({})
	})
]