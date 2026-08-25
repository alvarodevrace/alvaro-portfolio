# AGENTS.md — Portfolio Personal (alvaro-portfolio)

> Instrucciones para opencode (Alvaro2.0) operando en el repo `alvarodevrace/alvaro-portfolio`.
> Repo root: `Portfolio/` — la app Angular vive en `alvaro-portfolio/`.
> Lee también `../../AGENTS.md` (reglas absolutas del workspace) y `../../vault/portfolio/00-Index/INDEX.md` antes de este archivo.

## Proyecto

| Campo            | Valor                                              |
| ---------------- | -------------------------------------------------- |
| Nombre           | Portfolio Personal — Álvaro Carrera                |
| Repo             | https://github.com/alvarodevrace/alvaro-portfolio  |
| Stack            | Angular 18.2 standalone, TypeScript 5.5 strict, SCSS, GSAP, npm |
| Rama default     | `main`                                             |
| Rama integración | `develop`                                          |

## Estructura

- Repo root `Portfolio/`: este archivo, CI (`.github/`), Dockerfile/nginx.
- App `alvaro-portfolio/`: componentes standalone sin router (una página).

## Flujo Git (LEY DE RAMAS)

- Nunca push directo a `main` ni `develop`.
- Rama `feature/POR-N-nombre` → commits locales → PR → `develop` → QA ✅ + CI verde → Álvaro aprueba → PR `develop` → `main` → Álvaro aprueba → merge → deploy Dokploy.
- KIMICO nunca aprueba su propio PR; solo Álvaro aprueba.
- Commits en español, conventional commits.

## Scripts

```bash
cd alvaro-portfolio
npm run build
npx ng test --watch=false
```

## Estándares (revisión pre-commit GGA)

REJECT if:

- Secrets, credenciales o tokens hardcodeados (solo refs `bitwarden:global/*` o variables de entorno)
- NgModule nuevo (todo componente standalone)
- `any` sin justificación
- Relajar `strict` o `strictTemplates`

REQUIRE:

- `inject()` para DI
- Tests (Karma + Jasmine) para componentes nuevos o modificados (strict TDD activo)
- Pasar `npm run build` antes de entregar
- Commits en español, conventional commits
