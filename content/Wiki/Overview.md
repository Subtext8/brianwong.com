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

## LLM Wiki Pattern[[Sources/The Kaparthy LLM Wiki]]

[[Entities/Andrej Karpathy]]'s idea: LLM maintains [[Concepts/Persistent Wiki|persistent wiki]] from raw sources, vs [[Concepts/RAG]].

| Aspect          | RAG$[$^1$]               | LLM Wiki                |
|-----------------|--------------------------|-------------------------|
| Retrieval      | Query-time$[$^1$]        | Pre-compiled            |
| Accumulation   | None                     | Compounding             |
| Maintenance    | Manual/human             | LLM-automated           |
| Scale          | Rediscovery cost grows   | Touches 10-15 pages/ingest |

### In [[Entities/Obsidian]]
- Copilot as LLM agent.
- Graph view, clipper, plugins.

*(Grows with ingests/queries.)*