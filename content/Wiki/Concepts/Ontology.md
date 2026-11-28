---
title: Ontology
aliases: [AI Ontology, Business Ontology, Enterprise Ontology]
date: 2026-11-28
tags:
  - concepts
  - ai
  - agents
  - ontology
description: A shared, machine-readable model of what exists in a domain, what it means, how things relate, and what actions are possible — the connective tissue for agentic AI.
draft: false
---

# Ontology

A shared model of what exists in a particular world, what those things mean, how they relate to each other, and — in operational implementations — what can happen to them and who may do it.

Long a staple of computer science ([[Wiki/Concepts/Knowledge Representation|knowledge representation]], [[Wiki/Concepts/Description Logics|description logics]], [[Wiki/Concepts/Semantic Networks|semantic networks]]); the shift is that [[Wiki/Concepts/Agentic AI|agentic AI]] now makes it operationally necessary.

## From [[Wiki/Sources/Is Ontology the AI Breakthrough That Actually Threatens Jobs|Is Ontology the AI Breakthrough That Actually Threatens Jobs]]
- **Definition**: entities + relationships + rules + actions + permissions, not just a pile of information about things.
- **Not a data model**: Palantir's version connects real-world objects and relationships with functions, actions and security — "a machine-readable version of how the business operates"; Databricks' Genie Ontology is "a map of a company's data and business."
- **Connective tissue**: doesn't replace [[Wiki/Concepts/RAG|RAG]], [[Wiki/Concepts/Knowledge Graphs|knowledge graphs]], [[Wiki/Concepts/MCP|MCP]] or agent skills — it gives them shared meaning. MCP becomes the interface to ontology-backed resources and actions; skills encode procedures over ontology concepts.
- **Solves the cross-system meaning gap**: which Salesforce customer = which SAP account; what "active" means per system; which system is authoritative; which actions are permitted.
- **Why now**: chatbots can be corrected; autonomous agents acting inside a company cannot. Shared meaning matters more as AI moves from answering to acting.
- **Differentiator**: the same model with a coherent ontology vs. disconnected tools/docs/databases = "same intelligence, completely different understanding."

## Related
- [[Wiki/Concepts/GraphRAG|GraphRAG]] — graph-augmented retrieval, a step below ontology.
- [[Wiki/Concepts/Schema Mapping|Schema Mapping]] — reconciling representations across systems.
- [[Wiki/Concepts/Knowledge Engineering|Knowledge Engineering]] — building and maintaining such models.
- [[Wiki/Concepts/Agentic AI|Agentic AI]] — the consumer of shared meaning; [[Wiki/Concepts/AI Agents|AI Agents]] — the actors.
- Entities betting on it: [[Wiki/Entities/Palantir|Palantir]], [[Wiki/Entities/Databricks|Databricks]], [[Wiki/Entities/Microsoft|Microsoft]].
