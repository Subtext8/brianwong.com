---
aliases: []
title: Overview
date: 2026-05-02
tags:
description: ""
draft: false
---

# Wiki Overview

High-level synthesis of captured knowledge.

## LLM Wiki Pattern 
[[Wiki/Sources/The Kaparthy LLM Wiki|The Kaparthy LLM Wiki]]

[[Andrej Karpathy]]'s idea: LLM maintains [[Persistent Wiki|persistent wiki]] from raw sources, vs [[RAG]].

| Aspect       | RAG $[^1]$             | LLM Wiki                   |
| ------------ | ---------------------- | -------------------------- |
| Retrieval    | Query-time$[^1]$       | Pre-compiled               |
| Accumulation | None                   | Compounding                |
| Maintenance  | Manual/human           | LLM-automated              |
| Scale        | Rediscovery cost grows | Touches 10-15 pages/ingest |

### In [[Wiki/Entities/Obsidian|Obsidian]]
- Copilot as LLM agent.
- Graph view, clipper, plugins.

## Karpathy's Paradigms 
[[Wiki/Sources/Andrej Karpathy - AI Ascent 2026|Andrej Karpathy - AI Ascent 2026]]

| Paradigm | Description                  |
|----------|------------------------------|
| 1.0      | Explicit rules/code          |
| 2.0      | Learned weights (data/train) |
| **3.0**  | Prompting (LLM interpreter)  |

*(Grows with ingests/queries.)*

## 10 Core AI Concepts (2026) 
[[Wiki/Sources/10-AI-Concepts|10-AI-Concepts]]

1. [[Concepts/LLMs|LLMs]]
2. Tokens & [[Concepts/Context Window|Context Window]]
3. [[Concepts/AI Agents|AI Agents]]
4. [[Concepts/MCP|MCP]]
5. [[Concepts/RAG|RAG]]
6. [[Concepts/Fine-tuning|Fine-tuning]]
7. [[Concepts/Context Engineering|Context Engineering]]
8. [[Concepts/Reasoning Models|Reasoning Models]]
9. [[Concepts/Multimodal AI|Multimodal AI]]
10. [[Concepts/Mixture of Experts|Mixture of Experts]]

## Practical Applications 
[[Wiki/Sources/Ways-to-Use-AI-in-Daily-Life|Ways-to-Use-AI-in-Daily-Life]]
- **101 Use Cases**: Grouped by productivity, work, daily life, finances, learning, career, relationships.
- **Key Insight**: Foundational tools (ChatGPT/Claude/Perplexity) + prompt engineering > specialized subs.
- **Progression**: Simple (image ID) → advanced (vibe coding, agents: n8n, workflows).
