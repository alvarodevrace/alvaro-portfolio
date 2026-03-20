# CLAUDE.md — Portfolio Personal · Álvaro Carrera

Fuente de verdad absoluta para todos los agentes que trabajen en este proyecto.
Leer completo antes de ejecutar cualquier tarea.

---

## 1. Contexto del Proyecto

**Qué es:** Sitio web personal y portafolio profesional de Álvaro Carrera Montalvo.
**URL objetivo:** `https://alvarodevrace.tech`
**GitHub repo:** `https://github.com/alvarodevrace/alvaro-portfolio`
**SSH remote:** `git@github-alvarodevrace:alvarodevrace/alvaro-portfolio.git`
**Carpeta local:** `~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/`
**Linear proyecto:** https://linear.app/alvarodevrace/project/alvaro-carrera-portfolio-personal-50021282667d
**Linear equipo:** `PortafolioAlv0` — prefijo de issues: **`POR-`**

---

## 2. Agentes y Roles

| Agente | Tool | Responsabilidad |
|---|---|---|
| **CLAU** | Claude Code | Arquitectura, deploy, Coolify, DNS, dominio, GitHub repos, Linear, infra |
| **CODI** | OpenAI Codex CLI | Todo el código: Angular, SCSS, animaciones, componentes, build |

**Regla de oro:**
- CODI escribe código → CLAU despliega y supervisa arquitectura
- CODI nunca toca Coolify, DNS ni configuración de infraestructura
- CLAU nunca escribe código Angular/SCSS

---

## 3. Linear — Reglas de Trabajo

### Separación de proyectos (CRÍTICO)

| Equipo | Prefijo | Proyecto |
|---|---|---|
| `JauriaCrossfit` | `JAU-` | Jauría CrossFit — cliente gym |
| `PortafolioAlv0` | `POR-` | Portfolio personal de Álvaro |

**Nunca crear issues de este proyecto en el equipo JauriaCrossfit.**

### Tickets actuales

| Issue | Título | Owner | Estado |
|---|---|---|---|
| POR-1 | Bootstrap: Angular 18 + estructura base + GSAP | CODI | Backlog |
| POR-2 | Hero section: avatar + typewriter + animación | CODI | Backlog |
| POR-3 | Stack + Experience + About + Contact sections | CODI | Backlog |
| POR-4 | Proyectos destacados + navbar + cursor personalizado | CODI | Backlog |

### Flujo de trabajo

```
1. CODI trabaja en rama feature (ej: por-1-bootstrap)
2. CODI hace commit + push a su rama
3. CLAU hace merge a develop
4. CLAU crea PR develop → main
5. Álvaro aprueba el PR
6. Rama feature se elimina automáticamente (delete_branch_on_merge=true)
```

---

## 4. GitHub

**Username:** `alvarodevrace`
**SSH config alias:** `github-alvarodevrace`
**Repo portfolio:** `https://github.com/alvarodevrace/alvaro-portfolio`
**Rama principal:** `main`
**Rama desarrollo:** `develop`
**Auto-delete ramas:** activado

---

## 5. Datos del Dueño — Álvaro Carrera

### Identidad profesional

**Nombre completo:** Álvaro Mauricio Carrera Montalvo
**Título:** Ingeniero en Sistemas y Desarrollador de Software Full Stack
**Ubicación:** Quito, Ecuador
**Email:** alcarreram@hotmail.com
**Teléfono:** (+593) 98-393-6154
**LinkedIn:** https://www.linkedin.com/in/alcarreram/
**GitHub:** https://github.com/alvarodevrace
**Avatar GitHub:** `https://avatars.githubusercontent.com/u/264550617?v=4`

### Resumen profesional

Ingeniero en Sistemas e Informática con más de 5 años de experiencia técnica en desarrollo Full Stack, gestión de bases de datos y ciberseguridad. Especialista en **Desarrollo Asistido por IA (AI-Augmented Development)**, con éxito comprobado en migraciones de sistemas críticos y arquitecturas en la nube. Experto en optimizar ciclos de vida de software mediante herramientas de IA generativa y metodologías ágiles.

