// ============================================================================
//  EDIT THIS FILE TO MAKE THE SITE YOURS.
//  Everything the site displays comes from here — no need to touch components.
// ============================================================================

export const profile = {
  name: 'Janet Lim',
  // Hero photo — shown next to your name. Drop the file in /public (e.g. '/me.png').
  // A transparent PNG (like the collage) looks best. Set to '' for a text-only hero.
  photo: '/me.png',
  photoAlt: 'Janet Lim — a collage of food, friends, and good times',
  // A short, punchy tagline. This shows under your name in the hero.
  intro:
    'CS & Finance student at Northeastern. I\'m exploring career paths spanning data, finance, and HR, and figuring out where I want to land.',
  location: 'Boston, MA',
  // Set any of these to '' to hide the link.
  links: {
    github: '', // add your GitHub URL here to show the link
    linkedin: 'https://www.linkedin.com/in/janetjuhyunlim/',
    resume: '/Janet Lim Data Resume-20.pdf', // drop the PDF in /public with this exact filename to enable
    instagram: 'https://www.instagram.com/chewiebite/', // food Instagram — shown in About
  },
}

// The lenses your work is organized by. These power the project filter.
// key must match the `category` on each project below.
export const disciplines = [
  { key: 'software', label: 'Software', blurb: 'Apps, tools, and dashboards I’ve built.' },
  { key: 'data', label: 'Data', blurb: 'Analysis, modeling, and visualization.' },
  { key: 'finance', label: 'Finance', blurb: 'Markets, portfolios, and financial analysis.' },
  { key: 'hr', label: 'HR', blurb: 'Talent, compliance, and people operations.' },
]

export const about = {
  heading: 'About',
  // Optional About photo. Empty = hidden (the hero photo is used instead).
  photo: '',
  photoAlt: '',
  // A longer paragraph (or two). Keep it human.
  body: [
    'I’m Janet Lim, a Computer Science and Finance student at Northeastern University’s Khoury ' +
    'College, drawn to data and creative decision-making. Whether I’m auditing compliance records, ' +
    'coming up with programs for the Northeastern residential community, or turning data into a dashboards people can explore, ' +
    'I gravitate toward work that involves communities and real-world impact.',
    'When I\'m not in class, I\'m usually exploring Boston one food crawl at a time, working on my golf game, or overanalyzing someone\'s MBTI type. ' +
    'Wherever I am, I like spotting what\'s good and getting other people excited about it.',
  ],
  // Quick facts shown as chips.
  highlights: [
    'Northeastern · Khoury College',
    'B.S. Computer Science + Finance · 2027',
    '🏆 NACURH School of the Year 2026',
    'Open to co-ops & internships',
  ],
}

// ----------------------------------------------------------------------------
//  PROJECTS — add/remove freely. `category` must be one of the discipline keys.
//  `tags` are the small pills shown on each card.
//  `image` is optional: drop a file in /public and reference it as '/my-img.png'.
//  `links.code` / `links.live`: add URLs to show the buttons, or leave '' to hide.
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: 'Codescape — Code City Visualizer',
    category: 'software',
    blurb:
      'An extension that visualizes your codebase as an isometric city.' + 
      'Built with a 9-person team at Forge and published on the VS Code Marketplace. I contributed front-end rendering '+
      'in TypeScript (isometric grid canvas, building visuals, UML renderer)',
    tags: ['VS Code Extension','TypeScript', 'Front-End', 'Agile'],
    image: '/codescape.png',
    links: { live: 'https://marketplace.visualstudio.com/items?itemName=Codescape.codescapes', code: 'https://github.com/pdsl2005/codescape' },
    year: '2026',
  },
  {
    title: 'Retrocadia',
    category: 'software',
    blurb:
      'A multiplayer retro arcade web app (TypeScript, Supabase, Postgres) '+
      'upgraded by a 4-person team. I worked on the UI, built the profile banner, '+
      'supported the Supabase and backend Pong work, and added keyboard navigation and screen reader accessibility.',
    tags: ['TypeScript', 'React', 'Agile', 'PostgreSQL'],
    image: '/retrocadia.png',
    links: { live: 'https://summer26-project-group-106.onrender.com', code: '' },
    year: '2026',
  },
  {
    title: 'Interactive Flight Networks Dashboard',
    category: 'software',
    blurb:
      'Built an interactive dashboard that synthesizes 55,000+ flight records into an ' +
      'accessible visual tool, making a large international dataset explorable for ' +
      'non-technical users.',
    tags: ['Python', 'pandas', 'HTML/CSS/JS', 'Data Viz'],
    image: '/flightsdashboard.png',
    links: { live: 'https://ian-menachery.github.io/Flights_Project/website/', code: 'https://github.com/ian-menachery/Flights_Project' },
    year: '2025',
  },
  {
    title: 'Healthcare Facility Cost Analysis',
    category: 'data',
    blurb:
      'Researched cost drivers across 264 facilities using regression and hypothesis ' +
      'testing, explaining 68% of total-expense variation, and delivered prioritized ' +
      'recommendations in a report written for a non-technical audience.',
    tags: ['Excel', 'SPSS', 'Regression', 'Hypothesis Testing'],
    image: '',
    links: { live: '', code: '' },
    year: '2024',
  },
  {
    title: 'Stock Portfolio Management System',
    category: 'software',
    blurb:
      'A Java stock-portfolio tracker built on MVC architecture, pulling real-time closing ' +
      'prices, moving averages, and crossover analysis from the Alpha Vantage API. ' +
      'Terminal-based, with portfolio creation, gain/loss calculations, and save/load.',
    tags: ['Java', 'MVC', 'Alpha Vantage API'],
    image: '/stocksproj',
    links: { live: '', code: '' },
    year: '2024',
  },
  {
    title: 'Multi-Asset Portfolio Management',
    category: 'finance',
    blurb:
      'Co-managed a simulated ~$900K, 25-holding portfolio (70% equity / 30% fixed income) ' +
      'that beat the S&P 500 and Russell 1000 by ~6 points (-2.6% vs -8.7%) through a ' +
      'downturn — while cutting risk below both benchmarks (beta 0.89, max drawdown -6.4%).',
    tags: ['StockTrak', 'Excel', 'Risk (Sharpe, VaR)', 'Asset Allocation'],
    image: '',
    links: { live: '', code: '' },
    year: '2026',
  },
  {
    title: 'College Application Portal',
    category: 'software',
    blurb:
      'A database-backed portal that streamlines college-application workflows for applicants, ' +
      'counselors, and admissions officers. Prototyped with Appsmith and Docker over SQL ' +
      'databases, with role-based data flow across records, feedback, and decisions.',
    tags: ['SQL', 'Appsmith', 'Docker', 'Databases'],
    image: '',
    links: { live: '', code: '' },
    year: '2024',
  },
  
]

