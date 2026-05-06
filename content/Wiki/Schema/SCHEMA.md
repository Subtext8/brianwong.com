---
aliases: []
title: SCHEMA
date: 2026-05-02
tags:
description: ""
draft: false
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
  - [[TOC]]
  - [[log]]

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
draft: false
related: ["[[Wiki/Page1]]", "[[Wiki/Page2]]"]  # Optional: Quoted wikilink strings for Obsidian YAML parsing
---
```

Always use full paths with optional aliases in all wiki links: [[Wiki/Folder/Page|Page]] (e.g. [[Wiki/Entities/Entity|Entity]], [[Wiki/Concepts/Concept|Concept]], [[Wiki/Sources/Source|Source]]). **Tables:** Escape pipe in aliases: [[Wiki/Folder/Page\|Page]] (single backslash; renders single cell). e.g. | [[Wiki/Entities/Anthropic\|Anthropic]] | ASL-3 safety. | Use bullet points, frontmatter.

## Operations

- Ingestion: [[ingest]]
- Query: [[query]]
- Lint: [[lint]]

Paste relevant prompt to Copilot or say "follow [[Wiki/Schema/ingest]] to ingest ..."