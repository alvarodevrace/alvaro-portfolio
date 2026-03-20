# AGENTS.md — Portfolio Personal · Álvaro Carrera

Espejo operativo de CLAUDE.md para CODI y otros agentes.
**Lee siempre CLAUDE.md completo antes de empezar — tiene el CV, diseño y especificaciones.**

---

## Inicio rápido

```bash
# Carpeta del proyecto
cd ~/Documents/Proyectos/Alvaro/Portfolio/

# Crear app Angular (solo POR-1 — primera vez)
ng new alvaro-portfolio --style=scss --routing=false --standalone
cd alvaro-portfolio
npm install gsap

# Configurar git (solo primera vez)
git init
git remote add origin git@github-alvarodevrace:alvarodevrace/alvaro-portfolio.git
git checkout -b develop
```

---

## Contexto esencial

| Campo | Valor |
|---|---|
| Proyecto | Portfolio personal Álvaro Carrera |
| URL objetivo | https://alvarodevrace.tech |
| GitHub | https://github.com/alvarodevrace/alvaro-portfolio |
| Linear proyecto | https://linear.app/alvarodevrace/project/alvaro-carrera-portfolio-personal-50021282667d |
| Linear equipo | PortafolioAlv0 — prefijo **POR-** |
| Carpeta local | `~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/` |

---

## Tickets activos para CODI

| Issue | Título | Prioridad | Dependencias |
|---|---|---|---|
| **POR-1** | Bootstrap: Angular 18 + estructura base + GSAP | 🔴 Urgent | Ninguna — empezar aquí |
| **POR-2** | Hero section: avatar + typewriter + animación entrada | 🔴 Urgent | POR-1 |
| **POR-3** | Stack + Experience + About + Contact sections | 🟠 High | POR-2 |
| **POR-4** | Proyectos + navbar + cursor personalizado | 🟠 High | POR-3 |

---

## Flujo Git (obligatorio)

```
rama feature (por-X-nombre) → push → CLAU merge a develop → CLAU PR → main → Álvaro aprueba
```

- Nunca commitear directo a `main`
- Nunca commitear directo a `develop`
- Siempre trabajar en rama feature nombrada igual que el issue: `por-1-bootstrap`, `por-2-hero`, etc.

---

## Estructura de carpetas (POR-1)

```
alvaro-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── stack/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   ├── cursor/
│   │   │   └── scroll-reveal/   ← directiva IntersectionObserver
│   │   └── app.component.ts     ← one-page, sin router
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _animations.scss
│   │   └── styles.scss
│   └── assets/
│       └── icons/               ← SVGs tecnologías
├── angular.json
└── package.json
```

---

## Referencia de diseño

**Página de inspiración:** https://tamalsen.dev/
Analizada por CLAU. El portfolio debe replicar este nivel de calidad visual.

### Lo que debes tomar de esa página

| Elemento | Cómo hacerlo |
|---|---|
| Navbar monospace | Roboto Mono, fixed, blur al scrollear |
| Cursor personalizado | 2 círculos GSAP, outer con lag |
| Subrayados animados | `::after` con gradiente, crece en hover |
| Scroll reveal | IntersectionObserver + transition cubic-bezier |
| Cards proyectos | border sutil, hover translateY(-6px) + glow |
| Hero mínimo | nombre grande, typewriter, 2 CTAs, mucho aire |
| Timeline experience | línea izquierda con gradiente + dots con glow |
| Secciones con aire | padding-top/bottom 120px mínimo |

---

## Variables de diseño

```scss
$bg:          #111111;
$bg-surface:  #1a1a1a;
$text:        rgba(255, 255, 255, 0.88);
$muted:       rgba(255, 255, 255, 0.45);
$accent:      #4F8EF7;
$accent-2:    #7C3AED;
$accent-3:    #06D6A0;
$border:      rgba(255, 255, 255, 0.08);

$font-nav:    'Roboto Mono', monospace;
$font-body:   'Inter', sans-serif;
$font-display:'Space Grotesk', sans-serif;
```

Google Fonts en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

---

## Datos del dueño (para usar en el código)

```typescript
export const OWNER = {
  name: 'Álvaro Carrera',
  title: 'Full Stack Engineer',
  location: 'Quito, Ecuador',
  email: 'alcarreram@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/alcarreram/',
  github: 'https://github.com/alvarodevrace',
  avatar: 'https://avatars.githubusercontent.com/u/264550617?v=4',
  titles: ['Full Stack Engineer', 'AI-Augmented Developer', 'Systems Architect'],
  about: `Ingeniero en Sistemas con 5+ años construyendo aplicaciones web de producción.
