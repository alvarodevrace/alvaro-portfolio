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

### Referencia de diseño
**Inspiración principal:** https://tamalsen.dev/
Analizado en detalle. El portfolio de Álvaro debe tener el mismo nivel de calidad visual, minimalismo dark y microinteracciones. No copiar, sino tomar el estilo y adaptarlo.

---

### Paleta de colores

```scss
// Variables base — adaptar de tamalsen.dev al estilo de Álvaro
$bg:          #111111;    // fondo principal — casi negro
$bg-surface:  #1a1a1a;    // cards, navbar sticky
$text:        rgba(255, 255, 255, 0.88);  // texto principal
$muted:       rgba(255, 255, 255, 0.45);  // texto secundario
$accent:      #4F8EF7;    // color de marca — azul eléctrico
$accent-2:    #7C3AED;    // violeta — acento secundario
$accent-3:    #06D6A0;    // verde/teal — tercer acento (hover cards)
$border:      rgba(255, 255, 255, 0.08);  // bordes sutiles
```

### Tipografía

```scss
// Igual que tamalsen.dev — monospace para nav refuerza perfil técnico
$font-nav:    'Roboto Mono', monospace;    // navbar, labels, chips
$font-body:   'Inter', sans-serif;         // cuerpo de texto
$font-display:'Space Grotesk', sans-serif; // títulos grandes
```

Google Fonts a cargar en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

---

### Navbar — estilo tamalsen.dev

```scss
// Header fijo, transparente → blur al scrollear
nav {
  position: fixed;
  top: 0;
  width: 100%;
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
// Links de nav: Roboto Mono, hover con subrayado de acento
```

---

### Cursor personalizado — igual que tamalsen.dev

```scss
// Dos círculos concéntricos siguiendo el mouse
.cursor-outer {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba($accent, 0.6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transition: transform 0.12s ease; // lag suave — GSAP lerp
  z-index: 9999;
}
.cursor-inner {
  width: 8px;
  height: 8px;
  background: $accent;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}
// En hover sobre links/botones: cursor-outer crece a 56px, cambia color
```

Implementar con GSAP:
```typescript
// gsap.ticker para seguir el mouse con lerp suave
gsap.ticker.add(() => {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  gsap.set(cursorOuter, { x: cursorX - 18, y: cursorY - 18 });
  gsap.set(cursorInner, { x: mouseX - 4, y: mouseY - 4 });
});
```

---

### Efecto "chonky underline" — tomado de tamalsen.dev

Para títulos de sección y links importantes:

```scss
.underline-accent {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 0.25em;
    background: linear-gradient(65deg, $accent 0%, $accent-2 100%);
    border-radius: 2px;
    transition: height 0.25s ease;
  }

  &:hover::after {
    height: 0.75em;
  }
}

// Variante verde para experiencia
.underline-green::after {
  background: linear-gradient(65deg, $accent-3 0%, $accent 100%);
}
```

---

### Animaciones de entrada — inspirado en tamalsen.dev

```scss
// Base para scroll reveal
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(.215, .61, .355, 1),
              transform 0.65s cubic-bezier(.215, .61, .355, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// Variantes con delay stagger
[data-reveal="delay-1"] { transition-delay: 0.1s; }
[data-reveal="delay-2"] { transition-delay: 0.2s; }
[data-reveal="delay-3"] { transition-delay: 0.3s; }
[data-reveal="delay-4"] { transition-delay: 0.4s; }
```

Implementar con `ScrollRevealDirective` (IntersectionObserver).

---

### Cards de proyectos — estilo tamalsen.dev

```scss
.project-card {
  background: $bg-surface;
  border: 1px solid $border;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba($accent, 0.4);
    box-shadow: 0 20px 60px rgba($accent, 0.08);
  }

  .overlay {
    // aparece en hover con info del proyecto
    background: rgba(17, 17, 17, 0.92);
    transition: opacity 0.3s ease;
  }
}
```

---

### Hero section — estructura inspirada en tamalsen.dev

Estructura mínima pero impactante:
```
[navbar]
[hero]
  → texto pequeño muted: "Hola, soy"
  → nombre grande: "Álvaro Carrera"
  → typewriter: "Full Stack Engineer" / "AI-Augmented Developer" / "Systems Architect"
  → descripción 1 línea
  → 2 CTAs: [Ver proyectos] [LinkedIn ↗]
  → scroll indicator (flecha animada abajo)
[expertise/stack]
[projects/work]
[experience]
[contact]
```

---

### Sección Experience — timeline como tamalsen.dev

Timeline vertical con línea izquierda y puntos de acento:
```scss
.timeline-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, $accent, $accent-2);
}
.timeline-dot {
  width: 12px;
  height: 12px;
  background: $accent;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba($accent, 0.6); // glow
}
```

---

### Principios visuales tomados de tamalsen.dev

1. **Monospace en nav** — Roboto Mono da sensación técnica/dev inmediata
2. **Backdrop blur en navbar** — efecto glassmorphism al scrollear
3. **Subrayados animados** — los `chonky-underline` en titles son la firma visual
4. **Cursor personalizado** — dos círculos concéntricos, diferencia al instante
5. **Cards sin shadow extrema** — solo border sutil + shadow en hover
6. **Secciones con mucho aire** — padding vertical generoso (120px+)
7. **Colores de acento solo en detalles** — no abusar, fondo siempre oscuro
8. **Scroll reveal staggered** — elementos entran con delay escalonado
9. **Typewriter en hero** — el ciclo de títulos engancha al visitante
10. **Grid 2 columnas en proyectos** — limpio, deja respirar el contenido

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
