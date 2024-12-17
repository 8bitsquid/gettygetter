import { test, expect } from "vitest"
import search from '../search/services/search'
import MockSearchResults, { MockSearchTerms } from '../mocks/data/search'

test('get results from the search service', async () => {
	const results = await search(MockSearchTerms)

	expect(results.status).toBe(200)
	expect(results.statusText).toBe('OK')
	expect(await results.json()).toEqual(MockSearchResults)
})
