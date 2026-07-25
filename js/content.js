/* Single source of truth for all portfolio copy, bilingual FR/EN. */
const CONTENT = {
  en: {
    meta: {
      title: "Mahamane Sani Adamou Mahamane - Software Developer & CS Candidate",
      description: "Full-stack developer and Computer Science candidate (3.96/4.00 GPA) specializing in secure software, AI/ML and identity & access management. Seeking a funded 2027 master's degree."
    },
    nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", projects: "Projects", certifications: "Certifications", contact: "Contact" },
    hero: {
      kicker: "Niamey, Niger",
      name: "Mahamane Sani Adamou Mahamane",
      role: "Full-Stack Developer · B.S. Computer Science Candidate",
      tagline: "Building secure, production software - and researching AI, cybersecurity and distributed systems along the way.",
      badges: ["3.96/4.00 GPA", "Cisco Ethical Hacker", "RAG · RL · ML"],
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      scroll: "Scroll"
    },
    about: {
      heading: "About",
      kicker: "Profile",
      paragraphs: [
        "Computer Science candidate with a 3.96/4.00 GPA and nearly two years of continuous full-stack development experience. Progressed from Junior Full-Stack Developer Intern to Full-Stack Developer at Gabera Software Solutions SA.",
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
          role: "Full-Stack Developer",
          org: "Gabera Software Solutions SA",
          period: "Aug 2025 - Present",
          bullets: [
            "Develop and maintain business applications using C#, .NET, Angular, TypeScript, SQL and Azure-related technologies.",
            "Participate in architecture decisions and client discussions; mentor software-development interns.",
            "Contributed to enterprise IAM functionality (Microsoft Entra ID, SSO, claims, roles) and a Hajj passenger-processing platform across API, mobile and desktop."
          ]
        },
        {
          role: "Junior Full-Stack Developer Intern",
          org: "Gabera Software Solutions SA",
          period: "Aug 2024 - Aug 2025",
          bullets: [
            "Designed and independently developed an integrated HR management and RFID attendance platform used in real organizational operations.",
            "Implemented and tested frontend and backend functionality, corrected defects, and was promoted to a formal developer role after one year."
          ]
        },
        {
          role: "Web Development & Digital Design Trainee",
          org: "Samaria Digital Center",
          period: "Dec 2024 - Jun 2025 (provisional dates)",
          bullets: [
            "Three-month theoretical and practical training in web development, webmaster practices, graphic design, PHP and MySQL.",
            "Supported two learners through practical PHP/MySQL exercises."
          ]
        },
        {
          role: "Technology Intern",
          org: "ADN",
          period: "~3 months (dates to be confirmed)",
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
          detail: "Cumulative GPA 3.96/4.00. English-medium program. Coursework: data structures & algorithms, operating systems, databases, networking, web development, software engineering, cybersecurity, artificial intelligence, discrete mathematics, calculus, statistics."
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
          desc: "A from-scratch authentication API and Angular client: Argon2id password hashing, JWT access tokens with rotating refresh tokens and reuse detection, role-based authorization, account lockout, rate limiting, TOTP multi-factor authentication and a full security audit log. Built to demonstrate real security engineering decisions, not just framework defaults - every choice is documented and defensible.",
          link: "https://github.com/SaniAdamou14/AuthGuard"
        },
        {
          title: "Aegis-ID",
          category: "security",
          tags: ["C#", "Microsoft Graph", "Entra ID", "CIS Benchmark"],
          desc: "A read-only security posture auditor for Microsoft Entra ID tenants - detects identity misconfigurations (privileged accounts without MFA, excessive Global Administrators, high-risk Graph API permissions, legacy authentication), and maps findings to the CIS Microsoft 365 Benchmark and MITRE ATT&CK. Never requests write access, by design.",
          note: "In active development",
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
          title: "Serina - Biological Evolution Simulation",
          category: "ai",
          tags: ["C++", "CMake", "Python", "JavaScript"],
          desc: "An independent computational simulation exploring biological evolution. Currently being restructured, tested and documented for public release.",
          note: "Coming soon - August 2026 release.",
          link: "https://github.com/SaniAdamou14/Serina"
        }
      ],
      confidentialNote: "Confidential"
    },
    certifications: {
      heading: "Certifications",
      kicker: "Credentials",
      viewCredly: "View all badges on Credly",
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
    leadership: {
      heading: "Leadership & Languages",
      kicker: "Beyond code",
      text: "Mentored four software-development interns across different periods and supported two learners through practical PHP/MySQL exercises. Participated in the Next Leadership Club junior leadership program (communication, teamwork, personal development, community engagement).",
      languages: [
        { lang: "French", level: "Native" },
        { lang: "Zarma", level: "Native" },
        { lang: "English", level: "Professional - EF SET 61/100, CEFR C1" },
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
      description: "Développeur full-stack et candidat en informatique (GPA 3.96/4.00), spécialisé en logiciels sécurisés, IA/ML et gestion des identités et accès. À la recherche d'un master financé pour 2027."
    },
    nav: { about: "Profil", experience: "Expérience", education: "Formation", skills: "Compétences", projects: "Projets", certifications: "Certifications", contact: "Contact" },
    hero: {
      kicker: "Niamey, Niger",
      name: "Mahamane Sani Adamou Mahamane",
      role: "Développeur Full-Stack · Candidat B.S. en Informatique",
      tagline: "Je construis des logiciels sécurisés et en production - tout en explorant l'IA, la cybersécurité et les systèmes distribués.",
      badges: ["GPA 3.96/4.00", "Cisco Ethical Hacker", "RAG · RL · ML"],
      ctaProjects: "Voir les projets",
      ctaContact: "Me contacter",
      scroll: "Défiler"
    },
    about: {
      heading: "Profil",
      kicker: "À propos",
      paragraphs: [
        "Candidat en informatique avec un GPA de 3.96/4.00 et près de deux ans d'expérience continue en développement full-stack. Passé de stagiaire développeur junior à développeur full-stack chez Gabera Software Solutions SA.",
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
          role: "Développeur Full-Stack",
          org: "Gabera Software Solutions SA",
          period: "Août 2025 - Présent",
          bullets: [
            "Développe et maintient des applications métier avec C#, .NET, Angular, TypeScript, SQL et technologies Azure.",
            "Participe aux décisions d'architecture et aux échanges clients ; encadre des stagiaires développeurs.",
            "A contribué à des fonctionnalités IAM d'entreprise (Microsoft Entra ID, SSO, claims, rôles) et à une plateforme de traitement des passagers du Hajj (API, mobile, desktop)."
          ]
        },
        {
          role: "Stagiaire Développeur Full-Stack Junior",
          org: "Gabera Software Solutions SA",
          period: "Août 2024 - Août 2025",
          bullets: [
            "A conçu et développé de façon autonome une plateforme intégrée de gestion RH et de pointage RFID utilisée en conditions réelles.",
            "A implémenté et testé le frontend et le backend, corrigé des anomalies, et a été promu développeur formel après un an."
          ]
        },
        {
          role: "Stagiaire Développement Web & Design Digital",
          org: "Samaria Digital Center",
          period: "Déc 2024 - Juin 2025 (dates provisoires)",
          bullets: [
            "Formation théorique et pratique de trois mois en développement web, pratiques de webmaster, design graphique, PHP et MySQL.",
            "A accompagné deux apprenants sur des exercices pratiques PHP/MySQL."
          ]
        },
        {
          role: "Stagiaire Technologie",
          org: "ADN",
          period: "~3 mois (dates à confirmer)",
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
          detail: "GPA cumulatif 3.96/4.00. Programme en anglais. Cours : structures de données et algorithmes, systèmes d'exploitation, bases de données, réseaux, développement web, génie logiciel, cybersécurité, intelligence artificielle, mathématiques discrètes, calcul, statistiques."
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
          desc: "Une API d'authentification et un client Angular conçus de zéro : hachage des mots de passe en Argon2id, tokens JWT avec refresh tokens rotatifs et détection de rejeu, autorisation par rôles, verrouillage de compte, limitation de débit, authentification multifacteur TOTP et un journal d'audit complet. Conçu pour démontrer de vraies décisions d'ingénierie sécurité, pas juste les réglages par défaut d'un framework - chaque choix est documenté et défendable.",
          link: "https://github.com/SaniAdamou14/AuthGuard"
        },
        {
          title: "Aegis-ID",
          category: "security",
          tags: ["C#", "Microsoft Graph", "Entra ID", "CIS Benchmark"],
          desc: "Un auditeur de posture de sécurité en lecture seule pour les tenants Microsoft Entra ID - détecte les mauvaises configurations d'identité (comptes privilégiés sans MFA, trop d'administrateurs globaux, permissions Graph à haut risque, authentification legacy), et rattache les résultats au CIS Microsoft 365 Benchmark et à MITRE ATT&CK. Ne demande jamais d'accès en écriture, par conception.",
          note: "En développement actif",
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
          title: "Serina - Simulation d'évolution biologique",
          category: "ai",
          tags: ["C++", "CMake", "Python", "JavaScript"],
          desc: "Simulation informatique indépendante explorant l'évolution biologique. Actuellement en cours de restructuration, de tests et de documentation pour une publication publique.",
          note: "Bientôt disponible - publication août 2026.",
          link: "https://github.com/SaniAdamou14/Serina"
        }
      ],
      confidentialNote: "Confidentiel"
    },
    certifications: {
      heading: "Certifications",
      kicker: "Diplômes & badges",
      viewCredly: "Voir tous les badges sur Credly",
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
    leadership: {
      heading: "Leadership & Langues",
      kicker: "Au-delà du code",
      text: "A encadré quatre stagiaires en développement logiciel à différentes périodes et accompagné deux apprenants sur des exercices pratiques PHP/MySQL. A participé au programme junior de leadership du Next Leadership Club (communication, travail d'équipe, développement personnel, engagement communautaire).",
      languages: [
        { lang: "Français", level: "Natif" },
        { lang: "Zarma", level: "Natif" },
        { lang: "Anglais", level: "Professionnel - EF SET 61/100, CECR C1" },
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
