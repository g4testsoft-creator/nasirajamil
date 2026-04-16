/** Edit this file to personalize your portfolio. */
export const site = {
  name: "Nasira Jamil",
  title: "Full Stack Developer with 5+ years of experience",
  tagline:
    "I build reliable web and mobile experiences with Ruby on Rails, MERN, Next.js, and cloud-native DevOps.",
  email: "nasirajamil54@gmail.com",
  /** Display format */
  phone: "+92 310 4704804",
  /** Digits only (country code + number) for https://wa.me/ — update in lib/site.ts */
  whatsapp: "923104704804",
  /** Shown next to contact methods */
  responseTime: "Within 24 hours",
  location: "Available worldwide · Remote",
  social: {
    linkedin: "https://pk.linkedin.com/in/nasira-jamil-b58b9917b",
  },
  about: [
    "I'm a full stack engineer focused on clean architecture, performance, and shipping products that scale. I work across Ruby on Rails, Node.js, MERN, Laravel, React, and React Native.",
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
    ]
  },
  projects: [
    {
      title: "ItsaCheckmate (Checkmate)",
      description:
        "Checkmate (itsacheckmate.com) is a U.S. restaurant-tech company: online ordering, third-party marketplace integrations, and ops tools used by thousands of locations. I built auth, APIs, analytics, and data pipelines on that stack.",
      highlights: [
        "Enterprise SSO (Okta, CyberArk, Google, Zendesk) and 2FA; GraphQL and Grape APIs; embedded ThoughtSpot reporting.",
        "GTM for event tracking, Slack notifications, Snowflake user sync, Segment → Mixpanel.",
      ],
      tech: [
        "Ruby on Rails",
        "TypeScript",
        "GraphQL",
        "Grape",
        "Snowflake",
        "Segment",
        "Mixpanel",
      ],
      link: "https://www.itsacheckmate.com/",
      repo: "#",
    },
    {
      title: "Qreates",
      description:
        "Qreates (qreates.com) is an AI product-photography platform for brands. I shipped Next.js features for editing, AI image pipelines, and monetization.",
      highlights: [
        "Canvas-based workflows and FAL API integrations for image models; 3D product visualization.",
        "Payment flows for usage-based image processing.",
      ],
      tech: ["Next.js", "TypeScript", "Canvas API", "FAL", "Payments"],
      link: "https://qreates.com/",
      repo: "#",
    },
    {
      title: "iRobot",
      description:
        "iRobot (irobot.com) makes Roomba and Braava home robots and sells them online with accessories. I worked on the e-commerce/catalog side: pricing integrations, product data, and APIs.",
      highlights: [
        "Salesforce API for robot and accessory pricing; GraphQL migration toward product variants.",
        "Image query optimization, serializers, and translatable model fields.",
      ],
      tech: ["Ruby on Rails", "GraphQL", "Salesforce API", "REST"],
      link: "https://www.irobot.com/",
      repo: "#",
    },
    {
      title: "Ferrara Candy",
      description:
        "Ferrara Candy Company (ferrarausa.com) is a major U.S. confectionery manufacturer (e.g. NERDS, Trolli, Brach's), owned by Ferrero. I built a promotional Rails app that used custom AWS Rekognition labels for candy recognition and prizes.",
      highlights: [
        "Custom Rekognition model training, scoring submissions, winner mailers, RSpec coverage.",
      ],
      tech: ["Ruby on Rails", "AWS Rekognition", "RSpec", "AWS"],
      link: "https://www.ferrarausa.com/",
      repo: "#",
    },
    {
      title: "RealEstateGame",
      description:
        "Pre-construction real estate platform for the Greater Toronto Area: listings, search, and broker workflows (Rails app; internal product name: RealEstateGame).",
      highlights: [
        "Full-stack features for pre-con listings; Elasticsearch for buildings and listings.",
        "Integrations such as Follow Up Boss and MLS data sources.",
      ],
      tech: [
        "Ruby on Rails",
        "Elasticsearch",
        "JavaScript",
        "jQuery",
        "Bootstrap",
      ],
      link: "https://realestategame.com",
      repo: "#",
    },
    {
      title: "Ski Butlers",
      description:
        "Ski Butlers (skibutlers.com) delivers ski and snowboard rentals to accommodations across North America and Europe (part of the Alterra ecosystem). I worked on their Laravel app: reporting, features, and performance.",
      highlights: [
        "Client revenue and order reporting; bug fixes, new features, and performance improvements.",
      ],
      tech: ["PHP", "Laravel"],
      link: "https://www.skibutlers.com/",
      repo: "#",
    },
    {
      title: "HOT100",
      description:
        "Rails gamification product: badges, daily games and quizzes, and user rankings based on scores.",
      highlights: [
        "Badges and leaderboards from quiz/game scores; performance tuning and bug fixes.",
      ],
      tech: ["Ruby on Rails"],
      link: "#",
      repo: "#",
    },
  ],
} as const;
