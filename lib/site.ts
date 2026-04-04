/** Edit this file to personalize your portfolio. */
export const site = {
  name: "Nasira Jamil",
  title: "Full Stack Developer with 5+ years of experience",
  tagline:
    "I build reliable web and mobile experiences with Ruby on Rails, MERN, Next.js, and cloud-native DevOps.",
  email: "nasirajamil54@gmail.com",
  location: "Available worldwide · Remote",
  social: {
    linkedin: "https://pk.linkedin.com/in/nasira-jamil-b58b9917b",
  },
  about: [
    "I'm a full stack engineer focused on clean architecture, performance, and shipping products that scale. I work on Ruby on Rails, Node.js, MERN, PHP Laraval, React, React Native PHP.",
    "From PostgreSQL and Redis-backed services to AWS (EC2, S3, Lambda, Rekognition) and Terraform, I enjoy owning features end to end—from database design to CI/CD and production operations.",
  ],
  skills: {
    Languages: ["Ruby", "JavaScript", "TypeScript", "PHP"],
    Backend: ["Ruby on Rails", "MERN", "Node.js", "Laravel"],
    Frontend: [
      "React",
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "jQuery",
      "Bootstrap",
    ],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    DevOps: [
      "AWS (EC2, S3, Lambda, Rekognition)",
      "Docker",
      "Terraform",
      "CI/CD",
    ],
    Tools: ["Redis", "Sidekiq", "RSpec", "Git", "Postman"],
  },
  projects: [
    {
      title: "SaaS API Platform",
      description:
        "Multi-tenant REST API with background jobs, caching, and observability—built for reliability at scale.",
      tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "RSpec"],
      link: "#",
      repo: "#",
    },
    {
      title: "Client Dashboard",
      description:
        "Responsive admin UI with real-time updates, auth, and role-based access for internal teams.",
      tech: ["Next.js", "TypeScript", "React", "Node.js"],
      link: "#",
      repo: "#",
    },
    {
      title: "Mobile Companion App",
      description:
        "Cross-platform app consuming a documented API, with offline-friendly flows.",
      tech: ["React Native", "TypeScript", "REST"],
      link: "#",
      repo: "#",
    },
  ],
} as const;
