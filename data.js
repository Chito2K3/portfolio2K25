/**
 * Chito2K3 Portfolio Project Data
 * Curated projects with rich metadata, architecture notes, and GitHub links.
 */
export const PORTFOLIO_DATA = {
  profile: {
    name: "Chito Saba",
    handle: "Chito2K3",
    title: "Software Engineer & Healthcare Systems Developer",
    bio: "Specializing in robust hospital information systems, pharmacy logistics & dispensing automation, cooperative financial management, and resilient web & mobile applications.",
    location: "Philippines",
    githubUrl: "https://github.com/Chito2K3",
    email: "chitovillaflor23@gmail.com",
    available: true,
    statusText: "Available for projects & systems architecture",
    stats: {
      reposCount: 8,
      specialization: "Healthcare & Fintech",
      yearsActive: "3+ Years",
      uptimeFocus: "99.9%"
    }
  },
  categories: [
    { id: "all", label: "All Works" },
    { id: "healthcare", label: "Healthcare & Pharmacy" },
    { id: "fintech", label: "Financial & ERP" },
    { id: "mobile", label: "Mobile & Commerce" },
    { id: "tools", label: "Data & Utilities" }
  ],
  skills: [
    { name: "JavaScript / TypeScript", level: "Core", category: "Languages" },
    { name: "Node.js & Express", level: "Core", category: "Backend" },
    { name: "Flutter & Dart", level: "Mobile", category: "Mobile" },
    { name: "Progressive Web Apps (PWA)", level: "Web", category: "Web" },
    { name: "Hospital Info Systems (HIS)", level: "Domain", category: "Domain" },
    { name: "Amortization & Coop Accounting", level: "Domain", category: "Domain" },
    { name: "REST APIs & Data Sanitization", level: "Architecture", category: "Data" },
    { name: "HTML5 / Modern CSS Grid", level: "UI/UX", category: "Frontend" }
  ],
  projects: [
    {
      id: "pharmacy",
      title: "Pharmacy ERP & Inventory System",
      repoName: "pharmacy",
      category: "healthcare",
      featured: true,
      tagline: "Comprehensive hospital drug inventory, batch tracking & multi-ward stock management",
      description: "A specialized healthcare system engineered to track pharmaceutical stock levels, expiring batches, and replenishment triggers across hospital wards, significantly reducing dispensing delays and inventory discrepancies.",
      challenge: "Hospital pharmacies handle thousands of medications with strict shelf lives, volatile demand surges, and high regulatory accountability. Traditional spreadsheets caused delayed dispensing and stockouts.",
      solution: "Developed an automated inventory engine featuring real-time stock deductions upon dispensing, batch expiry notifications, restock calculation algorithms, and multi-ward transfer logs.",
      highlights: [
        "Real-time pharmaceutical batch tracking and FIFO expiry queues",
        "Multi-ward inventory transfer and reconciliation dashboard",
        "Automated reorder point alerts based on consumption velocity",
        "Zero-dependency high-speed web interface designed for fast clinical workflows"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Local/Cloud DB", "REST API"],
      language: "JavaScript",
      githubUrl: "https://github.com/Chito2K3/pharmacy",
      liveUrl: "https://chito2k3.github.io/pharmacy/",
      status: "Production Ready"
    },
    {
      id: "armmc-coop-loan",
      title: "Hospital Employee Cooperative Loan & Amortization System",
      repoName: "ARMMC-Coop-Loan-System",
      category: "fintech",
      featured: true,
      tagline: "Cooperative lending, diminishing amortization schedules & member capital ledger system",
      description: "An enterprise-grade cooperative loan management portal engineered for a tertiary hospital multi-purpose cooperative in Metro Manila. Streamlines loan applications, automated diminishing amortization computations, deductions, and member shares.",
      challenge: "Manual ledger calculations and spreadsheet-based loan schedules created administrative bottlenecks, calculation variances, and slow approval cycles for cooperative hospital workers.",
      solution: "Engineered an automated loan lifecycle system using TypeScript that generates accurate diminishing/flat amortization tables, monitors principal/interest payments, and maintains member dividend ledgers.",
      highlights: [
        "Automated amortization schedule engine with flexible interest terms",
        "Member profile ledger tracking share capital, active loans, and dividend eligibility",
        "Audit-compliant transaction history with payment reconciliation",
        "Role-based operational dashboard for loan officers and committee approvals"
      ],
      techStack: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Financial Algorithms"],
      language: "TypeScript",
      githubUrl: "https://github.com/Chito2K3/ARMMC-Coop-Loan-System",
      liveUrl: "https://armmc-coop-loan-system.vercel.app/",
      status: "Live on Vercel"
    },
    {
      id: "phramacy-stock-loan",
      title: "Pharmacy Stock Loan & Inter-Unit Borrowing",
      repoName: "phramacy_stock_loan",
      category: "healthcare",
      featured: true,
      tagline: "Inter-unit hospital pharmaceutical loaning, return tracking & ledger reconciliation",
      description: "Hospital wards and emergency units frequently borrow emergency medications from adjacent units or central pharmacy. This system provides an instant digital audit trail for loaned drugs, outstanding balances, and returns.",
      challenge: "Urgent bedside drug borrowing between hospital units was often noted on paper slips, leading to unreturned medications and unaccounted hospital costs.",
      solution: "Created an instantaneous loan and return ledger with real-time outstanding balances, unit acknowledgments, and automated alerts for overdue returns.",
      highlights: [
        "Google Sheets database backend for UTANG (borrowed) and PAUTANG (lent) ledger tracking",
        "Interactive partial settlement calculator with automated remaining balance computation",
        "Audit-compliant timestamped transaction remarks logging partial return payments",
        "Instant search, facility autocomplete, and print-ready clinical turnover vouchers"
      ],
      techStack: ["Google Apps Script", "Google Sheets API", "JavaScript", "HTML5", "CSS3"],
      language: "Google Apps Script",
      githubUrl: "https://github.com/Chito2K3/phramacy_stock_loan",
      liveUrl: "https://script.google.com/macros/s/AKfycbyjLqudweulLP-DASBbHYNozBcnKPUliOes9zuRqxLMtvYQq7ylBcz2j0vAYIkE-2LAlw/exec",
      status: "Live on Apps Script"
    },
    {
      id: "pbef-file-cleaner",
      title: "PBEF Data Sanitizer & PhilHealth Formatter",
      repoName: "PBEF_file-cleaner",
      category: "tools",
      featured: false,
      tagline: "High-throughput data sanitization and PhilHealth billing format normalizer",
      description: "Automated billing and electronic claim data cleaner engineered to process, parse, validate, and normalize PhilHealth PBEF claim datasets with zero server lag.",
      challenge: "Hospital billing teams had to manually inspect large PBEF claims exports, fixing formatting errors, illegal characters, and schema mismatches that caused claims rejection.",
      solution: "A client-side data engine that ingests raw PBEF exports, applies strict healthcare schema validation, cleans anomalies, and exports compliant sanitized datasets instantly.",
      highlights: [
        "Instant in-browser processing of large healthcare export files",
        "Pre-submission validation flags invalid PhilHealth identification formats",
        "Zero-upload client-side processing ensuring HIPAA / Data Privacy compliance",
        "One-click batch cleaning with downloadable audit report"
      ],
      techStack: ["JavaScript", "Regex Parsers", "File API", "HTML5"],
      language: "JavaScript",
      githubUrl: "https://github.com/Chito2K3/PBEF_file-cleaner",
      liveUrl: null,
      status: "Utility"
    },
    {
      id: "dispensing",
      title: "Clinical Drug Dispensing Terminal",
      repoName: "dispensing",
      category: "healthcare",
      featured: false,
      tagline: "Rapid-fire outpatient & ward dispensing interface with verification cues",
      description: "Streamlined dispensing terminal built for high-tempo pharmacy counters. Minimizes prescription processing friction with keyboard-first workflows and rapid dose verification.",
      challenge: "Peak pharmacy hours create long patient queues where slow software navigation directly impacts patient wait times.",
      solution: "Focused keyboard-optimized dispensing queue allowing pharmacotherapists to allocate, verify dosage, and release items in under 5 seconds per prescription.",
      highlights: [
        "Keyboard-driven workflow for barcode scanners and rapid key entries",
        "Dosage validation cues to prevent dispensing anomalies",
        "Lightweight single-file architecture for emergency off-grid reliability"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      language: "HTML",
      githubUrl: "https://github.com/Chito2K3/dispensing",
      liveUrl: null,
      status: "Terminal"
    },
    {
      id: "ppmp",
      title: "PPMP Procurement & Budget Tracker",
      repoName: "PPMP",
      category: "healthcare",
      featured: false,
      tagline: "Hospital Project Procurement Management Plan tracker with quarterly milestone planning",
      description: "Dedicated procurement tracker aligning hospital department consumable requests with annual procurement budgets, bidding phases, and delivery schedules.",
      challenge: "Department heads struggle to track multi-million peso procurement timelines across public bidding, canvassing, and supplier awards.",
      solution: "Interactive PPMP planning matrix that maps requested pharmaceutical and medical supplies against quarterly procurement tranches and budget ceilings.",
      highlights: [
        "Quarterly budget allocation and variance calculations",
        "Category breakdown: Drugs, Medical Supplies, Equipment maintenance",
        "Standardized government procurement milestone monitoring"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Data Grid"],
      language: "JavaScript",
      githubUrl: "https://github.com/Chito2K3/PPMP",
      liveUrl: null,
      status: "Production Tool"
    },
    {
      id: "tindahan-ko-flutter",
      title: "Tindahan Ko — Mobile POS & Retail System",
      repoName: "tindahan-ko-flutter",
      category: "mobile",
      featured: true,
      tagline: "Cross-platform mobile POS & offline-first store bookkeeping for MSMEs",
      description: "A native Flutter mobile application crafted for local store owners to manage merchandise inventory, barcode scanning, sales receipts, and customer credit (utang) balances.",
      challenge: "Small merchants rely on physical notebooks, losing track of receivables and inventory shrinkage, without budget for expensive commercial POS hardware.",
      solution: "Engineered a fast, intuitive mobile POS utilizing Flutter for buttery smooth 60fps interaction on standard Android smartphones with offline persistence.",
      highlights: [
        "Offline-first local database caching for uninterrupted operations",
        "Customer credit (utang) ledger with partial payment logging",
        "Quick barcode camera scanner integration for rapid item lookup",
        "Daily profit & revenue telemetry with exportable summaries"
      ],
      techStack: ["Flutter", "Dart", "SQLite / Hive", "State Management"],
      language: "Dart",
      githubUrl: "https://github.com/Chito2K3/tindahan-ko-flutter",
      liveUrl: null,
      status: "Mobile App"
    },
    {
      id: "tindahan-ko-pwa",
      title: "Tindahan Ko — Progressive Web App",
      repoName: "tindahan-ko-pwa",
      category: "mobile",
      featured: false,
      tagline: "Instant installable zero-download web POS edition for browser & desktop",
      description: "The lightweight web companion to the Tindahan Ko ecosystem. Runs in any browser, installs as a standalone desktop/mobile app via PWA service workers.",
      challenge: "Ensuring store employees on low-spec tablets or desktops can run the POS without installing native app store packages.",
      solution: "Architected a responsive, cache-resilient Progressive Web App delivering native app-like experience with zero installation overhead.",
      highlights: [
        "Service Worker offline caching for 100% disconnected functionality",
        "Adaptive UI scaling effortlessly from smartphone to 24-inch POS monitors",
        "Touch-optimized large tactile cash keypad"
      ],
      techStack: ["Progressive Web App", "Service Workers", "JavaScript", "Modern CSS"],
      language: "JavaScript",
      githubUrl: "https://github.com/Chito2K3/tindahan-ko-pwa",
      liveUrl: null,
      status: "PWA App"
    }
  ]
};
