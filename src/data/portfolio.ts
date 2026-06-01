export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript'] },
  { group: 'Frameworks', items: ['ExpressJS', 'NestJS', 'FastAPI', 'React', 'NextJS'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'MongoDB', 'VectorDB'] },
  { group: 'Tooling', items: ['RabbitMQ', 'Docker', 'Git', 'Linux', 'WebSockets', 'GraphQL', 'LangChain', 'LangGraph', 'RAG'] },
];

export const EXPERIENCE = [
  {
    company: 'Defined Solution', role: 'Backend Developer', location: 'Rampura, Dhaka', period: 'Feb 2024 — Apr 2026',
    bullets: [
      'Architected systems using Hexagonal Architecture and DDD for long-term maintainability.',
      'Translated complex business requirements into scalable technical specs through stakeholder collaboration.',
      'Owned end-to-end API development and third-party integrations with a performance & security focus.',
      'Mentored junior devs through rigorous code reviews — culture of clean code and technical excellence.',
      'Optimized multi-tenant DB schemas and queries to slash latency for high-concurrency enterprise apps.',
    ],
  },
  {
    company: 'TechTrioz Solutions', role: 'Full Stack Developer', location: 'Bashundhara R/A, Dhaka', period: 'Nov 2022 — Dec 2023',
    bullets: [
      'Owned the full SDLC for large-scale ERP and e-commerce platforms — DB modeling to production.',
      'Engineered critical financial and inventory modules with 100% data integrity across multi-branch envs.',
      'Partnered with PMs to set technical milestones and consistently shipped within sprint goals.',
      'Executed legacy migrations and performance refactors — significantly improved responsiveness.',
    ],
  },
];

export const PROJECTS = [
  { title: 'Microservice Food Delivery Platform',
    blurb: 'A high-performance backend choreographing dozens of services with gRPC, Kafka and Redis — built to feed a hungry city.',
    bullets: [
      'Microservices in NestJS (TypeScript) and Go, coordinated via Nx monorepo.',
      'gRPC for fast, robust service-to-service communication.',
      'Kafka-driven event streams keep state in lock-step across services.',
      'Redis Sorted Sets power a real-time rider leaderboard with bi-weekly auto-resets.',
      'Async DB logging gives us a tamper-proof audit trail without hurting API latency.',
    ],
    stack: ['TypeScript','Go','NestJS','Nx','Docker','PostgreSQL','Redis','Prisma','Kafka','gRPC','AWS S3','Azure'] },
  { title: 'ERP Solution',
    blurb: 'Enterprise-grade ERP running across 9 sister concerns — Procurement, Accounts, Fixed Asset and Journals modules under my ownership.',
    bullets: [
      'Owned critical modules: Procurement, Accounts, Fixed Asset, Journals.',
      'Squeezed every drop of performance out of Django ORM with advanced queries.',
      'Modular Monolith architecture for clean boundaries without microservice overhead.',
    ],
    stack: ['Python','JavaScript','Django','DRF','Vue','Docker','PostgreSQL','Celery'] },
  { title: 'International Logistics & Tracking Engine',
    blurb: 'Parcel-tracking backbone for a South African logistics provider — handling 3,000+ tracking events a day without breaking a sweat.',
    bullets: [
      'Full rack management system for warehouse optimization.',
      '3,000+ daily tracking events processed asynchronously.',
      'Background workers keep handheld warehouse devices fed in real time.',
    ],
    stack: ['Python','Django','DRF','Vue','Docker','MySQL','Celery'] },
  { title: 'Sales ERP — Enterprise Fashion Retail',
    blurb: 'Centralized inventory and POS for a leading clothing brand — keeping nationwide warehouses and outlets in perfect sync.',
    bullets: [
      'Real-time stock sync across national warehouses & retail outlets prevents overselling.',
      'Smooth inventory transfers between branches and warehouses.',
      'Multi-channel sales: e-commerce, f-commerce, WhatsApp, Instagram.',
      'Owned Procurement, Inventory, Accounts and Budgeting modules.',
    ],
    stack: ['Python','Django','DRF','Vue','Docker','MySQL','Celery'] },
  { title: 'Real Estate CRM',
    blurb: 'Custom CRM with modular pipelines for lead tracking, property management and agent KPIs.',
    bullets: [
      'Modular pipelines for leads & property management.',
      'Automated notification triggers and status workflows streamline the sales cycle.',
      'Agent KPI tracking baked in.',
    ],
    stack: ['Python','TypeScript','Django','DRF','Nuxt','Docker','PostgreSQL','BullMQ','Redis'] },
  { title: 'Hotel Management System',
    blurb: 'A legacy Django + Vue 2 system kept alive and modernized — adding new features without breaking the old world.',
    bullets: [
      'Worked on a legacy stack (older Django, Vue 2).',
      'Shipped new features without breaking existing functionality.',
      'Incrementally updated the whole system.',
    ],
    stack: ['Python','Django','DRF','Vue','Docker','MySQL'] },
];
