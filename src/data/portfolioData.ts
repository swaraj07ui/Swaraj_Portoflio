export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  tags: string[];
  category: 'Full-Stack' | 'AI & Chatbot' | 'Data' | 'Data Analysis';
  liveUrl?: string;
  githubUrl?: string;
  publication?: string;
  features: string[];
  previewType: 'course-builder' | 'healthcare' | 'queryhive' | 'data-analysis' | 'gatherings' | 'avadhut';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  focus: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export const portfolioData = {
  personal: {
    name: "Swaraj K Gawde",
    monogram: "SG",
    role: "Full-Stack Developer | AI Enthusiast | Data Analyst",
    tagline: "Turning ideas into real-world products.",
    bio: "I build modern web applications, integrate AI solutions, and work with data to create meaningful and efficient digital experiences.",
    longBio:
      "I am a Computer Engineering student (2023–2026) with a rigorous foundation in full-stack web engineering, agentic AI workflows, and exploratory data analysis. Whether architecting high-performance web applications with Next.js or engineering conversational AI platforms, I focus on building reliable software that delivers real tangible impact.",
    email: "swarajgawde06@gmail.com",
    phone: "+91 7588639801",
    location: "Sindhudurg / Maharashtra, India",
    linkedin: "https://linkedin.com/in/swaraj-gawade-944446279",
    github: "https://github.com/swaraj07ui",
    openForWork: true,
    workTypes: ["Full-Time Roles", "Freelance Projects", "Contract Engineering"],
  },

    projects: [
    {
      id: "gatherings-by-ardra",
      title: "Gatherings by Ardra",
      shortDescription:
        "An immersive retreat reservation platform and high-conversion web experience designed for sacred gatherings, featuring rich botanical aesthetics, interactive archetypes, and seamless booking.",
      fullDescription:
        "A bespoke event platform and reservation experience engineered for Gatherings by Ardra (Samhain 2026 Sacred Women's Retreat in South Goa). Features an atmospheric botanical witch aesthetic, custom typography, an automated archetype carousel, interactive itinerary modules, ambient background music controls, and responsive lead capture flows.",
      problem:
        "Experiential retreats need a digital presence that conveys their sacred, untamed atmosphere while maintaining high performance, intuitive navigation, and high-converting reservation workflows across devices.",
      solution:
        "Crafted a responsive web application featuring custom serif typography, dynamic dark botanical styling, an automated archetype carousel, embedded ambient audio experience with smooth fade-in, and responsive reservation enquiry flows deployed on Netlify.",
      tags: ["Full-Stack Web", "Responsive Design", "Interactive UI", "Audio API", "Netlify"],
      category: "Full-Stack",
      liveUrl: "https://gatheringsbyardra.netlify.app/",
      githubUrl: "https://github.com/swaraj07ui",
      features: [
        "Live on Netlify: https://gatheringsbyardra.netlify.app/",
        "Atmospheric botanical witch aesthetic with custom Cinzel & Cormorant typography",
        "Interactive Archetype showcase (Maiden, Mother, Crone) with auto-transition",
        "Sacred ambient background music (BGM) player with interactive volume fading",
        "Complete retreat itinerary, sanctuary accommodations & occupancy reservation flows",
      ],
      previewType: "gatherings",
    },
    {
      id: "avadhut-niwas",
      title: "Avadhut Niwas Homestay",
      shortDescription:
        "A boutique rustic luxury homestay and direct reservation web platform showcasing Konkan heritage, authentic Malvani dining, and 360° virtual tours.",
      fullDescription:
        "A responsive hospitality and booking portal engineered for Avadhut Niwas, a rustic luxury homestay nestled on the Konkan coast. Features interactive accommodation catalogs (Garden Room, Alpine Cottage, Royal Suite), immersive 360° virtual property tours, a farm-to-table Malvani culinary showcase, and direct WhatsApp-integrated reservation workflows.",
      problem:
        "Independent coastal homestays frequently rely on third-party aggregator portals that take hefty commissions and fail to capture the authentic warmth, culinary tradition, and physical ambience of the stay.",
      solution:
        "Engineered a dedicated high-converting web platform featuring warm coastal typography, interactive 360° room walkthroughs, rich image galleries, and instant WhatsApp booking inquiries that significantly reduce booking friction.",
      tags: ["Full-Stack Web", "Tailwind CSS", "360° Virtual Tour", "WhatsApp API", "Netlify"],
      category: "Full-Stack",
      liveUrl: "https://avadhutniwas.netlify.app/",
      githubUrl: "https://github.com/swaraj07ui",
      features: [
        "Live on Netlify: https://avadhutniwas.netlify.app/",
        "Interactive 360° virtual property & cottage walkthroughs",
        "Accommodation catalog with Garden Rooms, Alpine Cottages, and Royal Suites",
        "Authentic Farm-to-Table Malvani & Konkani culinary showcase",
        "Direct-to-WhatsApp booking and instant reservation inquiry engine",
      ],
      previewType: "avadhut",
    },

    {
      id: "queryhive-assistant",
      title: "QueryHive Assistant Platform",
      shortDescription:
        "An AI assistant platform for college queries with an interactive and responsive UI. (Research Publication: ICASME 2026)",
      fullDescription:
        "A published research-backed intelligent campus assistant engineered with Next.js, designed to handle multi-turn student queries regarding academic schedules, examinations, admissions, and campus resources with ultra-low latency.",
      problem:
        "Students frequently face long response times and disparate information silos when seeking vital academic and institutional data.",
      solution:
        "Developed and deployed QueryHive on Vercel with structured context retrieval, intuitive conversational UI, and interactive animations, documented in an accepted peer-reviewed publication.",
      tags: ["Next.js", "AI Chatbot", "Web Development", "Research Paper"],
      category: "AI & Chatbot",
      liveUrl: "https://college-chatbot-v2-three.vercel.app/",
      githubUrl: "https://github.com/swaraj07ui",
      publication: "ICASME 2026 Research Paper: 'AI Chatbot for College Queries with Enhanced Features'",
      features: [
        "Live on Vercel: https://college-chatbot-v2-three.vercel.app/",
        "Accepted & presented at ICASME 2026 conference",
        "Responsive glass-free clean modern UI with instant response time",
        "Optimized prompt context window for collegiate knowledge retrieval",
      ],
      previewType: "queryhive",
    },
  ] as Project[],

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Responsive websites, web applications, and administrative dashboards engineered for speed, SEO, and maintainability.",
      deliverables: [
        "Custom Next.js & React single/multi-page web apps",
        "Full-stack CRUD systems with Node.js & MySQL / PostgreSQL",
        "Interactive analytics dashboards and admin panels",
        "API integrations & third-party SaaS connections",
      ],
      icon: "Code",
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      description:
        "Custom conversational chatbots, Agent Development Kit (ADK) workflows, and intelligent automated features for your product.",
      deliverables: [
        "Custom conversational AI chatbots & customer support bots",
        "Google Agent Development Kit (ADK) multi-agent pipelines",
        "RAG (Retrieval-Augmented Generation) over private docs",
        "Automated content, summary, and quiz generation engines",
      ],
      icon: "Cpu",
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description:
        "Data cleaning, exploratory visualization, and business intelligence reporting to turn raw numbers into executive clarity.",
      deliverables: [
        "Data wrangling, cleaning & transformation in Python & SQL",
        "Interactive Power BI and Excel reporting dashboards",
        "Statistical exploratory data analysis (EDA)",
        "Metric tracking, KPI scorecards, and insight summaries",
      ],
      icon: "BarChart3",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design & Implementation",
      description:
        "Clean, modern, accessible, and user-friendly interfaces translated from Figma into pixel-perfect frontend code.",
      deliverables: [
        "Translating Figma / wireframes into responsive Tailwind CSS",
        "Component-driven design systems in React & Next.js",
        "Accessible, high-contrast, clutter-free user journeys",
        "Mobile-first layouts tested across screen sizes",
      ],
      icon: "Palette",
    },
  ] as Service[],

  skills: [
    {
      category: "Programming",
      skills: ["Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Node.js"],
    },
    {
      category: "Frameworks & AI",
      skills: ["React", "Next.js", "Streamlit", "Agent Development Kit (ADK)", "AI Agent Engineering"],
    },
    {
      category: "Databases & Data Tools",
      skills: ["SQL", "MySQL", "PostgreSQL", "Excel", "Power BI"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "Firebase", "REST APIs"],
    },
    {
      category: "Design & Creative Tools",
      skills: ["Adobe After Effects", "CapCut", "Hypic", "VN Editor", "AI Editing"],
    },
  ] as SkillCategory[],

  certifications: [
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      focus: "Financial software architectures, data feeds, and software engineering practices",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE",
      focus: "Applied data analysis methodologies, metrics extraction, and business forecasting",
    },
    {
      title: "Engineer AI Agents with Agent Development Kit (ADK)",
      issuer: "Google",
      focus: "Designing, evaluating, and deploying autonomous AI agent systems",
    },
    {
      title: "Data Analytics",
      issuer: "Coursera",
      focus: "Data preparation, exploratory analysis, SQL modeling, and dashboarding",
    },
  ] as Certification[],

  education: [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Metropolitan Institute Of Technology And Management, Sindhudurg",
      period: "2023 – 2026",
      score: "CGPA: 6.41",
      details: "Focus on software architecture, database management systems, AI/ML, and web engineering.",
    },
    {
      degree: "Diploma (Computer Engineering)",
      institution: "Government Polytechnic, Sindhudurg",
      period: "2023",
      score: "64%",
      details: "Foundational training in core computer science, procedural programming, algorithms, and networking.",
    },
  ] as EducationItem[],

  research: {
    conference: "ICASME 2026",
    track: "Computer Science & IT track",
    title: "AI Chatbot for College Queries with Enhanced Features",
    role: "Co-author & Presenter",
    description:
      "Presented research on developing a responsive, low-latency college query assistance system capable of understanding domain-specific institutional vocabulary and delivering accurate real-time guidance to students.",
  },
};
