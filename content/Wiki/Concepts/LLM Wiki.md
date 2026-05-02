---
aliases: []
title: LLM Wiki
date: 2026-05-02
tags:
  - wiki
  - concept
description: Karpathy's pattern for personal knowledge bases maintained by LLMs.
draft: false
---

# LLM Wiki

A pattern for building and maintaining personal knowledge bases using LLMs via a persistent wiki.[[Sources/The Kaparthy LLM Wiki]]

## Definition
- LLM builds structured markdown wiki from raw sources.
- Incremental integration: updates entities/concepts, resolves contradictions.
- Human role: curate sources, ask questions; LLM: summarize, link, maintain.

## Components
- **Raw sources**: Immutable inputs.
- **Wiki**: LLM-generated pages (entities, concepts, sources).
- **Schema**: Instructions/prompts for LLM (e.g. [[Wiki/Schema/SCHEMA]]).

## Benefits
- Knowledge compounds over time.
- No per-query re-derivation.
- Automated bookkeeping (cross-refs, consistency).

## Implementation
- Uses [[Entities/Obsidian]] as frontend/IDE.
- Folders: Wiki/Entities/, Wiki/Concepts/, Wiki/Sources/.
- Special: [[index]], [[log]].