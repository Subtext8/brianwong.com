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

### In [[Obsidian]]
- Copilot as LLM agent.
- Graph view, clipper, plugins.

## Karpathy's Paradigms [[Andrej Karpathy - AI Ascent 2026]]
| Paradigm | Description                  |
|----------|------------------------------|
| 1.0      | Explicit rules/code          |
| 2.0      | Learned weights (data/train) |
| **3.0**  | Prompting (LLM interpreter)  |

*(Grows with ingests/queries.)*