### Experiencia laboral

**CENTRIC — Full Stack Developer**
Jul 2025 – presente · Quito, Ecuador
- Lidera migración integral al sistema S4S para Grupo Casabaca y filiales
- Implementa flujos de AI-Assisted Development con Windsurf, Claude Code, Codex y Gemini CLI → reducción del 30% en tiempos de entrega
- Desarrolla y optimiza servicios Backend y Frontend bajo arquitectura de microservicios
- Integra IA Generativa para automatizar pruebas unitarias y documentación técnica

**FROM DIGITAL — Full Stack Developer**
Jun 2022 – Nov 2024 · Estados Unidos (remoto)
- Desarrolló aplicaciones web para ARS con React y Node.js
- Construyó app para tabletas con React Native + Azure Functions para técnicos de campo
- Diseñó arquitecturas serverless con Azure Functions
- Lideró sistema de gestión de clientes para NBCUniversal y sitio web de FROM usando GraphQL

**ADECCO (cliente: Diners Club) — Full Stack Developer**
Nov 2021 – Jun 2022 · Quito, Ecuador
- Encabezó desarrollo del proyecto "Digital Card" para Diners Club con Angular y SQL
- Soporte técnico experto resolviendo problemas críticos

**IBM del Ecuador — Full Stack Developer**
Sep 2020 – Nov 2021 · Quito, Ecuador
- Desarrollador Principal de "Noches Diners" con Angular y SQL Server
- Implementó chatbots con IBM Watson para automatizar interacción con clientes
- Estableció flujos CI/CD con GitHub, Kiuwan y Jenkins

### Educación

- **Maestría en Ciberseguridad** — Universidad Internacional de Valencia, España *(en curso)*
- **Ingeniería en Sistemas e Informática** — Universidad de las Américas, Ecuador
- **Diploma en Ciberseguridad** — Universidad de las Américas, Ecuador

### Stack técnico completo

| Categoría | Tecnologías |
|---|---|
| **AI & Automatización** | Windsurf · Claude Code · Gemini CLI · Codex · IBM Watson · Prompt Engineering |
| **Frontend** | Angular 18 · React · React Native · TypeScript · HTML/CSS · SCSS |
| **Backend** | NestJS · Node.js · ASP.NET · GraphQL |
| **Bases de datos** | PostgreSQL · Supabase · SQL Server · MySQL · MongoDB |
| **Cloud & DevOps** | Azure Functions · AWS · Docker · Coolify · GitHub Actions · Jenkins |
| **Idiomas** | Español (nativo) · Inglés (intermedio) |

---

## 6. Diseño del Portfolio

### Estética
- **Tema:** Dark mode — fondo `#0a0a0a`, texto `#f5f5f5`, muted `#888`
- **Acento:** Azul eléctrico `#4F8EF7`
- **Tipografía:** Inter + Space Grotesk (Google Fonts)
- **Estilo:** Minimalista, impactante, mucho espacio en blanco, jerarquía clara
- **Sin stock photos** — solo código, formas geométricas y el avatar

### Variables SCSS base
```scss
$bg: #0a0a0a;
$text: #f5f5f5;
$muted: #888888;
$accent: #4F8EF7;
$font-primary: 'Inter', sans-serif;
$font-display: 'Space Grotesk', sans-serif;
```

### Animaciones obligatorias
- **Hero:** texto letra por letra o palabra por palabra al cargar (GSAP)
- **Scroll reveal:** fade + slide al entrar en viewport (IntersectionObserver)
- **Cursor personalizado:** círculo con lag (GSAP, solo desktop)
- **Navbar:** backdrop-filter blur al scrollear
- **Cards proyectos:** hover 3D tilt (GSAP)
- **Typewriter:** cicla entre títulos profesionales

