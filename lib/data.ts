export const projects = [
  {
    label: "ML + Backend + Data",
    name: "FaceDesk",
    status: "In Progress",
    description:
      "A facial recognition attendance platform designed to automate presence tracking with a backend that can manage identity records, attendance events, and data consistency instead of treating recognition as an isolated demo.",
    impact:
      "This project lets me work across computer vision basics, API design, storage strategy, and the practical constraints of making an ML-backed system usable in a real environment like a classroom or office.",
    stack: ["Python", "FastAPI", "Face Recognition", "PostgreSQL", "REST APIs"],
    githubUrl: "https://github.com/Priyanshu-200607/facedesk",
    liveUrl: "#",
  },
  {
    label: "Linux / Security",
    name: "WipeForge",
    status: "Completed",
    description:
      "A Linux-based secure file deletion utility implementing multi-pass overwrite algorithms conforming to the DoD 5220.22-M standard to prevent forensic data recovery. Features an interactive TUI for guided secure wipe operations.",
    impact:
      "Includes real-time progress tracking, post-wipe cryptographic verification, and audit-ready session logging. Packaged the tool with a Makefile and prepared a PKGBUILD for Arch User Repository (AUR) distribution.",
    stack: ["Python", "Linux", "CLI/TUI", "Bash", "AUR"],
    githubUrl: "https://github.com/Priyanshu-200607/Wipe-Forge",
    liveUrl: "#",
  },
  {
    label: "System Automation",
    name: "AI Orchestrator TUI",
    status: "Ongoing",
    description:
      "A terminal-based AI orchestration system enabling seamless interaction with locally hosted LLMs, automation pipelines, and system-level tools. Features real-time command parsing and context-aware task execution.",
    impact:
      "Engineered a modular architecture integrating local LLM inference and system command execution for intelligent task routing. Optimized for low-latency, privacy-first AI interactions without reliance on external APIs.",
    stack: ["Python", "TUI", "Local LLM", "System Automation"],
    githubUrl: "https://github.com/Priyanshu-200607/Cli_Manager",
    liveUrl: "#",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST API Design",
      "Database Modeling",
      "Authentication Flows",
      "Clean Architecture",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MariaDB",
      "SQL",
      "Schema Design",
      "CRUD Systems",
      "Query-Oriented Thinking",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Face Recognition Basics",
      "Local LLM Workflows",
      "Automation",
      "Inference Integration",
      "Prompted Tool Use",
    ],
  },
  {
    title: "Tools / Environment",
    items: [
      "Docker",
      "Linux",
      "Arch Linux",
      "Hyprland",
      "Git",
      "Developer Tooling",
    ],
  },
];
