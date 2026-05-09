---
aliases:
  - ACP
title: Agent Client Protocol
date: 2026-05-10
tags:
  - Sources
description: A standardized protocol for communication between code editors/IDEs and coding agents.
---

# Agent Client Protocol

## Summary
- The Agent Client Protocol (ACP) is a standardized communication protocol designed to decouple code editors/IDEs from AI coding agents.
- It addresses issues like integration overhead, limited compatibility, and developer lock-in by providing a universal interface similar to the Language Server Protocol (LSP).
- ACP supports both local (JSON-RPC over stdio) and remote (HTTP/WebSocket) agent scenarios.
- The protocol re-uses JSON representations from MCP where possible and includes custom types for agentic UX elements like diffs.
- Default format for user-readable text is Markdown.

## Key Entities
- [[Wiki/Entities/MCP|MCP]] (Model Context Protocol) - Protocol whose JSON representations are re-used.
- [[Wiki/Entities/Agentic AI Foundation|Agentic AI Foundation]] - Involved in standardizing agent interfaces.

## Key Concepts
- [[Wiki/Concepts/AI Agents|AI Agents]] - The primary beneficiaries of the protocol.
- [[Wiki/Concepts/MCP|MCP]] - The protocol providing foundational JSON structures.

## Links
- [Official Website](https://agentclientprotocol.com/get-started/introduction#why-acp)
