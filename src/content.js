export const PROFILE = {
  name: "Swayam Debata",
  role: "Founder and technical lead, ModelEarth",
  locationNow: "Bengaluru",
  locationFrom: "Odisha",
  email: "swayamdebata2003@gmail.com",
  companyEmail: "swayam@modelearth.in",
  founderEmail: "founder@modelearth.in",
  phone: "+91 79781 59148",
  phoneHref: "tel:+917978159148",
  resume: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/swayam-debata/",
    github: "https://github.com/SwayamDebata",
    linktree: "https://linktr.ee/swayam_devta",
    instagram: "https://instagram.com/swayam_debata",
    earth: "https://www.modelearth.in",
    api: "https://api.modelearth.in",
  },
};

export const NAV = [
  { id: "record", label: "Record" },
  { id: "earth", label: "ModelEarth" },
  { id: "orqmesh", label: "Orqmesh" },
  { id: "systems", label: "Systems" },
  { id: "practice", label: "Practice" },
  { id: "contact", label: "Contact" },
];

export const PLATE = [
  ["Name", "Swayam Debata"],
  ["Company", "ModelEarth"],
  ["Role", "Founder, technical lead"],
  ["Also", "ML engineer, Capgemini"],
  ["From", "Odisha"],
  ["Now", "Bengaluru"],
  ["Trained", "B.Tech CSE, BPUT, 2023"],
];

export const EVIDENCE = [
  {
    standing: "Backtest",
    figure: "14 of 15",
    claim:
      "Baitarani, 2026 monsoon. Spells where a river crossed its danger mark on the four watched reaches, flagged two days ahead. Rainfall forecasts plus Odisha’s own daily gauge bulletin. Forecasts as issued, 2 Jun to 5 Oct 2026, unmodified engine. n = 15 spells.",
  },
  {
    standing: "Nowcast",
    figure: "27 of 27",
    claim:
      "On those same days, once a river already stood above danger, the score was HIGH or above. That is a reading of a river already in flood, not a warning of one that has not arrived.",
  },
  {
    standing: "Miss",
    figure: "9 of 15",
    claim:
      "What production actually ran on rainfall alone. And LOW on 6 of the 27 above-danger days, including Jajpur on 26 to 27 September with the river at 1.06 times danger. That miss is why the river term exists.",
  },
  {
    standing: "Cost",
    figure: "~80%",
    claim:
      "Bhadrak and Jajpur read MEDIUM on about 80% of monsoon days, because Akhuapada sat within 10% of danger for half the season. MEDIUM is a river watch. HIGH is the action bar.",
  },
  {
    standing: "Backtest",
    figure: "13 of 13",
    claim:
      "Baitarani, 2024 to 2026, scored on the forecast as it was issued, against Odisha’s published gauge record. n = 13. A sample this small has a 95% lower bound near 77% recall. It is not stated as a percentage, and it is not a description of the five cities that alert. Those gauges are a measurement of the engine.",
  },
  {
    standing: "Limit",
    figure: "51% · 6.6%",
    claim:
      "Across all 13 gauges: about half of floods caught, at 6.6% precision. Roughly fourteen false alarms for every true flood. Rainfall alone is not a statewide alerting product. It holds on the Baitarani, a slow basin where two days of forecast rain actually reaches the gauge. The average hides both facts.",
  },
  {
    standing: "Miss",
    figure: "26 of 106",
    claim:
      "Flood labels were false because a parser read the time 1200 as a water level of 1,200 metres against an 8 metre danger mark. Found, fixed, re-run, and left on the record.",
  },
];

