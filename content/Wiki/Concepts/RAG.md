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