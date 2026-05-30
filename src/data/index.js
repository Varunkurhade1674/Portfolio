export const personalInfo = {
  name: "Kurhade Varun Vijay",
  shortName: "Varun",
  roles: ["Full Stack Developer", "React Developer", "MERN Stack Engineer", "Problem Solver"],
  email: "kurhadevarun3@gmail.com",
  phone: "+91 9356022799",
  github: "https://github.com/Varunkurhade1674",
  linkedin: "https://www.linkedin.com/in/varun-kurhade-b53310281",
  bio: "I craft secure, scalable web applications with a passion for cryptography, clean code, and exceptional user experiences. From zero-knowledge proofs to real-time systems — I build things that matter.",
  location: "Bengaluru, Karnataka, India",
};

export const skills = {
  "Programming Languages": [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C", level: 80 },
  ],
  Frontend: [
    { name: "React", level: 88 },
    { name: "HTML & CSS", level: 92 },
    { name: "Bootstrap", level: 80 },
    { name: "EJS", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 83 },
    { name: "REST APIs", level: 87 },
  ],
  Database: [
    { name: "MongoDB", level: 82 },
    { name: "SQL", level: 72 },
     { name: "Firebase", level: 74 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
   
    { name: "Vite", level: 78 },
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 90 },
    { name: "Team Communication", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Adaptability", level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Cryptalk",
    subtitle: "Quantum-Safe Encrypted Chat",
    description:
      "A next-generation secure messaging platform featuring post-quantum cryptography. Combines Kyber (lattice-based KEM), AES-256 symmetric encryption, and RSA asymmetric keys to create a layered security model. Zero Knowledge Proof authentication ensures users never expose their credentials — not even to the server.",
    tech: ["React", "Node.js", "MongoDB", "Kyber", "AES-256", "RSA", "ZKP"],
    features: [
      "Zero Knowledge Proof authentication",
      "Kyber post-quantum key exchange",
      "AES-256 + RSA hybrid encryption",
      "End-to-end encrypted messaging",
      "Real-time communication",
      "No plaintext credentials stored",
    ],
    category: ["React", "Node.js", "MongoDB"],
    featured: true,
    badge: "PREMIUM",
    color: "#00f5a0",
    github: "https://github.com/Varunkurhade1674/Cryptalk-secure-space",
    live: "#",
    demoVideo: "/Cryptalk.mp4",
    icon: "🔐",
  },
  {
    id: 2,
    title: "WanderLust",
    subtitle: "MERN Stack House Listing Platform",
    description:
      "A full-featured Airbnb-inspired house listing platform built on the MERN stack. Supports user authentication, property CRUD, interactive maps, image uploads, and RESTful API integration. Deployed and production-ready.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    features: [
      "User authentication & sessions",
      "Full CRUD for listings",
      "Image upload & management",
      "Interactive map integration",
      "RESTful API design",
      "Deployed & live",
    ],
    category: ["React", "Node.js", "MongoDB"],
    featured: false,
    badge: "LIVE",
    color: "#7c3aed",
    github: "#",
    live: "#",
    icon: "🏡",
  },
  {
    id: 3,
    title: "Code Sequence Puzzle",
    subtitle: "Gamified Learning Platform",
    description:
      "An interactive gamified coding puzzle platform designed to teach programming logic through engaging sequence challenges. Players arrange code blocks in the correct order, improving computational thinking in a fun, visual way.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Drag & drop code blocks",
      "Multiple difficulty levels",
      "Progress tracking",
      "Gamified scoring system",
      "Responsive UI",
      "Educational feedback",
    ],
    category: ["JavaScript"],
    featured: false,
    badge: "FUN",
    color: "#f59e0b",
    github: "https://github.com/Varunkurhade1674/Play-Coding/tree/main",
    live: "#",
    demoVideo: "/PlayCoding.mp4",
    icon: "🧩",
  },
  {
    id: 4,
    title: "Zerodha Clone",
    subtitle: "Stock Trading Platform",
    description:
      "A full-stack clone of the Zerodha trading platform featuring an intuitive stock dashboard, real-time market data mockups, interactive charts, and user portfolio management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User authentication & authorization",
      "Interactive stock charts",
      "Dashboard & portfolio overview",
      "Order placement mockups",
      "Watchlist management",
    ],
    category: ["React", "Node.js", "MongoDB", "JavaScript"],
    featured: false,
    badge: "FINTECH",
    color: "#e84118",
    github: "#",
    live: "#",
    demoVideo: "/Zerodhaclone.mp4",
    icon: "📈",
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Development Intern",
    company: "Spherenex",
    duration: "Jan 2026 – Present",
    type: "current",
    description:
      "Working on production-grade full stack projects in a professional environment.",
    highlights: [
      "Full stack feature development",
      "Backend testing & debugging",
      "API integration & optimization",
      "Collaborative team-based development",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    color: "#00f5a0",
  },
  {
    id: 2,
    role: "AI Intern",
    company: "Madhwa Infotech",
    duration: "Sep 2025 – Dec 2025",
    type: "completed",
    description:
      "Built AI-assisted frontend applications with a strong focus on UI/UX design.",
    highlights: [
      "React frontend development",
      "Firebase backend integration",
      "UI/UX design & prototyping",
      "AI-assisted design workflows",
    ],
    tech: ["React", "Firebase", "UI/UX", "AI Tools"],
    color: "#7c3aed",
  },
];

export const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Jain College of Engineering",
    score: "CGPA: 8.12",
    icon: "🎓",
  },
  {
    degree: "PUC (Pre-University)",
    institution: "Science Stream",
    score: "77.8%",
    icon: "📚",
  },
  {
    degree: "SSLC (10th Standard)",
    institution: "",
    score: "82.8%",
    icon: "🏫",
  },
];

export const achievements = [
  {
    title: "CODEFIESTA National Hackathon",
    description:
      "Competed in a national-level hackathon challenging developers across India to build innovative solutions under time pressure.",
    icon: "🏆",
    type: "National",
    color: "#f59e0b",
  },
  {
    title: "State Level Project Competition",
    description:
      "Presented a project at BIT Bengaluru's state-level competition, competing against top engineering teams across Karnataka.",
    icon: "🥇",
    type: "State Level",
    color: "#00f5a0",
    venue: "BIT Bengaluru",
  },
];

export const stats = [
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Skills Mastered", value: 12, suffix: "+" },
  { label: "CGPA", value: 8.12, suffix: "", decimal: true },
];