export const RECORD = [
  {
    years: "2026",
    place: "Bengaluru",
    title: "Machine learning engineer, process lead",
    org: "Capgemini",
    body: [
      "Finance and cash application. An inbound remittance has to be read, normalised, classified, checked against evidence, and either resolved or handed to a person with the case intact. I built that path as agents on LangGraph and Azure AI Foundry: the model reasons, deterministic rules constrain it, and a human step exists where the model should stop.",
      "The email system, on FastAPI, Azure Communication Services, webhooks, and a queue, processes more than a thousand messages in and out each day. Failed events are tracked. Retries are isolated. A draft is not sent until a guardrail has checked it. A voice agent on Pipecat covers the calls that should not become a ticket. I received the Spotlight Star award for taking a complex agent application from scope to delivery on a hard timeline.",
      "Beside the client systems, a proof called Agent Foundry: a Python framework that keeps the reusable parts of an agent workflow, state, tools, retries, review, and audit, separate from any one client’s schema, so the same primitive can move without dragging a database design with it.",
    ],
  },
  {
    years: "2025",
    place: "Odisha / Bengaluru",
    title: "Founder and technical lead",
    org: "ModelEarth",
    body: [
      "The company chapter is the next one. It runs in production beside the day job: ingestion, a rule engine, machine learning held in shadow, alerting, and a mission-control desk. It is the same last-metre problem as the work above, pointed at a river instead of an inbox.",
    ],
  },
  {
    years: "2023 to 2025",
    place: "Mumbai",
    title: "Software developer",
    org: "Inscripts · CometChat",
    body: [
      "Two years inside other people’s conversations. The failures were all in the last metre: a message that could not mention someone, one that should have waited until morning, a form that never became a record, a search that could not find last Tuesday.",
      "I took UI Kit work from the requirement through release on React, React Native, Angular, and Vue. Mentions, scheduled messages, form messages, custom message types, text formatting. Then the agent layer: streaming replies, tool calls fired from inside the thread, and components for a visual builder so a team could assemble an assistant without waiting on a release. Search across conversations and messages on React Native. With QA and design, a bug-squash push that contributed to a 30% drop in customer-reported UI Kit issues.",
      "The lesson I kept: a model that cannot be used inside the tool a person already has open is a demo.",
    ],
  },
  {
    years: "2023",
    place: "Bhubaneswar",
    title: "Bachelor of Technology",
    org: "Computer Science and Engineering · BPUT",
    body: [
      "Biju Patnaik University of Technology. CGPA 8.4 / 10. The public projects from that period are still listed below, including the first food-delivery interface. They are there because a record that starts at the impressive year is a brochure.",
    ],
  },
];

export const SYSTEMS = [
  {
    index: "01",
    name: "SyncVault",
    meta: "Open source · TypeScript",
    summary:
      "An offline-first queue for the moment a request leaves the device and the network does not answer. The intent is stored, retried with exponential backoff, and given a dead-letter path instead of a retry button. Pluggable storage. A framework-agnostic API. I built the JavaScript libraries with Nabhodipta Garai.",
    links: [
      { label: "@sync-vault-js/core", href: "https://www.npmjs.com/package/@sync-vault-js/core" },
      { label: "@sync-vault-js/react-native", href: "https://www.npmjs.com/package/@sync-vault-js/react-native" },
      { label: "Repository", href: "https://github.com/brownboycodes/sync-vault-js" },
    ],
  },
  {
    index: "02",
    name: "CometChat UI kits",
    meta: "Inscripts, 2023 to 2025",
    summary:
      "The production kits the chat work landed in. These repositories belong to CometChat. My contribution was the product surface: messages, search, formatting, and the agent interactions inside them.",
    links: [
      { label: "React Native SDK", href: "https://github.com/cometchat/chat-sdk-react-native" },
      { label: "React Native UI kit", href: "https://github.com/cometchat/cometchat-uikit-react-native" },
      { label: "React UI kit, v4", href: "https://github.com/cometchat/cometchat-uikit-react/tree/v4" },
      { label: "Angular UI kit, v4", href: "https://github.com/cometchat/cometchat-uikit-angular/tree/v4" },
      { label: "Vue UI kit, v4", href: "https://github.com/cometchat/cometchat-uikit-vue/tree/v4" },
    ],
  },
  {
    index: "03",
    name: "BoozeAI",
    meta: "Jan 2025 to Apr 2025, shipped",
    summary:
      "A React Native application that recommends a cocktail from mood, weather, and what is actually on hand, using Gemini. Node and Express, MongoDB, Firebase Auth, a catalogue of more than a thousand recipes, and a Play Store release.",
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.boozeai_frontend" },
      { label: "GitHub", href: "https://github.com/SwayamDebata/BoozeAI" },
    ],
  },
  {
    index: "04",
    name: "MuseAI",
    meta: "Product · Next.js",
    summary:
      "Group chat with an assistant in the thread. Next.js, TypeScript, and the CometChat SDK. Slash commands, light and dark, authentication by OTP.",
    links: [
      { label: "Live", href: "https://muse-ai-lilac.vercel.app/" },
      { label: "GitHub", href: "https://github.com/SwayamDebata/MuseAI" },
    ],
  },
];

