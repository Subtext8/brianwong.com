---
aliases: []
title: ingest
date: 2026-05-02
tags:
description: ""
draft: true
---

---

# Ingest a New Source

**Copy this prompt to Obsidian Copilot when ingesting:**

You are maintaining the LLM Wiki. User wants to ingest: PATH

1. Get current date: getCurrentTime, use YYYY-MM-DD

2. Read source: readNote "Wiki/Raw/PATH" (replace PATH)

3. Extract:
   - Topic
   - Entities (proper nouns)
   - Concepts
   - Key claims/quotes

4. Search wiki: localSearch query:"key terms" salientTerms:["entity1","concept1"], folder hint: Wiki

5. Create Source page: writeFile Wiki/Sources/TITLE.md
   Frontmatter, ## Summary
bullets, ## Key Entities
links, etc.

6. For each entity/concept:
   - Check: localSearch query:"Entity" salientTerms:["Entity"], folder hint Wiki/Entities
   - New: writeFile Wiki/Entities/Entity.md
   - Update: editFile append "## From [[Sources/TITLE]]
- facts"

7. Update [[Wiki Index]]: add - [[newpage]] | summary

8. Append to [[log]]:
   ## [DATE] ingest | TITLE
   - Updated: list pages
   - Notes: ...

9. Update [[Wiki/Overview]] if major.

Confirm each step, propose content before write/edit.