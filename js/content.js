/* Single source of truth for all portfolio copy, bilingual FR/EN. */
const CONTENT = {
  en: {
    meta: {
      title: "Mahamane Sani Adamou Mahamane - Software Developer & CS Candidate",
      description: "Full-stack developer and Computer Science candidate (3.97/4.00 GPA) specializing in secure software, AI/ML and identity & access management. Seeking a funded 2027 master's degree."
    },
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", research: "Research", certifications: "Certifications", contact: "Contact" },
    hero: {
      kicker: "Niamey, Niger",
      name: "Mahamane Sani Adamou Mahamane",
      role: "Junior Full-Stack Software Developer · B.S. Computer Science Candidate",
      tagline: "Building secure, production software - and researching AI, cybersecurity and distributed systems along the way.",
      badges: ["3.97/4.00 GPA", "Cisco Ethical Hacker", "RAG · RL · ML"],
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      scroll: "Scroll"
    },
    about: {
      heading: "About",
      kicker: "Profile",
      paragraphs: [
        "Computer Science candidate with a 3.97/4.00 GPA and two years of continuous full-stack development experience. Progressed from Full-Stack Developer Intern at Gabera Foundation to Junior Full-Stack Software Developer at Gabera Software Solutions SARL.",
        "Combines production software engineering, cybersecurity training, identity and access management experience, and applied projects in retrieval-augmented generation, reinforcement learning and machine learning.",
        "Currently seeking a fully or substantially funded, research-oriented master's degree beginning in 2027 - in cybersecurity, artificial intelligence, software engineering, data science, or distributed/cloud systems."
      ],
      facts: [
        { label: "Nationality", value: "Nigerien" },
        { label: "Based in", value: "Niamey, Niger" },
        { label: "Languages", value: "French & Zarma (native) · English C1 · Hausa (basic)" },
        { label: "Interests", value: "Secure systems · AI security · RAG · distributed systems · African tech" }
      ]
    },
    experience: {
      heading: "Experience",
      kicker: "Career",
      items: [
        {
          role: "Junior Full-Stack Software Developer",
          org: "Gabera Software Solutions SARL",
          period: "Feb 2026 - Present",
          bullets: [
            "Develop and maintain business applications using C#, .NET, Angular, TypeScript, SQL and Azure-related technologies.",
            "Contribute to identity and access management using Microsoft Entra ID, SSO, claims and role-based authorization.",
            "Designed and built an HR and RFID attendance platform covering employee records, leave, payroll, performance and support tickets.",
            "Delivered API, desktop and mobile components for a live passenger-processing platform with QR-code verification and offline continuity."
          ]
        },
        {
          role: "Full-Stack Developer Intern",
          org: "Gabera Foundation",
          period: "Aug 2024 - Jan 2026",
          bullets: [
            "Developed frontend and backend features, integrated APIs, fixed defects, tested releases and supported deployments."
          ]
        },
        {
          role: "Volunteer Peer Mentor",
          org: "Samaria Digital Center",
          period: "Feb 2025 - May 2025",
          bullets: [
            "Supported two learners in PHP, MySQL and debugging, helping them approach technical problems more independently."
          ]
        },
        {
          role: "Technology Intern",
          org: "ADN",
          period: "~3 months",
          bullets: []
        }
      ]
    },
    education: {
      heading: "Education",
      kicker: "Academics",
      items: [
        {
          degree: "Bachelor of Science, Computer Science",
          school: "University of the People - Online, USA",
          period: "Sep 2025 - Expected Jan 2027",
          detail: "Cumulative GPA 3.97/4.00. English-medium program. Coursework: data structures & algorithms, operating systems, databases, networking, web development, software engineering, cybersecurity, artificial intelligence, discrete mathematics, calculus, statistics."
        },
        {
          degree: "Scientific Baccalaureate, Series D",
          school: "CSP Mission Catholique CLAB - Niamey, Niger",
          period: "2024",
          detail: ""
        }
      ]
    },
    skills: {
      heading: "Skills",
      kicker: "Toolbox",
      groups: [
        { name: "Programming", items: ["C#", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "C++", "Java", "HTML/CSS"] },
        { name: "Frameworks & UI", items: [".NET", "ASP.NET Core", "Angular", "WPF", ".NET MAUI", "Entity Framework"] },
        { name: "AI & Data", items: ["PyTorch", "Scikit-learn", "LangChain", "FAISS", "Sentence Transformers", "Pandas", "NumPy", "Matplotlib", "RAG", "Reinforcement Learning"] },
        { name: "Security & Identity", items: ["Microsoft Entra ID", "Microsoft Graph", "SSO", "IAM", "RBAC", "JWT", "Argon2id", "Claims & Roles", "Endpoint Security", "Network Defense", "Threat Management"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "Relational Modeling"] },
        { name: "Cloud & DevOps", items: ["Azure Fundamentals", "Git", "GitHub", "GitLab", "Azure DevOps", "Docker Fundamentals", "Linux"] }
      ]
    },
    projects: {
      heading: "Projects",
      kicker: "Selected Work",
      filters: { all: "All", professional: "Professional", ai: "AI & ML", security: "Security" },
      items: [
        {
          title: "AuthGuard",
          category: "security",
          tags: ["C#", "ASP.NET Core", "Angular", "JWT", "Argon2id"],
          desc: "A from-scratch authentication API and Angular client: Argon2id password hashing with a Have I Been Pwned breach check, JWT access tokens with rotating refresh tokens and reuse detection, role-based authorization with self-service first-admin setup, account lockout, rate limiting, TOTP multi-factor authentication with recovery codes, and a full security audit log. 56 automated tests: 43 unit tests against the service layer, 13 integration tests driving the real API over HTTP. Built to demonstrate real security engineering decisions, not just framework defaults - every choice is documented and defensible.",
          link: "https://github.com/SaniAdamou14/AuthGuard"
        },
        {
          title: "AuthBench",
          category: "security",
          tags: ["Python", "Machine Learning", "LANL", "Anomaly Detection"],
          desc: "A leak-free, temporally-sound benchmark for authentication-log anomaly detection on the LANL security dataset (1B+ real events across 58 days), comparing seven models - heuristics, statistical and classical anomaly detection - under realistic SOC alert budgets. Key finding: across 39 real red-team campaigns, none of the seven models detected a single campaign at 10, 50 or 100 alerts/day, and the two evaluation registers ranked models in opposite order - the best model by ROC-AUC (0.942) detected nothing operationally. Confirmed on a second, wider three-day test window (52 campaigns).",
          link: "https://github.com/SaniAdamou14/AuthBench"
        },
        {
          title: "Aegis-ID",
          category: "security",
          tags: ["C#", ".NET", "Angular", "Microsoft Graph", "Entra ID", "CIS Benchmark"],
          desc: "A read-only security posture auditor for Microsoft Entra ID tenants: 15 identity misconfiguration controls - privileged accounts without strong MFA, excessive Global Administrators, high-risk Graph API permissions, legacy authentication not blocked, expiring application credentials, unrestricted guest invites, and more - each mapped to the CIS Microsoft 365 Benchmark and MITRE ATT&CK. Six-project .NET solution (domain model, controls engine with reflection-based auto-discovery, Microsoft Graph collector, CLI, REST API, Angular dashboard) covered by 94 automated tests, with CI enforcing build, formatting, the full test suite and a gitleaks secret scan on every push. Console, JSON, CSV and white-labeled PDF reports, plus SQLite-backed scan history and scan-to-scan diffing. Requests exactly six read-only Graph permissions and never a write scope, by design.",
          link: "https://github.com/SaniAdamou14/Aegis-ID"
        },
        {
          title: "Tontine",
          category: "professional",
          tags: ["Ionic", "Angular", "Firebase"],
          desc: "A complete rotating-savings (tontine) management app for community savings groups: client accounts, tontine/savings/credit tracking, deposits and withdrawals, PDF statement generation, and a granular 17-resource permission system.",
          link: "https://github.com/SaniAdamou14/Tontine"
        },
        {
          title: "Integrated HR & RFID Attendance Platform",
          category: "professional",
          tags: ["Angular", "C#", ".NET", "RFID"],
          desc: "Independently designed the frontend, backend and architecture for a production HR platform covering attendance, employees, leave, payroll documents, reviews, competencies, equipment and tickets.",
          note: "Source confidential - employer-owned production system."
        },
        {
          title: "Travel Hajj Passenger Processing",
          category: "professional",
          tags: ["C#", "API", "QR Code"],
          desc: "Delivered API endpoints and mobile/desktop integration for real Hajj travel operations in Niger, with QR-code verification, passport-number fallback and temporary offline continuity.",
          note: "Confidential - organizational data."
        },
        {
          title: "Identity & Access Management Platform",
          category: "security",
          tags: ["C#", "Microsoft Entra ID", "SSO"],
          desc: "Contributed to claims and role management, business-role modeling, single sign-on and security fixes within a three-person enterprise IAM team.",
          note: "Confidential - enterprise project."
        },
        {
          title: "MatchUp Client Application",
          category: "professional",
          tags: ["C#", ".NET MAUI", "Unit Testing"],
          desc: "Owned the backend workstream and comprehensive unit tests for a confidential client application, while a separate team built the frontend.",
          note: "Confidential - external client."
        },
        {
          title: "StreamHelp AI",
          category: "ai",
          tags: ["Python", "LangChain", "FAISS", "Groq"],
          desc: "A source-grounded RAG assistant over 50 curated FAQ records in 10 categories, using local MiniLM embeddings, semantic retrieval, source attribution and safety constraints. Reached 17/17 satisfactory behaviors on the defined test suite.",
          link: "https://github.com/SaniAdamou14/StreamHelp_AI"
        },
        {
          title: "PoleMaster DQN",
          category: "ai",
          tags: ["Python", "PyTorch", "Gymnasium"],
          desc: "A Deep Q-Network built from first principles - replay memory, target network, epsilon-greedy exploration, Bellman updates. Reached CartPole-v1's max training reward of 500; evaluation mean 233.75 vs 18.85 for a random policy.",
          link: "https://github.com/SaniAdamou14/PoleMaster_DQN"
        },
        {
          title: "Gold Price Forecasting",
          category: "ai",
          tags: ["Python", "Scikit-learn", "Pandas"],
          desc: "21 engineered features from 20+ years of XAU/USD data, comparing Random Forest and Linear Regression against a naive chronological baseline - with an honest report on when the naive baseline actually won.",
          link: "https://github.com/SaniAdamou14/Gold_Price"
        },
        {
          title: "Serina - Evolutionary Ecosystem Simulator",
          category: "ai",
          tags: ["C++", "Python", "Node.js", "React", "MySQL"],
          desc: "An evolutionary ecosystem simulator built around the speculative-evolution premise of Serina: A World Without Humans - a C++20 engine, a Node.js/MySQL API and a React dashboard, wired end-to-end and verified live via Playwright screenshots against a running simulation, not just typechecked. CI runs 8 Catch2 and 21 pytest cases on every push, including a real pybind11 mutation bug the test suite caught on its first run. Documented honestly: a full NEAT/advanced-genetics system exists in the codebase but isn't yet wired into the live loop, so per-species genetic diversity is currently a placeholder, not a measured distance.",
          note: "Public, actively developed - core pipeline verified end-to-end; advanced genetics not yet connected to the live simulation.",
          link: "https://github.com/SaniAdamou14/Serina"
        }
      ],
      confidentialNote: "Confidential"
    },
    research: {
      heading: "Research",
      kicker: "Independent Research",
      intro: "A technical report, written independently and hosted here while it awaits the arXiv endorsement a first-time submitter needs for cs.CR.",
      items: [
        {
          title: "Aggregate Ranking Metrics Can Invert Operational Order",
          subtitle: "An Alert-Budget-Constrained Benchmark for Authentication Anomaly Detection",
          status: "Preprint - arXiv submission pending endorsement (cs.CR)",
          desc: "A security operations centre can triage a few dozen alerts per analyst per day, yet most published anomaly-detection results are reported at operating points no analyst could ever staff. On real Los Alamos National Laboratory authentication data (39 red-team campaigns), no model detects a single campaign at 10, 50 or 100 alerts per day - and the model with the best ROC-AUC (0.942) detects nothing at any budget, while the only model that detects anything has the lowest ROC-AUC of the five non-trivial models (0.547). Ranking by the literature-comparable metric would place the model that detects nothing first. Confirmed on a second, wider test window (52 campaigns).",
          stats: [
            { label: "Best ROC-AUC", value: "0.942 → 0% detected" },
            { label: "Only model that detects anything", value: "ROC-AUC 0.547" },
            { label: "Real red-team campaigns", value: "39 (+ 52 on a wider window)" }
          ],
          links: [
            { label: "Read the paper (PDF)", href: "assets/authbench-paper.pdf" },
            { label: "Code & full results", href: "https://github.com/SaniAdamou14/AuthBench" }
          ]
        }
      ]
    },
    certifications: {
      heading: "Certifications",
      kicker: "Credentials",
      groups: [
        {
          platform: "Cisco Networking Academy",
          summary: "7 credentials - cybersecurity & networking",
          viewAllLabel: "View all badges on Credly",
          viewAllLink: "credly",
          items: [
            { name: "Cisco Ethical Hacker", date: "Jan 2025" },
            { name: "Cisco Junior Cybersecurity Analyst Career Path", date: "Dec 2024" },
            { name: "Cisco Cyber Threat Management", date: "Jan 2025" },
            { name: "Cisco Network Defense", date: "Jan 2025" },
            { name: "Cisco Endpoint Security", date: "Jan 2025" },
            { name: "Cisco Networking Devices and Initial Configuration", date: "Jan 2025" },
            { name: "Cisco Networking Basics", date: "Dec 2024" }
          ]
        },
        {
          platform: "Microsoft Learn",
          summary: "Level 10 - 92 modules - 17 learning paths - 66 hours",
          viewAllLabel: "View full transcript",
          viewAllLink: "https://learn.microsoft.com/users/saniadamou-2420/transcript",
          items: [
            { name: "Manage identities in Microsoft Entra ID", date: "Feb 2025" },
            { name: "AZ-204: Implement Azure Functions", date: "Nov 2024" },
            { name: "AZ-204: Develop solutions that use Blob storage", date: "Nov 2024" },
            { name: "AZ-204: Create Azure App Service web apps", date: "Nov 2024" },
            { name: "Explore Microsoft Graph scenarios for ASP.NET Core", date: "Nov 2024" },
            { name: "Build mobile and desktop apps with .NET MAUI", date: "Nov 2024" },
            { name: "Build microservices with .NET and ASP.NET Core", date: "Oct 2024" },
            { name: "Build web apps and services with ASP.NET Core & minimal APIs", date: "Oct 2024" },
            { name: "Create .NET applications with C#", date: "Oct 2024" }
          ],
          note: "+ 8 more foundational C# learning paths (Aug 2024)"
        },
        {
          platform: "freeCodeCamp",
          summary: "11 certifications - JavaScript, Python, SQL, Machine Learning, C#",
          viewAllLabel: "View credentials",
          viewAllLink: null,
          items: [
            { name: "Foundational C# with Microsoft", date: "Aug 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/foundational-c-sharp-with-microsoft" },
            { name: "Machine Learning with Python", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/machine-learning-with-python-v7" },
            { name: "College Algebra with Python", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/college-algebra-with-python-v8" },
            { name: "JavaScript Algorithms and Data Structures", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/javascript-algorithms-and-data-structures-v8" },
            { name: "Front End Development Libraries", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/front-end-development-libraries" },
            { name: "Data Visualization", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/data-visualization" },
            { name: "Responsive Web Design", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/responsive-web-design" },
            { name: "Legacy JavaScript Algorithms and Data Structures", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/javascript-algorithms-and-data-structures" },
            { name: "Scientific Computing with Python", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/scientific-computing-with-python-v7" },
            { name: "Data Analysis with Python", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/data-analysis-with-python-v7" },
            { name: "Relational Database", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/relational-database-v8" }
          ]
        }
      ]
    },
    leadership: {
      heading: "Leadership & Languages",
      kicker: "Beyond code",
      text: "Mentored four software-development interns across different periods and supported two learners through practical PHP/MySQL exercises. Participated in the Next Leadership Club junior leadership program (communication, teamwork, personal development, community engagement).",
      languages: [
        { lang: "French", level: "Native" },
        { lang: "Zarma", level: "Native" },
        { lang: "English", level: "Professional - EF SET 62/100, CEFR C1" },
        { lang: "Hausa", level: "Basic" }
      ]
    },
    contact: {
      heading: "Get in Touch",
      kicker: "Contact",
      text: "Open to fully or substantially funded master's programs for 2027, and to software development / cybersecurity / AI opportunities. Reach out - I reply promptly.",
      emailCta: "Send an email",
      links: "Find me elsewhere"
    },
    footer: {
      text: "Designed & built by Mahamane Sani Adamou Mahamane.",
      source: "View source on GitHub"
    },
    themeToggle: { toDark: "Dark", toLight: "Light" }
  },

  fr: {
    meta: {
      title: "Mahamane Sani Adamou Mahamane - Développeur Full-Stack & Candidat CS",
      description: "Développeur full-stack et candidat en informatique (GPA 3.97/4.00), spécialisé en logiciels sécurisés, IA/ML et gestion des identités et accès. À la recherche d'un master financé pour 2027."
    },
    nav: { about: "Profil", experience: "Expérience", education: "Formation", skills: "Compétences", projects: "Projets", research: "Recherche", certifications: "Certifications", contact: "Contact" },
    hero: {
      kicker: "Niamey, Niger",
      name: "Mahamane Sani Adamou Mahamane",
      role: "Développeur Full-Stack Junior · Candidat B.S. en Informatique",
      tagline: "Je construis des logiciels sécurisés et en production - tout en explorant l'IA, la cybersécurité et les systèmes distribués.",
      badges: ["GPA 3.97/4.00", "Cisco Ethical Hacker", "RAG · RL · ML"],
      ctaProjects: "Voir les projets",
      ctaContact: "Me contacter",
      scroll: "Défiler"
    },
    about: {
      heading: "Profil",
      kicker: "À propos",
      paragraphs: [
        "Candidat en informatique avec un GPA de 3.97/4.00 et deux ans d'expérience continue en développement full-stack. Passé de stagiaire développeur full-stack chez Gabera Foundation à développeur full-stack junior chez Gabera Software Solutions SARL.",
        "Combine ingénierie logicielle en production, formation en cybersécurité, expérience en gestion des identités et des accès, et projets appliqués en génération augmentée par récupération (RAG), apprentissage par renforcement et machine learning.",
        "Recherche actuellement un master à orientation recherche, entièrement ou substantiellement financé, débutant en 2027 - en cybersécurité, intelligence artificielle, génie logiciel, science des données ou systèmes distribués/cloud."
      ],
      facts: [
        { label: "Nationalité", value: "Nigérienne" },
        { label: "Basé à", value: "Niamey, Niger" },
        { label: "Langues", value: "Français & Zarma (natif) · Anglais C1 · Haoussa (basique)" },
        { label: "Intérêts", value: "Systèmes sécurisés · sécurité de l'IA · RAG · systèmes distribués · tech africaine" }
      ]
    },
    experience: {
      heading: "Expérience",
      kicker: "Parcours",
      items: [
        {
          role: "Développeur Full-Stack Junior",
          org: "Gabera Software Solutions SARL",
          period: "Févr 2026 - Présent",
          bullets: [
            "Développe et maintient des applications métier avec C#, .NET, Angular, TypeScript, SQL et technologies Azure.",
            "Contribue à la gestion des identités et des accès avec Microsoft Entra ID, SSO, claims et autorisation par rôles.",
            "A conçu et développé une plateforme de gestion RH et de pointage RFID couvrant dossiers employés, congés, paie, performance et tickets de support.",
            "A livré des composants API, desktop et mobile pour une plateforme de traitement des passagers en direct, avec vérification QR et continuité hors ligne."
          ]
        },
        {
          role: "Stagiaire Développeur Full-Stack",
          org: "Gabera Foundation",
          period: "Août 2024 - Janv 2026",
          bullets: [
            "Développement de fonctionnalités frontend et backend, intégration d'API, correction d'anomalies, tests de mise en production et support au déploiement."
          ]
        },
        {
          role: "Mentor bénévole",
          org: "Samaria Digital Center",
          period: "Fév 2025 - Mai 2025",
          bullets: [
            "A accompagné deux apprenants en PHP, MySQL et débogage, les aidant à aborder les problèmes techniques avec plus d'autonomie."
          ]
        },
        {
          role: "Stagiaire Technologie",
          org: "ADN",
          period: "~3 mois",
          bullets: []
        }
      ]
    },
    education: {
      heading: "Formation",
      kicker: "Études",
      items: [
        {
          degree: "Bachelor of Science, Informatique",
          school: "University of the People - En ligne, États-Unis",
          period: "Sep 2025 - Prévu Jan 2027",
          detail: "GPA cumulatif 3.97/4.00. Programme en anglais. Cours : structures de données et algorithmes, systèmes d'exploitation, bases de données, réseaux, développement web, génie logiciel, cybersécurité, intelligence artificielle, mathématiques discrètes, calcul, statistiques."
        },
        {
          degree: "Baccalauréat Scientifique, Série D",
          school: "CSP Mission Catholique CLAB - Niamey, Niger",
          period: "2024",
          detail: ""
        }
      ]
    },
    skills: {
      heading: "Compétences",
      kicker: "Boîte à outils",
      groups: [
        { name: "Programmation", items: ["C#", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "C++", "Java", "HTML/CSS"] },
        { name: "Frameworks & UI", items: [".NET", "ASP.NET Core", "Angular", "WPF", ".NET MAUI", "Entity Framework"] },
        { name: "IA & Données", items: ["PyTorch", "Scikit-learn", "LangChain", "FAISS", "Sentence Transformers", "Pandas", "NumPy", "Matplotlib", "RAG", "Apprentissage par renforcement"] },
        { name: "Sécurité & Identité", items: ["Microsoft Entra ID", "Microsoft Graph", "SSO", "IAM", "RBAC", "JWT", "Argon2id", "Claims & Rôles", "Sécurité des postes", "Défense réseau", "Gestion des menaces"] },
        { name: "Bases de données", items: ["PostgreSQL", "MySQL", "Modélisation relationnelle"] },
        { name: "Cloud & DevOps", items: ["Azure Fundamentals", "Git", "GitHub", "GitLab", "Azure DevOps", "Docker (bases)", "Linux"] }
      ]
    },
    projects: {
      heading: "Projets",
      kicker: "Réalisations",
      filters: { all: "Tous", professional: "Professionnels", ai: "IA & ML", security: "Sécurité" },
      items: [
        {
          title: "AuthGuard",
          category: "security",
          tags: ["C#", "ASP.NET Core", "Angular", "JWT", "Argon2id"],
          desc: "Une API d'authentification et un client Angular conçus de zéro : hachage des mots de passe en Argon2id avec vérification contre les fuites Have I Been Pwned, tokens JWT avec refresh tokens rotatifs et détection de rejeu, autorisation par rôles avec initialisation du premier compte admin en self-service, verrouillage de compte, limitation de débit, authentification multifacteur TOTP avec codes de récupération, et un journal d'audit complet. 56 tests automatisés : 43 tests unitaires sur la couche service, 13 tests d'intégration pilotant l'API réelle en HTTP. Conçu pour démontrer de vraies décisions d'ingénierie sécurité, pas juste les réglages par défaut d'un framework - chaque choix est documenté et défendable.",
          link: "https://github.com/SaniAdamou14/AuthGuard"
        },
        {
          title: "AuthBench",
          category: "security",
          tags: ["Python", "Machine Learning", "LANL", "Détection d'anomalies"],
          desc: "Un benchmark sans fuite de données et temporellement rigoureux pour la détection d'anomalies dans les journaux d'authentification, sur le jeu de données de sécurité LANL (plus d'1 milliard d'événements réels sur 58 jours), comparant sept modèles - heuristiques, détection d'anomalies statistique et classique - sous des budgets d'alertes réalistes pour un SOC. Résultat clé : sur 39 campagnes red-team réelles, aucun des sept modèles ne détecte une seule campagne à 10, 50 ou 100 alertes par jour, et les deux registres d'évaluation classent les modèles dans l'ordre inverse - le meilleur modèle au ROC-AUC (0,942) ne détecte rien en pratique. Confirmé sur une seconde fenêtre de test élargie à trois jours (52 campagnes).",
          link: "https://github.com/SaniAdamou14/AuthBench"
        },
        {
          title: "Aegis-ID",
          category: "security",
          tags: ["C#", ".NET", "Angular", "Microsoft Graph", "Entra ID", "CIS Benchmark"],
          desc: "Un auditeur de posture de sécurité en lecture seule pour les tenants Microsoft Entra ID : 15 contrôles de mauvaise configuration d'identité - comptes privilégiés sans MFA forte, trop d'administrateurs globaux, permissions Graph à haut risque, authentification legacy non bloquée, identifiants d'application expirants, invitations d'invités non restreintes, et plus - chacun rattaché au CIS Microsoft 365 Benchmark et à MITRE ATT&CK. Solution .NET en six projets (modèle de domaine, moteur de contrôles à découverte automatique par réflexion, collecteur Microsoft Graph, CLI, API REST, tableau de bord Angular) couverte par 94 tests automatisés, avec une CI qui impose build, formatage, suite de tests complète et scan de secrets gitleaks à chaque push. Rapports console, JSON, CSV et PDF personnalisables en marque blanche, plus un historique de scans SQLite avec comparaison scan-à-scan. Ne demande que six permissions Graph en lecture seule, jamais d'accès en écriture, par conception.",
          link: "https://github.com/SaniAdamou14/Aegis-ID"
        },
        {
          title: "Tontine",
          category: "professional",
          tags: ["Ionic", "Angular", "Firebase"],
          desc: "Une application complète de gestion de tontine pour des groupes d'épargne communautaire : comptes clients, suivi tontine/épargne/crédit, dépôts et retraits, génération de relevés PDF, et un système de permissions granulaire à 17 ressources.",
          link: "https://github.com/SaniAdamou14/Tontine"
        },
        {
          title: "Plateforme RH & Pointage RFID intégrée",
          category: "professional",
          tags: ["Angular", "C#", ".NET", "RFID"],
          desc: "Conception et développement autonome du frontend, backend et de l'architecture d'une plateforme RH en production : pointage, employés, congés, documents de paie, évaluations, compétences, équipements et tickets.",
          note: "Code source confidentiel - système appartenant à l'employeur."
        },
        {
          title: "Travel Hajj - Traitement des passagers",
          category: "professional",
          tags: ["C#", "API", "QR Code"],
          desc: "Développement d'endpoints API et intégration mobile/desktop pour des opérations réelles du Hajj au Niger, avec vérification par QR code, repli sur numéro de passeport et continuité hors ligne temporaire.",
          note: "Confidentiel - données organisationnelles."
        },
        {
          title: "Plateforme de gestion des identités et des accès (IAM)",
          category: "security",
          tags: ["C#", "Microsoft Entra ID", "SSO"],
          desc: "Contribution à la gestion des claims et des rôles, à la modélisation des rôles métier, au SSO et à des correctifs de sécurité au sein d'une équipe IAM de trois personnes.",
          note: "Confidentiel - projet d'entreprise."
        },
        {
          title: "Application cliente MatchUp",
          category: "professional",
          tags: ["C#", ".NET MAUI", "Tests unitaires"],
          desc: "Responsable du backend et des tests unitaires complets d'une application cliente confidentielle, pendant qu'une équipe distincte développait le frontend.",
          note: "Confidentiel - client externe."
        },
        {
          title: "StreamHelp AI",
          category: "ai",
          tags: ["Python", "LangChain", "FAISS", "Groq"],
          desc: "Assistant RAG ancré dans les sources, basé sur 50 questions-réponses réparties en 10 catégories, avec embeddings MiniLM locaux, recherche sémantique, attribution des sources et garde-fous de sécurité. 17/17 comportements satisfaisants sur le jeu de tests défini.",
          link: "https://github.com/SaniAdamou14/StreamHelp_AI"
        },
        {
          title: "PoleMaster DQN",
          category: "ai",
          tags: ["Python", "PyTorch", "Gymnasium"],
          desc: "Un Deep Q-Network implémenté à partir des principes fondamentaux - mémoire de replay, réseau cible, exploration epsilon-greedy, mises à jour de Bellman. Récompense maximale de 500 atteinte sur CartPole-v1 ; moyenne d'évaluation 233,75 contre 18,85 pour une politique aléatoire.",
          link: "https://github.com/SaniAdamou14/PoleMaster_DQN"
        },
        {
          title: "Prévision du prix de l'or",
          category: "ai",
          tags: ["Python", "Scikit-learn", "Pandas"],
          desc: "21 variables construites à partir de plus de 20 ans de données XAU/USD, comparant Random Forest et régression linéaire à une base de référence naïve - avec une analyse honnête des cas où cette dernière l'emporte.",
          link: "https://github.com/SaniAdamou14/Gold_Price"
        },
        {
          title: "Serina - Simulateur d'écosystème évolutif",
          category: "ai",
          tags: ["C++", "Python", "Node.js", "React", "MySQL"],
          desc: "Un simulateur d'écosystème évolutif construit autour de la prémisse de spéculation évolutive de Serina : A World Without Humans - un moteur C++20, une API Node.js/MySQL et un tableau de bord React, reliés de bout en bout et vérifiés en direct par des captures Playwright contre une simulation réellement en cours d'exécution, pas seulement typé statiquement. La CI exécute 8 cas Catch2 et 21 cas pytest à chaque push, dont un vrai bug de mutation pybind11 trouvé par la suite de tests dès sa première exécution. Documenté honnêtement : un système complet NEAT/génétique avancée existe dans le code mais n'est pas encore branché à la boucle réelle - la diversité génétique par espèce affichée est donc pour l'instant un espace réservé, pas une distance mesurée.",
          note: "Public, en développement actif - le pipeline central est vérifié de bout en bout ; la génétique avancée n'est pas encore connectée à la simulation réelle.",
          link: "https://github.com/SaniAdamou14/Serina"
        }
      ],
      confidentialNote: "Confidentiel"
    },
    research: {
      heading: "Recherche",
      kicker: "Recherche indépendante",
      intro: "Un rapport technique, rédigé de façon indépendante et hébergé ici en attendant le parrainage (endorsement) qu'arXiv exige d'un premier soumissionnaire pour la catégorie cs.CR.",
      items: [
        {
          title: "Aggregate Ranking Metrics Can Invert Operational Order",
          subtitle: "Un benchmark contraint par un budget d'alertes réaliste, pour la détection d'anomalies d'authentification",
          status: "Preprint - soumission arXiv en attente de parrainage (cs.CR)",
          desc: "Un centre opérationnel de sécurité (SOC) ne peut trier que quelques dizaines d'alertes par analyste et par jour, alors que la plupart des résultats publiés en détection d'anomalies sont mesurés à des points de fonctionnement qu'aucun analyste ne pourrait jamais tenir. Sur des données réelles d'authentification du Los Alamos National Laboratory (39 campagnes red-team réelles), aucun modèle ne détecte une seule campagne à 10, 50 ou 100 alertes par jour - et le modèle avec le meilleur ROC-AUC (0,942) ne détecte rien à aucun budget, tandis que le seul modèle qui détecte quelque chose a le plus faible ROC-AUC des cinq modèles non triviaux (0,547). Classer selon la métrique comparable à la littérature placerait en tête le modèle qui ne détecte rien. Confirmé sur une seconde fenêtre de test plus large (52 campagnes).",
          stats: [
            { label: "Meilleur ROC-AUC", value: "0,942 → 0% détecté" },
            { label: "Seul modèle qui détecte quelque chose", value: "ROC-AUC 0,547" },
            { label: "Campagnes red-team réelles", value: "39 (+ 52 sur fenêtre élargie)" }
          ],
          links: [
            { label: "Lire le papier (PDF)", href: "assets/authbench-paper.pdf" },
            { label: "Code et résultats complets", href: "https://github.com/SaniAdamou14/AuthBench" }
          ]
        }
      ]
    },
    certifications: {
      heading: "Certifications",
      kicker: "Diplômes & badges",
      groups: [
        {
          platform: "Cisco Networking Academy",
          summary: "7 certifications - cybersécurité & réseaux",
          viewAllLabel: "Voir tous les badges sur Credly",
          viewAllLink: "credly",
          items: [
            { name: "Cisco Ethical Hacker", date: "Jan 2025" },
            { name: "Cisco Junior Cybersecurity Analyst Career Path", date: "Déc 2024" },
            { name: "Cisco Cyber Threat Management", date: "Jan 2025" },
            { name: "Cisco Network Defense", date: "Jan 2025" },
            { name: "Cisco Endpoint Security", date: "Jan 2025" },
            { name: "Cisco Networking Devices and Initial Configuration", date: "Jan 2025" },
            { name: "Cisco Networking Basics", date: "Déc 2024" }
          ]
        },
        {
          platform: "Microsoft Learn",
          summary: "Niveau 10 - 92 modules - 17 parcours d'apprentissage - 66 heures",
          viewAllLabel: "Voir le transcript complet",
          viewAllLink: "https://learn.microsoft.com/fr-fr/users/saniadamou-2420/transcript",
          items: [
            { name: "Gérer les identités dans Microsoft Entra ID", date: "Fév 2025" },
            { name: "AZ-204 : Implémenter des fonctions Azure", date: "Nov 2024" },
            { name: "AZ-204 : Développer des solutions qui utilisent le stockage Blob", date: "Nov 2024" },
            { name: "AZ-204 : Créer des applications web Azure App Service", date: "Nov 2024" },
            { name: "Explorer les scénarios Microsoft Graph pour ASP.NET Core", date: "Nov 2024" },
            { name: "Créer des applications mobiles et de bureau avec .NET MAUI", date: "Nov 2024" },
            { name: "Créer des microservices avec .NET et ASP.NET Core", date: "Oct 2024" },
            { name: "Créer des applications et services web avec ASP.NET Core & API minimale", date: "Oct 2024" },
            { name: "Créer des applications .NET avec C#", date: "Oct 2024" }
          ],
          note: "+ 8 autres parcours C# fondamentaux (Août 2024)"
        },
        {
          platform: "freeCodeCamp",
          summary: "11 certifications - JavaScript, Python, SQL, Machine Learning, C#",
          viewAllLabel: "Voir les certifications",
          viewAllLink: null,
          items: [
            { name: "Foundational C# with Microsoft", date: "Août 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/foundational-c-sharp-with-microsoft" },
            { name: "Machine Learning with Python", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/machine-learning-with-python-v7" },
            { name: "College Algebra with Python", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/college-algebra-with-python-v8" },
            { name: "JavaScript Algorithms and Data Structures", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/javascript-algorithms-and-data-structures-v8" },
            { name: "Front End Development Libraries", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/front-end-development-libraries" },
            { name: "Data Visualization", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/data-visualization" },
            { name: "Responsive Web Design", date: "Sep 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/responsive-web-design" },
            { name: "Legacy JavaScript Algorithms and Data Structures", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/javascript-algorithms-and-data-structures" },
            { name: "Scientific Computing with Python", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/scientific-computing-with-python-v7" },
            { name: "Data Analysis with Python", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/data-analysis-with-python-v7" },
            { name: "Relational Database", date: "Oct 2024", link: "https://www.freecodecamp.org/certification/Sani_Adamou/relational-database-v8" }
          ]
        }
      ]
    },
    leadership: {
      heading: "Leadership & Langues",
      kicker: "Au-delà du code",
      text: "A encadré quatre stagiaires en développement logiciel à différentes périodes et accompagné deux apprenants sur des exercices pratiques PHP/MySQL. A participé au programme junior de leadership du Next Leadership Club (communication, travail d'équipe, développement personnel, engagement communautaire).",
      languages: [
        { lang: "Français", level: "Natif" },
        { lang: "Zarma", level: "Natif" },
        { lang: "Anglais", level: "Professionnel - EF SET 62/100, CECR C1" },
        { lang: "Haoussa", level: "Basique" }
      ]
    },
    contact: {
      heading: "Me contacter",
      kicker: "Contact",
      text: "Ouvert aux masters entièrement ou substantiellement financés pour 2027, ainsi qu'aux opportunités en développement logiciel, cybersécurité et IA. N'hésitez pas à me contacter - je réponds rapidement.",
      emailCta: "Envoyer un email",
      links: "Me retrouver ailleurs"
    },
    footer: {
      text: "Conçu et développé par Mahamane Sani Adamou Mahamane.",
      source: "Voir le code source sur GitHub"
    },
    themeToggle: { toDark: "Sombre", toLight: "Clair" }
  }
};

const PROFILE_LINKS = {
  email: "saniadamou778@gmail.com",
  github: "https://github.com/SaniAdamou14",
  linkedin: "https://www.linkedin.com/in/sani-adamou/",
  credly: "https://www.credly.com/users/sani-adamou",
  efset: "https://cert.efset.org/fr/uX2BRC"
};
