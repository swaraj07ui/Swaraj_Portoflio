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
  previewType: 'course-builder' | 'healthcare' | 'queryhive' | 'data-analysis';
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
      id: "ai-course-builder",
      title: "AI Course Builder",
      shortDescription:
        "An AI-powered platform to create and manage courses with chapters, lessons, videos, and quizzes.",
      fullDescription:
        "A full-stack instructional architecture that harnesses generative AI models to automatically draft end-to-end curriculum syllabi, structured lesson content, and comprehensive assessments based on user prompt criteria.",
      problem:
        "Educators and content creators spend dozens of hours manually structuring course outlines, formulating quiz questions, and formatting lesson modules.",
      solution:
        "Built a modular web platform utilizing Next.js 15, React 19, and Google Gemini API with tRPC for end-to-end type safety, generating interactive multi-chapter courses in seconds.",
      tags: ["Next.js 15", "React 19", "Gemini API", "tRPC"],
      category: "AI & Chatbot",
      githubUrl: "https://github.com/swaraj07ui",
      features: [
        "Automated curriculum chapter & lesson breakdown",
        "Context-aware quiz generation with instant evaluation",
        "Type-safe API layer with tRPC and responsive dashboard",
        "Video and rich content resource embedding",
      ],
      previewType: "course-builder",
    },
    {
      id: "healthcare-system",
      title: "Healthcare System",
      shortDescription:
        "A web-based healthcare management system with patient records, appointment scheduling, and an AI chatbot.",
      fullDescription:
        "An enterprise clinical operations portal designed to streamline clinic workflows, maintain structured patient EHR records, schedule consultations, and provide patient triage through a conversational AI assistant.",
      problem:
        "Clinics struggle with fragmented patient records, double-booked appointments, and high front-desk inquiry volumes.",
      solution:
        "Engineered a unified patient portal using Next.js, Node.js, and MySQL with role-based authentication, interactive appointment calendars, and an integrated medical triage assistant.",
      tags: ["Next.js", "Node.js", "MySQL", "Healthcare EHR"],
      category: "Full-Stack",
      githubUrl: "https://github.com/swaraj07ui",
      features: [
        "Patient electronic health record (EHR) management",
        "Interactive calendar appointment scheduler",
        "24/7 AI-driven chatbot for patient triage & facility navigation",
        "Doctor prescription notes and consultation logs",
      ],
      previewType: "healthcare",
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
    {
      id: "clinical-sales-analytics",
      title: "Healthcare & Operations Analytics",
      shortDescription:
        "An end-to-end data pipeline and executive BI dashboard analyzing patient throughput, clinical KPIs, and operational costs.",
      fullDescription:
        "An applied data analytics case study combining Python (Pandas, NumPy) for data wrangling, SQL for multi-table aggregation and cohort analysis, and Power BI for executive dashboard reporting. Transformed 50,000+ raw operational records into actionable business intelligence with automated KPI scorecards, department throughput trends, and resource utilization insights.",
      problem:
        "Hospital management struggled with siloed records across legacy spreadsheets, making it difficult to detect bed occupancy bottlenecks, wait-time spikes, and department expenditure variances.",
      solution:
        "Engineered an automated ETL pipeline with Python and SQL to clean and aggregate records, and deployed an interactive Power BI dashboard featuring dynamic slicers, KPI scorecards, and visual variance reporting.",
      tags: ["Python", "SQL", "Power BI", "Excel", "EDA"],
      category: "Data Analysis",
      githubUrl: "https://github.com/swaraj07ui",
      features: [
        "Automated data cleaning & outlier detection across 50,000+ records via Python Pandas",
        "Complex SQL queries utilizing CTEs, window functions, and relational joins",
        "Interactive Power BI dashboard with dynamic date, department, and demographic slicers",
        "Executive KPI scorecards tracking patient throughput, bed occupancy, and cost metrics",
      ],
      previewType: "data-analysis",
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