export const EARLIER = [
  {
    name: "Token portfolio",
    note: "A holdings view.",
    links: [
      { label: "Live", href: "https://token-portfolio-sepia.vercel.app" },
      { label: "GitHub", href: "https://github.com/SwayamDebata/token-portfolio" },
    ],
  },
  {
    name: "Bitcoin dashboard",
    note: "BTC/USDT, updating as the market does.",
    links: [
      { label: "Live", href: "https://btc-dashboard-swayam.netlify.app" },
      { label: "GitHub", href: "https://github.com/SwayamDebata/btc-dashboard" },
    ],
  },
  {
    name: "Ticket dashboard",
    note: "An operations board for tickets.",
    links: [{ label: "GitHub", href: "https://github.com/SwayamDebata/Ticket-Dashboard" }],
  },
  {
    name: "BigBites",
    note: "The first public React project. A food-delivery interface on the Swiggy API.",
    links: [
      { label: "Live", href: "https://thebigbites.netlify.app/" },
      { label: "GitHub", href: "https://github.com/SwayamDebata/BigBites" },
    ],
  },
];

export const PRACTICE = [
  {
    title: "Agents",
    items: [
      "LangGraph",
      "Azure AI Foundry",
      "Multi-agent routing",
      "Tool calling",
      "RAG",
      "Guardrails",
      "Evaluation",
      "Human review",
      "Voice, Pipecat",
    ],
  },
  {
    title: "Services",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Event-driven systems",
      "Azure Service Bus",
      "Azure Functions",
      "Docker",
      "GitHub Actions",
      "REST, GraphQL, WebSockets",
    ],
  },
  {
    title: "Data",
    items: [
      "PostgreSQL",
      "TimescaleDB",
      "MongoDB",
      "Redis",
      "MySQL",
      "XGBoost",
      "Feature work",
      "Shadow deployment",
      "SQL",
    ],
  },
  {
    title: "Interfaces",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "Vue",
      "Mapbox",
      "Tailwind",
      "React Query",
    ],
  },
];

