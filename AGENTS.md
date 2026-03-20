# AGENTS.md — Portfolio Personal · Álvaro Carrera

Espejo de CLAUDE.md para CODI y otros agentes.

---

## Contexto del proyecto

Portfolio personal de Álvaro Carrera en Angular 18.
Ruta local: `~/Documents/Proyectos/Alvaro/Portfolio/alvaro-portfolio/`
Repo GitHub: `git@github-alvarodevrace:alvarodevrace/alvaro-portfolio.git`
Linear: https://linear.app/alvarodevrace/project/alvaro-carrera-portfolio-personal-b11d1bd08781

---

## Arranque CODI

```bash
cd ~/Documents/Proyectos/Alvaro/Portfolio
ng new alvaro-portfolio --style=scss --routing=false --standalone
cd alvaro-portfolio
npm install gsap
git init
git remote add origin git@github-alvarodevrace:alvarodevrace/alvaro-portfolio.git
git checkout -b develop
```

## Tickets en orden

| Issue | Título | Prioridad |
|---|---|---|
| ALV-166 | Bootstrap: Angular 18 + estructura base + GSAP | 🔴 Urgent |
| ALV-167 | Hero section: avatar + typewriter + animación | 🔴 Urgent |
| ALV-168 | Stack + Experience + About + Contact sections | 🟠 High |
| ALV-169 | Proyectos + navbar + cursor personalizado | 🟠 High |

## Flujo Git

```
rama feature → develop → PR → main (CLAU crea el PR)
```

Nunca commitear directo a main.

## Ver CLAUDE.md para diseño completo, textos y especificaciones.
