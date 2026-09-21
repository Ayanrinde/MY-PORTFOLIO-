export const projects = [
  {
  id: 1,
  slug: 'personal-finance-intelligence',
  title: 'Personal Finance Intelligence',
  subtitle: 'Personal Finance Dashboard',
  tagline: 'Turning personal financial data into clear, actionable insights.',

  problem:
    'Managing personal finances can become difficult when income, expenses, spending patterns, and financial goals are scattered across different records without a clear way to understand the bigger picture.',

  solution:
    'Built a responsive personal finance application that organizes financial information into an intuitive dashboard, helping users track their finances, understand spending patterns, and make more informed financial decisions.',

  impact:
    'Demonstrated how a modern web application can transform raw financial information into a clear and practical experience for personal financial management.',

  tags: ['JavaScript', 'CSS', 'Vercel'],
  color: '#6366f1',
  colorLight: '#818cf8',
  github: 'https://github.com/Ayanrinde/Personal-Finance-Intelligence-',
  demo: 'https://personal-finance-intelligence-green.vercel.app/',
  featured: true,
  year: '2026',
  category: 'Web Application',
},

  {
  id: 2,
  slug: 'weather-app',
  title: 'Weather App',
  subtitle: 'Real-Time Weather Application',
  tagline: 'Making weather information simple, accessible, and easy to understand.',

  problem:
    'Weather information can be difficult to interpret when users have to navigate through complex platforms or search across multiple sources to find current conditions.',

  solution:
    'Built a responsive weather application that allows users to search for locations and view current weather conditions, temperature, weather icons, and other essential information through a clean and intuitive interface.',

  impact:
    'Created a simple and responsive experience for accessing real-time weather information while demonstrating practical use of external APIs and dynamic data rendering.',

  tags: ['JavaScript', 'CSS', 'OpenWeather API'],
  color: '#8b5cf6',
  colorLight: '#a78bfa',
  github: 'https://github.com/Ayanrinde/Weather-App',
  demo: 'https://weather-app-omega-18.vercel.app/',
  featured: true,
  year: '2024',
  category: 'Web Application',
},

  {
    id: 3,
    slug: 'business-landing',
    title: 'NovaBrand',
    subtitle: 'Business Landing Page',
    tagline: 'Helping businesses communicate value effectively.',

    problem:
      'Many small businesses struggle with poorly designed websites that fail to clearly communicate their value and convert visitors.',

    solution:
      'Designed and developed a modern landing page with a strong visual hierarchy, responsive layout, and conversion-focused structure.',

    impact:
      'Demonstrated how improved UI and structure can enhance user engagement and business presentation.',

    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    color: '#a855f7',
    colorLight: '#c084fc',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    year: '2024',
    category: 'Frontend',
  },
]

export const caseStudy = {
  project: projects[0],
  phases: [
    {
      label: 'Discovery',
      title: 'Understanding the Real Problem',
      body: 'I started by talking to 3 small business owners in my community who were managing deliveries via WhatsApp groups and phone calls. The insight was clear: they didn\'t need another app — they needed coordination infrastructure. The key question became: how do I reduce friction to near-zero for non-technical users?',
      icon: '🔍',
    },
    {
      label: 'Architecture',
      title: 'Designing for Scale from Day One',
      body: 'I structured the app with a component-driven architecture — separating concerns between delivery creation, order tracking, and rider management. I used a centralized state pattern with React context to avoid prop-drilling while keeping the codebase readable for future contributors.',
      icon: '🏗️',
    },
    {
      label: 'Design',
      title: 'UI Built for Low-Bandwidth Environments',
      body: 'Knowing the target users might be on slow networks, I prioritized a lightweight UI. No heavy image backgrounds, no unnecessary animations on critical user flows. The dashboard uses data-dense cards that give maximum information at a glance — inspired by logistics tools like Uber Eats for Business.',
      icon: '🎨',
    },
    {
      label: 'Challenge',
      title: 'Real-Time Tracking Without a Backend',
      body: 'Without a production backend, I simulated real-time tracking using setInterval and local state updates. This taught me the fundamentals of WebSocket-style patterns — the experience directly shaped my current learning path into backend development and APIs.',
      icon: '⚡',
    },
    {
      label: 'Outcome',
      title: 'A Proof of Concept That Builds Trust',
      body: 'The MVP demonstrated a complete delivery lifecycle — from order creation to delivery confirmation. It became my most discussed portfolio piece and the project that convinced my first freelance client that I could build more than just UI components.',
      icon: '🚀',
    },
  ],
  metrics: [
    { label: 'Build Time', value: '3 weeks' },
    { label: 'Components Built', value: '24' },
    { label: 'Lighthouse Score', value: '94/100' },
    { label: 'Freelance leads', value: '2 direct' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: '⚡',
    color: '#818cf8',
    items: [
      { name: 'React', level: 85 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '🛠',
    color: '#c084fc',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vite', level: 78 },
      { name: 'Figma / Canva', level: 72 },
      { name: 'VS Code', level: 90 },
      { name: 'Microsoft Excel', level: 75 },
      { name: 'Google Workspace (Docs, Sheets, Collaboration)', level: 80 },
    ],
  },
  {
    category: 'Currently Learning',
    icon: '📚',
    color: '#60a5fa',
    items: [
      { name: 'Node.js & Express', level: 45 },
      { name: 'REST API Design', level: 55 },
      { name: 'SQL Fundamentals', level: 40 },
      { name: 'Data Structures', level: 50 },
      { name: 'TypeScript', level: 38 },
    ],
  },
]

export const techBadges = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Framer Motion', 'Vite', 'Git', 'GitHub', 'REST APIs',
  'Responsive Design', 'Figma', 'Node.js', 'TypeScript',
]

export const socialLinks = {
  github: 'https://github.com/Ayanrinde',
  linkedin: 'https://www.linkedin.com/in/ayanrinde-gaius/',
  email: 'ayanrindegaius005@gmail.com',
}
