export const sourceNotes = {
  videoTitle: "You're Learning AI Wrong. Here's The Cheat Sheet.",
  channel: 'AI Founders',
  videoId: 'Zd8dA7bijzo',
  published: '2026-04-21',
  publicSource: 'https://www.heatherjones.org/youre-learning-ai-wrong-heres-the-cheat-sheet/',
  summary:
    'Dataset extracted from the YouTube transcript for AI Founders video Zd8dA7bijzo and checked against the public mirror dated April 21, 2026. Abbreviations are normalized for flashcard display where the transcript gives full terms rather than printed chart codes.'
};

export const aiCheatSheetGroups = [
  {
    id: 'g1',
    groupNumber: 'G1',
    groupAbbreviation: 'FUND',
    groupName: 'Fundamentals',
    groupDescription: 'The atoms of everything. Nothing works without these baseline concepts.',
    color: '#0f766e',
    elements: [
      {
        id: 'token',
        groupNumber: 'G1',
        abbreviation: 'TK',
        fullName: 'Token',
        explanation:
          'How AI reads and processes text. Tokens affect cost, speed, and how much information you can feed an AI at once.',
        order: 1
      },
      {
        id: 'model',
        groupNumber: 'G1',
        abbreviation: 'MDL',
        fullName: 'Model',
        explanation: 'The core AI engine, or brain, that everything else runs on top of.',
        order: 2
      },
      {
        id: 'prompt',
        groupNumber: 'G1',
        abbreviation: 'PR',
        fullName: 'Prompt',
        explanation:
          'The instructions you give the model. Prompt structure drives much of the quality of the output.',
        order: 3
      },
      {
        id: 'context-window',
        groupNumber: 'G1',
        abbreviation: 'CW',
        fullName: 'Context Window',
        explanation:
          'How much the model can see in one conversation, like short-term memory with a hard limit.',
        order: 4
      },
      {
        id: 'temperature',
        groupNumber: 'G1',
        abbreviation: 'TP',
        fullName: 'Temperature',
        explanation:
          'The setting that controls creativity versus predictability. Low is consistent; high is more creative.',
        order: 5
      },
      {
        id: 'parameters',
        groupNumber: 'G1',
        abbreviation: 'PA',
        fullName: 'Parameters',
        explanation:
          'Internal model settings that shape capability and cost; more parameters often means more capability.',
        order: 6
      }
    ]
  },
  {
    id: 'g2',
    groupNumber: 'G2',
    groupAbbreviation: 'DATA',
    groupName: 'Data and Knowledge',
    groupDescription: 'How you feed intelligence into a system and adapt it to a specific use case.',
    color: '#2563eb',
    elements: [
      {
        id: 'training',
        groupNumber: 'G2',
        abbreviation: 'TR',
        fullName: 'Training',
        explanation:
          'The information a model learned from during creation; it explains strengths and blind spots.',
        order: 1
      },
      {
        id: 'embedding',
        groupNumber: 'G2',
        abbreviation: 'EM',
        fullName: 'Embedding',
        explanation:
          'How AI converts text into numbers that capture meaning and semantic similarity.',
        order: 2
      },
      {
        id: 'vector-database',
        groupNumber: 'G2',
        abbreviation: 'VDB',
        fullName: 'Vector Database',
        explanation:
          'Where embeddings are stored and searched for document assistants, product catalogs, and custom search.',
        order: 3
      },
      {
        id: 'knowledge-base',
        groupNumber: 'G2',
        abbreviation: 'KB',
        fullName: 'Knowledge Base',
        explanation:
          'A curated store of information your AI can search and draw from in real time.',
        order: 4
      },
      {
        id: 'rag',
        groupNumber: 'G2',
        abbreviation: 'RAG',
        fullName: 'Retrieval-Augmented Generation',
        explanation:
          'A model plus knowledge base pattern where the AI answers using your information, not only pretraining.',
        order: 5
      },
      {
        id: 'fine-tuning',
        groupNumber: 'G2',
        abbreviation: 'FT',
        fullName: 'Fine-Tuning',
        explanation:
          'Training an existing model on your specific data to change behavior and produce specialized outputs.',
        order: 6
      }
    ]
  },
  {
    id: 'g3',
    groupNumber: 'G3',
    groupAbbreviation: 'INTEL',
    groupName: 'Intelligence Layer',
    groupDescription: 'How models become smarter, more contextual, and safer to deploy in real businesses.',
    color: '#7c3aed',
    elements: [
      {
        id: 'system-prompt',
        groupNumber: 'G3',
        abbreviation: 'SP',
        fullName: 'System Prompt',
        explanation:
          'The hidden instruction set that gives an assistant its role, rules, persona, and tone.',
        order: 1
      },
      {
        id: 'memory',
        groupNumber: 'G3',
        abbreviation: 'MEM',
        fullName: 'Memory',
        explanation:
          'The ability to remember details across conversations so every interaction does not start from zero.',
        order: 2
      },
      {
        id: 'multimodal',
        groupNumber: 'G3',
        abbreviation: 'ML',
        fullName: 'Multimodal',
        explanation:
          'AI that works with images, audio, video, and documents, not just text.',
        order: 3
      },
      {
        id: 'rlhf',
        groupNumber: 'G3',
        abbreviation: 'RI',
        fullName: 'Reinforcement Learning from Human Feedback',
        explanation:
          'A training technique that aligns model outputs with what humans actually want.',
        order: 4
      },
      {
        id: 'guardrails',
        groupNumber: 'G3',
        abbreviation: 'GD',
        fullName: 'Guardrails',
        explanation:
          'Safety boundaries and rules that control what an AI system will and will not do.',
        order: 5
      },
      {
        id: 'unlabeled-g3-source-cell',
        groupNumber: 'G3',
        abbreviation: 'TBD',
        fullName: 'Unlabeled Source Cell',
        explanation:
          'The transcript names five G3 concepts, and the video table shows a sixth G3 cell as blank while still counting 48 elements. This card preserves that source gap for later correction.',
        order: 6
      }
    ]
  },
  {
    id: 'g4',
    groupNumber: 'G4',
    groupAbbreviation: 'MOD',
    groupName: 'Models and Providers',
    groupDescription: 'The engine room: actual AI models and providers you can build on.',
    color: '#db2777',
    elements: [
      {
        id: 'gpt',
        groupNumber: 'G4',
        abbreviation: 'GPT',
        fullName: 'GPT',
        explanation:
          'OpenAI model family described as versatile for a wide range of tasks.',
        order: 1
      },
      {
        id: 'claude',
        groupNumber: 'G4',
        abbreviation: 'CL',
        fullName: 'Claude',
        explanation:
          'Anthropic model family highlighted for long documents and nuanced reasoning.',
        order: 2
      },
      {
        id: 'gemini',
        groupNumber: 'G4',
        abbreviation: 'GEM',
        fullName: 'Gemini',
        explanation: "Google's model family with deep integration into the Google ecosystem.",
        order: 3
      },
      {
        id: 'llama',
        groupNumber: 'G4',
        abbreviation: 'LLA',
        fullName: 'Llama',
        explanation:
          "Meta's open-source model family, useful when you want more control or self-hosting options.",
        order: 4
      },
      {
        id: 'mistral',
        groupNumber: 'G4',
        abbreviation: 'MIS',
        fullName: 'Mistral',
        explanation:
          'A lean, efficient European model alternative with its own strengths and pricing profile.',
        order: 5
      },
      {
        id: 'grok',
        groupNumber: 'G4',
        abbreviation: 'GRK',
        fullName: 'Grok',
        explanation:
          'xAI model family. The broader lesson is to match the model to the job, not debate one winner.',
        order: 6
      }
    ]
  },
  {
    id: 'g5',
    groupNumber: 'G5',
    groupAbbreviation: 'INFRA',
    groupName: 'Infrastructure and Connectivity',
    groupDescription: 'How everything talks to everything else and becomes a real system.',
    color: '#ea580c',
    elements: [
      {
        id: 'api',
        groupNumber: 'G5',
        abbreviation: 'API',
        fullName: 'Application Programming Interface',
        explanation:
          'The bridge between AI models and other software systems.',
        order: 1
      },
      {
        id: 'webhook',
        groupNumber: 'G5',
        abbreviation: 'WH',
        fullName: 'Webhook',
        explanation:
          'A way for one system to notify another automatically when something happens.',
        order: 2
      },
      {
        id: 'endpoint',
        groupNumber: 'G5',
        abbreviation: 'EP',
        fullName: 'Endpoint',
        explanation:
          'The specific URL address where an API lives and receives requests.',
        order: 3
      },
      {
        id: 'mcp',
        groupNumber: 'G5',
        abbreviation: 'MCP',
        fullName: 'Model Context Protocol',
        explanation:
          'An emerging standard that lets AI models connect to external tools and data sources consistently.',
        order: 4
      },
      {
        id: 'function-calling',
        groupNumber: 'G5',
        abbreviation: 'FC',
        fullName: 'Function Calling',
        explanation:
          'The ability for a model to call external tools or APIs during a conversation.',
        order: 5
      },
      {
        id: 'sdk',
        groupNumber: 'G5',
        abbreviation: 'SDK',
        fullName: 'Software Development Kit',
        explanation:
          'Pre-built libraries that make it easier to build with AI APIs.',
        order: 6
      }
    ]
  },
  {
    id: 'g6',
    groupNumber: 'G6',
    groupAbbreviation: 'AGNT',
    groupName: 'Agents and Automation',
    groupDescription: 'Where leverage lives: systems that decide, act, coordinate, and save time.',
    color: '#ca8a04',
    elements: [
      {
        id: 'agent',
        groupNumber: 'G6',
        abbreviation: 'AG',
        fullName: 'Agent',
        explanation:
          'An AI system that perceives its environment, makes decisions, and takes action.',
        order: 1
      },
      {
        id: 'orchestration',
        groupNumber: 'G6',
        abbreviation: 'OR',
        fullName: 'Orchestration',
        explanation:
          'The system that coordinates multiple agents or steps in a workflow.',
        order: 2
      },
      {
        id: 'workflow',
        groupNumber: 'G6',
        abbreviation: 'WF',
        fullName: 'Workflow',
        explanation:
          'A sequence of automated steps that produces a business outcome.',
        order: 3
      },
      {
        id: 'multi-agent-system',
        groupNumber: 'G6',
        abbreviation: 'MAS',
        fullName: 'Multi-Agent System',
        explanation:
          'Multiple specialized agents working together across research, writing, editing, publishing, or CRM updates.',
        order: 4
      },
      {
        id: 'human-in-the-loop',
        groupNumber: 'G6',
        abbreviation: 'HITL',
        fullName: 'Human in the Loop',
        explanation:
          'A review or approval step that keeps quality high and risk low in sensitive workflows.',
        order: 5
      },
      {
        id: 'tool-use',
        groupNumber: 'G6',
        abbreviation: 'TU',
        fullName: 'Tool Use',
        explanation:
          'The ability for an agent to use search, calculators, databases, apps, or APIs.',
        order: 6
      }
    ]
  },
  {
    id: 'g7',
    groupNumber: 'G7',
    groupAbbreviation: 'NOCODE',
    groupName: 'No-Code Builder Tools',
    groupDescription: "The entrepreneur's toolbox for building without starting as a developer.",
    color: '#16a34a',
    elements: [
      {
        id: 'zapier',
        groupNumber: 'G7',
        abbreviation: 'ZAP',
        fullName: 'Zapier',
        explanation:
          'A widely used no-code automation platform with a low learning curve and thousands of app integrations.',
        order: 1
      },
      {
        id: 'make',
        groupNumber: 'G7',
        abbreviation: 'MAKE',
        fullName: 'Make',
        explanation:
          'A visual automation platform suited to complex, multi-step workflows.',
        order: 2
      },
      {
        id: 'n8n',
        groupNumber: 'G7',
        abbreviation: 'N8N',
        fullName: 'n8n',
        explanation:
          'Open-source automation that can run on your own infrastructure and gives more control.',
        order: 3
      },
      {
        id: 'voiceflow',
        groupNumber: 'G7',
        abbreviation: 'VF',
        fullName: 'Voiceflow',
        explanation:
          'A no-code platform for building AI agents and conversational interfaces.',
        order: 4
      },
      {
        id: 'flowise',
        groupNumber: 'G7',
        abbreviation: 'FLOW',
        fullName: 'Flowise',
        explanation:
          'An open-source visual builder for LLM applications, RAG pipelines, agents, and chatbots.',
        order: 5
      },
      {
        id: 'cursor',
        groupNumber: 'G7',
        abbreviation: 'CUR',
        fullName: 'Cursor',
        explanation:
          'An AI-powered code editor that lowers the barrier to custom AI builds.',
        order: 6
      }
    ]
  },
  {
    id: 'g8',
    groupNumber: 'G8',
    groupAbbreviation: 'BIZ',
    groupName: 'Business Layer',
    groupDescription: 'The lens that turns the AI table into positioning, value, and strategy.',
    color: '#475569',
    elements: [
      {
        id: 'use-case',
        groupNumber: 'G8',
        abbreviation: 'UC',
        fullName: 'Use Case',
        explanation:
          'The specific business problem you are solving with AI. Start with the problem before the product.',
        order: 1
      },
      {
        id: 'roi',
        groupNumber: 'G8',
        abbreviation: 'ROI',
        fullName: 'Return on Investment',
        explanation:
          'The time saved, revenue added, or cost reduced by an AI implementation.',
        order: 2
      },
      {
        id: 'prompt-engineering',
        groupNumber: 'G8',
        abbreviation: 'PE',
        fullName: 'Prompt Engineering',
        explanation:
          'The craft of designing prompts that reliably produce the output you need.',
        order: 3
      },
      {
        id: 'ai-stack',
        groupNumber: 'G8',
        abbreviation: 'STK',
        fullName: 'AI Stack',
        explanation:
          'The full combination of tools, models, and systems working together.',
        order: 4
      },
      {
        id: 'ai-avatar',
        groupNumber: 'G8',
        abbreviation: 'AV',
        fullName: 'AI Avatar',
        explanation:
          'A digital AI persona or representative used in content, customer service, or brand building.',
        order: 5
      },
      {
        id: 'ai-strategy',
        groupNumber: 'G8',
        abbreviation: 'STR',
        fullName: 'AI Strategy',
        explanation:
          'A sequenced plan for how AI integrates into the business over time.',
        order: 6
      }
    ]
  }
];
