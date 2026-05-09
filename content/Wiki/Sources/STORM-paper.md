---
aliases: []
title: STORM-paper
date: 2026-05-10
tags:
  - sources
description: "Summary of the STORM paper: Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models"
draft: false
---

# Source: Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models

## Summary
This paper introduces **STORM** (Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking), an LLM-based system designed to automate the "pre-writing" stage of generating grounded, long-form articles (like Wikipedia pages). The system addresses the challenges of researching a topic and preparing an outline from scratch.

## Key Entities
- [[Wiki/Entities/STORM|STORM]]
- [[Wiki/Entities/FreshWiki|FreshWiki]] (Dataset)
- [[Wiki/Entities/Yijia Shao|Yijia Shao]]
- [[Wiki/Entities/Yucheng Jiang|Yucheng Jiang]]
- [[Wiki/Entities/Monica S. Lam|Monica S. Lam]]
- [[Wiki/Entities/Stanford University|Stanford University]]

## Concepts
- **Pre-writing Stage**: The research and planning phase before drafting an article.
- **Perspective-Guided Question Asking**: Using diverse perspectives (e.g., event planner vs. layperson) to generate more in-depth research questions.
- **Simulated Conversation**: Multi-turn dialogue between a writer and an expert to iteratively gather information.
- **FreshWiki Dataset**: A curated dataset of recent, high-quality Wikipedia articles used to evaluate the system and avoid data leakage.
- **Outline-driven RAG**: A baseline method using retrieval-augmented generation to create outlines.

## Key Claims
- STORM outperforms outline-driven RAG baselines in article organization (25% increase) and coverage (10% increase).
- Experienced Wikipedia editors found STORM helpful for the pre-writing stage, particularly for new topics.
- Challenges identified include source bias transfer, over-association of unrelated facts (red herring fallacy), and the need for better neutrality.
- The system is implemented using the DSPy framework.

## Links
- [STORM GitHub](https://github.com/stanford-oval/storm)
- [FreshWiki Dataset](https://huggingface.co/datasets/EchoShao8899/FreshWiki)
![[Wiki/Raw/STORM-paper.pdf|STORM-paper]]