---
aliases:
title: Is Ontology the AI Breakthrough That Actually Threatens Jobs
date: 2026-11-28
tags:
  - agents
description:
video-url: https://www.youtube.com/watch?v=upVkmKSH2Ds
draft: false
clip-date: 2026-09-20
type: raw-video
status: raw
---
![](https://www.youtube.com/watch?v=upVkmKSH2Ds)

What is Ontology in AI, and why could it become one of the most important foundations for agentic AI?  
  
In this video, I break down what ontology means in the context of AI, how we arrived here, and why structured representations of entities, relationships, rules and real-world concepts could be critical to the next generation of AI agents.  
  
We'll explore the progression from RAG to GraphRAG to MCP to agent skills to ontology, and why connecting AI to a meaningful model of businesses, systems and the physical world could fundamentally change what AI agents are capable of doing.  
  
Is ontology the missing piece for AI? Let me know your thoughts in the comments. Subscribe for more deep dives into the technology shaping our world.  
  
⭐ Chapters  
0:00 – Why Ontology Suddenly Matters  
0:36 – AI’s Context Problem  
1:48 – RAG: Giving AI the Right Information  
3:17 – Knowledge Graphs: Connecting the Dots  
4:46 – MCP: Connecting AI to Tools  
5:52 – Agent Skills: Teaching AI How to Work  
6:51 – Ontology: A Shared Model of the Business  
7:39 – An AI Agent Inside an Airline  
8:31 – Why Palantir and Databricks Are Betting on Ontology  
9:03 – Bringing the AI Layers Together  
9:34 – Why Autonomous Agents Need Shared Meaning  
11:04 – Same Intelligence, Different Understanding  
  
🔔 Don't forget  
Like, subscribe, and tap the bell for more deep dives into technology.  
  
#AI #AgenticAI #Ontology #AIAgents #RAG #GraphRAG #MCP #ArtificialIntelligence

## Transcript

### Why Ontology Suddenly Matters

**0:00** · What Is Ontology in AI?

**0:00** · What is ontology?

**0:00** · Some of the world’s most influential AI and data companies, including Palantir and Databricks, have started highlighting ontology as an important part of building effective AI systems.

**0:10** · But what actually is an ontology?

**0:12** · And perhaps more interestingly… if it’s so important, why are we only hearing so much about it now?

**0:18** · The idea has existed in computer science for decades.

**0:22** · What has changed is AI.

**0:23** · And to understand why ontology suddenly matters, we need to go back to one of the biggest problems large language models had from the beginning.

**0:31** · They knew an enormous amount about the world.

**0:33** · But they knew almost nothing about yours.

### AI’s Context Problem

**0:36** · Imagine asking an early language model: “What orders are currently at risk of missing delivery this week?”

**0:42** · The model understands every word in that sentence.

**0:45** · It knows what an order is.

**0:46** · It knows what delivery means.

**0:48** · It can probably explain supply chain management better than most people.

**0:52** · But it has absolutely no idea what your orders are.

**0:56** · It doesn’t know where your inventory lives.

**0:58** · It doesn’t know which warehouse supplies which customer.

**1:00** · It doesn’t know your delivery rules.

**1:02** · It doesn't know which systems contain that information.

**1:05** · And even if it did, it probably wouldn’t have permission to access them.

**1:08** · This became known, broadly, as the context problem.

**1:11** · The AI might be intelligent.

**1:13** · But intelligence without context isn’t particularly useful.

**1:16** · So we started giving models more context.

**1:19** · At first, sometimes literally.

**1:22** · Documents would be inserted into prompts.

**1:25** · Company policies.

**1:26** · Product information.

**1:28** · Database results.

**1:29** · Customer records.

**1:31** · Whatever information the model needed to answer the question.

**1:34** · And that worked.

**1:35** · Until the amount of information became too large.

**1:38** · You can’t realistically send an entire company into a prompt every time someone asks a question.

**1:43** · So the next major idea was retrieval augmented generation, mostly known as RAG.

### RAG: Giving AI the Right Information

**1:51** · Instead of giving the model everything, you search for the information that seems relevant to the question, retrieve a few pieces of it, and place those pieces into the model’s context.

**2:01** · Now the AI could answer questions about information it had never seen during training.

**2:06** · This was a huge step forward.

**2:07** · And it introduced another word that became increasingly common in AI.

**2:11** · Grounding.

**2:13** · A grounded AI response is one connected to information we can actually verify.

**2:18** · Instead of asking the model to rely entirely on whatever patterns exist inside its training, we can ground its answer in company documents, databases, search results or other trusted sources.

**2:30** · But RAG had an interesting limitation.

**2:33** · Imagine a company with ten million documents.

**2:36** · A RAG system might retrieve the five paragraphs most similar to your question.

**2:40** · But those paragraphs are still just pieces of information.

**2:43** · The model has to figure out what they mean.

**2:45** · Suppose one document says “client”.

**2:48** · Another says “account”.

**2:50** · Another database calls the same thing “customer\_id”.

**2:54** · A finance system refers to “billing entity”.

**2:56** · A CRM refers to “organisation”.

**2:59** · A human working inside the company may instinctively understand how these concepts relate.

**3:04** · But the AI does not necessarily have that luxury.

**3:07** · We had become very good at retrieving information.

**3:10** · But retrieving information and understanding the structure of a business are not the same thing.

**3:14** · This is one reason knowledge graphs started becoming interesting again.

### Knowledge Graphs: Connecting the Dots

**3:21** · Instead of treating information as isolated chunks of text, a knowledge graph represents things and the relationships between them.

**3:28** · A customer placed an order.

**3:29** · That order contains a product.

**3:31** · That product is stored at a warehouse.

**3:33** · That warehouse is supplied by a manufacturer.

**3:36** · Suddenly the AI doesn’t just have documents.

**3:39** · It has connections.

**3:40** · And this can be extremely powerful.

**3:43** · Microsoft’s GraphRAG work explored using knowledge graphs alongside retrieval, so an AI system could reason across relationships in large collections of information instead of simply retrieving the most similar passages.

**3:55** · But even this is only part of the problem.

**3:58** · Because knowing that two things are connected doesn't necessarily tell an AI what those things mean inside an organisation.

**4:04** · Or what it is allowed to do with them.

**4:06** · And meanwhile, another major shift was happening.

**4:09** · AI stopped simply answering questions.

**4:11** · It started using tools.

**4:13** · An AI could search a database.

**4:15** · Read a file.

**4:16** · Call an API.

**4:17** · Create a ticket.

**4:18** · Run some code.

**4:20** · Send information to another system.

**4:22** · And suddenly we weren’t just building chatbots.

**4:24** · We were starting to build agents.

**4:26** · And this created another problem.

**4:28** · Every system had its own way of connecting to AI which was very inefficient when working cross platform, and wasn't very scalable.

**4:35** · So protocols like MCP, which stands for Model Context Protocol, began standardising how AI applications connect to external resources, tools and prompts.

### MCP: Connecting AI to Tools

**4:49** · \[Part 3 - Model Context Protocol (MCP)\] This was another enormous improvement.

**4:51** · Instead of individually hard-coding every possible integration, an agent could discover resources and tools through a common interface.

**4:59** · But there is a subtle problem here.

**5:01** · MCP can tell an AI what tools exist.

**5:04** · However it doesn't automatically tell the AI how your organisation works.

**5:08** · Think of it this way.

**5:10** · MCP can give the AI the phone numbers.

**5:12** · But it doesn't necessarily give it the organisation chart.

**5:15** · An agent might discover one tool for Salesforce, another for SAP, another for Snowflake, another for an internal inventory system and another for customer support.

**5:24** · This is fantastic.

**5:26** · But now it has a new problem.

**5:28** · Which customer in Salesforce corresponds to which account in SAP?

**5:32** · Which inventory number represents stock that can actually be sold?

**5:36** · What does “active” mean in one system compared with another?

**5:39** · Which system is authoritative?

**5:41** · And if something changes, what actions are permitted?

**5:45** · Connectivity solved one problem but created many more.

**5:48** · However, meaning remained.

**5:50** · Then came things like agent skills.

### Agent Skills: Teaching AI How to Work

**5:55** · A skill can give an agent reusable instructions, scripts and resources for performing a particular job.

**6:02** · Think of it as procedural knowledge.

**6:04** · Here is how we process a refund.

**6:06** · Here is how we investigate an outage.

**6:08** · Here is how we prepare a quarterly report.

**6:11** · That makes agents significantly more useful.

**6:13** · But notice what has happened.

**6:15** · We now have RAG providing retrieved information.

**6:18** · Grounding connecting answers to trusted sources.

**6:21** · Knowledge graphs describing relationships.

**6:23** · MCP connecting AI to resources and tools.

**6:27** · Skills teaching agents how to perform tasks.

**6:30** · Databases holding structured information.

**6:32** · Documents holding unstructured information.

**6:35** · APIs allowing actions.

**6:36** · And permissions controlling access.

**6:39** · Every one of these solves an important problem.

**6:41** · But historically, they have often lived in different layers.

**6:44** · Different systems.

**6:45** · Different teams.

**6:46** · Different representations of the world.

**6:48** · And this is where ontology starts to become much more interesting.

### Ontology: A Shared Model of the Business

**6:54** · An ontology is essentially a shared model of what exists in a particular world, what those things mean, how they relate to each other and, in more operational implementations, what can happen to them.

**7:05** · Take an airline for example.

**7:07** · Inside the airline you might have an aircraft.

**7:09** · Flights.

**7:10** · Passengers.

**7:10** · Pilots.

**7:11** · Crew.

**7:12** · Airports.

**7:13** · Maintenance events.

**7:15** · Gates.

**7:16** · Baggage.

**7:16** · And weather conditions.

**7:18** · An ontology doesn't simply store a giant pile of information about these things.

**7:22** · It defines them.

**7:23** · A flight has an aircraft.

**7:24** · An aircraft has a maintenance state.

**7:26** · A pilot is assigned to a flight.

**7:28** · A flight departs from an airport.

**7:30** · A maintenance issue might make an aircraft unavailable.

**7:33** · And a delayed aircraft might affect another flight later that day.

**7:37** · These relationships have meaning.

### An AI Agent Inside an Airline

**7:39** · Now imagine an AI agent operating on top of that model.

**7:42** · You ask: “Flight 284 has been delayed by three hours. What downstream problems will this create, and what should we do?”

**7:49** · Without this structure, the agent may have to individually search scheduling systems, aircraft systems, crew systems, passenger systems and operating procedures, then somehow work out how everything fits together.

**8:02** · With an ontology, it has something closer to a map of the organisation.

**8:06** · It can understand that this particular flight uses this aircraft.

**8:10** · That aircraft is scheduled for another flight afterwards.

**8:13** · That flight has these passengers.

**8:15** · These crew members have maximum working hours.

**8:17** · These alternative aircraft are available.

**8:19** · And perhaps most importantly, it can understand the actions that exist.

**8:24** · Reassign aircraft.

**8:25** · Notify operations.

**8:27** · Change a gate.

**8:28** · Rebook passengers.

**8:29** · And request approval.

### Why Palantir and Databricks Are Betting on Ontology

**8:31** · This is why Palantir talks about ontology as more than a data model.

**8:35** · Their implementation connects real-world objects and relationships with functions, actions and security.

**8:41** · In other words, it isn’t merely describing the business.

**8:44** · It is creating a machine-readable version of how the business operates.

**8:48** · Databricks is moving in a similar direction from the data intelligence side.

**8:52** · Its Genie Ontology is described as a map of a company’s data and business, designed to help AI understand that environment more accurately.

**9:00** · And that points towards something much bigger.

### Bringing the AI Layers Together

**9:03** · Because ontology doesn't necessarily replace RAG.

**9:06** · It can make RAG more meaningful.

**9:08** · It doesn't replace knowledge graphs.

**9:10** · Knowledge graphs can be part of how relationships are represented.

**9:14** · It doesn't replace MCP.

**9:16** · MCP can become the interface through which agents access ontology-backed resources and actions.

**9:22** · And it doesn't replace skills.

**9:24** · Skills can tell an agent how to perform a process using the concepts and actions defined within that world.

**9:29** · The ontology becomes the connective tissue.

**9:32** · And this could be especially important for agentic AI.

### Why Autonomous Agents Need Shared Meaning

**9:38** · A chatbot can afford to misunderstand something occasionally, as the human driving it can correct it's mistake.

**9:44** · However, an agent automatically taking actions inside a company cannot.

**9:48** · If you ask an AI to summarise an inventory report and it misunderstands one field, that is annoying.

**9:54** · But if you give an autonomous procurement agent permission to place orders and it misunderstands what “available inventory” means, than that becomes a very different problem.

**10:03** · The more AI moves from answering questions to making decisions and taking actions, the more important shared meaning becomes.

**10:10** · And perhaps that explains why ontology feels like it appeared so suddenly.

**10:14** · It didn't.

**10:16** · We simply didn't need it in quite the same way before.

**10:18** · When AI mostly generated text, giving it more information was often enough.

**10:23** · When AI started retrieving information, we needed grounding.

**10:27** · When AI started connecting to software, we needed tools and protocols for security and scalability.

**10:33** · When AI started performing specialised work, we needed skills that are consistent and define key workflow components.

**10:40** · But as AI becomes an active participant inside organisations, it needs something deeper.

**10:45** · It needs to understand the world it is operating in.

**10:48** · Not the world in general.

**10:50** · Your world.

**10:51** · What things exist.

**10:52** · What they mean.

**10:54** · How they connect.

**10:55** · Which information can be trusted.

**10:57** · What rules apply.

**10:58** · What actions are possible.

**11:00** · And who is allowed to perform them.

**11:02** · That is the promise of ontology in AI.

### Same Intelligence, Different Understanding

**11:04** · And the interesting part is that we may be moving towards a world where the most important difference between AI systems isn't simply which model they use.

**11:12** · Two companies might use exactly the same underlying model.

**11:15** · But one gives that model a collection of disconnected tools, documents and databases.

**11:20** · The other gives it a coherent model of the organisation those systems represent.

**11:24** · They have the same intelligence.

**11:26** · But completely different understanding.

**11:28** · And if agents really are going to become a meaningful part of how companies operate, that difference could turn out to be enormous.

**11:35** · Because the next generation of AI may not be defined by how much the model knows.

**11:39** · It may be defined by how well the model understands the world we give it.