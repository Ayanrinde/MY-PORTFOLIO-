export const projects = [
  {
    id: 1,
    slug: 'local-delivery',
    title: 'SwiftDeliver',
    subtitle: 'Local Delivery Web App',
    tagline: 'Improving delivery coordination for local businesses.',
    
    problem:
      'Many small businesses rely on manual coordination (calls and messaging apps) for deliveries, which leads to delays, poor tracking, and inefficiency.',

    solution:
      'Developed a web-based delivery platform where businesses can create delivery requests, monitor order progress, and manage operations through a clean interface.',

    impact:
      'Streamlined delivery coordination and demonstrated how digital tools can improve efficiency for small businesses.',

    tags: ['React', 'CSS Modules', 'JavaScript', 'REST API'],
    color: '#6366f1',
    colorLight: '#818cf8',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    year: '2024',
    category: 'Web Application',
  },

  {
    id: 2,
    slug: 'student-portal',
    title: 'ResultVault',
    subtitle: 'Student Result Portal',
    tagline: 'Making academic results accessible and transparent.',

    problem:
      'Students often face delays and lack of transparency when accessing their academic results, relying on physical notice boards or manual processes.',

    solution:
      'Built a structured web portal that allows students to securely access results while providing administrators with tools to manage academic data efficiently.',

    impact:
      'Improved accessibility and reduced dependency on manual result-checking processes.',

    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Authentication'],
    color: '#8b5cf6',
    colorLight: '#a78bfa',
    github: 'https://github.com/Ayanrinde/Student-Portal',
    demo: 'https://student-portal-azure-eta.vercel.app',
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
