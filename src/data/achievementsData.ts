export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  category: 'Internships' | 'Hackathons' | 'Courses' | 'Workshops' | 'Competitions' | 'Badges';
  subCategory: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  description: string;
  url?: string;
  image?: string; // Scan of physical/digital certificate file
  rarity?: 'common' | 'rare' | 'epic' | 'legendary'; // For badges
  place?: string; // For hackathons/competitions, e.g., '1st Place', 'Winner', 'Runner-up', 'Participation'
  projectTitle?: string; // For hackathons
  projectUrl?: string; // For hackathons
  teamSize?: number; // For hackathons
  badgeIcon?: string; // Icon identifier for badges
}

export const achievementsData: Achievement[] = [
  // ─── INTERNSHIPS ───────────────────────────────────────────────────────────
  {
    id: 'internship-zero2site',
    title: 'Cloud Development Intern',
    issuer: 'Zero2site',
    category: 'Internships',
    subCategory: 'Online Internships',
    issueDate: '2025-06-28',
    credentialId: 'Z2S-CLOUD-2025',
    skills: ['Cloud Development', 'Client Demo Projects', 'API Configurations', 'Software Engineering'],
    description: 'Successfully completed a 1-month Internship in the field of Cloud Development from May 15, 2025 to June 15, 2025. Actively engaged in diverse tasks and played a pivot role in a client demo project.',
    url: 'https://www.zero2site.in',
    image: '/certificates/zero2site_internship.jpg'
  },
  {
    id: 'internship-cognifyz',
    title: 'Java Development Intern',
    issuer: 'Cognifyz Technologies',
    category: 'Internships',
    subCategory: 'Online Internships',
    issueDate: '2025-09-29',
    credentialId: 'CTI/A1/C208788',
    skills: ['Java Development', 'Core Java', 'Problem Solving', 'Communication'],
    description: 'Served as a Java Development Intern from August 2025 to September 2025. Displayed remarkable dedication, sincerity, and exceptional coordination and communication skills.',
    url: 'https://www.cognifyz.com',
    image: '/certificates/cognifyz_internship.jpg'
  },
  {
    id: 'internship-novitech-da',
    title: 'Data Analytics Intern',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Internships',
    subCategory: 'Offline Internships',
    issueDate: '2025-09-28',
    credentialId: 'DAIN12477',
    skills: ['Data Analytics', 'Statistical Analysis', 'Data Visualizations'],
    description: 'Successfully completed a one month internship in Data Analytics from August 28th to September 28th 2025 at NoviTech R&D Private Limited, Coimbatore.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_data_analytics.jpg'
  },
  {
    id: 'internship-novitech-ml',
    title: 'Machine Learning Intern',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Internships',
    subCategory: 'Offline Internships',
    issueDate: '2025-11-30',
    credentialId: 'MLIN8451',
    skills: ['Machine Learning', 'Model Training', 'Predictive Analytics'],
    description: 'Successfully completed a one month internship in Machine Learning from November 1, 2025 to November 30, 2025 at NoviTech R&D Private Limited, Coimbatore.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_machine_learning.jpg'
  },
  {
    id: 'internship-novitech-ai',
    title: 'Artificial Intelligence Intern',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Internships',
    subCategory: 'Offline Internships',
    issueDate: '2025-12-31',
    credentialId: 'AIIN14887',
    skills: ['Artificial Intelligence', 'Deep Learning', 'Neural Networks', 'AI Engineering'],
    description: 'Successfully completed a one month internship in Artificial Intelligence from December 1, 2025 to December 31, 2025 at NoviTech R&D Private Limited.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_ai_internship.png'
  },
  // ─── COURSES ───────────────────────────────────────────────────────────────
  {
    id: 'course-hackerrank-sql',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    category: 'Courses',
    subCategory: 'Skill Certifications',
    issueDate: '2026-03-29',
    credentialId: 'A56DE22B73CD',
    skills: ['SQL', 'Relational Databases', 'Database Queries', 'Data Retrieval'],
    description: 'Passed the HackerRank SQL (Basic) skill certification test, verifying proficiency in writing relational database queries, filtering, aggregation, and basic joins.',
    url: 'https://www.hackerrank.com/certificates/A56DE22B73CD',
    image: '/certificates/hackerrank_sql_basic.png'
  },
  {
    id: 'course-guvi-python',
    title: 'Python Course',
    issuer: 'GUVI Geek Networks',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-08-03',
    credentialId: '2421JrK31752fwuj01',
    skills: ['Python', 'Programming Fundamentals', 'Control Flow', 'Data Structures'],
    description: 'Completed the Python Course offered by GUVI Geek Networks (an HCL Company and Google for Education Partner), covering core programming concepts, data structures, and problem-solving.',
    url: 'https://www.guvi.in/certificate?id=2421JrK31752fwuj01',
    image: '/certificates/guvi_python.png'
  },
  {
    id: 'course-cisco-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Courses',
    subCategory: 'Professional Certificates',
    issueDate: '2025-08-26',
    skills: ['Cybersecurity', 'Network Security', 'Threat Assessment', 'Security Fundamentals'],
    description: 'Successfully completed the Introduction to Cybersecurity course through Cisco Networking Academy, covering network security basics, common types of cyber threats, risk mitigation, and digital protection strategies.',
    image: '/certificates/cisco_cybersecurity.png'
  },
  {
    id: 'course-udemy-html5-css3',
    title: 'HTML5 & CSS3 Complete Course: Build Websites like a Pro',
    issuer: 'Udemy',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-10-11',
    credentialId: 'UC-5c668aa1-bf97-4c93-9f52-1388a1c79538',
    skills: ['HTML5', 'CSS3', 'Web Design', 'Frontend Development'],
    description: 'Completed the HTML5 & CSS3 course on Udemy instructed by Meta Brains, learning core web structure, advanced styling, and modern responsive design techniques.',
    url: 'https://www.udemy.com/certificate/UC-5c668aa1-bf97-4c93-9f52-1388a1c79538/',
    image: '/certificates/udemy_html5_css3.png'
  },
  {
    id: 'course-sololearn-vibe-coding',
    title: 'Vibe Coding',
    issuer: 'Sololearn',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-13',
    credentialId: 'CC-Y4AJE1WT',
    skills: ['Vibe Coding', 'AI-assisted Coding', 'Coding Concepts'],
    description: 'Completed the Vibe Coding course on Sololearn, verifying understanding of generative AI workflows, writing code using natural language instructions, and AI-driven development.',
    url: 'https://www.sololearn.com/',
    image: '/certificates/sololearn_vibe_coding.png'
  },
  {
    id: 'course-infosys-core-java',
    title: 'Core Java Programming Revisited',
    issuer: 'Infosys Springboard',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-10',
    skills: ['Java', 'Object-Oriented Programming', 'Exception Handling', 'Java Collections'],
    description: 'Completed the Core Java Programming Revisited course offered by Infosys Springboard, covering advanced Java concepts, OOP principles, collection framework, and robust application structure.',
    url: 'https://verify.onwingspan.com',
    image: '/certificates/infosys_core_java.png'
  },
  {
    id: 'course-sololearn-prompt-engineering',
    title: 'Prompt Engineering',
    issuer: 'Sololearn',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-14',
    credentialId: 'CC-FVGMWMVA',
    skills: ['Prompt Engineering', 'Generative AI', 'LLMs', 'Prompt Design'],
    description: 'Completed the Prompt Engineering course on Sololearn, verifying theoretical and practical understanding of constructing prompts, role prompting, few-shot learning, and optimizing LLM outputs.',
    url: 'https://www.sololearn.com/',
    image: '/certificates/sololearn_prompt_engineering.png'
  },
  {
    id: 'course-sololearn-intro-java',
    title: 'Introduction to Java',
    issuer: 'Sololearn',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-16',
    credentialId: 'CC-TQHELZPF',
    skills: ['Java', 'Programming Basics', 'Variables', 'Loops', 'Conditionals'],
    description: 'Completed the Introduction to Java course on Sololearn, validating foundational knowledge of Java programming syntax, variables, basic operators, and control flow.',
    url: 'https://www.sololearn.com/',
    image: '/certificates/sololearn_intro_to_java.png'
  },
  {
    id: 'course-sololearn-java-intermediate',
    title: 'Java Intermediate',
    issuer: 'Sololearn',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-15',
    credentialId: 'CC-5SWOUK43',
    skills: ['Java', 'Object-Oriented Programming', 'Classes & Objects', 'Inheritance'],
    description: 'Completed the Java Intermediate course on Sololearn, verifying understanding of OOP concepts (classes, objects, inheritance, polymorphism), arrays, and reference types in Java.',
    url: 'https://www.sololearn.com/',
    image: '/certificates/sololearn_java_intermediate.png'
  },
  {
    id: 'course-sololearn-intro-python',
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-11-18',
    credentialId: 'CC-WOBG7EHK',
    skills: ['Python', 'Programming Basics', 'Variables', 'Loops', 'Functions'],
    description: 'Completed the Introduction to Python course on Sololearn, verifying a solid understanding of fundamental Python syntax, lists, functions, and control structures.',
    url: 'https://www.sololearn.com/',
    image: '/certificates/sololearn_intro_to_python.png'
  },
  {
    id: 'course-nptel-hci',
    title: 'Design & Implementation of Human-Computer Interfaces',
    issuer: 'IIT Guwahati (NPTEL)',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-10-24',
    skills: ['Human-Computer Interaction', 'User Interface Design', 'UX Design Principles', 'User Testing'],
    description: 'Successfully completed the 12-week NPTEL Online Certification course on Design & Implementation of Human-Computer Interfaces, funded by the MoE, Govt. of India, and coordinated by IIT Guwahati, with a consolidated score of 57%.',
    image: '/certificates/nptel_hci.png'
  },
  {
    id: 'course-geeksforgeeks-dsa',
    title: 'Data Structure & Algorithms Bootcamp',
    issuer: 'GeeksforGeeks',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-12-15',
    credentialId: '6aaeefc95aa3a6354890a0d88baabf04',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Java/C++'],
    description: 'Completed the Data Structure & Algorithms Bootcamp offered by GeeksforGeeks, covering arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithmic problem-solving techniques.',
    url: 'https://media.geeksforgeeks.org/courses/certificates/6aaeefc95aa3a6354890a0d88baabf04.pdf',
    image: '/certificates/geeksforgeeks_dsa_bootcamp.png'
  },
  {
    id: 'course-cisco-modern-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Easwari Engineering College & Cisco Networking Academy',
    category: 'Courses',
    subCategory: 'Online Courses',
    issueDate: '2025-12-18',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Modern AI Concepts'],
    description: 'Successfully completed the Introduction to Modern AI course offered by Easwari Engineering College in collaboration with the Cisco Networking Academy program.',
    image: '/certificates/cisco_intro_modern_ai.png'
  },
  // ─── WORKSHOPS ─────────────────────────────────────────────────────────────
  {
    id: 'workshop-aifortechies-python-ai',
    title: 'Python using AI Workshop',
    issuer: 'AI for Techies',
    category: 'Workshops',
    subCategory: 'Tech Workshops',
    issueDate: '2025-08-10',
    skills: ['Python', 'Generative AI', 'Interactive Visualizations', 'AI-assisted Development'],
    description: 'Participated in the Python using AI Workshop by AI for Techies, gaining hands-on knowledge on generating interactive visualizations, debugging python code using AI, and writing prompt-based scripts.',
    image: '/certificates/aifortechies_python_ai.png'
  },
  {
    id: 'workshop-novitech-github',
    title: 'Take your first step into Open Source with GitHub',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Skill Camps',
    issueDate: '2025-09-20',
    credentialId: 'NT_MFSDB549',
    skills: ['GitHub', 'Git', 'Open Source', 'Version Control'],
    description: 'Completed the 3-hour Skill camp in Take your first step into Open Source with GitHub, covering git commands, remote repositories, forks, pull requests, and open-source contribution practices.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_github_open_source.png'
  },
  {
    id: 'workshop-novitech-dev-deployment',
    title: 'Development to Deployment BootCamp',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Bootcamps',
    issueDate: '2025-09-21',
    credentialId: 'NT_BFSDB901',
    skills: ['Deployment', 'Software Development Lifecycle', 'Hosting', 'Cloud Deployment'],
    description: 'Completed the 2-hour BootCamp in Development to Deployment, exploring software packaging, build automation, environment configuration, and cloud-hosting deployments.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_dev_to_deployment.png'
  },
  {
    id: 'workshop-novitech-fullstack-ai',
    title: 'Leveraging Full Stack with AI BootCamp',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Bootcamps',
    issueDate: '2025-09-28',
    credentialId: 'NT_BFSDB0257',
    skills: ['Full Stack Development', 'Generative AI', 'AI Integration', 'Web Applications'],
    description: 'Completed the 2-hour BootCamp in Leveraging Full Stack with AI, learning to integrate AI APIs and prompts into full-stack web applications for smart user interfaces.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_fullstack_ai.png'
  },
  {
    id: 'workshop-freedom-with-ai',
    title: 'Freedom with AI Masterclass',
    issuer: 'Freedom with AI',
    category: 'Workshops',
    subCategory: 'AI Masterclasses',
    issueDate: '2025-10-11',
    skills: ['Generative AI', 'AI Tools', 'Automation', 'Productivity Optimization'],
    description: 'Completed the Freedom with AI Masterclass covering various generative AI systems, automation tools, and strategies for leveraging artificial intelligence for productivity.',
    image: '/certificates/freedom_with_ai_masterclass.png'
  },
  {
    id: 'workshop-novitech-uiux',
    title: '30 Days MasterClass in UI/UX Design',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Masterclasses',
    issueDate: '2025-10-25',
    credentialId: 'NT_B11UIUXT156',
    skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Figma'],
    description: 'Completed the 30 Days MasterClass in UI/UX Design from September 15th to October 25th, 2025 conducted by NoviTech R&D Private Limited.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_uiux_masterclass.png'
  },
  {
    id: 'workshop-novitech-data-analytics',
    title: '30 Days MasterClass in Data Analytics',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Masterclasses',
    issueDate: '2025-10-04',
    credentialId: 'NT_B29DAT291',
    skills: ['Data Analytics', 'SQL', 'Python for Data Science', 'Data Visualizations'],
    description: 'Completed the 30 Days MasterClass in Data Analytics from August 28th to October 4th, 2025 conducted by NoviTech R&D Private Limited.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_data_analytics_masterclass.png'
  },
  {
    id: 'workshop-novitech-fullstack',
    title: '30 Days MasterClass in Full Stack Development',
    issuer: 'NoviTech R&D Private Limited',
    category: 'Workshops',
    subCategory: 'Masterclasses',
    issueDate: '2025-11-27',
    credentialId: 'NT_B50FSDE244',
    skills: ['Full Stack Development', 'Frontend Development', 'Backend Development', 'Databases'],
    description: 'Completed the 30 Days MasterClass in Full Stack Development from October 23rd to November 27th, 2025 conducted by NoviTech R&D Private Limited.',
    url: 'https://www.novitechrd.com',
    image: '/certificates/novitech_fullstack_masterclass.png'
  },
  // ─── COMPETITIONS ──────────────────────────────────────────────────────────
  {
    id: 'competition-unstop-ieee-quiz',
    title: "What's The Gadget? - Tech Quiz Challenge (IEEE Day 2025)",
    issuer: 'Government Mahila Engineering College Ajmer',
    category: 'Competitions',
    subCategory: 'Tech Quizzes',
    issueDate: '2025-10-07',
    skills: ['Tech Trivia', 'Electronics & Gadgets', 'Problem Solving'],
    description: "Participated in What's The Gadget - MCQ Round 1 of What's The Gadget? - Tech Quiz Challenge (IEEE Day 2025) organized by Government Mahila Engineering College Ajmer on Unstop.",
    image: '/certificates/unstop_ieee_quiz.png',
    place: 'Participation'
  },
  {
    id: 'competition-unstop-weekly-case',
    title: 'Weekly Case Challenge - Challenge 36',
    issuer: 'Unstop',
    category: 'Competitions',
    subCategory: 'Case Challenges',
    issueDate: '2025-09-15',
    skills: ['Case Analysis', 'Analytical Thinking', 'Business Strategy'],
    description: 'Participated in Challenge 36 of Weekly Case Challenge organized by Unstop, testing business analysis, strategic problem solving, and logical presentation skills.',
    image: '/certificates/unstop_weekly_challenge.png',
    place: 'Participation'
  },
  {
    id: 'competition-unstop-weekly-case-35',
    title: 'Weekly Case Challenge - Challenge 35',
    issuer: 'Unstop',
    category: 'Competitions',
    subCategory: 'Case Challenges',
    issueDate: '2025-09-08',
    skills: ['Case Analysis', 'Analytical Thinking', 'Business Strategy'],
    description: 'Participated in Challenge 35 of Weekly Case Challenge organized by Unstop, validating problem-solving and structured analysis capabilities.',
    image: '/certificates/unstop_weekly_challenge_35.png',
    place: 'Participation'
  },
  {
    id: 'competition-unstop-elite-quiz',
    title: 'Elite Quiz 3.0 Assessment',
    issuer: 'Elite Coders',
    category: 'Competitions',
    subCategory: 'Tech Quizzes',
    issueDate: '2025-09-25',
    skills: ['Competitive Programming', 'Data Structures', 'Algorithms'],
    description: 'Participated in the Assessment of Elite Quiz 3.0 organized by Elite Coders on Unstop, testing core coding, logic, and debugging proficiency.',
    image: '/certificates/unstop_elite_quiz_3.png',
    place: 'Participation'
  },
  {
    id: 'competition-unstop-ignite-socio-sphere',
    title: 'Socio-Sphere - Ignite 180 5.0',
    issuer: 'Kirori Mal College (KMC), University of Delhi',
    category: 'Competitions',
    subCategory: 'Social Case Challenges',
    issueDate: '2025-11-05',
    skills: ['Social Innovation', 'Case Study Presentation', 'Problem Solving'],
    description: 'Participated in Socio-Sphere of Ignite 180 5.0 organized by Kirori Mal College, University of Delhi, on Unstop, analyzing social problems and pitching strategic solutions.',
    image: '/certificates/unstop_ignite_socio_sphere.png',
    place: 'Participation'
  }
];
