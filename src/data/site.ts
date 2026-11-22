// Everything you need to change lives in this file.
export const site = {
  name: 'Bryan Van Winnendael',
  role: 'software developer',
  location: 'Belgium',
  country: 'Belgium',
  company: {
    name: 'Ypto',
    url: 'https://www.ypto.be/en/',
  },
  tagline: 'software developer at',
  intro: 'Software developer based in Belgium. I build backend systems for',
  email: 'bryan@vanwinnendael.be',
  cv: '/cv.pdf',
  socials: {
    github: 'https://github.com/BryanVanWinnendael',
    linkedin: 'https://www.linkedin.com/in/bryanvanwinnendael',
  },
  skills: [
    { name: 'Java', icon: '/icons/skills/java.png' },
    { name: 'Spring Boot', icon: '/icons/skills/springboot.png' },
    { name: 'SQL', icon: '/icons/skills/sql.png' },
    { name: 'Python', icon: '/icons/skills/python.png' },
    { name: 'TypeScript', icon: '/icons/skills/typescript.png' },
    { name: 'Go', icon: '/icons/skills/go.png' },
    { name: 'Docker', icon: '/icons/skills/docker.png' },
    { name: 'Maven', icon: '/icons/skills/maven.png' },
    { name: 'Git', icon: '/icons/skills/git.png' },
    { name: 'JUnit', icon: '/icons/skills/junit.png' },
    { name: 'SonarQube', icon: '/icons/skills/sonarqube.png' },
    { name: 'Jenkins', icon: '/icons/skills/jenkins.png' },
    { name: 'FastAPI', icon: '/icons/skills/fastapi.png' },
    { name: 'Next.js', icon: '/icons/skills/nextjs.png' },
    { name: 'React', icon: '/icons/skills/react.png' },
    { name: 'Tailwind CSS', icon: '/icons/skills/tailwind.png' },
  ],
};

export const experience = [
  {
    period: 'June 2025 — Present',
    title: 'Java Developer',
    company: 'Ypto',
    logo: '/icons/ypto.png',
    url: 'https://www.ypto.be/en/',
    points: [
      'Java Developer for the Commercial Channels & Products team.',
      'Developing backend systems using Java, Spring Boot, SQL, Maven, Git, JUnit, SonarQube, and Jenkins.',
    ],
    stack: ['Java', 'Spring Boot', 'SQL', 'Maven', 'Git', 'JUnit', 'SonarQube', 'Jenkins'],
    current: true,
  },
  {
    period: 'March 2023 — June 2023',
    title: 'Intern Software Developer',
    company: 'IMEC',
    logo: '/icons/imec.png',
    url: 'https://www.imec-int.com/en',
    points: [
      'Built the backend infrastructure with FastAPI, Python and Docker.',
      'Optimised a critical function to run more than 100% faster.',
      'Architected and implemented the frontend with Next.js and TailwindCSS.',
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'Tailwind CSS', 'Docker'],
  },
];

export const projectGroups = [
  {
    label: 'Selected work',
    projects: [
      {
        name: 'Shopping List',
        icon: '/icons/shopping-list.png',
        note: 'Collaborative shopping list and recipe app with real-time sync, built with Expo, React Native and a Go microservice backend.',
        href: '/works/shopping-list',
      },
      {
        name: 'Noted',
        icon: '/icons/noted.png',
        note: 'A note taking app combining Notion and Obsidian, built with Electron, React and Editor.js.',
        href: '/works/noted',
      },
      {
        name: 'Harbor',
        icon: '/icons/harbor.png',
        note: 'A web app for managing Docker containers, images and databases on your server, built with Go and HTMX.',
        href: '/works/harbor',
      },
      {
        name: 'Netweb',
        icon: '/icons/netweb.png',
        note: 'A network management app for Imec: host lookups, port management and guest accounts.',
        href: '/works/netweb',
      },
      {
        name: 'Point Cloud Processor',
        icon: '/icons/point-cloud.png',
        note: 'Desktop app that detects planes in point clouds using RANSAC, built with Python and PyQt5.',
        href: '/works/point-cloud-processor',
      },
    ],
  },
];

export const education = [
  {
    title: 'Applied Computer Science (PBA)',
    company: 'UC Leuven-Limburg',
    logo: '/icons/ucll.png',
    url: 'https://www.ucll.be/en',
    story:
      'Specialisation in Software Development. Graduated cum laude.',
  },
];

