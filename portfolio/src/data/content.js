// ============================================================================
//  EDIT THIS FILE TO MAKE THE SITE YOURS.
//  Everything the site displays comes from here — no need to touch components.
//
//  The content below is realistic placeholder material so the site looks
//  finished out of the box. Swap in your real details as you go.
// ============================================================================

export const profile = {
  name: 'Janet Lim',
  // A short, punchy tagline. This shows under your name in the hero.
  tagline: 'I build at the seam of software, design, and data.',
  // One or two sentences a recruiter reads first.
  intro:
    'Computer Science student at Northeastern University working across full-stack ' +
    'engineering, interface design, and data analysis. I like problems that refuse to ' +
    'sit in one box — and I care as much about how a thing feels to use as whether it ships.',
  email: 'lim.jane@northeastern.edu',
  location: 'Boston, MA',
  // Set any of these to '' to hide the link.
  links: {
    github: 'https://github.com/janetlim',
    linkedin: 'https://linkedin.com/in/janet-lim',
    resume: '', // e.g. '/Janet-Lim-Resume.pdf' (drop the PDF in /public)
  },
}

// The three lenses your work is organized by. These power the project filter.
// key must match the `category` on each project below.
export const disciplines = [
  { key: 'software', label: 'Software', blurb: 'Apps, tools, and systems I’ve built.' },
  { key: 'design', label: 'Design', blurb: 'Interfaces and visual work.' },
  { key: 'data', label: 'Data', blurb: 'Analysis, models, and visualization.' },
]

export const about = {
  heading: 'About',
  // A longer paragraph (or two). Keep it human.
  body: [
    'I’m a Northeastern CS student who keeps ending up on the boundary between ' +
      'disciplines. On the software side I care about clean architecture and actually ' +
      'shipping; on the design side, about how an interface feels in the first five ' +
      'seconds; on the data side, about turning a messy spreadsheet into a story someone ' +
      'can act on.',
    'Most of my favorite projects started as a small annoyance — a clunky tool, a ' +
      'question a dataset wouldn’t answer, a screen that fought back. Away from a ' +
      'keyboard, I run a Boston food Instagram (@janeats, mostly) — which is really ' +
      'just the same instinct in a different medium: notice something good, frame it, ' +
      'and make other people want it too.',
  ],
  // Quick facts shown as chips.
  highlights: ['Northeastern University', 'B.S. Computer Science · 2026', 'Open to internships', '🍜 Boston food IG'],
}

// ----------------------------------------------------------------------------
//  PROJECTS — add/remove freely. `category` must be one of the discipline keys.
//  `tags` are the small pills shown on each card.
//  `image` is optional: drop a file in /public and reference it as '/my-img.png'.
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: 'Switchboard',
    category: 'software',
    blurb:
      'A real-time collaboration board for student orgs — shared agendas, live presence, ' +
      'and role-based access. Cut a club’s meeting-prep time roughly in half during pilot use.',
    tags: ['React', 'Node', 'WebSockets', 'PostgreSQL'],
    image: '',
    links: { live: '', code: 'https://github.com/janetlim/switchboard' },
    year: '2025',
  },
  {
    title: 'Trailhead CLI',
    category: 'software',
    blurb:
      'A command-line tool that scaffolds and lints project repos against a team style ' +
      'guide. Published to npm; used to bootstrap a dozen course projects.',
    tags: ['TypeScript', 'Node', 'CLI'],
    image: '',
    links: { live: '', code: 'https://github.com/janetlim/trailhead' },
    year: '2024',
  },
  {
    title: 'Atlas Design System',
    category: 'design',
    blurb:
      'A component library and design language for a campus events platform — color, ' +
      'type scale, and 30+ accessible components documented in Figma and code.',
    tags: ['Figma', 'Design Systems', 'Accessibility'],
    image: '',
    links: { live: '', code: '' },
    year: '2025',
  },
  {
    title: 'Commute Redesign',
    category: 'design',
    blurb:
      'A UX case study reimagining the MBTA trip planner. Reframed the flow around ' +
      '“when should I leave?” and tested with 8 riders — task time dropped notably.',
    tags: ['UX Research', 'Prototyping', 'Usability Testing'],
    image: '',
    links: { live: '', code: '' },
    year: '2024',
  },
  {
    title: 'Where the Heat Lands',
    category: 'data',
    blurb:
      'An analysis of Boston’s urban heat islands cross-referencing tree canopy and ' +
      'surface temperature. Found a clear gap between neighborhoods, mapped interactively.',
    tags: ['Python', 'pandas', 'GeoPandas', 'D3'],
    image: '',
    links: { live: '', code: 'https://github.com/janetlim/urban-heat' },
    year: '2025',
  },
  {
    title: 'Setlist Stats',
    category: 'data',
    blurb:
      'Scraped and modeled 10k+ live-show setlists to predict what a band plays next. ' +
      'A logistic model beat the “play the hits” baseline by a meaningful margin.',
    tags: ['Python', 'scikit-learn', 'matplotlib'],
    image: '',
    links: { live: '', code: 'https://github.com/janetlim/setlist-stats' },
    year: '2024',
  },
]

// ----------------------------------------------------------------------------
//  EXPERIENCE — shown as a vertical timeline.
// ----------------------------------------------------------------------------
export const experience = [
  {
    role: 'Software Engineering Co-op',
    org: 'Wayfair',
    period: 'Summer 2025',
    bullets: [
      'Built internal tooling on a React + GraphQL stack used daily by the logistics team.',
      'Shipped a caching layer that cut a key dashboard’s load time from ~4s to under 1s.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    org: 'Northeastern — Data Visualization Lab',
    period: '2024 – 2025',
    bullets: [
      'Prototyped interactive visualizations for a study on civic data literacy.',
      'Co-authored a poster presented at the university research expo.',
    ],
  },
  {
    role: 'Design Lead',
    org: 'Student Web Development Club',
    period: '2023 – 2024',
    bullets: ['Set the visual direction and design system for three client projects.'],
  },
]

// ----------------------------------------------------------------------------
//  SKILLS — grouped. Add/remove groups and items freely.
// ----------------------------------------------------------------------------
export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks & Tools', items: ['React', 'Node.js', 'Vite', 'Git', 'Figma', 'Docker'] },
  { group: 'Data', items: ['pandas', 'NumPy', 'scikit-learn', 'D3', 'matplotlib', 'Jupyter'] },
]
