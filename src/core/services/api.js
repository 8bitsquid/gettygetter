/**
 * Acts as the API gateway for SPARQL related services.
 */
import sparql from "./sparql";
import search from "./search";

/**
 * 
 * Ok, so this looks a little redundant, but in lager projects,
 * bundling related services like this can make it easier 
 * to control what's exported and how it's used
 */

const api = {
	sparql,
	search,
};

export { sparql, search }

export default api