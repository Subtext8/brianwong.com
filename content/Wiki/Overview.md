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

## LLM Wiki Pattern[[Wiki/Sources/The Kaparthy LLM Wiki]]

[[Andrej Karpathy]]'s idea: LLM maintains [[Persistent Wiki|persistent wiki]] from raw sources, vs [[RAG]].

| Aspect          | RAG$[$^1$]               | LLM Wiki                |
|-----------------|--------------------------|-------------------------|
| Retrieval      | Query-time$[$^1$]        | Pre-compiled            |
| Accumulation   | None                     | Compounding             |
| Maintenance    | Manual/human             | LLM-automated           |
| Scale          | Rediscovery cost grows   | Touches 10-15 pages/ingest |

### In [[Wiki/Entities/Obsidian]]
- Copilot as LLM agent.
- Graph view, clipper, plugins.

## Karpathy's Paradigms [[Wiki/Sources/Andrej Karpathy - AI Ascent 2026]]
| Paradigm | Description                  |
|----------|------------------------------|
| 1.0      | Explicit rules/code          |
| 2.0      | Learned weights (data/train) |
| **3.0**  | Prompting (LLM interpreter)  |

*(Grows with ingests/queries.)*

## 10 Core AI Concepts (2026) [[Wiki/Sources/10-AI-Concepts]]
1. $[[Concepts/LLMs]]$
2. Tokens & $[[Concepts/Context Window]]$
3. $[[Concepts/AI Agents]]$
4. $[[Concepts/MCP]]$
5. $[[Concepts/RAG]]$
6. $[[Concepts/Fine-tuning]]$
7. $[[Concepts/Context Engineering]]$
8. $[[Concepts/Reasoning Models]]$
9. $[[Concepts/Multimodal AI]]$
10. $[[Concepts/Mixture of Experts]]$