export const ORQMESH = {
  pypi: "https://pypi.org/project/orqmesh/",
  github: "https://github.com/SwayamDebata/orqmesh",
  issues: "https://github.com/SwayamDebata/orqmesh/issues",
  install: 'pip install "orqmesh==0.1.0b1"',
  guide: "/orqmesh",
  story: [
    "The same shape of work kept arriving. A document comes in. Someone has to read it, name what it is, check it against a rule, and either finish the case or hand it to a person with the record intact. The database changes with the client. The model changes with the contract. The path does not.",
    "I wrote that down as a design note and called the larger framework ADK. The rule at the top of it is the whole idea: standardize how an agent works, and never assume how the customer's infrastructure works. The customer keeps the database, the model, the credentials, and the business rules. The framework keeps the runtime.",
    "Orqmesh is the part of that note I have published. Version 0.1.0b1, Apache-2.0, on PyPI, with no required third-party runtime. It is an alpha, and it is a library. It does not host a service, ship a model, or sign in a user.",
  ],
  facts: [
    ["Package", "orqmesh"],
    ["Version", "0.1.0b1"],
    ["License", "Apache-2.0"],
    ["Python", "3.11 and later"],
    ["Status", "Alpha"],
    ["Core deps", "None"],
  ],
  path: [
    ["Arrive", "A document, a message, a case"],
    ["Read", "Extract what the schema asks for"],
    ["Name", "Classify against the contract"],
    ["Check", "Rules before a model decides"],
    ["Stop", "A person, when the model should not"],
    ["Finish", "Write back to the system they already have"],
  ],
  run: [
    ["Start", "A new run id, and a JSON input"],
    ["Step", "Named handlers, one after another"],
    ["Save", "A checkpoint after each boundary"],
    ["Pause", "A review request, if a person must decide"],
    ["End", "Completed, rejected, or failed"],
  ],
  layers: [
    {
      name: "Application",
      detail:
        "The schemas, rules, tools, credentials, and clients. This is the part that changes per customer, and Orqmesh does not own it.",
    },
    {
      name: "Core",
      detail:
        "Workflow and AsyncWorkflow, the checkpoint seam, the review contract, and the tool registry with a per-agent allowlist.",
    },
    {
      name: "Seams",
      detail:
        "Thin adapters. A LangGraph graph the application injects. Azure Blob, Cosmos, and Content Understanding clients the application injects. Tested with fakes.",
    },
    {
      name: "Elsewhere",
      detail:
        "The model, the database, the identity system, and the desk a person actually uses. Those stay outside the package.",
    },
  ],
  can: [
    {
      name: "Sequential workflows",
      detail:
        "Workflow runs named synchronous steps in order. AsyncWorkflow awaits named async steps in the same order, and calls the checkpoint store on a worker thread so a blocking save does not sit on the event loop.",
    },
    {
      name: "A written state",
      detail:
        "WorkflowState holds the run id, status, input, step outputs, the next step, a pending review, the review record, and a failure string. It is JSON. CheckpointStore is load and save. JsonFileCheckpointStore replaces a local file atomically.",
    },
    {
      name: "A person in the path",
      detail:
        "A step returns ReviewRequest and the run becomes waiting_review. Later steps do not run. resume() records approval and continues, or rejection and stops. The reviewer string is required. The application has to decide who is allowed to be that reviewer.",
    },
    {
      name: "Tools with a list",
      detail:
        "ToolRegistry registers callables by name. An Agent may call only the names on its allowlist, through AgentContext.call_tool(). This is a programming boundary. It is not a sandbox.",
    },
    {
      name: "Adapters that stay thin",
      detail:
        "LangGraphAdapter calls an injected object’s ainvoke() and checks that the result is a mapping. AzureBlobStore reads a whole blob into memory. AzureCosmosRepository upserts and queries. AzureContentUnderstandingAdapter runs a supplied client’s submit and poll on a worker thread. None of them create credentials or own the client.",
    },
    {
      name: "One worked example",
      detail:
        "A synthetic document review. The caller sets requires_review. The workflow does not read the document and does not call a model. If review is not required, it is approved. If it is required, the run pauses. Rejection ends with no final result. A success returns finalize_document with status, document id, title, and the approval. The content is stored in the checkpoint, so the example is for data you can afford to leave on disk.",
    },
  ],
  cannot: [
    "Distributed checkpoints, file encryption, or more than one worker sharing a run",
    "Branching, fan-out, retries, timeouts, or idempotent side effects",
    "A model adapter, including Azure OpenAI",
    "Authentication, authorization, redaction, or an audit log",
    "A user interface, a queue, or a hosted runtime",
    "Certification against a live provider SDK",
  ],
  cases: [
    {
      name: "Invoice",
      stack: "The note’s first proof",
      detail:
        "PostgreSQL and Azure OpenAI, in the design. Extract, classify, validate against vendor and purchase order, then post or hand to a person. The package does not ship this workflow.",
    },
    {
      name: "Loan file",
      stack: "The note’s second proof",
      detail:
        "SQL Server and OpenAI, in the design. Same runtime, different schema and different model. The point of the proof is that the runtime does not move when the stack does.",
    },
    {
      name: "Claim",
      stack: "The note’s third proof",
      detail:
        "MongoDB and Gemini, in the design. Three applications, one spine, and each application supplies only its own contracts, mappings, rules, and tools.",
    },
  ],
};

export const ADDRESSES = [
  { label: "ModelEarth", href: "https://www.modelearth.in" },
  { label: "ModelEarth API", href: "https://api.modelearth.in" },
  { label: "Orqmesh", href: "https://pypi.org/project/orqmesh/" },
  { label: "Orqmesh source", href: "https://github.com/SwayamDebata/orqmesh" },
  { label: "Founder", href: "mailto:founder@modelearth.in" },
  { label: "Work mail", href: "mailto:swayam@modelearth.in" },
  { label: "Personal mail", href: "mailto:swayamdebata2003@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/swayam-debata/" },
  { label: "GitHub", href: "https://github.com/SwayamDebata" },
  { label: "Linktree", href: "https://linktr.ee/swayam_devta" },
  { label: "Instagram", href: "https://instagram.com/swayam_debata" },
  { label: "Resume", href: "/resume.pdf" },
];