// ----------------------------------------------------------------------------
//  EXPERIENCE — shown as a vertical timeline.
// ----------------------------------------------------------------------------
export const experience = [
  {
    role: 'Co-Vice President of Programming & Collaboration',
    org: 'Resident Student Association',
    period: 'Sep 2025 – Present',
    bullets: [
      'Allocate a $100k+ Resident Activity Fee budget to optimize spending across events serving 10,000+ residents.',
      'Lead cross-functional collaboration with the E-Board, university admins, and outside vendors to plan and run ~40 programming initiatives a year — plus signature events like Husky Hunt and Snowball reaching ~700 participants.',
      'Earned 2026 NACURH School of the Year as part of the leadership team — the top national recognition for university residence hall associations.',
    ],
  },
  {
    role: 'Talent Acquisition Support Co-op',
    org: 'Brown Brothers Harriman',
    period: 'Jul – Dec 2025',
    bullets: [
      'Coordinated logistics for 500+ interviews, partnering cross-functionally with recruiters and hiring managers in a fast-paced professional-services environment.',
      'Maintained and audited records across enterprise systems (Workday, Cisive) at a global financial firm, validating data accuracy and adherence to internal policies.',
    ],
  },
  {
    role: 'Compliance Assistant',
    org: 'Northeastern University — Office of Student Employment',
    period: 'May 2026 – Present',
    bullets: [
      'Audit and process I-9 documentation in Fragomen to verify student-employee work authorization and maintain federal employment compliance.',
      'Resolve student inquiries by referencing Workday records to check status, identify missing documentation, and pinpoint holds.',
    ],
  },
  {
    role: 'Software Lab Member',
    org: 'Forge - Northeastern Product Lab',
    period: 'Jan – April 2026',
    bullets: [
      'Shipped CodeScape, a VS Code extension that visualizes a codebase as an isometric city to boost developer motivation, published live on the VS Marketplace.',
      'Built front-end rendering components in TypeScript as part of a 9-person cross-functional team, contributing to the canvas, isometric grid, and building visualizations.',
      'Worked through the full product lifecycle (user research, prototyping, agile sprints) and pitched the concept to a Microsoft Senior PM',
    ],
  },
  {
    role: 'Barista',
    org: 'Starbucks — Torrance, CA',
    period: 'Sep – Dec 2022',
    bullets: [
      'Crafted beverages to Starbucks standards in a high-volume café.',
      'Built rapport with regulars and defused concerns to keep the line moving and customers happy.',
      'Kept customer areas stocked and upheld cleanliness and safety protocols.',
    ],
  },
]

// ----------------------------------------------------------------------------
//  SKILLS — grouped. Add/remove groups and items freely.
// ----------------------------------------------------------------------------
export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'] },
  { group: 'Data & Analytics', items: ['pandas', 'Tableau', 'SPSS', 'Excel', 'Regression', 'Data Visualization'] },
  { group: 'Finance', items: ['Portfolio Management', 'Risk (Sharpe, VaR)', 'Asset Allocation', 'Financial Modeling'] },
  { group: 'Tools & Platforms', items: ['Workday', 'Fragomen', 'Jira', 'Slack', 'Canva', 'Google Suite', 'AI Tools'] },
  { group: 'Languages', items: ['Korean (TOPIK 6)', 'Mandarin (Elementary)'] },
]
