# CLAUDE.md — Portfolio Personal · Álvaro Carrera

Fuente de verdad para todos los agentes que trabajen en este proyecto.

---

## Proyecto

**Sitio web personal y portafolio profesional de Álvaro Carrera.**

URL objetivo: `alvarodevrace.tech`
Repo GitHub: `alvarodevrace/portfolio` (crear al iniciar)
Linear: https://linear.app/alvarodevrace/project/alvaro-carrera-portfolio-personal-b11d1bd08781

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Angular 18 (standalone components, signals) |
| Animaciones | Angular Animations + GSAP |
| Estilos | SCSS — sin frameworks CSS externos |
| Deploy | GitHub Pages o Coolify (TBD) |
| CI/CD | GitHub Actions |

---

## Agentes

- **CODI** — implementa todo el código Angular, SCSS, animaciones
- **CLAU** — infra, deploy, dominio, Linear, revisión arquitectural

---

## Diseño — Directrices

### Estética
- **Dark mode** — fondo casi negro (`#0a0a0a`), texto blanco/gris
- **Acento** — un solo color de acento (sugerido: azul eléctrico `#4F8EF7` o violeta `#7C3AED`)
- **Tipografía** — sans-serif moderna (Inter o Space Grotesk via Google Fonts)
- **Minimalista pero impactante** — mucho espacio en blanco, jerarquía clara
- **Sin stock photos** — solo código, formas geométricas y el avatar de GitHub

### Animaciones (obligatorias)
- **Hero:** texto que aparece letra por letra o palabra por palabra al cargar
- **Scroll reveal:** cada sección entra con fade+slide al hacer scroll
- **Cursor personalizado** (opcional pero impacta mucho)
- **Transiciones de página** suaves entre secciones
- **Hover effects** en cards de proyectos y skills
- **Parallax** sutil en el hero background

---

## Secciones (en orden)

### 1. Hero
- Avatar de GitHub: `https://avatars.githubusercontent.com/u/264550617?v=4`
- Nombre: **Álvaro Carrera**
- Título animado (typewriter): `Full Stack Engineer` → `AI-Augmented Developer` → `Systems Architect`
- CTA: `Ver proyectos` (scroll) + `LinkedIn` (link externo)
- Fondo: partículas o gradiente animado sutil

### 2. Sobre mí
- Párrafo corto y directo (ver texto abajo)
- Íconos de stats: 5+ años · 4 empresas · Ecuador

### 3. Stack técnico
- Grid de tecnologías con íconos SVG
- Agrupar por: Frontend · Backend · Cloud · AI Tools · Databases
- Hover: nombre de la tecnología + años de experiencia

### 4. Experiencia
- Timeline vertical animado
- 4 entradas (CENTRIC, FROM DIGITAL, ADECCO, IBM)
- Expandible al clic para ver detalle

### 5. Proyectos destacados
- Cards con imagen/mockup, título, descripción corta, stack usado, link
- Proyecto 1: **Jauría CrossFit** — `jauriacrossfitness.com`
- Proyecto 2+: espacio para agregar más

### 6. Contacto
- Email: `alcarreram@hotmail.com`
- LinkedIn: `https://www.linkedin.com/in/alcarreram/`
- GitHub: `https://github.com/alvarodevrace`
- Formulario simple (name + email + mensaje) — sin backend por ahora, usar Formspree

---

## Contenido — Textos finales

### Hero tagline
```
Full Stack Engineer & AI-Augmented Developer
Quito, Ecuador
```

### Sobre mí
```
Ingeniero en Sistemas con 5+ años construyendo aplicaciones web de producción.
Especializado en arquitecturas full-stack y desarrollo asistido por IA —
usando herramientas como Claude Code, Codex y Gemini CLI para entregar
sistemas complejos con mayor velocidad y calidad.

He trabajado para empresas en Ecuador, Estados Unidos y España,
desde startups digitales hasta corporaciones como IBM y NBCUniversal.
```

### Experiencia

**CENTRIC** · Full Stack Developer · Jul 2025 – presente
Migración S4S para Grupo Casabaca. AI-assisted development con reducción del 30% en tiempos de entrega.

**FROM DIGITAL (US)** · Full Stack Developer · Jun 2022 – Nov 2024
Apps para NBCUniversal y ARS con React, Node.js, GraphQL y Azure Functions.

**ADECCO / Diners Club** · Full Stack Developer · Nov 2021 – Jun 2022
Proyecto "Digital Card" en Angular + SQL para Diners Club Ecuador.

**IBM Ecuador** · Full Stack Developer · Sep 2020 – Nov 2021
App "Noches Diners" + chatbots IBM Watson + CI/CD con Jenkins.

---

## Instrucciones para CODI

1. **Crear el proyecto Angular:** `ng new alvaro-portfolio --style=scss --routing=false --standalone`
2. **Instalar dependencias:** `npm install gsap @angular/animations`
3. **Estructura de carpetas:**
```
src/
├── app/
│   ├── components/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── stack/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── shared/
│   │   ├── cursor/          ← cursor personalizado
│   │   └── scroll-reveal/   ← directiva de animación scroll
│   └── app.component.ts     ← one-page, sin router
├── styles/
│   ├── _variables.scss
│   ├── _animations.scss
│   └── styles.scss
└── assets/
    └── icons/               ← SVGs de tecnologías
```
4. **No usar Angular Router** — es one-page con scroll suave entre secciones (`scrollIntoView`)
5. **Performance:** lazy load de imágenes, prefers-reduced-motion respetado
6. **Mobile-first** — responsive completo desde 320px

---

## Lo que NO hace CODI
- Configurar dominio o DNS → CLAU
- Crear repo en GitHub → CLAU
- Deploy a producción → CLAU

---

## Regla de oro
Este es el portafolio público de Álvaro. Debe impresionar a un reclutador técnico senior en los primeros 3 segundos.
