export const projects = [
  {
    title: "Media Management Platform",
    description: [
      "This project aimed to tackle the complexities of media planning across diverse channels, where challenges such as errors and compliance issues frequently arise. These hurdles often result in time-consuming tasks and potential regulatory risks, diverting attention away from strategic thinking and creative endeavours.",
      "Our objective was to streamline the media planning process, minimizing errors and ensuring compliance, allowing teams to focus on strategic decision-making and creativity.",
    ],
    techStack: [
      "Angular",
      ".NET Framework",
      "SQL Server",
      "Microsoft IIS",
      "Firebase",
      "CI/CD",
    ],
    image: "/assets/media-management-platform.webp",
  },
  {
    title: "Smile Analysis Web Application",
    description: [
      "Developed and deployed a smile detection application for elderly residents in Japanese old age homes using computer vision and machine learning algorithms.",
      "Designed and implemented a user-friendly interface using Angular with Flask backend to analyze smiles in real-time.",
    ],
    techStack: ["Angular", "Python", "SQL Server", "AWS"],
    image: "/assets/smile-project.webp",
  },
  {
    title: "AI Receptionist",
    description: [
      "The project involves the implementation of a receptionist system for tourists and hotel guests, utilizing a multilingual AI avatar.",
      "The system provides assistance and information to guests in multiple languages, enhancing their overall experience while streamlining hotel operations.",
    ],
    techStack: ["Node.js", "Python", "OpenAI API", "Nginx"],
    image: "/assets/ai-receptionist.webp",
  },
  {
    title: "DocuQuery AI",
    description: [
      "Developed an AI-powered document query system allowing users to upload PDFs and ask questions based on the document content.",
      "Designed and integrated an Angular-based frontend with a Flask backend for seamless document processing.",
      "Implemented role-based access control, ensuring only authorized users can manage documents.",
    ],
    techStack: ["Angular", "Tailwind CSS", "Flask (Python)", "MongoDB", "AWS"],
    image: "/assets/docu-query-ai.webp",
  },
];

const icon = (name) =>
  `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${name}.svg`;

export const skillGroups = [
  {
    title: "Front-end",
    skills: [
      { name: "Angular", logo: icon("angular/angular-original") },
      { name: "HTML", logo: icon("html5/html5-original") },
      { name: "CSS", logo: icon("css3/css3-original") },
      { name: "Angular Material", logo: icon("angularmaterial/angularmaterial-original") },
      { name: "Bootstrap", logo: icon("bootstrap/bootstrap-original") },
      { name: "JavaScript", logo: icon("javascript/javascript-original") },
      { name: "TypeScript", logo: icon("typescript/typescript-original") },
      { name: "Tailwind", logo: icon("tailwindcss/tailwindcss-original") },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "C#", logo: icon("csharp/csharp-original") },
      { name: ".Net", logo: icon("dotnetcore/dotnetcore-original") },
      { name: "Python", logo: icon("python/python-original") },
      { name: "Entity Framework", logo: icon("microsoftsqlserver/microsoftsqlserver-plain") },
      { name: "Node.js", logo: icon("nodejs/nodejs-original") },
      { name: "Express.js", logo: icon("express/express-original"), invert: true },
      { name: "Flask", logo: icon("flask/flask-original"), invert: true },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MS SQL", logo: icon("microsoftsqlserver/microsoftsqlserver-plain") },
      { name: "MongoDB", logo: icon("mongodb/mongodb-original") },
      { name: "PostgreSQL", logo: icon("postgresql/postgresql-original") },
      { name: "MySQL", logo: icon("mysql/mysql-original") },
    ],
  },
  {
    title: "Ops",
    skills: [
      { name: "Git", logo: icon("git/git-original") },
      { name: "Docker", logo: icon("docker/docker-original") },
      { name: "AWS", logo: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "Vercel", logo: icon("vercel/vercel-original"), invert: true },
      { name: "Netlify", logo: icon("netlify/netlify-original") },
      { name: "Railway", logo: icon("railway/railway-original") },
      { name: "CI/CD", logo: icon("githubactions/githubactions-original") },
      { name: "Nginx", logo: icon("nginx/nginx-original") },
    ],
  },
];
