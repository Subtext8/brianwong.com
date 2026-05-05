---
title: Obsidian
description: Sharing how I use Obsidian and my plugins, tools, shortcuts, and other examples.
tags:
  - plugins
  - themes
  - tutorials
date: 2026-05-02
draft: false
aliases:
---
 ---

# My Public LLM Wiki
[[TOC|Kaparthy LLM Wiki]]- *Live Demonstration*

This is a live demonstration of how I keep and maintain a LLM wiki using the Kaparthy LLM Wiki method. This wiki, together with the AI prompts and schema (which is equivalent to the claude.md file), is here for you to review and adapt to your own workflow. I use Obsidian Copilot for this workflow because some wikis I keep are very personal and I want to keep the LLM local. You could use any LLM model. Most demonstrations I've seen out there use Claude Code. The choice is yours; the method is very flexible.
## What is LLM Wiki?
This entire wiki is managed by an LLM based on a particular set of instructions under the schema folder. All the articles or videos I find relevant to my AI study are saved in the Raw folder. Once the LLM "ingests" the source, it is saved as a processed document under the Source folder. An overview is created and updated in the Overview folder. The LLM then extracts every entity and concept into individual atomic nodes. When I query the findings and find new connections, it creates new concepts, entities, and comparisons. All activities of the LLM are recorded in the log. The table of contents organizes all the notes within the wiki. Over time, the Wiki grows and updates itself and creates new connections and insights depending on what is ingested.

# My Plugins
Here is a list of the most used plugins that I installed in my personal vault in alphabetical order.

## Chord Sheets
The **Chord Sheets** plugin by olvidalo ([GitHub](https://github.com/olvidalo/obsidian-chord-sheets)) allows you to create beautiful chord sheets for songs right in your Obsidian notes. It supports chord diagrams, transposition, multiple notations (e.g., English, German), lyrics integration, and PDF export for printing or sharing. Copy and paste from most chord and tab websites and you get perfectly rendered chord diagrams. I use this to save all the song sheets that I want to play and learn.

## Commander
The **Commander** plugin by phibr0 ([GitHub](https://github.com/phibr0/obsidian-commander)) brings a classic dual-pane file manager to Obsidian, enabling fast navigation, bulk operations like copy/move/delete, search, sorting, and previews to manage your vault files efficiently. I really only use this to customize my ribbon to have my most used menu items in the order I like.

## Copilot
The **Copilot** plugin ([GitHub](https://github.com/logancyang/obsidian-copilot)) embeds AI copilot functionality into Obsidian, allowing seamless interaction with language models for generating text, editing notes, querying your vault, and automating workflows using natural language commands. This multiplies Vault productivity by 100x. It allows you to use LLMs with all of your notes and is agentic vault with tools to be able to:
1. Write and edit
2. Search the web
3. Get YouTube transcripts
4. Reference notes, folder or entire vault as context
5. Create project folders (like notebook.lm) ... And much more.

## Dataview
The **Dataview** plugin by blacksmithgu ([GitHub](https://github.com/blacksmithgu/obsidian-dataview)) transforms Obsidian into a knowledge base with live indexes and queries. Use DQL (Dataview Query Language) to create tables, lists, calendars, and graphs from your notes' metadata and content dynamically. This used to be very indispensible tool for organizing the vault, but with the introduction of Bases, I have to say I use Dataview a lot less now because Bases can do a lot of the things I used to do with Dataview to sort notes.

## Editing Toolbar
The **Editing Toolbar** plugin by Taitava ([GitHub](https://github.com/Taitava/obsidian-editing-toolbar)) adds a highly customizable toolbar to the live preview and reading view, with buttons for bold, italic, links, tags, math, and more, speeding up markdown editing without memorizing shortcuts. If you're used to editing text like Microsoft Word, then this is handy to give you the formatting toolbar on every note in case you cannot remember the keyboard shortcuts.

## Excalidraw
The **Excalidraw** plugin by Zsolt Viczian ([GitHub](https://github.com/zsviczian/obsidian-excalidraw-plugin)) integrates the intuitive Excalidraw drawing tool into Obsidian for creating sketches, diagrams, mindmaps, and flowcharts that are stored as SVG files and fully editable within notes. This is actually an amazing achievement by the developer - Zsolt. It's one of those rare plugins that allow you to intuitively draw and express your thoughts smoothly on an infinite canvas.

## Footnote Shortcut
The **Footnote Shortcut** plugin by MichaBrugger ([GitHub](https://github.com/MichaBrugger/obsidian-footnotes)) streamlines footnote creation and navigation with dedicated keyboard shortcuts for inserting superscript references, jumping to definitions, and managing citations in academic or technical writing. I rarely use this, but it's nice to just have a shortcut to quickly add a footnote within the page.

## Iconize
The **Iconize** plugin by Joe thei ([GitHub](https://github.com/joethei/obsidian-iconize-plugin)) lets you decorate headings, lists, folders, and files with thousands of SVG icons from Lucide, Linea, etc., with search, auto-apply rules, and CSS customization for a more visually organized vault. I use icons quite sparingly in my vault, but it does make folders and MOC notes a lot easier to find and visually appealing.

## Local Backup
The **Local Backup** plugin by Vinzent ([GitHub](https://github.com/vinzent03/obsidian-local-backup)) safeguards your vault with automated, incremental backups to local folders at set intervals or on events like startup/shutdown, with restore options and cleanup of old backups. It is also easy to click a button and back up your vault to a ZIP file somewhere.

## Paste image rename
The **Paste image rename** plugin by reorx ([GitHub](https://github.com/reorx/obsidian-paste-image-rename)) customizes pasted image filenames using templates with date, note title, selection text, or random IDs, automatically organizing attachments in dated folders. this plugin makes my attachments folder look a lot neater because it ensures every attachment's destination matches the note name or note title.

## Paste URL into selection
The **Paste URL into selection** plugin by denolehov ([GitHub](https://github.com/denolehov/obsidian-url-into-selection)) intelligently pastes URLs over selected text by fetching titles, converting to links, embeds, or extracting content, perfect for quick web research integration. I didn't know I needed this until I got it. Essentially, it allows me to just copy a URL from my browser, type a description in my note, and paste it in. The description then has the link with the correct markdown format.

## TaskNotes
The **TaskNotes** plugin by callumalpass ([GitHub](https://github.com/callumalpass/tasknotes)) links checkboxes to individual note files, automatically creating/opening task notes for detailed sub-information while keeping todos in the main note. Very effective task and project management with calendar. It's not as pretty as Notion, but it's fully featured and works really well for me.

## Templater
The **Templater** plugin by SilentVoid13 ([GitHub](https://github.com/SilentVoid13/Templater)) supercharges note templating with JavaScript execution, user prompts, dynamic variables, file/folder operations, and execution on note create/modify for advanced automation. indispensable tool for creating custom templates for the different types of notes in your vault.

## Tracker
The **Tracker** plugin by TotetMatt ([GitHub](https://github.com/totetmatt/obsidian-tracker)) builds habit trackers, calendars, and charts by querying properties across notes, supporting input modals, relative dates, and multiple chart types for data visualization. I use this to create graphs and daily habit trackers for my workouts, meditation, weight, studies, and a lot more.

----
➡️ **Next:** My Other [[Projects]]


