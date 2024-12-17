import { test, expect } from "vitest"
import api, { sparql } from "../core/services/api"
import MockSparqlResults, { MockSparqlQuery } from '../mocks/data/sparql'


test('get results from the SPARQL query service', async () => {
	const resp = await sparql.query(MockSparqlQuery)

	expect(resp.status).toBe(200)
	expect(resp.statusText).toBe('OK')
	expect(await resp.json()).toEqual(MockSparqlResults)
})