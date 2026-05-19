---
aliases:
title: Tools
date: 2026-05-02
tags:
  - ai
  - open-source
  - software
description: ""
draft: false
---
---
# AI Tools I Actually Use
Ok, so these are not all AI tools but make up the components in the AI tech stack I am learning and using. 

[Typeless Keyboard](https://www.typeless.com/?via=vip-invite) - it's so much better to use voice to interact with AI rather than the keyboard. Wisper Flow is very popular, but I prefer Typeless. The main game changer on the phone is that it has a quick edit button to allow you to edit your inputs in a more intuitive way. Very often we type something and then we want to change it. The Quick Edit button allows you to do exactly that and to transform whatever your original text was on the fly. This feature alone sets it apart from all other voice-to-text apps. On the computer, aside from the quick key to input, it also has quick access to AI. I use the Function + Spacebar command quite a lot.

[Obsidian](https://obsidian.md/) - About four years ago, I switched to Obsidian after two years as a paid Notion user. It was the best decision I ever made; I realized that many important notes I wanted to export from Notion required extensive rework due to its proprietary markdown formats. Today, I use Obsidian daily to manage my tasks, events, projects, and knowledge base. The absolute best part of using Obsidian is that I can link it to a local LLM, allowing for completely private AI chats without worrying about my personal information being exposed to corporations. So although Obsidian itself is not an AI tool, it is an indispensable part of my AI toolbox.

[Alfred](https://alfred.app/) - I've been using Alfred for almost a decade now. Its keyboard shortcuts are built into my muscle memory. If I ever use a Mac without it, I find that it's very hard to use. In particular, for AI coding and terminal use, I have saved a ton of snippets into the Snippets shortcuts. Especially regularly used terminal commands and Git commands. I really recommend taking the time to learn how to use all the features in Alfred. Once mastered, it becomes essential for maximizing productivity in your everyday use of the Mac. (Others Text Expansion Tools: **Raycast** and **Text Expander**)

**Obsidian Copilot Plugin** - The Obsidian Copilot plugin is by far the best way to integrate an LLM model into your Obsidian vault. It is a privacy-first LLM implementation in Obsidian. Additionally, Logan Yang (the developer) and his team are innovating at lightning speed to come up with features that really give me a lot of confidence that this singular tool is all you need to leverage the power of AI together with your private and valuable notes.

[Vercel](https://vercel.com) - A cloud platform for deploying and hosting frontend applications with zero configuration. It excels at static site generation, serverless functions, and edge computing, making it ideal for Next.js, React, and other Jamstack projects. I use it to instantly deploy "vibe-coded" apps from GitHub repos to custom domains (e.g., decision.brianwong.com) and host serverless scripts like my Telegram-to-Obsidian bot. Automatic previews for every Git push, global CDN, and seamless scaling make it a go-to for rapid prototyping without DevOps hassle. Free tier is generous for personal projects.

**[Syncthing](https://syncthing.net/)** - Open-source, peer-to-peer continuous file synchronization tool that keeps folders in sync across devices (Mac, Windows, Linux, Android, iOS) without a central cloud server. It uses secure, encrypted connections for private, efficient syncing—ideal for Obsidian vaults, code repos, or any folder. Set it up once via web GUI, approve devices, and it runs in the background with versioning, conflict resolution, and bandwidth controls. No storage limits or subscriptions; perfect for local-first workflows like my Obsidian + Quartz setup. Free and privacy-focused alternative to Dropbox/iCloud.

[**Quartz** ](https://quartz.jzhao.xyz/)- Open-source static site generator that turns Obsidian vaults into beautiful, fast personal websites with zero-config publishing. It syncs your Markdown notes directly to a live site via Git, supporting themes, search, feeds, and plugins for blogs, wikis, or portfolios. I use Quartz v4 to publish my Obsidian vault effortlessly—write in Obsidian daily, push to Git, and the world sees instant updates. Setup involves terminal and VS Code tweaks (Tailscale for private sync), but once running, it's a seamless "mind-to-web" pipeline. Free, local-first, and perfect for knowledge sharing without CMS hassle.

[Visual Studio Code](https://code.visualstudio.com/) is a powerful, lightweight, and highly extensible code editor that has become the industry standard for developers. Built by Microsoft, it offers a rich ecosystem of extensions that allow you to customize your environment for virtually any programming language or framework. Its deep integration with Git, built-in terminal, and advanced debugging capabilities make it an essential tool for modern software development, whether you are managing complex projects or simply editing scripts. For your specific workflow, it serves as the primary interface for managing your Quartz site's codebase and performing the Git operations necessary to keep your public-facing notes synchronized and up to date.

[Google AI Studio](https://aistudio.google.com/) is a web-based prototyping environment designed for developers to quickly experiment with Google's latest generative AI models, including the Gemini family. It provides a streamlined, browser-based interface where you can test prompts, adjust model parameters (such as temperature and safety settings), and iterate on system instructions without needing to set up a complex local development environment. Once you have refined your prompts or agentic workflows, AI Studio allows you to easily generate API keys and export your work as code, making it an ideal "sandbox" for testing AI capabilities before integrating them into your own applications or automation pipelines.

[OpenRouter](https://openrouter.ai/) is a unified API gateway that provides developers with access to a vast array of open-source and proprietary Large Language Models (LLMs) through a single, standardized interface. By acting as a routing layer, it allows you to easily switch between different models—such as those from OpenAI, Anthropic, Google, and various open-source providers—without needing to manage multiple individual API keys or integrate different SDKs. It is particularly useful for comparing model performance, optimizing costs, and ensuring high availability, making it an excellent tool for developers who want to experiment with the latest AI models or build applications that can dynamically leverage the best-suited model for a specific task.

[Telegram](https://telegram.org/) is a cloud-based, cross-platform instant messaging service known for its speed, security, and extensive support for automation through its robust Bot API. A standout feature of the platform is **[BotFather](https://t.me/botfather)**, the official "bot to rule them all" within Telegram. BotFather is the primary interface used to create new bot accounts and manage their settings. By interacting with it, you can register a new bot, obtain the unique API token required to connect your code to Telegram's servers, and configure essential details like the bot's name, profile picture, and command menu. For power users and developers, BotFather is the essential gateway for building custom automation tools—such as your own Telegram-to-Obsidian bot—allowing you to bridge external services directly into your personal knowledge management workflow.



---

**Related:** [[AI Roadmap]]

