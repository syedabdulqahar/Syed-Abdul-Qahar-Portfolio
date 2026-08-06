// Portfolio personal data - easily editable
export const personalInfo = {
  name: "Syed Abdul Qahar",
  title: "Computer Science Undergraduate & AI Developer",
  tagline: "Building Agentic AI, Generative AI & Full-Stack Web Applications",
  description:
    "Computer Science undergraduate with hands-on experience in Python, REST APIs, FastAPI, React.js, Next.js, and applied AI including LLMs, Retrieval-Augmented Generation (RAG), NLP/NLI, and LangChain.",
  email: "syedabdulqahar2004@gmail.com",
  phone: "+92-337-7315705",
  location: "Rawalpindi/Islamabad, Pakistan",
  resume: "/Syed Abdul Qahar (CV).pdf",
};

export const aboutData = {
  intro:
    "I'm a Computer Science undergraduate at CUST with a strong passion for AI/ML, Agentic AI, Generative AI, and Full-Stack Web Development. I build intelligent systems and modern web applications leveraging LLMs, RAG pipelines, and full-stack frameworks.",
  interests: [
    "Agentic AI & Generative AI",
    "RAG Pipelines & LLMs",
    "Full-Stack Web Development",
    "FastAPI & React/Next.js",
    "Database Security (RBAC/ABAC)",
  ],
  highlights: [
    { label: "3.15", description: "CGPA at CUST" },
    { label: "Dean's", description: "Honor Roll" },
    { label: "AI/ML", description: "Proton Soft Tech Intern" },
    { label: "2027", description: "Expected Graduation" },
  ],
};

export const skillsData = {
  frontend: {
    title: "Web Development",
    skills: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  programming: {
    title: "Programming & Fundamentals",
    skills: [
      "Python",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Error Handling",
      "SQL",
    ],
  },
  ai: {
    title: "AI & Generative AI",
    skills: [
      "Agentic AI",
      "LLMs & Fine-Tuning",
      "LangChain",
      "RAG Pipelines",
      "Tokenization",
      "BERT & DeBERTa",
      "ChromaDB",
    ],
  },
  backend: {
    title: "Backend & Security",
    skills: [
      "REST APIs",
      "FastAPI",
      "Node.js & Express.js",
      "PostgreSQL",
      "JWT Authentication & bcrypt",
      "RBAC / ABAC Control",
    ],
  },
  tools: {
    title: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel & Netlify", "Cursor", "Claude", "ChatGPT"],
  },
};

export const techStackData = [
  { name: "React", category: "Frontend", icon: "FaReact" },
  { name: "Next.js", category: "Framework", icon: "SiVite" },
  { name: "Python", category: "Language", icon: "SiPython" },
  { name: "FastAPI", category: "Backend", icon: "SiVite" },
  { name: "JavaScript", category: "Language", icon: "SiJavascript" },
  { name: "Tailwind CSS", category: "Styling", icon: "SiTailwindcss" },
  { name: "PostgreSQL", category: "Database", icon: "SiVercel" },
  { name: "ChromaDB", category: "Vector DB", icon: "TbBrandOpenai" },
  { name: "Git", category: "Tools", icon: "FaGit" },
  { name: "GitHub", category: "Platform", icon: "FaGithub" },
  { name: "Vercel", category: "Deployment", icon: "SiVercel" },
];

export const projectsData = [
  {
    id: 1,
    title: "PakLawAI — Legal Consistency Checker",
    description:
      "An AI-powered legal consistency checker identifying contradictions across Pakistani statutes.",
    longDescription:
      "Built an AI-powered legal consistency checker using Next.js, FastAPI, and PostgreSQL. Designed a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB for semantic search over legal text and applied NLP/NLI techniques to detect logical inconsistencies between legal clauses.",
    image: "/projects/paklawai.jpg",
    category: "Full Stack AI Apps",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "ChromaDB", "RAG / NLP"],
    features: ["AI Legal Checker", "RAG Pipeline with ChromaDB", "NLP/NLI Inconsistency Detection"],
    link: "https://www.github.com/syedabdulqahar",
    demo: "",
  },
  {
    id: 2,
    title: "RBAC/ABAC Access Control System",
    description:
      "A database security system implementing granular Role-Based and Attribute-Based Access Control.",
    longDescription:
      "Implemented Role-Based and Attribute-Based Access Control (RBAC/ABAC) in PostgreSQL and Python. Designed database-level security policies to enforce granular, attribute-driven permissions.",
    image: "/projects/rbac-abac.jpg",
    category: "Security & Database",
    technologies: ["Python", "PostgreSQL", "RBAC/ABAC", "Security Policies"],
    features: ["Granular RBAC/ABAC", "PostgreSQL Security Policies", "Attribute-driven Permissions"],
    link: "https://github.com/syedabdulqahar/Secure-Company-Resource-Portal",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7480929570968498176/",
  },
  {
    id: 3,
    title: "Hungry Pizza",
    description:
      "End-to-end UI/UX & web application for a restaurant ordering platform delivered to a real client.",
    longDescription:
      "Designed and built the end-to-end UI/UX for a freelance restaurant ordering website delivered to a real client, featuring interactive menu, ordering flow, and responsive layout.",
    image: "/projects/hungry-pizza.jpg",
    category: "Frontend & UI/UX",
    technologies: ["React", "Tailwind CSS", "UI/UX"],
    features: ["Interactive menu", "Client project UI/UX", "Responsive design"],
    link: "",
    demo: "https://hungry-pizza-hub.lovable.app",
  },
  {
    id: 4,
    title: "Instagram Clone",
    description:
      "Pixel-accurate feed, post, and profile interface replicating platform UX patterns using React.js.",
    longDescription:
      "Recreated Instagram's web interface with a pixel-accurate feed, stories, profile pages, and responsive layout using React.js.",
    image: "/projects/instagram-clone.jpg",
    category: "Frontend",
    technologies: ["React.js", "CSS3", "UI/UX"],
    features: ["Pixel-accurate Feed", "Profile & Post UI", "Responsive design"],
    link: "https://github.com/syedabdulqahar/Instagram-react-app",
    demo: "https://instagram-react-app-one.vercel.app",
  },
  {
    id: 5,
    title: "WhatsApp Web Clone",
    description:
      "Real-time messaging UI/UX clone focusing on layout, responsiveness, and interaction design.",
    longDescription:
      "Recreated real-time messaging UI/UX, focusing on chat layout, responsiveness, and interaction design using React.js and ES6.",
    image: "/projects/whatsapp-clone.jpg",
    category: "Frontend",
    technologies: ["React.js", "ES6+", "CSS3"],
    features: ["Chat Interface UI", "Responsive Layout", "Real-time interaction design"],
    link: "https://github.com/syedabdulqahar/youtube-clone",
    demo: "",
  },
];

