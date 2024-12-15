/**
 * Mock data for the `core/services/sparql` service
 * 
 * Borrowed from the Getty Vocabularies LOD docs
 * https://vocab.getty.edu/queries#Top-level_Subjects
 */
export const MockSparqlQuery = `select * {?f a gvp:Facet; skos:inScheme aat: ; gvp:prefLabelGVP/xl:literalForm ?l}`
export default {
  "head" : {
    "vars" : [ "f", "l" ]
  },
  "results" : {
    "bindings" : [ {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264086"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Associated Concepts Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264087"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Physical Attributes Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264088"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Styles and Periods Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264089"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Agents Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264090"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Activities Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264091"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Materials Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300264092"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Objects Facet"
      }
    }, {
      "f" : {
        "type" : "uri",
        "value" : "http://vocab.getty.edu/aat/300343372"
      },
      "l" : {
        "xml:lang" : "en",
        "type" : "literal",
        "value" : "Brand Names Facet"
      }
    } ]
  }
}