Especializado en arquitecturas full-stack y desarrollo asistido por IA —
usando herramientas como Claude Code, Codex y Gemini CLI para entregar
sistemas complejos con mayor velocidad y calidad.
He trabajado para empresas en Ecuador, Estados Unidos y España,
desde startups digitales hasta corporaciones como IBM y NBCUniversal.`,
  stats: [
    { label: 'Años experiencia', value: '5+' },
    { label: 'Empresas', value: '4' },
    { label: 'País', value: 'Ecuador' },
  ]
};

export const EXPERIENCE = [
  {
    company: 'CENTRIC',
    role: 'Full Stack Developer',
    period: 'Jul 2025 – presente',
    location: 'Quito, Ecuador',
    summary: 'Migración S4S para Grupo Casabaca. AI-assisted development con reducción del 30% en tiempos de entrega.',
    details: [
      'Lidera migración integral al sistema S4S para Grupo Casabaca y filiales',
      'Implementa flujos AI-Assisted Development con Windsurf, Claude Code, Codex y Gemini CLI',
      'Desarrolla y optimiza servicios Backend/Frontend bajo arquitectura de microservicios',
      'Integra IA Generativa para automatizar pruebas unitarias y documentación técnica',
    ],
  },
  {
    company: 'FROM DIGITAL',
    role: 'Full Stack Developer',
    period: 'Jun 2022 – Nov 2024',
    location: 'Estados Unidos (remoto)',
    summary: 'Apps para NBCUniversal y ARS. React, Node.js, GraphQL, Azure Functions.',
    details: [
      'Aplicaciones web para ARS con React y Node.js — interfaces responsivas',
      'App para tabletas con React Native + Azure Functions para técnicos de campo',
      'Arquitecturas serverless con Azure Functions',
      'Sistema de gestión para NBCUniversal y sitio FROM con GraphQL',
    ],
  },
  {
    company: 'ADECCO / Diners Club',
    role: 'Full Stack Developer',
    period: 'Nov 2021 – Jun 2022',
    location: 'Quito, Ecuador',
    summary: 'Proyecto "Digital Card" para Diners Club con Angular y SQL.',
    details: [
      'Desarrollo del proyecto "Digital Card" para Diners Club — Angular + SQL',
      'Soporte técnico experto, resolución de problemas críticos',
    ],
  },
  {
    company: 'IBM Ecuador',
    role: 'Full Stack Developer',
    period: 'Sep 2020 – Nov 2021',
    location: 'Quito, Ecuador',
    summary: '"Noches Diners" + chatbots IBM Watson + CI/CD con Jenkins.',
    details: [
      'Desarrollador Principal de "Noches Diners" con Angular y SQL Server',
      'Chatbots con IBM Watson para automatizar interacción con clientes',
      'CI/CD con GitHub, Kiuwan y Jenkins',
    ],
  },
];

export const STACK = [
  { category: 'AI & Automatización', items: ['Claude Code', 'Codex', 'Windsurf', 'Gemini CLI', 'IBM Watson'] },
  { category: 'Frontend', items: ['Angular 18', 'React', 'React Native', 'TypeScript', 'SCSS'] },
  { category: 'Backend', items: ['NestJS', 'Node.js', 'ASP.NET', 'GraphQL'] },
  { category: 'Databases', items: ['PostgreSQL', 'Supabase', 'SQL Server', 'MongoDB'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Coolify', 'GitHub Actions'] },
];

export const PROJECTS = [
  {
    name: 'Jauría CrossFit',
    description: 'Sistema de gestión completo para un gym. Panel admin Angular 18, BFF NestJS, Supabase y 9 workflows n8n para cobros, WhatsApp y Telegram.',
    stack: ['Angular', 'NestJS', 'Supabase', 'n8n', 'Docker'],
    url: 'https://jauriacrossfitness.com',
  },
];
```

---

## Build command

```bash
CI=1 ng build --configuration production --no-progress
```

---

## Lo que hace CLAU en este proyecto

- Merge ramas feature → develop
- Crear PRs develop → main
- Configurar Coolify deploy
- Configurar DNS `alvarodevrace.tech` en Cloudflare
- Conectar GlitchTip para monitoreo de errores
- Configurar Formspree para el formulario de contacto

## Lo que NO hace CLAU

- Escribir código Angular, SCSS, animaciones → CODI
- Crear componentes, directivas, servicios → CODI