export const experienceData = [
  {
    title: "AI/ML Intern",
    company: "Proton Soft Tech",
    period: "6 Weeks, 2025",
    description:
      "Gained hands-on exposure to AI/ML workflows, including data preprocessing and model evaluation in a professional environment.",
    responsibilities: [
      "Collaborated with technical team on applied machine learning tasks.",
      "Hands-on data preprocessing and ML model evaluation.",
      "Strengthened practical Python and ML tooling skills.",
    ],
  },
  {
    title: "Volunteer",
    company: "Islamabad Traffic Police",
    period: "5 Weeks",
    description:
      "Assisted in traffic management and public coordination during a 5-week community volunteering program.",
    responsibilities: [
      "Public coordination and traffic flow assistance.",
      "Community engagement and civic volunteer work.",
    ],
  },
];

export const educationData = [
  {
    level: "university",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "Capital University of Science & Technology (CUST), Islamabad",
    year: "2023 – 2027",
    grade: "3.15",
    gradeLabel: "CGPA",
    gradeMax: "4.0",
    achievements: ["Dean's Honor Roll — 6th Semester"],
    description:
      "Pursuing BSCS with focus on AI/ML, LLMs, Agentic AI, RAG Pipelines, and Full-Stack Development.",
  },
  {
    level: "intermediate",
    degree: "Intermediate in Computer Science (ICS)",
    school: "Punjab Group of Colleges, Quaid Campus",
    year: "2020 – 2022",
    grade: "A",
    gradeLabel: "Grade",
    gradeMax: "",
    achievements: [],
    description:
      "Completed intermediate education in Computer Science with strong foundation in mathematics, physics, and programming.",
  },
  {
    level: "matriculation",
    degree: "Matriculation (SSC)",
    school: "IIUI School — Gulzar-e-Quaid Campus",
    year: "2018 – 2020",
    grade: "A+",
    gradeLabel: "Grade",
    gradeMax: "",
    achievements: [],
    description:
      "Completed secondary school education with excellent academic performance in science subjects.",
  },
];

export const certificatesData = [
  {
    title: "Python for Everybody — Introduction",
    issuer: "University of Michigan (Coursera)",
    date: "Completed",
    credentialId: "OJK2KJZW3HGH",
    link: "https://www.coursera.org/account/accomplishments/verify/OJK2KJZW3HGH",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan (Coursera)",
    date: "Completed",
    credentialId: "Z5Z0WLWPDND6",
    link: "https://www.coursera.org/account/accomplishments/verify/Z5Z0WLWPDND6",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan (Coursera)",
    date: "Completed",
    credentialId: "L3TR6COK4XFM",
    link: "https://www.coursera.org/account/accomplishments/verify/L3TR6COK4XFM",
  },
  {
    title: "Dean's Honor Roll Certificate",
    issuer: "CUST — Capital University of Science & Technology",
    date: "6th Semester",
    credentialId: "Dean's List — 6th Sem",
    link: "#",
  },
];

export const achievementsData = [
  {
    title: "Dean's Honor Roll",
    description: "Recognized for academic excellence — 6th Semester",
    icon: "FaTrophy",
    count: "🏆",
  },
  {
    title: "Certifications Earned",
    description: "Python & web data courses from University of Michigan",
    icon: "FaCertificate",
    count: "3+",
  },
  {
    title: "AI Enthusiast",
    description: "Pursuing Generative AI & Agentic AI",
    icon: "FaRobot",
    count: "🤖",
  },
  {
    title: "Open Source",
    description: "Active on GitHub with projects & contributions",
    icon: "FaGithub",
    count: "📂",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://www.github.com/syedabdulqahar",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/syed-abdul-qahar-47bb37274/",
    icon: "FaLinkedin",
  },
  {
    name: "Email",
    url: "mailto:syedabdulqahar2004@gmail.com",
    icon: "FaEnvelope",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
