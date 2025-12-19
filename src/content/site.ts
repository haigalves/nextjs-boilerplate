export type TimelineItem = {
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  description: string[];
};

export type Project = {
  title: string;
  summary: string;
  tech: string[];
  links?: { label: string; href: string }[];
  tags?: string[];
};

export type PortfolioPiece = {
  title: string;
  year: string;
  medium: string;
  description: string;
  image?: string;
  link?: string;
  role?: string;
  client?: string;
};

export type WritingEntry = {
  title: string;
  publication: string;
  date: string;
  blurb: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
};

export const siteConfig = {
  name: "Elías Sebastián Haig Alves",
  title: "Elías Haig Alves",
  tagline:
    "From Venezuela and Portugal to Vanderbilt University and everything in between, I am committed to using science as a tool to transform the way our societies work and make our planet a happier place.",
  primaryEmail: "elias.sebastian.haig.alves@vanderbilt.edu",
  domain: "https://eliashaig.github.io",
  metaDescription:
    "Personal site for Elías Haig Alves — Venezuelan-Portuguese scholar at Vanderbilt University exploring science, engineering, and storytelling as drivers for impact.",
  headshot: "/headshot.svg",
  primaryCta: {
    label: "Email Elías",
    href: "mailto:elias.sebastian.haig.alves@vanderbilt.edu",
  },
  secondaryCta: {
    label: "Download CV",
    href: "/elias-haig-alves-cv.pdf",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Design Portfolio", href: "/portfolio/design" },
    { label: "Writing Portfolio", href: "/portfolio/writing" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/resume" },
  ],
  highlights: [
    {
      title: "STEM with a social lens",
      description:
        "Chemical engineering and applied math student building tools that pair rigorous science with human-centered impact.",
    },
    {
      title: "Research & storytelling",
      description:
        "From scientific protocols to investigative writing, I translate complex ideas for public good and policy.",
    },
    {
      title: "Global perspective",
      description:
        "Venezuelan-Portuguese scholar shaped by UWC Mostar, Vanderbilt, and communities across Latin America and Europe.",
    },
  ],
  education: [
    {
      school: "Vanderbilt University",
      program:
        "Chemical Engineering & Applied Mathematics — Shelby Davis and William & Susan Eason Scholar",
      location: "Nashville, TN, USA",
      start: "Aug 2025",
      end: "May 2029",
    },
    {
      school: "United World College in Mostar",
      program: "UWC Venezuela scholar — GPA 41/42",
      location: "Mostar, Bosnia and Herzegovina",
      start: "Aug 2023",
      end: "May 2025",
    },
  ],
  experience: {
    professional: [
      {
        title: "Operations & Logistics Analyst; Social Media Manager",
        organization: "Vanderbilt West End Tower",
        location: "Nashville, TN, USA",
        start: "Jul 2022",
        end: "Aug 2025",
        description: [
          "Increased web traffic 150% within two months through refreshed marketing and analytics.",
          "Redesigned marketing materials and data analysis forms to streamline reporting.",
        ],
      },
      {
        title: "Research Intern",
        organization: "Venezuelan Institute for Scientific Research, Chemistry Department",
        location: "Caracas, Venezuela",
        start: "Jul 2022",
        end: "Aug 2025",
        description: [
          "Built a software-supported protocol that improved the accuracy of the Scott cocaine test.",
          "Presented findings at the 2024 UN Convention of Narcotic Drugs (Vienna).",
        ],
      },
      {
        title: "Research Intern",
        organization: "Frist Center for Autism and Innovation",
        location: "Nashville, TN, USA",
        start: "Jan 2025",
        end: "Present",
        description: [
          "Research internship exploring inclusive innovation and assistive technology.",
          "Collaborating across disciplines to prototype solutions with neurodiverse communities.",
        ],
      },
    ],
    leadership: [
      {
        title: "Member, First Cohort",
        organization: "Vanderbilt Wond'ry IMPACT Program",
        location: "Nashville, TN, USA",
        start: "2025",
        end: "Present",
        description: [
          "Selected for the inaugural cohort to build community-facing solutions alongside campus innovators.",
        ],
      },
      {
        title: "Writer / Beat Reporter / Illustrator",
        organization: "The Vanderbilt Hustler",
        location: "Nashville, TN, USA",
        start: "Aug 2025",
        end: "Present",
        description: [
          "Published 10+ pieces per month, engaging with 50+ faculty and student stakeholders.",
        ],
      },
      {
        title: "Electrical Team Member",
        organization: "Vanderbilt Robotics",
        location: "Nashville, TN, USA",
        start: "Aug 2025",
        end: "Present",
        description: [
          "Developing LIDAR optical sensors for NASA and IGVC 2026 competitions.",
        ],
      },
      {
        title: "Writer / Editor",
        organization: "Avemundo",
        location: "Remote",
        start: "May 2025",
        end: "Present",
        description: [
          "Helped secure resources for $250,000+ in scholarships and supported 500+ annual applicants.",
        ],
      },
      {
        title: "Writer / Editor",
        organization: "Noción de la Procrastinación Blog",
        location: "Remote",
        start: "Jul 2018",
        end: "Present",
        description: [
          "Published 70+ pieces reaching 100,000+ visits; featured by regional media.",
        ],
      },
      {
        title: "Student Lead",
        organization: "UWC Mostar Science Task Force",
        location: "Mostar, Bosnia and Herzegovina",
        start: "May 2024",
        end: "May 2025",
        description: [
          "Coordinated 50+ science activities and guided teams to prizes in chemistry and math competitions.",
        ],
      },
    ],
  },
  awards: [
    "Bronze Medal — Ibero-American Chemistry Olympiad (Oct. 2022)",
    "2× Gold — Venezuelan Chemistry Olympiad (Jun. 2022)",
    "2× Youth Day Order — Outstanding Young Citizen of Miranda State (Jun. 2023)",
    "3× Gold — Venezuelan Mathematical Olympiad (Jun. 2021 – Jun. 2023)",
  ],
  skills: {
    technical: ["R", "Python", "LaTeX", "Graphic Design", "Problem-solving", "Technical writing", "Public speaking"],
    interests: [
      "Electrochemistry",
      "Computational Chemistry",
      "Creative Writing",
      "Running",
      "Sustainability",
      "Technology",
    ],
    languages: [
      "Spanish (Native)",
      "Portuguese (Fluent)",
      "Italian (Communicational)",
      "Bosnian (Elementary)",
    ],
  },
  projects: [
    {
      title: "Scott Test Accuracy Protocol",
      summary:
        "Developed a software-guided protocol to increase the accuracy of the Scott cocaine test for forensic applications.",
      tech: ["Python", "R", "Data analysis"],
      tags: ["Research", "Forensics"],
    },
    {
      title: "West End Tower Digital Refresh",
      summary:
        "Scaled web engagement by 150% through redesigned marketing assets, analytics forms, and targeted content.",
      tech: ["Content strategy", "Design systems", "Analytics"],
      tags: ["Marketing", "Operations"],
    },
    {
      title: "Scholarship Storytelling Library",
      summary:
        "Coordinated writing and editing for scholarship applicants, helping secure $250k+ in resources.",
      tech: ["Editing", "Content ops"],
      tags: ["Writing", "Education"],
    },
  ],
  designPortfolio: {
    types: "Branding, illustration, UI, posters (customize as needed).",
    pieces: [
      {
        title: "Design piece placeholder",
        year: "2025",
        medium: "Figma / Adobe Suite",
        description: "Swap this entry with your design work to populate the gallery.",
        image: "/design-placeholder.svg",
      },
    ],
  },
  writingPortfolio: {
    categories: "Journalism, essays, op-eds, research writing, blog.",
    entries: [
      {
        title: "Feature writing placeholder",
        publication: "The Vanderbilt Hustler",
        date: "2025",
        blurb: "Replace with your article link and blurb to feature your reporting.",
        link: "",
        tags: ["Journalism", "Campus"],
        featured: true,
      },
    ],
  },
  contact: {
    emailOnly: true,
    email: "elias.sebastian.haig.alves@vanderbilt.edu",
    formAction: "",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/eliasebastianhaig",
    github: "",
    twitter: "",
    googleScholar: "",
    orcid: "",
    medium: "",
    other: [],
  },
  resume: {
    filename: "/elias-haig-alves-cv.pdf",
    openInNewTab: true,
  },
};

export type SiteConfig = typeof siteConfig;
