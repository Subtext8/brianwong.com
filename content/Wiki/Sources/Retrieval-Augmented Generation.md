---
aliases: [Retrieval-Augmented Generation, RAG]
title: Retrieval-Augmented Generation
date: 2026-05-24
tags: [sources, ai, nlp]
description: "An overview of Retrieval-Augmented Generation (RAG) as a method to optimize LLM output by referencing authoritative external knowledge bases."
draft: false
---

# Retrieval-Augmented Generation

## Summary
Retrieval-Augmented Generation (RAG) is a technique used to optimize the output of Large Language Models (LLMs) by grounding them in authoritative, external knowledge bases. Instead of relying solely on static training data, RAG allows models to retrieve relevant, up-to-date information before generating a response, significantly improving accuracy and relevance.

## Key Benefits
- **Cost-Effective:** Avoids the high computational and financial costs of retraining foundation models for domain-specific data.
- **Current Information:** Enables connection to live data sources (news, social feeds, internal databases) to provide the latest information.
- **Enhanced Trust:** Provides source attribution and citations, allowing users to verify information.
- **Developer Control:** Offers better control over information sources, authorization levels, and troubleshooting.

## How It Works
1. **Create External Data:** Data is converted into numerical representations (embeddings) and stored in a vector database.
2. **Retrieve Relevant Information:** User queries are converted to vectors and matched against the vector database to find highly relevant documents.
3. **Augment the LLM Prompt:** The retrieved information is added to the user's prompt (context) to guide the LLM's response.
4. **Update External Data:** External knowledge bases are updated asynchronously to maintain relevancy.

## Key Entities
- [[Wiki/Entities/Amazon Bedrock|Amazon Bedrock]]
- [[Wiki/Entities/Amazon Kendra|Amazon Kendra]]
- [[Wiki/Entities/Amazon SageMaker JumpStart|Amazon SageMaker JumpStart]]
- [[Wiki/Entities/Amazon Simple Storage Service|Amazon Simple Storage Service (S3)]]
- [[Wiki/Entities/SharePoint|SharePoint]]
- [[Wiki/Entities/Confluence|Confluence]]

## Source
[What is RAG? - Retrieval-Augmented Generation AI Explained](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
