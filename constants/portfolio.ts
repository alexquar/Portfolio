import type { Metric, Experience, WebProject, MobileProject, OtherProject, SkillItem } from '../types/portfolio'
import communoLearn from '../assets/communoLearn.png'
import uwatchlist from '../assets/uwatchlist.png'
import geesespotter from '../assets/geesespotter.png'
import diary from '../assets/diary.png'
import ushop from '../assets/ushop.png'
import helpphoto from '../assets/U-help.png'

export const TOP_METRICS: Metric[] = [
  { value: '4x', label: 'Internships at Top Companies' },
  { value: '4x', label: 'Outstanding Co-op Ratings' },
  { value: '4x', label: "Dean\'s Honours List" },
  { value: '4.0', label: 'GPA' },
  { value: '10+', label: 'Years Writing Code' },
  { value: '50+', label: 'Respositories created while building and learning' },
  { value: '4', label: 'Core Focus Areas: Mobile, Full-Stack, Embedded, AI' },
  { value: '∞', label: 'Passion for Building and Learning' }
]

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Roo (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQEEqHtA8LjCAg/company-logo_100_100/company-logo_100_100/0/1664838001236/roovets_logo?e=1774483200&v=beta&t=mSR7oo_BSGNyxp0LnOWOmoYG0RyyqW5JrwE7COoJVNc",
  }, 
  {
    company: "Deloite (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_100_100/company-logo_100_100/0/1662120928214/deloitte_logo?e=1774483200&v=beta&t=cp9habE3mU3rFLnOuZdnEk1DMrvPfvXfptsB_ClqDcM",
  },
  {
    company: "OpenText (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGPd0lmMwrnuA/company-logo_100_100/company-logo_100_100/0/1720445944258/opentext_logo?e=1774483200&v=beta&t=nDJvDxSLzkNE57EaqtXToeN-nRQwNZJj11HYO_-yWv4",
  },
  {
    company: "WSIB (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQG5qgocXFUI4Q/company-logo_100_100/company-logo_100_100/0/1727696147867/wsib_logo?e=1774483200&v=beta&t=KVggDZ5je_acfEr4n_Z5PmlO5KBpy57POZxzoqE7uno",
  },
  {
    company: "Watelroo Rocketry (Design Team)",
    role: "Software Engineer",
    icon:"https://media.licdn.com/dms/image/v2/C4D0BAQFgOetarQGJ7Q/company-logo_100_100/company-logo_100_100/0/1631307813876?e=1774483200&v=beta&t=wGqTAN0mA-x0bLQ2PaMTAFY7G_4Ph6ip3_ZoN4d2KUk"
  }
]

export const WEB_PROJECTS: WebProject[] = [
  {
    name: 'CommunoLearn',
    website: 'https://communo-learn.vercel.app/',
    image: { src: communoLearn, alt: 'CommunoLearn screenshot' },
    tools: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    details:
      'Collaborative planning and study platform with scheduling, tasks, and shared workspaces. Full-stack architecture with modern TypeScript tooling.'
  },
  {
    name: 'Custom Go Webserver',
    website: 'https://github.com/alexquar/Go-Custom-Webserver',
    image: { src: uwatchlist, alt: 'Go watchlist screenshot' },
    tools: ['Go', 'HTMX', 'SQLite', 'Bootstrap'],
    details:
      'Custom Go webserver with CRUD workflows, cookie-based sessions, and server-rendered UI for a movie watchlist product.'
  },
  {
    name: 'Geese Spotter',
    website: 'https://geesespotter.co',
    image: { src: geesespotter, alt: 'Geese Spotter screenshot' },
    tools: ['React', 'Ruby on Rails', 'PostgreSQL', 'Google Maps API', 'Tailwind CSS'],
    details:
      'Hackathon product for discovering campus activities and social events in real time with map-based interaction.'
  },
  {
    name: 'Diary App',
    website: 'https://github.com/alexquar/Diary_App',
    image: { src: diary, alt: 'U Diary screenshot' },
    tools: ['C#', '.NET', 'SQL Server', 'Entity Framework', 'Razor Pages'],
    details:
      'Diary management application with complete CRUD functionality and a structured backend architecture.'
  },
  {
    name: 'Shopping App',
    website: 'https://github.com/alexquar/U-shop',
    image: { src: ushop, alt: 'U Shop screenshot' },
    tools: ['Nuxt', 'Tailwind CSS', 'Pinia', 'Stripe', 'Firebase'],
    details:
      'E-commerce app featuring authentication, cart state management, and Stripe checkout integration.'
  },
  {
    name: 'Ticketing Service',
    website: 'https://github.com/alexquar/U-help',
    image: { src: helpphoto, alt: 'U Help screenshot' },
    tools: ['Next.js', 'Supabase', 'Tailwind CSS'],
    details:
      'Ticketing system prototype supporting issue creation, prioritization, and owner-managed lifecycle actions.'
  }
]

