# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Fuente de verdad absoluta. Leer completo antes de ejecutar cualquier tarea.

---

## ESTADO ACTUAL

> ⚠️ El app Angular **aún no existe**. POR-1 (CODI) debe ejecutar `ng new` primero.
> Una vez creada, el código vive en `~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/`

---

## COMANDOS RÁPIDOS (una vez que exista `alvaro-portfolio/`)

```bash
cd ~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/

npm run start                                              # dev server (ng serve)
npm run build                                              # build producción
CI=1 ng build --configuration production --no-progress    # build limpio para CI/Coolify
```

Bootstrap inicial (POR-1, solo una vez):
```bash
cd ~/Documents/Proyectos/Alvaro/Portfolio/
ng new alvaro-portfolio --style=scss --routing=false --standalone
cd alvaro-portfolio
npm install gsap
```

---

## ARQUITECTURA DE LA APP

- **One-page Angular 18** — standalone components, sin NgModules, sin router
- Navegación entre secciones: `scrollIntoView({ behavior: 'smooth' })`
- **GSAP**: cursor personalizado (2 círculos, lerp 0.12) + hover 3D tilt en cards de proyectos
- **IntersectionObserver**: directiva `scroll-reveal` que añade clase `.visible` a elementos con `[data-reveal]`
- **SCSS puro** — sin frameworks CSS; variables globales en `src/styles/_variables.scss`
- Datos del propietario centralizados como constantes TypeScript (ver `AGENTS.md` para el objeto completo)

### Estructura de carpetas

```
alvaro-portfolio/src/app/
├── components/
│   ├── hero/
│   ├── about/
│   ├── stack/
│   ├── experience/
│   ├── projects/
│   └── contact/
└── shared/
    ├── navbar/
    ├── cursor/          ← solo desktop (@media pointer: fine)
    └── scroll-reveal/   ← directiva IntersectionObserver
```

### Secciones (en orden)

`#hero` → `#about` → `#stack` → `#experience` → `#projects` → `#contact`

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

## 5. DATOS DEL DUEÑO

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

> CV completo, experiencia profesional, stack técnico detallado y constantes TypeScript listas para usar → ver **`AGENTS.md`**

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

### Tipografía
```scss
$font-nav:     'Roboto Mono', monospace;    // navbar, labels, chips de stack
$font-body:    'Inter', sans-serif;          // cuerpo de texto
$font-display: 'Space Grotesk', sans-serif; // títulos grandes
```

Google Fonts en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

### Navbar
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

### Cursor personalizado (solo desktop)
Dos círculos concéntricos con GSAP. GSAP ticker con lerp 0.12 para el outer (lag suave):
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

### Efecto "chonky underline"
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

### Scroll reveal
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
Resumen largo de Álvaro (ver `AGENTS.md`). Stats: `5+ años` · `4 empresas` · `Ecuador 🇪🇨`

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
