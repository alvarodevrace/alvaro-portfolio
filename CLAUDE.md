# CLAUDE.md — Portfolio Personal · Álvaro Carrera
## Fuente de verdad absoluta. Leer completo antes de ejecutar cualquier tarea.

---

## 1. CONTEXTO DEL PROYECTO

**Qué es:** Sitio web personal y portafolio profesional de Álvaro Carrera Montalvo.
**URL objetivo:** `https://alvarodevrace.tech`
**GitHub repo:** `https://github.com/alvarodevrace/alvaro-portfolio`
**SSH remote:** `git@github-alvarodevrace:alvarodevrace/alvaro-portfolio.git`
**Carpeta local:** `~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/`
**Linear proyecto:** https://linear.app/alvarodevrace/project/alvaro-carrera-portfolio-personal-50021282667d
**Linear equipo:** `PortafolioAlv0` — prefijo de issues: **`POR-`**

---

## 2. AGENTES Y ROLES

| Agente | Tool | Responsabilidad |
|---|---|---|
| **CLAU** | Claude Code | Arquitectura, deploy, Coolify, DNS Cloudflare, dominio, GitHub repos, Linear, infra, merge/PRs |
| **CODI** | OpenAI Codex CLI | Todo el código: Angular 18, SCSS, animaciones GSAP, componentes, directivas, build |

**Regla absoluta:**
- CODI escribe código → CLAU despliega y supervisa
- CODI nunca toca Coolify, DNS, dominios ni GitHub settings
- CLAU nunca escribe código Angular/SCSS/TypeScript de la app

---

## 3. LINEAR — REGLAS DE TRABAJO

### Separación de proyectos (CRÍTICO)
| Equipo Linear | Prefijo | Proyecto |
|---|---|---|
| `JauriaCrossfit` | `JAU-` | Jauría CrossFit — cliente gym (proyecto separado) |
| `PortafolioAlv0` | `POR-` | Portfolio personal de Álvaro ← este proyecto |

**Nunca crear issues de este proyecto en JauriaCrossfit.**

### Tickets activos
| Issue | Título | Owner | Prioridad |
|---|---|---|---|
| POR-1 | Bootstrap: Angular 18 + estructura base + GSAP | CODI | 🔴 Urgent |
| POR-2 | Hero section: avatar + typewriter + animación entrada | CODI | 🔴 Urgent |
| POR-3 | Stack + Experience + About + Contact sections | CODI | 🟠 High |
| POR-4 | Proyectos + navbar + cursor personalizado | CODI | 🟠 High |

### Flujo Git obligatorio
```
1. CODI trabaja en rama: por-X-nombre-ticket
2. CODI commit + push a su rama
3. CLAU merge a develop
4. CLAU crea PR develop → main
5. Álvaro aprueba el PR
6. Rama feature se elimina automáticamente (delete_branch_on_merge=true activo)
```

---

## 4. INFRAESTRUCTURA (responsabilidad de CLAU)

### Stack de infraestructura de Álvaro
| Herramienta | Uso | URL |
|---|---|---|
| **Coolify** | PaaS self-hosted para deploys | https://coolify.alvarodevrace.tech |
| **Hostinger VPS** | Servidor físico donde corre Coolify | VPS en Hostinger |
| **Cloudflare** | DNS, proxy, SSL para todos los dominios | Zone `alvarodevrace.tech` |
| **n8n** | Automatización de workflows | https://n8n.alvarodevrace.tech |
| **Evolution API** | WhatsApp Business API | https://evolution.alvarodevrace.tech |
| **Supabase** | Base de datos PostgreSQL + Auth | proyecto `bxatcmcommoqnxnyqchu` |
| **GlitchTip** | Monitoreo de errores (Sentry OSS) | https://glitchtip.alvarodevrace.tech |
| **GitHub** | Repositorios de código | github.com/alvarodevrace |

### Coolify — UUIDs del proyecto Portfolio
| Recurso | UUID |
|---|---|
| Proyecto Coolify | `owcq0qi5guhwpxnxuyafzpov` |
| Environment "production" | `ggeh0egbiwteab1ub92jj2t6` |

### Coolify — proyectos (estructura organizada)
| Proyecto Coolify | Contenido |
|---|---|
| **Infra Global** (`dk8kc4ggo8s08koo8s4ggwcg`) | n8n, Evolution API, GlitchTip |
| **Jauria CrossFit** (`w0gsw0c8goo4kwswo8ss0o8g`) | admin, api, landing — jauriacrossfitness.com |
| **Portfolio Alvaro** (`owcq0qi5guhwpxnxuyafzpov`) | alvaro-portfolio — alvarodevrace.tech |

