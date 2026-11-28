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

## LLM Wiki Pattern 
[[Wiki/Sources/The Kaparthy LLM Wiki|The Kaparthy LLM Wiki]]

[[Wiki/Entities/Andrej Karpathy|Andrej Karpathy]]'s idea: LLM maintains [[Wiki/Concepts/Persistent Wiki|Persistent Wiki]] from raw sources, vs [[Wiki/Concepts/RAG|RAG]].

| Aspect       | RAG                    | LLM Wiki                   |
| ------------ | ---------------------- | -------------------------- |
| Retrieval    | Query-time             | Pre-compiled               |
| Accumulation | None                   | Compounding                |
| Maintenance  | Manual/human           | LLM-automated              |
| Scale        | Rediscovery cost grows | Touches 10-15 pages/ingest |

### In [[Wiki/Entities/Obsidian|Obsidian]]
- Copilot as LLM agent.
- Graph view, clipper, plugins.

## Karpathy's Paradigms 
[[Wiki/Sources/Andrej Karpathy - AI Ascent 2026|Andrej Karpathy - AI Ascent 2026]]

| Paradigm | Description                  |
|----------|------------------------------|
| 1.0      | Explicit rules/code          |
| 2.0      | Learned weights (data/train) |
| **3.0**  | Prompting (LLM interpreter)  |

*(Grows with ingests/queries.)*

## 10 Core AI Concepts (2026) 
[[Wiki/Sources/10-AI-Concepts|10-AI-Concepts]]

1. [[Wiki/Concepts/LLMs|LLMs]]
2. Tokens & [[Wiki/Concepts/Context Window|Context Window]]
3. [[Wiki/Concepts/AI Agents|AI Agents]]
4. [[Wiki/Concepts/MCP|MCP]]
5. [[Concepts/RAG|RAG]]
6. [[Wiki/Concepts/Fine-tuning|Fine-tuning]]
7. [[Wiki/Concepts/Context Engineering|Context Engineering]]
8. [[Wiki/Concepts/Reasoning Models|Reasoning Models]]
9. [[Wiki/Concepts/Multimodal AI|Multimodal AI]]
10. [[Wiki/Concepts/Mixture of Experts|Mixture of Experts]]

## Practical Applications 
[[Wiki/Sources/Ways-to-Use-AI-in-Daily-Life|Ways-to-Use-AI-in-Daily-Life]]
- **101 Use Cases**: Grouped by productivity, work, daily life, finances, learning, career, relationships.
- **Key Insight**: Foundational tools (ChatGPT/Claude/Perplexity) + prompt engineering > specialized subs.
- **Progression**: Simple (image ID) → advanced ([[Wiki/Comparisons/Vibe-Coding-vs-Agentic-Engineering|Vibe Coding]], [[Concepts/AI Agents|agents]]: n8n, workflows).

- **AI Industry 2026** [[Wiki/Sources/The Artificial Intelligence Industry 2026|AI Industry 2026]]: Global spending >$2.02T (+36%); infra software +83%.[^2]

| Segment      | 2026 ($B) | Growth                  |
|--------------|-----------|-------------------------|
| AI Infra SW  | 230       | 83%                     |
| App SW       | 270       | 57%                     |
| Platforms    | 29.3      | 14.2% CAGR to 2035      |

  **Key Trends**:
  - [[Wiki/Concepts/Inference Economics|Inference Economics]] (deployment > training; +83% infra)
  - [[Wiki/Concepts/Great Divergence|Great Divergence]] (physical industries lead)
  - [[Wiki/Concepts/Agentic Commerce|Agentic Commerce]] (40% B2B agents EOY)
  - [[Wiki/Concepts/Multi-Agent Systems|Multi-Agent Systems]], [[Wiki/Concepts/Physical AI|Physical AI]], [[Concepts/Multimodal AI|Multimodal Reasoning]]
  - [[Wiki/Concepts/EU AI Act|EU AI Act]] (Aug 2026 full enforcement)
  - [[Wiki/Concepts/Anthropic Economic Index|Anthropic Economic Index]] (uneven geo adoption, AUI)
  - [[Wiki/Concepts/Self-Healing Workflows|Self-Healing Workflows]] (anti-fragile enterprise agents)
  - [[Wiki/Concepts/Multimodal Reasoning|Multimodal Reasoning]] (sensory synthesis for real-world)
  - [[Wiki/Concepts/Three-Tier Hybrid Models|Three-Tier Hybrid Models]] (cloud/edge/on-prem infra)
  - [[Wiki/Concepts/EU AI Act Enterprise Compliance|EU AI Act Enterprise Compliance]]: 7% fines → rebuild stacks.

