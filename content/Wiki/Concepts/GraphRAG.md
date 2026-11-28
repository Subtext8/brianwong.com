---
title: GraphRAG
aliases: [Graph RAG, Graph Retrieval-Augmented Generation]
date: 2026-11-28
tags:
  - concepts
  - ai
  - knowledge-graphs
  - rag
description: Using knowledge graphs alongside retrieval so an AI system can reason across relationships in large document collections instead of only retrieving similar passages.
draft: false
---

# GraphRAG

[[Wiki/Concepts/RAG|RAG]] augmented with a graph structure, so retrieval is guided by relationships rather than only vector similarity.

## From [[Wiki/Sources/Is Ontology the AI Breakthrough That Actually Threatens Jobs|Is Ontology the AI Breakthrough That Actually Threatens Jobs]]
- [[Wiki/Entities/Microsoft|Microsoft]]'s GraphRAG work explored using [[Wiki/Concepts/Knowledge Graphs|knowledge graphs]] alongside retrieval so a system can reason across relationships in large collections instead of retrieving the most similar passages.
- Motivation: RAG returns the five most similar paragraphs from millions of documents, but "those paragraphs are still just pieces of information" — the model must infer what they mean, and it lacks the human's instinct for how "client," "account," "customer_id," "billing entity" and "organisation" relate.
- Limit: knowing two things are connected doesn't tell the AI what they mean inside an organisation, or what it's allowed to do with them — that gap motivates [[Wiki/Concepts/Ontology|ontology]].
