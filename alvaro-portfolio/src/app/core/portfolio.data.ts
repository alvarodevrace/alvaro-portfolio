export interface OwnerStat {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ExperienceEntry {
  company: string;
  slug: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
  logo?: string;
  clientLogo?: string;
  clientName?: string;
  /** Links a proyectos/productos reales que Álvaro construyó en esta empresa */
  projectLinks?: ProjectLink[];
}

export interface StackCategory {
  category: string;
  items: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  stack: string[];
  url: string;
  client?: string;
  logo?: string;
  highlight?: string;
}

export const OWNER = {
  name: 'Álvaro Carrera',
  title: 'Full Stack Engineer',
  location: 'Quito, Ecuador',
  email: 'alcarreram@hotmail.com',
  phone: '+593983936154',
  linkedin: 'https://www.linkedin.com/in/alcarreram/',
  github: 'https://github.com/alvarodevrace',
  avatar: 'https://avatars.githubusercontent.com/u/264550617?v=4',
  titles: ['Full Stack Engineer', 'AI-Augmented Developer', 'Systems Architect'],
  about: `Ingeniero en Sistemas con 7+ años construyendo aplicaciones web de producción.
Especializado en arquitecturas full-stack y desarrollo asistido por IA,
usando herramientas como Claude Code, Codex y Gemini CLI para entregar
sistemas complejos con mayor velocidad y calidad.
He trabajado para empresas en Ecuador, Estados Unidos y España,
desde startups digitales hasta corporaciones como IBM y NBCUniversal.`,
  stats: [
    { label: 'Años experiencia', value: '7+' },
    { label: 'Empresas', value: '4' },
    { label: 'País base', value: 'Ecuador' },
  ] satisfies OwnerStat[],
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'CENTRIC',
    slug: 'centric',
    role: 'Full Stack Developer',
    period: 'Jul 2025 - presente',
    location: 'Quito, Ecuador',
    summary: 'Migración S4S para Grupo Casabaca. AI-assisted development con reducción del 30% en tiempos de entrega.',
    details: [
      'Lidera migración integral al sistema S4S para Grupo Casabaca y filiales.',
      'Implementa flujos AI-Assisted Development con Windsurf, Claude Code, Codex y Gemini CLI.',
      'Desarrolla y optimiza servicios backend y frontend bajo arquitectura de microservicios.',
      'Integra IA generativa para automatizar pruebas unitarias y documentación técnica.',
    ],
    logo: 'assets/companies/centric.png',
    clientLogo: 'assets/companies/casabaca.svg',
    clientName: 'Grupo Casabaca',
  },
  {
    company: 'FROM DIGITAL',
    slug: 'from-digital',
    role: 'Full Stack Developer',
    period: 'Jun 2022 - Nov 2024',
    location: 'Estados Unidos (remoto)',
    summary: 'Apps para NBCUniversal y ARS. React, Node.js, GraphQL y Azure Functions.',
    details: [
      'Aplicaciones web para ARS con React y Node.js para interfaces responsivas.',
      'App para tabletas con React Native y Azure Functions para técnicos de campo.',
      'Arquitecturas serverless con Azure Functions para escalar con menor costo operativo.',
      'Sistema de gestión para NBCUniversal y sitio FROM con GraphQL.',
    ],
    logo: 'assets/companies/fromdigital.png',
    projectLinks: [
      { label: 'FROM DIGITAL', url: 'https://www.from.digital/' },
    ],
  },
  {
    company: 'ADECCO',
    slug: 'adecco-diners',
    role: 'Full Stack Developer',
    period: 'Nov 2021 - Jun 2022',
    location: 'Quito, Ecuador',
    summary: 'Proyecto Digital Card para Diners Club con Angular y SQL.',
    details: [
      'Desarrollo del proyecto Digital Card con Angular y SQL.',
      'Soporte técnico experto y resolución de problemas críticos de negocio.',
    ],
    logo: 'assets/companies/adecco.svg',
    clientLogo: 'assets/companies/dinersclub.svg',
    clientName: 'Diners Club',
    projectLinks: [
      { label: 'Días Diners', url: 'https://diasdiners.com.ec' },
    ],
  },
  {
    company: 'IBM Ecuador',
    slug: 'ibm',
    role: 'Full Stack Developer',
    period: 'Sep 2020 - Nov 2021',
    location: 'Quito, Ecuador',
    summary: 'Noches Diners, chatbots IBM Watson y CI/CD con Jenkins.',
    details: [
      'Desarrollador principal de Noches Diners con Angular y SQL Server.',
      'Chatbots con IBM Watson para automatizar la interacción con clientes.',
      'Pipelines CI/CD con GitHub, Kiuwan y Jenkins.',
    ],
    logo: 'assets/companies/ibm.svg',
    projectLinks: [
      { label: 'Noches Diners', url: 'https://nochesdiners.com.ec' },
    ],
  },
];

export const STACK: StackCategory[] = [
  { category: 'AI & Automatización', items: ['n8n', 'Claude Code', 'Codex', 'Windsurf', 'Gemini CLI', 'IBM Watson'] },
  { category: 'Frontend', items: ['Angular 18', 'React', 'React Native', 'TypeScript', 'SCSS'] },
  { category: 'Backend', items: ['NestJS', 'Node.js', 'ASP.NET', 'GraphQL'] },
  { category: 'Databases', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'MongoDB'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Coolify', 'GitHub Actions'] },
];

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Jauría CrossFit',
    description:
      'Sistema de gestión completo para un gym. Panel admin Angular 18, BFF NestJS, Supabase y workflows n8n para cobros, WhatsApp y Telegram.',
    stack: ['Angular', 'NestJS', 'Supabase', 'n8n', 'Docker'],
    url: 'https://jauriacrossfitness.com',
    client: 'Jauría CrossFit',
    logo: 'assets/jauria-logo.png',
    highlight: 'Automatizaciones con n8n para cobros, recordatorios, WhatsApp y Telegram',
  },
];

export const CLIENTS = [
  'NBCUniversal',
  'Grupo Casabaca',
  'Diners Club',
  'IBM',
  'ARS',
  'Jauría CrossFit',
];
