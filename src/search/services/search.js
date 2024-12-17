import sparql from '../../core/services/sparql'


/**
 * Builds the query string for the deafult SPARQL query wrapped around every search.
 * 
 * Given a search string (terms), this will return a SPARQL query for case-insensitive
 * full-text search, compliments of the Getty Vocab LOD docs: 
 * https://vocab.getty.edu/queries#Case-insensitive_Full_Text_Search_Query
 *
 * @param terms A string of no uncertain terms...
 * @returns SPARQL query with terms applied 
 */
function buildSearchQuery(terms) {
	return `select ?Subject ?Term ?Parents ?ScopeNote {
  ?Subject a skos:Concept; luc:term "${terms}"; skos:inScheme aat: ;
     gvp:prefLabelGVP [xl:literalForm ?Term].
  optional {?Subject gvp:parentStringAbbrev ?Parents}
  optional {?Subject skos:scopeNote [dct:language gvp_lang:en; rdf:value ?ScopeNote]}
} order by asc(lcase(str(?Term)))`
}




/**
 * Searches the SPARQL backend by using a general text search query, and applying
 * default and additional URL params
 * 
 * In this case, we're assinging the default params `{heandler: "search"}` 
 * in order to (very unsafely) fingerprint the calling service. In this case, the `search` service.
 *
 * @async
 * @param terms search terms to add to the
 * @param params
 * @returns
 */
async function search(terms, params) {
	const queryString = buildSearchQuery(terms)
  const searchParams = {handler: "search", ...params}
	return await sparql.query(queryString, searchParams)
}

export default search