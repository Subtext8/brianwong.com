---
title: KG Relationships
aliases: [Knowledge Graph Edges, KG Edge Types]
date: 2026-05-07
tags:
  - knowledge-graphs
  - relationships
description: Typed, directed edges as building blocks of knowledge graphs (e.g., supports, contradicts, part_of) for semantic reasoning and structure.
draft: false
---

# KG Relationships

Typed, directed edges connecting entities/concepts in knowledge graphs, enabling semantic reasoning (e.g., inference), provenance tracking, hierarchies, temporality, and attribution. These are core building blocks for KG design, often weighted (e.g., confidence 0.8) and extracted via AI techniques like relation extraction.

## Examples from Diagram

The 10 relationships below exemplify a robust KG schema:

| Type          | Semantics                  | Use Case Example             |
|---------------|----------------------------|------------------------------|
| supports      | Evidence agreement         | Claim validation             |
| contradicts   | Evidence conflict          | Contradiction flagging       |
| targets       | Influence or aims at       | Goal/action planning         |
| derived_from  | Origin/derivation          | Data provenance              |
| lineage       | Ancestry/heritage chain    | Historical tracking          |
| part_of       | Hierarchical inclusion     | Part-whole decomposition     |
| preceded_by   | Temporal predecessor       | Event sequencing             |
| followed_by   | Temporal successor         | Event sequencing             |
| authored_by   | Creator attribution        | Credit/intellectual property |
| tagged_with   | Categorization/labeling    | Indexing/discovery           |

![[Wiki/Raw/KG Relationships Diagram|10 edge types with colors/directions/weights]] – Source: https://youtu.be/z02Y-1OvWSM?si=Xi9Q_R7RwpElYCHI

## Role in KGs
- **AI Symbiosis**: Fuel Graph Data Science predictions, explainable reasoning.
- **Design Principles**: Extend with domain ontologies (e.g., RDF, schema.org).

## Related
- [[Wiki/Concepts/Knowledge Graphs]]
- [[Wiki/Concepts/Graph Data Science]]
- [[Wiki/Sources/How Knowledge Graphs Relate to AI]]