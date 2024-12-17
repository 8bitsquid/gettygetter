/**
 * Acts as the API gateway for SPARQL related services.
 */
import sparql from "./sparql"

/**
 * 
 * Ok, so this looks a little redundant, but in lager projects,
 * bundling related services like this can make it easier 
 * to control what's exported and how it's used
 */

const api = {
	sparql
}

export { sparql }

export default api