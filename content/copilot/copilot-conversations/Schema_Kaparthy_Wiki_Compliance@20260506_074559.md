---
epoch: 1778024759622
modelKey: copilot-plus-flash|copilot-plus
tags:
  - copilot-conversation
topic: Schema Kaparthy Wiki Compliance
---

**user**: Can you review this schema to see if it complies with [[The Kaparthy LLM Wiki]] . Can you check that the output notes are laid out in a very consistent format that is Obsidian friendly. So user can easily see the breakdown of Overview, Entities, Concepts, Sources, Comparisons, Synthesized Notes. 
[Context: Notes: Wiki/Raw/The Kaparthy LLM Wiki.md | Folders: Wiki/Schema]
[Timestamp: 2026/05/06 07:45:59]

**ai**: ### Compliance Review: Schema vs. [[Wiki/Raw/The Kaparthy LLM Wiki|The Kaparthy LLM Wiki]]

**Overall: High Compliance (90-95%).**  
The schema faithfully implements the core idea of a **persistent, LLM-maintained wiki** as a compounding artifact between raw sources and queries. It avoids one-shot RAG by emphasizing incremental ingestion, cross-referencing, and maintenance. Key matches:

- **Architecture (3 layers):**
  | Layer | Kaparthy | Current Schema | Status |
  |-------|----------|----------------|--------|
  | **Raw sources** | Immutable docs (articles, etc.). LLM reads, never writes. | `Wiki/Raw/` folder. Matches exactly (e.g., `Wiki/Raw/The Kaparthy LLM Wiki.md`). | ✅ Full |
  | **Wiki** | LLM-owned MD files: entities, concepts, summaries, overview, synthesis, comparisons. | `Wiki/`: `Overview`, `Entities/`, `Concepts/`, `Sources/`, `TOC`, `log`. Covers core; adds `Sources/` explicitly (aligns with summaries). | ✅ Full (minor gap: no dedicated `Comparisons/`—use `Concepts/` or propose new folder) |
  | **Schema** | Config file for structure, conventions, workflows (e.g., CLAUDE.md). Co-evolve with LLM. | `Wiki/Schema/`: `SCHEMA.md`, `ingest.md`, `query.md`, `lint.md`. Perfect match—prompts for operations. | ✅ Full |

- **Operations:**
  | Operation | Kaparthy | Current Schema | Status |
  |-----------|----------|----------------|--------|
  | **Ingest** | Read source → extract → update entities/concepts/index/log. Human-in-loop optional. | `ingest.md`: readNote → extract → Source page → update Entities/Concepts → TOC/log. Uses tools (getCurrentTime, localSearch, writeFile/editFile). | ✅ Full |
  | **Query** | Search wiki → synthesize w/ citations → file new insights as pages. | `query.md`: localSearch → readNote → answer w/ [[citations]] → propose new page. | ✅ Full |
  | **Lint** | Check contradictions, orphans, staleness → suggest fixes/sources. | `lint.md`: TOC/log → obsidianLinks orphans → contradiction searches → proposals. | ✅ Full |

- **Indexing/Logging:**
  - `TOC.md`: Content-oriented catalog (categories, summaries). Matches "index.md".
  - `log.md`: Chronological append-only (e.g., `## [YYYY-MM-DD] ingest \| Title`). Matches exactly; grep-friendly.
  
- **Other Alignments:**
  - Obsidian integration: Graph view, full-path links, frontmatter → Dataview-ready.
  - Tips: Obsidian Web Clipper, images, Marp, git → Implicitly supported.
  - Human role: Curate/steer; LLM does bookkeeping.
  - Scalability: localSearch/index for navigation (no embeddings needed yet).

**Gaps/Minor Deviations (Easy Fixes):**
- No explicit `Comparisons/` or `Synthesized Notes/` folders/pages. Kaparthy examples these as wiki outputs (e.g., tables, analyses). **Propose:** Add `Wiki/Comparisons/` and `Wiki/Syntheses/` to `SCHEMA.md`.
- No CLI/search tool mention (e.g., qmd). Optional per Kaparthy.
- Images: Not handled in ingest (Kaparthy tip). **Propose:** Add to `ingest.md`: "If images: ![[Wiki/Raw/assets/image.png]]".
- No versioning beyond git/log. Fine.

### Output Notes Format: Obsidian-Friendliness & Consistency