### Deploy del portfolio
- Nueva app en Coolify en proyecto `Portfolio Alvaro` → environment `production`
- Apuntar a repo `alvaro-portfolio`, rama `main`
- Dockerfile: `nginx:alpine` (igual que otros frontends de Álvaro)
- DNS: registro A `alvarodevrace.tech` → IP del VPS Hostinger (Cloudflare zone `alvarodevrace.tech`)
- SSL: Let's Encrypt vía Traefik (automático en Coolify)
- Formspree: CLAU crea cuenta y configura endpoint para formulario de contacto
- GlitchTip: conectar cuando esté en producción

### GitHub del proyecto
- Username: `alvarodevrace`
- SSH alias: `github-alvarodevrace`
- Auto-delete de ramas: activado (`delete_branch_on_merge=true`)

---

## 5. DATOS DEL DUEÑO — CV COMPLETO

### Identidad
| Campo | Valor |
|---|---|
| **Nombre** | Álvaro Mauricio Carrera Montalvo |
| **Título profesional** | Senior Full Stack Engineer · AI-Augmented Systems Architect |
| **Ubicación** | Quito, Ecuador |
| **Email** | alcarreram@hotmail.com |
| **Teléfono** | +593 98-393-6154 |
| **LinkedIn** | https://www.linkedin.com/in/alcarreram/ |
| **GitHub** | https://github.com/alvarodevrace |
| **Avatar** | https://avatars.githubusercontent.com/u/264550617?v=4 |

### Resumen profesional (versión corta para el portfolio)
> Senior Full Stack Engineer con 5+ años de experiencia diseñando y entregando sistemas escalables de alto rendimiento. Especializado en AI-Augmented Development — usando Claude Code, Codex, Gemini CLI y OpenRouter para acelerar workflows de ingeniería, reducir tiempos de entrega y mejorar la calidad del código.

### Resumen profesional (versión larga para sección About)
> Senior Full Stack Engineer con 5+ años de experiencia entregando sistemas escalables y de producción en arquitecturas web, cloud e IA. Especializado en AI-Augmented Development usando Codex, Claude Code, Gemini CLI y OpenRouter para acelerar entregas, mejorar calidad de código y automatizar workflows de ingeniería. Track record probado liderando migraciones de sistemas, diseñando arquitecturas de microservicios e implementando sistemas backend de alto rendimiento. Fuerte expertise en desarrollo cloud-native, DevOps y automatización con n8n, Coolify y entornos VPS (Hostinger). Enfocado en construir software robusto, mantenible y escalable alineado con objetivos de negocio.

### Experiencia profesional

**Senior Full Stack Engineer — CENTRIC** · 2025 – presente · Quito, Ecuador
- Lidera migración integral a plataforma S4S para Grupo Casabaca, asegurando integridad de datos y alto rendimiento transaccional en sistemas empresariales críticos
- Diseña e implementa arquitectura basada en microservicios mejorando escalabilidad y mantenibilidad
- Integra workflows de AI-assisted development (Codex, Claude Code, Gemini CLI), reduciendo tiempo de desarrollo ~30% y mejorando calidad de código
- Construye y optimiza APIs backend (Node.js) y aplicaciones frontend (Angular/React) para entornos de alto tráfico
- Automatiza testing, documentación y pipelines de refactoring usando herramientas AI

**Full Stack Engineer — FROM DIGITAL** · 2022 – 2024 · USA (remoto)
- Desarrolló aplicaciones web enterprise usando React, Node.js y GraphQL para clientes internacionales
- Construyó arquitecturas serverless con Azure Functions, reduciendo costos de infraestructura y aumentando escalabilidad
- Desarrolló soluciones móviles con React Native para técnicos de campo, mejorando workflows operativos
- Entregó soluciones de alto impacto para clientes incluyendo NBCUniversal, asegurando confiabilidad y escalabilidad

**Full Stack Engineer — ADECCO (cliente: Diners Club)** · 2021 – 2022 · Quito, Ecuador
- Lideró desarrollo de la plataforma "Digital Card" para Diners Club usando Angular y SQL Server
- Optimizó rendimiento backend y queries de base de datos, reduciendo tiempos de respuesta significativamente
- Soporte crítico de producción y estabilización de sistemas