export const MOBILE_PROJECTS: MobileProject[] = [
  {
    name: "What's That Dog",
    website: 'https://github.com/alexquar/WhatIsThatDog',
    image: [
      '/mobile/home.png',
      '/mobile/gryff.png',
      '/mobile/husky.png',
      '/mobile/huskypost.png',
      '/mobile/pug.png',
      '/mobile/socialtop.png',
      '/mobile/socialbottom.png',
      '/mobile/picture.png',
      '/mobile/gryffpresub.png',
      '/mobile/emptysubmit.png'
    ],
    details:
      'Dog breed classifier built with React Native. Users capture a dog image and the app sends it to a Flask API backed by a custom PyTorch model.',
    tools: ['React Native', 'Expo', 'Flask', 'PyTorch', 'Docker', 'AWS', 'TypeScript', 'Python']
  },
  {
    name: 'U Videos',
    website: 'https://github.com/alexquar/U-Videos',
    image: ['/mobile/home.jpg', '/mobile/login.jpg', '/mobile/posts.png', '/mobile/search.png', '/mobile/submit.png', '/mobile/upload.png'],
    details:
      'AI video sharing app built with React Native and Appwrite. Includes authentication, uploads, and feed/discovery views.',
    tools: ['React Native', 'Expo', 'Appwrite', 'NativeWind', 'TypeScript', 'JavaScript']
  },
  {
    name: 'The Local Weather Mobile',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/weatherApp',
    image: ['/mobile/weatherhome.png', '/mobile/weatherdark.png'],
    details:
      'Weather app built with SwiftUI featuring search, forecast views, and day/night mode.',
    tools: ['Swift', 'SwiftUI']
  },
  {
    name: 'Menu App',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/MenuApp',
    image: ['/mobile/foods.png', '/mobile/fooditem.png', '/mobile/food1.png', '/mobile/foodprofile.png'],
    details:
      'Food ordering app built with SwiftUI and async data fetching, including cart and profile flows.',
    tools: ['Swift', 'SwiftUI']
  }
]

export const OTHER_PROJECTS: OtherProject[] = [
  {
    name : "SpaSense",
    website: 'https://github.com/alexquar/SpaSense',
    category: 'Embedded / Hardware',
    tools: ['C++', 'ESP32', 'MQTT', 'Go', "SQLite"],
    details: ' IoT hot tub monitor using an ESP32 to collect temperature, pH, and environmental data, transmitting telemetry over Wi-Fi'
  },
  {
    name: 'FlappyBot',
    website: 'https://github.com/alexquar/FlappyBot',
    category: 'Reinforcement Learning',
    tools: ['Python', 'PyTorch', 'Gymnasium'],
    details: 'DQN-based reinforcement learning project with training, evaluation, and replay tooling.'
  },
  {
    name: 'Neural Networks',
    website: 'https://github.com/alexquar/Neural_Networks',
    category: 'Machine Learning',
    tools: ['Python', 'PyTorch', 'NumPy', 'Pandas'],
    details: 'Collection of applied neural network experiments across public datasets.'
  },
  {
    name: 'Emerald Compiler',
    website: 'https://github.com/alexquar/EmeraldCompiler',
    category: 'Systems',
    tools: ['C++'],
    details: 'Compiler implementation project for a custom programming language.'
  },
  {
    name: 'Rust Custom Webserver',
    website: 'https://github.com/alexquar/Rust-Custom-Webserver',
    category: 'Systems',
    tools: ['Rust', 'Concurrency'],
    details: 'Custom multi-threaded webserver built from scratch to understand low-level networking and thread pools.'
  },
  {
    name: 'Embedded Smart Backpack',
    website: 'https://github.com/alexquar/SmartBackpack',
    category: 'Embedded / Hardware',
    tools: ['C++', 'Embedded Systems', 'Hardware Prototyping'],
    details: 'Embedded software and hardware integration project for a smart backpack system.'
  },
]

export const LANGUAGES: SkillItem[] = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Go', icon: 'logos:go' },
  { name: 'Rust', icon: 'logos:rust' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'C++', icon: 'logos:c-plusplus' },
  { name: 'C#', icon: 'logos:c-sharp' },
  { name: 'Swift', icon: 'logos:swift' },
  { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
  { name: 'C', icon: 'logos:c' }, 
]

export const FRAMEWORKS: SkillItem[] = [
  { name: 'React', icon: 'logos:react' },
  { name: 'React Native', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'Flask', icon: 'simple-icons:flask' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Prisma', icon: 'logos:prisma' },
  { name: 'tRPC', icon: 'simple-icons:trpc' },
  { name: 'PyTorch', icon: 'logos:pytorch' }
]

export const DATABASES: SkillItem[] = [
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'SQLite', icon: 'logos:sqlite' },
  { name: 'Redis', icon: 'logos:redis' },
  { name: 'Supabase', icon: 'logos:supabase-icon' },
  { name: 'Firebase', icon: 'logos:firebase' }
]

export const TOOLS: SkillItem[] = [
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'GitHub Actions', icon: 'logos:github-actions' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Kubernetes', icon: 'logos:kubernetes' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Vercel', icon: 'logos:vercel-icon' },
  { name: 'Netlify', icon: 'logos:netlify' },
  { name: 'Postman', icon: 'logos:postman' },
  { name: 'GraphQL', icon: 'logos:graphql' }
]

export const SKILL_SECTIONS = [
  { title: 'Languages', items: LANGUAGES, color: 'bg-cyan-500' },
  { title: 'Frameworks', items: FRAMEWORKS, color: 'bg-blue-500' },
  { title: 'Databases', items: DATABASES, color: 'bg-purple-500' },
  { title: 'Tools', items: TOOLS, color: 'bg-sky-500' }
]

export const NAVIGATION: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/uses' },
  { name: 'Web Apps', href: '/webdev' },
  { name: 'Mobile Apps', href: '/mobile' },
  { name: 'Other Projects', href: '/other' },
  { name: 'Repositories', href: '/projects' },
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/alexquar",
    icon: "entypo-social:github-with-circle",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-quarrie-81ab3128b/",
    icon: "entypo-social:linkedin-with-circle",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_alexq_/",
    icon: "entypo-social:instagram",
  },
  {
    name: "Email",
    href: "mailto:alexquarrie@gmail.com",
    icon: "entypo:mail",
  },
  {
    name: "Letterboxd",
    href: "https://letterboxd.com/aquarrie/",
    icon: "simple-icons:letterboxd",
  }
]