**Current Strengths (Obsidian-Optimized):**
- **Frontmatter:** Standardized (`aliases: []`, `title`, `date`, `tags`, `description`, `draft: false`). Enables Dataview queries, graph view.
- **Links:** Full paths (`[[Wiki/Entities/Entity|Entity]]`) → No orphans, graph-ready. Aliases shorten display.
- **Structure:** Bullets (`- `), H2 sections → Readable, collapsible in Obsidian.
- **Breakdown Visibility:** Via `TOC.md` (categorized lists) + graph view. User can navigate: Overview → Entities/Concepts/Sources.

**Consistency Check:** Good baseline, but **variable per type** (e.g., Sources have `## Summary`, Entities append facts). Not "very consistent" across all—risks uneven pages as wiki grows.

**Issues & Proposal: Ultra-Consistent Layout**  
Make **every wiki page** follow this **template** (Obsidian-friendly: frontmatter + repeatable H2 sections + callouts for breakdowns). Enforce in `SCHEMA.md` + `ingest.md`.

```
---
aliases: [Short1, Short2]
title: Exact Title
date: YYYY-MM-DD
tags: [wiki, entities, sources]  # Use #wiki/Entities etc. for hierarchy
description: 1-line overview.
draft: false
related:  # Optional: auto-links
  - [[Wiki/Entities/Related1]]
  - [[Wiki/Concepts/Related2]]
---

# Title  # H1 = page title

## Overview  # 2-3 para synthesis/highlights. Bold key claims.

## Details/Key Facts  # Bulleted claims/quotes w/ sources.
- Fact 1 [[Wiki/Sources/Source1|Source1]]
- Fact 2 w/ quote: > "..." [[Wiki/Sources/Source2]]

## Entities  # Table/list of mentioned entities.
| Entity | Role/Description | Link |
|--------|------------------|------|
| [[Wiki/Entities/Entity1|Entity1]] | CEO | |
| [[Wiki/Entities/Entity2|Entity2]] | Tool | |

## Concepts  # Table/list.
| Concept | Explanation | Link |
|---------|-------------|------|
| [[Wiki/Concepts/Concept1|Concept1]] | Def | |

## Sources/References  # Bottom anchor.
- Primary: [[Wiki/Sources/Source1]]
- Related: [[Wiki/Overview]]

> [!note] Connections  # Callout for graph-building insights.
> - Links to [[Wiki/Comparisons/X-vs-Y]]
> - Challenges [[Wiki/Concepts/OldIdea]]
```

**Type-Specific Tweaks (Still Consistent):**
- **Overview**: Single page. Sections: `## Entities` (table), `## Concepts` (table), `## Sources` (table), `## Key Insights`.
- **Entities/X.md**: `## Definition`, `## Appearances` (timeline/table), `## Related Entities/Concepts`.
- **Concepts/X.md**: `## Explanation`, `## Examples`, `## Comparisons` (link to `Wiki/Comparisons/`).
- **Sources/X.md**: `## Summary`, `## Extracted Entities/Concepts` (tables), `## Raw Link`.
- **Comparisons/X-vs-Y.md**: `## Table`, `## Similarities/Diffs`, `## Synthesis`.
- **Synthesized Notes** (new): `Wiki/Syntheses/Query-YYYY-MM-DD.md` for query outputs.

**Benefits for Obsidian:**
- **Tables:** Sortable, embeddable (`![[Page#Entities]]`).
- **Callouts/Tags:** Foldable, searchable (`#wiki/Entities`).
- **TOC Auto-Update:** In `ingest.md`: Append categorized: `- [[Wiki/Entities/Entity]] \| 1-line desc (from description frontmatter)`.
- **Graph:** Full paths + `related` → Dense connections.
- **Dataview:** Query `LIST FROM "Wiki" WHERE !draft GROUP BY tags`.

**Next Steps (Propose Edits):**
1. Update `SCHEMA.md` with this template + new folders (`Comparisons/`, `Syntheses/`).
2. Revise `ingest.md`/`query.md` to use template.
3. Lint existing wiki: Propose batch `editFile` for consistency.
4. Confirm: "Approve template? Shall I edit [[Wiki/Schema/SCHEMA]]?"

This makes the wiki **scan-friendly**: Open `TOC` → Click category → See uniform pages w/ tables/sections. Fully Kaparthy-compliant + polished. Let me know to implement!
[Timestamp: 2026/05/06 07:46:44]