**Full Stack Engineer — IBM Ecuador** · 2020 – 2021 · Quito, Ecuador
- Lead developer de plataforma "Noches Diners" usando Angular y SQL Server
- Implementó chatbots con IA usando IBM Watson
- Construyó pipelines CI/CD con GitHub y Jenkins asegurando deployments de alta calidad

### Educación
- **Maestría en Ciberseguridad** *(en curso)* — Universidad Internacional de Valencia, España
- **Ingeniería en Sistemas e Informática** — Universidad de las Américas, Ecuador

### Stack técnico completo (para sección Skills del portfolio)

| Categoría | Tecnologías |
|---|---|
| **AI & Automatización** | Claude Code · Codex · Gemini CLI · OpenRouter · IBM Watson · Prompt Engineering |
| **Frontend** | Angular 18 · React · React Native · TypeScript · JavaScript ES6+ · HTML/CSS · SCSS |
| **Backend** | Node.js · NestJS · ASP.NET · REST APIs · GraphQL |
| **Bases de datos** | PostgreSQL · Supabase · SQL Server · MySQL · MongoDB |
| **Cloud & DevOps** | AWS · Azure · Docker · CI/CD · Jenkins · GitHub Actions |
| **Infraestructura** | n8n · Coolify · Hostinger VPS · Supabase · Evolution API · Cloudflare |
| **Arquitectura** | Microservicios · Serverless · Event-Driven Systems |
| **Lenguajes** | Python · JavaScript · TypeScript · SQL · C# |
| **Idiomas** | Español (nativo) · Inglés (profesional) |

### Proyectos reales para mostrar en el portfolio
| Proyecto | Descripción | Stack | URL |
|---|---|---|---|
| **Jauría CrossFit** | Sistema de gestión completo para gym: panel admin, cobros automáticos, WhatsApp, Telegram | Angular 18 · NestJS · Supabase · n8n · Docker · Coolify | https://jauriacrossfitness.com |

---

## 6. DISEÑO DEL PORTFOLIO

### Referencia de inspiración
**URL:** https://tamalsen.dev/ — analizada en detalle por CLAU.
El portfolio de Álvaro debe tener el mismo nivel de calidad visual, minimalismo dark y microinteracciones. No copiar — adaptar el estilo.

### Paleta de colores
```scss
$bg:          #111111;                    // fondo principal
$bg-surface:  #1a1a1a;                    // cards, navbar sticky
$text:        rgba(255, 255, 255, 0.88);  // texto principal
$muted:       rgba(255, 255, 255, 0.45);  // texto secundario
$accent:      #4F8EF7;                    // azul eléctrico — color de marca
$accent-2:    #7C3AED;                    // violeta — acento secundario
$accent-3:    #06D6A0;                    // verde/teal — tercer acento
$border:      rgba(255, 255, 255, 0.08);  // bordes sutiles
```

### Tipografía (igual que tamalsen.dev — monospace en nav = sensación técnica)
```scss
$font-nav:     'Roboto Mono', monospace;    // navbar, labels, chips de stack
$font-body:    'Inter', sans-serif;          // cuerpo de texto
$font-display: 'Space Grotesk', sans-serif; // títulos grandes
```

Google Fonts en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

### Navbar — tomado de tamalsen.dev
```scss
nav {
  position: fixed;
  top: 0; width: 100%;
  height: 72px;
  font-family: $font-nav;
  font-size: 0.95rem;
  transition: height 0.3s ease, background 0.3s ease;

  &.scrolled {
    height: 56px;
    background: rgba(17, 17, 17, 0.85);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid $border;
  }
}
```

### Cursor personalizado — igual que tamalsen.dev
Dos círculos concéntricos con GSAP:
```scss
.cursor-outer {
  width: 36px; height: 36px;
  border: 1.5px solid rgba(#4F8EF7, 0.6);
  border-radius: 50%;
  position: fixed; pointer-events: none;
  z-index: 9999;
}
.cursor-inner {
  width: 8px; height: 8px;
  background: #4F8EF7;
  border-radius: 50%;
  position: fixed; pointer-events: none;
  z-index: 9999;
}
// hover sobre links: outer crece a 56px, cambia color
```
GSAP ticker con lerp 0.12 para el outer (lag suave).

### Efecto "chonky underline" — firma visual de tamalsen.dev
```scss
.underline-accent {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 100%;
    height: 0.25em;
    background: linear-gradient(65deg, #4F8EF7 0%, #7C3AED 100%);
    border-radius: 2px;
    transition: height 0.25s ease;
  }
  &:hover::after { height: 0.75em; }
}
```

