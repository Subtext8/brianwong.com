---
aliases: []
title: SCHEMA
date: 2026-05-02
tags:
description: ""
draft: true
---

---

# LLM Wiki Schema

Adapted from [[Wiki/Raw/The Kaparthy LLM Wiki]] for Obsidian Copilot.

## Directory Structure

- **Wiki/Raw/**: Immutable raw sources.

- **Wiki/**: Copilot-maintained wiki:
  - [[Wiki/Overview]]
  - Wiki/Entities/
  - Wiki/Concepts/
  - Wiki/Sources/
  - [[Wiki/index]]
  - [[Wiki/log]]

- **Wiki/Schema/**: Instructions and prompts.

## Conventions

All wiki pages:
```
---
aliases: []
title: Title
date: YYYY-MM-DD
tags: [wiki, category]
description: ""
draft: true
---
```

Use [[links]], bullet points, frontmatter.

## Operations

- Ingestion: [[ingest]]
- Query: [[query]]
- Lint: [[lint]]

Paste relevant prompt to Copilot or say "follow [[Wiki/Schema/ingest]] to ingest ..."