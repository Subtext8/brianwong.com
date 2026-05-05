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

## From [[Wiki/Sources/10-AI-Concepts]]
- Fixes LLM knowledge cutoff & hallucinations: Retrieve relevant docs (vector DB) into prompt for grounded answers.
- Vector databases: Store embeddings for semantic similarity search (e.g. "refund policy" finds "return"/"money back").
- 