### Scroll reveal — animación de entrada
```scss
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(.215,.61,.355,1),
              transform 0.65s cubic-bezier(.215,.61,.355,1);
  &.visible { opacity: 1; transform: translateY(0); }
}
[data-reveal="delay-1"] { transition-delay: 0.1s; }
[data-reveal="delay-2"] { transition-delay: 0.2s; }
[data-reveal="delay-3"] { transition-delay: 0.3s; }
[data-reveal="delay-4"] { transition-delay: 0.4s; }
```

### Cards de proyectos
```scss
.project-card {
  background: $bg-surface;
  border: 1px solid $border;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(#4F8EF7, 0.4);
    box-shadow: 0 20px 60px rgba(#4F8EF7, 0.08);
  }
}
```

### Timeline de experiencia
```scss
.timeline-line {
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #4F8EF7, #7C3AED);
}
.timeline-dot {
  width: 12px; height: 12px;
  background: #4F8EF7; border-radius: 50%;
  box-shadow: 0 0 12px rgba(#4F8EF7, 0.6);
}
```

---

## 7. SECCIONES DEL SITIO (en orden)

### `#hero`
- Texto muted pequeño: `"Hola, soy"`
- Nombre: **Álvaro Carrera** — Space Grotesk, grande (clamp 56px–96px), bold
- Typewriter que cicla: `Senior Full Stack Engineer` → `AI-Augmented Developer` → `Systems Architect`
- Descripción: una línea muted
- CTAs: `[Ver proyectos]` (scroll) · `[LinkedIn ↗]` (link externo)
- Fondo: gradiente radial sutil desde `$accent` con muy baja opacidad
- Scroll indicator: flecha animada apuntando hacia abajo
- Avatar: circular, 130px, glow de acento — posición desktop a la derecha

### `#about`
Texto completo del resumen largo (ver sección 5).
Stats: `5+ años` · `4 empresas` · `Ecuador 🇪🇨`

### `#stack`
Grid de chips agrupados por categoría con Roboto Mono, hover glow en color de acento.
Categorías: AI & Automatización · Frontend · Backend · Databases · Cloud & DevOps · Infraestructura

### `#experience`
Timeline vertical con 4 entradas, expandible al click, orden cronológico inverso.

### `#projects`
Cards grid 2 columnas desktop / 1 columna mobile. Hover 3D tilt con GSAP. Solo 1 proyecto real + placeholder.

### `#contact`
- Email, LinkedIn, GitHub
- Formulario: nombre + email + mensaje → Formspree (CLAU configura el endpoint)
- Fondo ligeramente diferente para separar visualmente

---

## 8. STACK TÉCNICO DEL PROYECTO

| Capa | Tecnología |
|---|---|
| Framework | Angular 18 (standalone, signals, no router) |
| Animaciones | GSAP + Angular Animations |
| Estilos | SCSS puro — sin frameworks CSS |
| Fonts | Roboto Mono + Inter + Space Grotesk |
| Build | `CI=1 ng build --configuration production --no-progress` |
| Deploy | Coolify → nginx:alpine → Hostinger VPS |
| DNS | Cloudflare → `alvarodevrace.tech` |
| Formulario | Formspree |
| Monitoreo | GlitchTip (cuando esté en producción) |

---

## 9. REGLAS PARA CODI

1. Arrancar desde: `~/Documents/Proyectos/Alvaro/Portfolio/`
2. Crear app: `ng new alvaro-portfolio --style=scss --routing=false --standalone`
3. Instalar: `npm install gsap`
4. One-page — sin router. Scroll suave con `scrollIntoView({ behavior: 'smooth' })`
5. Mobile-first desde 320px. Respetar `prefers-reduced-motion`
6. Build: `CI=1 ng build --configuration production --no-progress`
7. Cursor personalizado solo en desktop (`@media (pointer: fine)`)
8. Commit en rama `por-X-nombre` → CLAU hace merge y PR
9. Nunca tocar Coolify, DNS, dominio ni GitHub settings

## 10. REGLAS PARA CLAU

1. Cuando CODI termine ticket → merge rama a develop → PR develop→main
2. Al mergear → trigger deploy en Coolify
3. Configurar DNS `alvarodevrace.tech` → IP Hostinger VPS en Cloudflare
4. Configurar Formspree y pasar endpoint a CODI vía HANDOFF
5. Crear app en Coolify con Dockerfile nginx:alpine
6. Conectar GlitchTip cuando llegue a producción