## Knowledge Graphs & AI Foundations
[[Wiki/Sources/How Knowledge Graphs Relate to AI|Stanford CS520 2020]]

| Theme | KG Role |
|-------|---------|
| **Current AI** | Symbiotic: Powers apps (search/recommenders); built by NLP/ML (extraction/linking/inference). |
| **Graph Data Science** | Graphs + feature eng/ML for relational predictions (finance etc.). |
| **Long-term Vision** | Explicit reps (semantic nets → description logics) for reasoning, explainability, commonsense (vs black-box LMs). |

Key: [[Wiki/Concepts/Knowledge Graphs|KGs]] essential; [[Wiki/Entities/WordNet|WordNet]] example explainability.

[^2]: [[Wiki/Sources/The Artificial Intelligence Industry 2026]]

## The Context & Meaning Stack
[[Wiki/Sources/Is Ontology the AI Breakthrough That Actually Threatens Jobs|Ontology in AI (2026)]]

Each layer fixes one gap and reveals the next — the destination is a shared model of *your* world.

| Layer | Solves | Still missing |
|-------|--------|---------------|
| Prompt stuffing | Model sees company docs | Scale (can't send the company) |
| [[Wiki/Concepts/RAG\|RAG]] + grounding | Right info, verifiable sources | Meaning across chunks/systems |
| [[Wiki/Concepts/Knowledge Graphs\|KGs]] / [[Wiki/Concepts/GraphRAG\|GraphRAG]] | Relationships between things | What things mean, what's permitted |
| [[Wiki/Concepts/MCP\|MCP]] | Standard tool/resource access | Org chart, cross-system identity |
| Agent skills | Procedural "how to" | What exists and what can happen |
| **[[Wiki/Concepts/Ontology\|Ontology]]** | Shared model: entities, rules, actions, permissions | Must be built and kept current |

Key: ontology is connective tissue, not a replacement. As [[Wiki/Concepts/AI Agents|agents]] act autonomously, "same intelligence, completely different understanding" becomes the real competitive gap. Vendors: [[Wiki/Entities/Palantir|Palantir]], [[Wiki/Entities/Databricks|Databricks]], [[Wiki/Entities/Microsoft|Microsoft]].

## Evolutionary Path of AI
[[Wiki/Concepts/The Evolutionary Path of AI|The Evolutionary Path of AI]]

Eight-level adoption ladder ([[AI Roadmap]]), with the "connective tissue" maturing at each level.

| Stage | Role | Enabling innovation |
|-------|------|---------------------|
| 0 | Guardian | Manual verification, air-gapped systems |
| 1–2 | Companion | Transformers, RLHF |
| 3 | Creator | Generative media (image, audio, video) |
| 4 | Architect | [[Wiki/Concepts/RAG\|RAG]], [[Wiki/Concepts/Context Engineering\|Context Engineering]] |
| 5 | Builder | [[Wiki/Concepts/Vibe Coding\|Vibe Coding]], IDE integration |
| 6 | Orchestrator | [[Wiki/Concepts/MCP\|MCP]], [[Wiki/Concepts/Agent Client Protocol\|ACP]], [[Wiki/Concepts/Multi-Agent Systems\|Multi-Agent Systems]] |
| 7 | Pioneer | [[Wiki/Concepts/Multimodal Reasoning\|Multimodal Reasoning]], sensor fusion, edge inference |

Pillars: protocol standardisation, [[Wiki/Concepts/Inference Economics\|Inference Economics]] ([[Wiki/Concepts/Three-Tier Hybrid Models\|Three-Tier Hybrid Models]]), orchestration over chatting, [[Wiki/Concepts/Physical AI\|Physical AI]].

## Orchestration as a Job
[[Wiki/Sources/Why AI Agents Orchestrators Are In High Demand|Why AI Agents Orchestrators Are In High Demand]]

[[Wiki/Concepts/AI Orchestration|AI Orchestration]] = dividing work between humans and agents so whole processes complete. Job, skill and capability at once; the orchestrator is an air traffic controller, not a pilot.

| Signal | Value |
|--------|-------|
| Orchestration/governance postings | 15× over 4 years ([[Wiki/Entities/Randstad\|Randstad]]) |
| Banking "agent orchestration" postings | +1,700% in 2026 ([[Wiki/Entities/Draup\|Draup]]) |
| Agentic AI skill demand vs supply | ~1,300% vs ~300% |
| US agentic AI salary | $115k–$239k |

Not a simple replacement story: agent teams need managers, so "one AI orchestrator becomes three, becomes a team." Soft skills are the career differentiator (61% of customers find them scarcer than tech skill).
