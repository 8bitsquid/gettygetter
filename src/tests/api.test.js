import { test, expect } from "vitest"
import { search, sparql } from "../core/services/api"
import MockSearchResults, { MockSearchTerms } from '../mocks/data/search'
import MockSparqlResults, { MockSparqlQuery } from '../mocks/data/sparql'

test('get results from the search service', async () => {
	const results = await search(MockSearchTerms)

	expect(results.status).toBe(200)
	expect(results.statusText).toBe('OK')
	expect(await results.json()).toEqual(MockSearchResults)
})

test('get results from the SPARQL query service', async () => {
	const resp = await sparql.query(MockSparqlQuery)

	expect(resp.status).toBe(200)
	expect(resp.statusText).toBe('OK')
	expect(await resp.json()).toEqual(MockSparqlResults)
})