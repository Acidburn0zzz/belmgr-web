'use strict';

/**
 * @ngdoc service
 * @name belmgrWebApp.modelNewBel
 * @description
 * # modelNewBel
 * Service in the belmgrWebApp.
 */
angular.module('belmgrWebApp')
    .factory('modelNewBel', function() {

        var sample = {
            "$schema": "http://json-schema.org/draft-04/schema",
            "description": "DESCRIBE EVIDENCE",
            "type": "object",
            "additionalProperties": false,
            "required": [
                "evidence"
            ],
            "properties": {
                "evidence": {
                    "type": "object",
                    "additionalProperties": false,
                    "required": [
                        "bel_statement",
                        "citation"
                    ],
                    "properties": {
                        "bel_statement": {
                            "type": "string",
                            "title": "BEL Statement",
                            "description": "A BEL Statement is an expression that represents knowledge of the existence of biological entities and relationships between them that are known to be observed within a particular context, based on some source of prior knowledge such as a scientific publication or newly generated experimental data."
                        },
                        "citation": {
                            "type": "object",
                            "title": "Citation",
                            "description": "The citation specifies the written source where the biological knowledge was referenced.",
                            "required": [
                                "type",
                                "id"
                            ],
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "enum": [
                                        "PubMed",
                                        "Book",
                                        "Journal",
                                        "Online Resource",
                                        "Other"
                                    ],
                                    "title": "Citation Type",
                                    "description": "The citation type of the reference."
                                },
                                "id": {
                                    "type": "string",
                                    "title": "Citation ID",
                                    "description": "The citation identifier (PubMed ID, ISBN, DOI, URL) of the reference."
                                },
                                "name": {
                                    "type": "string",
                                    "title": "Citation Name",
                                    "description": "The citation name of the reference."
                                },
                                "date": {
                                    "type": "string",
                                    "title": "Citation Date",
                                    "description": "The citation date of the reference."
                                },
                                "authors": {
                                    "type": "array",
                                    "title": "Citation Authors",
                                    "description": "The citation authors of the reference.",
                                    "items": {
                                        "type": "string",
                                        "minItems": 0
                                    }
                                },
                                "comment": {
                                    "type": "string",
                                    "title": "Citation Comment",
                                    "description": "The citation comment of the reference."
                                }
                            }
                        },
                        "biological_context": {
                            "type": "object",
                            "title": "Biological Context",
                            "description": "A biological context specifies the experiment's parameters where this interaction was observed.",
                            "additionalProperties": true,
                            "properties": {
                                "species": {
                                    "type": "string",
                                    "title": "Species from NCBI Taxonomy",
                                    "description": "The id (i.e. 9606), scientific name (i.e. Homo sapiens), and common name (i.e. man, human) are allowed values."
                                }
                            }
                        },
                        "summary_text": {
                            "type": "string",
                            "title": "Summary Text",
                            "description": "Abstract from source text to provide support for this evidence"
                        },
                        "metadata": {
                            "type": "object",
                            "title": "Evidence resource metadata",
                            "description": "Metadata that describes the evidence resource.",
                            "additionalProperties": true
                        }
                    }
                }
            }
        }



        // the default value of the model data
        var belStatement = {
                source: '',
                relation: '',
                target: ''
            },
            belCitation = {
                citationType: '',
                name: '',
                publishDate: '',
                reference: '',
                authors: '',
                comments: ''
            },
            belAnnotation = {
                belSummaryText: '',
                structuredAnnotations: {
                    annotationType: '',
                    annotation: ''
                },
                freeAnnotations: {
                    annotationType: '',
                    annotation: ''
                }
            },
            belMetadata = {
                reviewStatus: '',
                author: '',
                createdDate: '',
                reviewer: '',
                reviewedDate: '',
                belEvidenceSource: ''
            };

        return {

            resetNewBel: function() {
                this.belStatement = belStatement;
                this.belCitation = belCitation;
                this.belAnnotation = belAnnotation;
                this.belMetadata = belMetadata;
            },
            updateNewBel: function() {
                return {
                    belStatement: this.belStatement,
                    belCitation: this.belCitation,
                    belAnnotation: this.belAnnotation,
                    belMetadata: this.belMetadata
                };
            },
            // the model holds the data for bel statements
            belStatement: {
                source: '',
                relation: '',
                target: ''
            },
            // the model holds the data for bel citation
            belCitation: {
                citationType: '',
                name: '',
                publishDate: '',
                reference: '',
                authors: '',
                comments: ''
            },
            // the model holds the data for bel annotation
            belAnnotation: {
                belSummaryText: '',
                structuredAnnotations: [{
                    annotationType: '',
                    annotation: ''
                }],
                freeAnnotations: [{
                    annotationType: '',
                    annotation: ''
                }]
            },
            // the model holds the data for bel metadata
            belMetadata: {
                reviewStatus: '',
                author: '',
                createdDate: '',
                reviewer: '',
                reviewedDate: '',
                belEvidenceSource: ''
            }
        };

    });
