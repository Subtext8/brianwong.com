---
title: KG Edge Types Diagram
aliases: [Knowledge Graph Relationships Diagram, KG Relationships Diagram]
date: 2026-05-07
tags:
  - knowledge-graphs
  - diagrams
description: Diagram illustrating 10 typed, directed relationships (e.g., supports, contradicts, part_of) as foundational building blocks for knowledge graph design, with colors, directions, and weights.
source: User-provided diagram (Screenshot 2026-05-06); discussed in context of KG-AI symbiosis.
draft: false
---

# KG Edge Types Diagram

Embed the diagram here (user diagram with 10 colored/directed/weighted edges):

![[Attachments/Screenshot 2026-05-06 at 8.38.09 PM.png|10 KG Relationship Types]]

## Summary
Visual schema of KG relationships enabling:
- Reasoning (supports/contradicts)
- Provenance (derived_from/lineage/authored_by)
- Hierarchy (part_of)
- Temporality (preceded_by/followed_by)
- Metadata (tagged_with)

These typed edges are extracted via AI (relation extraction) and power Graph Data Science, explainable AI.

## Key Relationships Table
| Type          | Semantics                  | Use Case                  | Example Weight |
|---------------|----------------------------|---------------------------|----------------|
| supports      | Evidence agreement         | Claim validation          | 0.8 (green)   |
| contradicts   | Evidence conflict          | Contradiction detection   | 0.6 (red)     |
| targets       | Influence/aims at          | Goal planning             | -             |
| derived_from  | Origin/derivation          | Data lineage              | -             |
| lineage       | Ancestry chain             | Historical tracking       | -             |
| part_of       | Hierarchical inclusion     | Decomposition             | -             |
| preceded_by   | Temporal predecessor       | Sequencing                | -             |
| followed_by   | Temporal successor         | Sequencing                | -             |
| authored_by   | Creator attribution        | IP/credit                 | -             |
| tagged_with   | Categorization             | Indexing                  | -             |

## Key Concepts
- [[Wiki/Concepts/KG Relationships|KG Relationships]]
- [[Wiki/Concepts/Knowledge Graphs|Knowledge Graphs]]
- [[Wiki/Concepts/Graph Data Science|Graph Data Science]]
- [[Wiki/Sources/How Knowledge Graphs Relate to AI|How Knowledge Graphs Relate to AI]]

## Notes
- Diagram source: Conversation diagram; complements Stanford CS520 KG-AI themes.
