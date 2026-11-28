---
aliases: []
title: RAG
date: 2026-05-02
tags:
  - wiki
  - concept
description: "Retrieval-Augmented Generation: LLM retrieves document chunks at query time."
draft: false
---

# RAG

**Retrieval-Augmented Generation** (RAG): LLMs retrieve relevant chunks from uploaded documents at each query.[[Wiki/Sources/The Kaparthy LLM Wiki]]

## Characteristics
- Knowledge rediscovered from scratch every question.
- No accumulation or persistence.
- Examples: NotebookLM, ChatGPT file uploads, most RAG systems.

## Contrast with LLM Wiki
- RAG: Ephemeral retrieval.
- [[Wiki/Concepts/LLM-Wiki|LLM Wiki]]: Proactive maintenance of persistent wiki.

## From [[Wiki/Sources/Retrieval-Augmented Generation]]
- RAG optimizes LLM output by referencing authoritative knowledge bases outside training data without retraining.
- Solves challenges like hallucinations, static knowledge cut-offs, and lack of source attribution.
- Pipelines involve creating external data (embeddings), retrieving relevant information (vector search), and augmenting the LLM prompt.
- Cost-effective alternative to fine-tuning for injecting domain-specific or real-time data. 

## From [[Wiki/Sources/Is Ontology the AI Breakthrough That Actually Threatens Jobs|Is Ontology the AI Breakthrough That Actually Threatens Jobs]]
- Emerged because you can't send an entire company into a prompt: search for relevant pieces, retrieve a few, place them in context.
- Introduced **grounding**: responses connected to verifiable sources (documents, databases, search results).
- Limit: retrieved chunks are still just pieces of information — the model must infer meaning across "client," "account," "customer_id," "billing entity," "organisation." Retrieving information ≠ understanding the structure of a business.
- Extended by [[Wiki/Concepts/GraphRAG|GraphRAG]] and made more meaningful by [[Wiki/Concepts/Ontology|ontology]].