---
aliases: [Ontology AI Breakthrough, Ontology in AI Video]
title: Is Ontology the AI Breakthrough That Actually Threatens Jobs
date: 2026-11-28
tags:
  - sources
  - agents
  - ontology
description: "Video essay tracing AI's context problem from RAG to knowledge graphs to MCP to agent skills to ontology, arguing agentic AI needs a shared machine-readable model of the business."
source: https://www.youtube.com/watch?v=upVkmKSH2Ds
clip-date: 2026-09-20
draft: false
---

# Is Ontology the AI Breakthrough That Actually Threatens Jobs

YouTube video essay (~11:40) on why ontology is becoming a foundation for [[Wiki/Concepts/AI Agents|agentic AI]].

## Summary
- **The context problem**: LLMs know an enormous amount about the world but almost nothing about *yours* — your orders, inventory, delivery rules, which systems hold what, and who has permission.
- **Progression of fixes**: stuffing documents into prompts → [[Wiki/Concepts/RAG|RAG]] (retrieval + grounding) → [[Wiki/Concepts/Knowledge Graphs|knowledge graphs]] / [[Wiki/Concepts/GraphRAG|GraphRAG]] → [[Wiki/Concepts/MCP|MCP]] (tools) → agent skills (procedural knowledge) → [[Wiki/Concepts/Ontology|ontology]] (shared meaning).
- **Each layer solves one problem and exposes the next**: RAG retrieves chunks but not meaning ("client" vs "account" vs "customer_id" vs "billing entity"); KGs show connections but not what things mean or what's permitted; MCP gives the phone numbers but not the org chart; skills teach *how* but not *what exists*.
- **Ontology as connective tissue**: it doesn't replace RAG, KGs, MCP or skills — it makes them meaningful, becoming the shared model of entities, relationships, rules, actions and permissions.
- **Why now**: as AI moves from answering to acting autonomously, a misunderstanding has consequences (a procurement agent misreading "available inventory"), so shared meaning becomes critical.
- **End state**: two companies on the same model can have "the same intelligence but completely different understanding" — the difference is the world you give the model.

## Key Entities
- [[Wiki/Entities/Palantir|Palantir]]
- [[Wiki/Entities/Databricks|Databricks]]
- [[Wiki/Entities/Microsoft|Microsoft]]

## Key Concepts
- [[Wiki/Concepts/Ontology|Ontology]]
- [[Wiki/Concepts/GraphRAG|GraphRAG]]
- [[Wiki/Concepts/Knowledge Graphs|Knowledge Graphs]]
- [[Wiki/Concepts/MCP|MCP]]
- [[Wiki/Concepts/RAG|RAG]]
- [[Wiki/Concepts/AI Agents|AI Agents]]

## Key Claims
- "They knew an enormous amount about the world. But they knew almost nothing about yours."
- Intelligence without context isn't particularly useful; retrieving information and understanding the structure of a business are not the same thing.
- MCP "can give the AI the phone numbers. But it doesn't necessarily give it the organisation chart."
- An ontology is "a shared model of what exists in a particular world, what those things mean, how they relate to each other and, in more operational implementations, what can happen to them."
- Palantir's ontology is "not merely describing the business. It is creating a machine-readable version of how the business operates."
- "The more AI moves from answering questions to making decisions and taking actions, the more important shared meaning becomes."
- Ontology didn't suddenly appear — "we simply didn't need it in quite the same way before."
- "The next generation of AI may not be defined by how much the model knows. It may be defined by how well the model understands the world we give it."

## Raw Excerpts
### The layered stack (6:35)
> We now have RAG providing retrieved information. Grounding connecting answers to trusted sources. Knowledge graphs describing relationships. MCP connecting AI to resources and tools. Skills teaching agents how to perform tasks. Databases holding structured information. Documents holding unstructured information. APIs allowing actions. And permissions controlling access. ... historically, they have often lived in different layers. Different systems. Different teams. Different representations of the world.

### Airline ontology (7:05)
Aircraft, flights, passengers, pilots, crew, airports, maintenance events, gates, baggage, weather. A flight has an aircraft; an aircraft has a maintenance state; a pilot is assigned to a flight; a maintenance issue might make an aircraft unavailable; a delayed aircraft might affect another flight later that day.

Agent query: "Flight 284 has been delayed by three hours. What downstream problems will this create, and what should we do?" With an ontology the agent sees the aircraft, its next flight, passengers, crew max hours, alternative aircraft — and the actions available: reassign aircraft, notify operations, change a gate, rebook passengers, request approval.

### Why the layers compose (9:03)
> Ontology doesn't necessarily replace RAG. It can make RAG more meaningful. It doesn't replace knowledge graphs. ... It doesn't replace MCP. MCP can become the interface through which agents access ontology-backed resources and actions. And it doesn't replace skills. Skills can tell an agent how to perform a process using the concepts and actions defined within that world. The ontology becomes the connective tissue.

### Why autonomous agents need shared meaning (9:38)
> A chatbot can afford to misunderstand something occasionally... However, an agent automatically taking actions inside a company cannot. If you ask an AI to summarise an inventory report and it misunderstands one field, that is annoying. But if you give an autonomous procurement agent permission to place orders and it misunderstands what "available inventory" means, then that becomes a very different problem.