---

## 7. Secciones del Sitio

### Hero (`#hero`)
- Avatar circular 140px con glow de acento
- Nombre grande: `Álvaro Carrera`
- Typewriter: `Full Stack Engineer` → `AI-Augmented Developer` → `Systems Architect`
- Subtítulo: `Quito, Ecuador 🇪🇨`
- CTAs: "Ver proyectos" (scroll) + íconos GitHub + LinkedIn
- Fondo: gradiente radial animado sutil o partículas CSS

### Sobre mí (`#about`)
Texto:
> Ingeniero en Sistemas con 5+ años construyendo aplicaciones web de producción.
> Especializado en arquitecturas full-stack y desarrollo asistido por IA —
> usando herramientas como Claude Code, Codex y Gemini CLI para entregar
> sistemas complejos con mayor velocidad y calidad.
> He trabajado para empresas en Ecuador, Estados Unidos y España,
> desde startups digitales hasta corporaciones como IBM y NBCUniversal.

Stats: `5+ años` · `4 empresas` · `Ecuador`

### Stack técnico (`#stack`)
Grid de chips agrupados por categoría con hover glow + tooltip.

### Experiencia (`#experience`)
Timeline vertical expandible — 4 entradas (ver sección 5).

### Proyectos (`#projects`)
Cards con 3D tilt hover:
- **Jauría CrossFit** — `https://jauriacrossfitness.com`
  Sistema de gestión para gym: Angular 18 · NestJS · Supabase · n8n · Docker
- Espacio para proyectos futuros

### Contacto (`#contact`)
- Email, LinkedIn, GitHub
- Formulario → Formspree (endpoint lo configura CLAU)

---

## 8. Stack Técnico del Proyecto

| Capa | Tecnología |
|---|---|
| Framework | Angular 18 (standalone components, signals) |
| Animaciones | Angular Animations + GSAP |
| Estilos | SCSS puro — sin frameworks CSS externos |
| Fonts | Inter + Space Grotesk (Google Fonts) |
| Build | `CI=1 ng build --configuration production --no-progress` |
| Deploy | Coolify (TBD) o GitHub Pages |
| CI/CD | GitHub Actions (TBD) |

---

## 9. Infraestructura (CLAU)

### Dominio
- **URL objetivo:** `alvarodevrace.tech`
- **DNS:** Cloudflare (misma cuenta que Jauría)
- **Cloudflare Zone ID Jauría:** `506b6df385af7946a11610f551acd53a` ← verificar si hay zona separada para `alvarodevrace.tech`

### Deploy
- **Coolify:** `https://coolify.alvarodevrace.tech`
- Deploy: nueva app en Coolify apuntando al repo `alvaro-portfolio`, rama `main`
- Dockerfile: nginx:alpine (igual que Jauría landing)

### Formspree (contacto)
CLAU crea cuenta en formspree.io y configura el endpoint del formulario de contacto.

---

## 10. Reglas para CODI

1. Crear proyecto: `ng new alvaro-portfolio --style=scss --routing=false --standalone`
2. Instalar: `npm install gsap`
3. One-page sin router — scroll suave entre secciones con `scrollIntoView`
4. Mobile-first desde 320px
5. Respetar `prefers-reduced-motion`
6. Build command: `CI=1 ng build --configuration production --no-progress`
7. No tocar Coolify, DNS, dominio ni GitHub settings — eso es CLAU
8. Commit en rama feature → CLAU hace el merge y PR

## 11. Reglas para CLAU

1. Cuando CODI termine un ticket → merge a develop → PR develop→main
2. Cuando PR mergeado → trigger deploy en Coolify
3. Configurar Formspree endpoint y pasárselo a CODI
4. Configurar DNS `alvarodevrace.tech` → IP de Coolify cuando llegue el momento
5. Monitoreo de errores: conectar GlitchTip cuando esté en producción
