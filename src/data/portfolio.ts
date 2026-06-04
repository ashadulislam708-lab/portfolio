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
    company: 'Potential', role: 'Software Engineer', location: 'Seoul, South Korea', period: 'Dec 2025 — Present',
    bullets: [
      'Led backend team, driving API design and development using NestJS.',
      'Contributed to frontend development using React, ensuring end-to-end feature delivery.',
    ],
  },
  {
    company: 'Bit Byte Technology', role: 'Software Engineer', location: 'Dhaka, Bangladesh', period: 'Mar 2023 — Nov 2025',
    bullets: [
      'Maintained a SaaS platform handling 10M+ requests per month, ensuring high availability and performance.',
      'Reduced AWS S3 costs by implementing a custom CDN system, optimizing storage and delivery expenses.',
      'Lead the backend development at Australia Govt Project Acceler8.',
      'Developed the e-commerce SaaS product Bit Commerce.',
    ],
  },
  {
    company: 'Decode lab', role: 'Junior Software Engineer', location: 'Dhaka, Bangladesh', period: 'Jan 2022 — Feb 2023',
    bullets: [
      'Optimized the admin panel for best practicify project, dramatically cutting loading time from 50 seconds to 10 seconds.',
      'Solved complex MERN frontend challenges, mentored teammates, and ensured on-time delivery.',
      'Built and shipped diverse category websites including e-commerce platforms, law firm sites, Bangladesh government portals, delivery systems, and ERP solutions.',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Hazetrip',
    url: 'https://www.hazetrip.com',
    blurb: 'SaaS OTA platform for flight, hotel & tour bookings with real-time GDS pricing and sub-5-second search.',
    bullets: [
      'Led backend team for a B2B OTA platform using NestJS microservices and PostgreSQL.',
      'Integrated four Global Distribution Systems (GDS) to deliver flight search results under 5 seconds.',
      'Mentored junior developers and optimized system performance for high booking throughput.',
    ],
    stack: ['Microservices', 'Docker', 'Kubernetes', 'MySQL', 'MongoDB', 'Redis', 'GDS', 'AWS'],
  },
  {
    title: 'BitCommerz',
    url: 'https://bitcommerz.com',
    blurb: 'SaaS e-commerce product letting shop owners register, set up their store, and start selling online instantly.',
    bullets: [
      'Built product/SKU, cart, wishlist, payment, RBAC & media management modules in NestJS + TypeORM.',
      'Maintained platform handling 10M+ requests/month with high availability and performance.',
      'Cut AWS S3 costs by implementing a custom CDN for optimized storage and delivery.',
      'Collaborated with frontend teams to deliver a seamless, high-performance user experience.',
    ],
    stack: ['NestJS', 'TypeORM', 'React', 'Next.js'],
  },
  {
    title: 'Gadget and Gear',
    url: 'https://gadgetandgear.com',
    blurb: 'Backend for a fast-growing online gadget & electronics e-commerce storefront.',
    bullets: [
      'Contributed to the NestJS backend powering product catalog, checkout, and order management.',
      'Implemented Redis caching to significantly improve response times and system performance.',
      'Optimized databases (MongoDB & MySQL) and scaled the infrastructure on AWS.',
    ],
    stack: ['MongoDB', 'MySQL', 'NestJS', 'Redis', 'AWS'],
  },
  {
    title: 'Acceler8',
    url: 'https://acceler8.com.au',
    blurb: 'Virtual course marketplace connecting Australian students with RTOs via seamless online payments.',
    bullets: [
      'Led backend development using NestJS, Knex.js, and MySQL deployed on AWS.',
      'Supported frontend development in Vue.js for course discovery and enrollment flows.',
      'Designed course request, purchase, and online payment gateway integrations.',
    ],
    stack: ['NestJS', 'Vue.js', 'Knex.js', 'MySQL', 'AWS'],
  },
  {
    title: 'Fuel Dash',
    url: 'https://play.google.com/store/apps/details?id=com.fueldash.app',
    blurb: 'On-demand fuel delivery app with real-time tracking and secure in-app payments.',
    bullets: [
      'Architected and maintained the backend using Node.js and NestJS with MongoDB.',
      'Deployed and managed production infrastructure on AWS for high availability.',
      'Integrated Stripe for secure in-app payments and implemented security best practices.',
    ],
    stack: ['Node.js', 'NestJS', 'ReactJS', 'MongoDB', 'Docker', 'AWS', 'Stripe'],
  },
  {
    title: 'SSG',
    url: 'https://ssgeshop.com',
    blurb: 'Scalable e-commerce for Super Star Group with secure payments, EMI, and full product lifecycle management.',
    bullets: [
      'Developed backend modules for product/SKU, cart, wishlist, and payment gateway integration.',
      'Built role-based access control (RBAC) and media management systems.',
      'Collaborated closely with the React/Next.js frontend team for end-to-end delivery.',
    ],
    stack: ['NestJS', 'TypeORM', 'React', 'Next.js'],
  },
  {
    title: 'Coaching Record',
    url: 'https://play.google.com/store/apps/details?id=com.thecoachingrecord.app',
    blurb: 'Health & fitness app connecting athletes, coaches & families with progress tracking and real-time updates.',
    bullets: [
      'Built the NestJS + PostgreSQL backend, handling APIs and core application logic.',
      'Developed React frontend features for both Coach and Athlete mobile applications.',
      'Integrated RevenueCat for in-app subscriptions and Firebase Cloud Messaging for push notifications.',
    ],
    stack: ['React', 'NodeJS', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'RevenueCat', 'Firebase'],
  },
];
