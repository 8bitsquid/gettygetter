/**
 * Mock data for the `core/api/search` service
 */
export const MockSearchTerms = "talisman"
export default {
	"head" : {
	  "vars" : [ "Subject", "Term", "Parents", "ScopeNote" ]
	},
	"results" : {
	  "bindings" : [ {
		"Subject" : {
		  "type" : "uri",
		  "value" : "http://vocab.getty.edu/aat/300439631"
		},
		"Term" : {
		  "xml:lang" : "en",
		  "type" : "literal",
		  "value" : "amulet cases"
		},
		"Parents" : {
		  "type" : "literal",
		  "value" : "cases (containers), <containers by form>, ... Objects Facet"
		},
		"ScopeNote" : {
		  "xml:lang" : "en",
		  "type" : "literal",
		  "value" : "Cases or containers used to hold an amulet, which is an object believed to protect or bring good fortune."
		}
	  }, {
		"Subject" : {
		  "type" : "uri",
		  "value" : "http://vocab.getty.edu/aat/300234011"
		},
		"Term" : {
		  "xml:lang" : "en",
		  "type" : "literal",
		  "value" : "talismans"
		},
		"Parents" : {
		  "type" : "literal",
		  "value" : "<object genres by function>, object genres (object classifications), ... Objects Facet"
		},
		"ScopeNote" : {
		  "xml:lang" : "en",
		  "type" : "literal",
		  "value" : "Works in any medium, typically of relatively small size, and usually but not always cut, engraved, or inscribed with prayers, astrological signs, or magical symbols, intended to heal or keep the bearer from harm. For talismans or other objects worn on the person, with or without inscriptions, use \"amulets.\""
		}
	  } ]
	}
  }