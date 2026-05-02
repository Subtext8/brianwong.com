---
aliases: []
title: The Kaparthy LLM Wiki
date: 2026-05-02
tags:
  - wiki
  - source
description: Karpathy's pattern for LLM-maintained knowledge bases using a persistent wiki.
draft: false
---

# The Kaparthy LLM Wiki

**Original source**: [[Wiki/Raw/The Kaparthy LLM Wiki]]  
**URL**: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

## Summary
- Proposes **LLM Wiki**: A persistent, interlinked markdown collection that LLMs maintain incrementally from raw sources.
- **Vs RAG**: RAG rediscovers knowledge per query; wiki accumulates and keeps current.
- **Architecture**: Raw sources → Wiki (summaries, entities, concepts) → Schema (instructions).
- **Operations**: Ingest, Query, Lint.
- **Navigation**: [[Wiki Index]] (catalog), [[log]] (timeline).
- **Obsidian integration**: Graph view, Web Clipper, plugins like Marp/Dataview.
- **Inspiration**: Vannevar Bush's Memex.

## Key Quotes
> the wiki is a persistent, compounding artifact. The cross-references are already there.

## Key Entities
- [[Entities/Obsidian]]
- [[Entities/Andrej Karpathy]]
- [[Entities/Vannevar Bush]]
- [[Entities/Memex]]

## Key Concepts
- [[Concepts/LLM Wiki]]
- [[Concepts/RAG]]
- [[Concepts/Persistent Wiki]]