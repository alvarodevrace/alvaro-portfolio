# Álvaro Carrera Portfolio

Portfolio personal de Álvaro Carrera construido con Angular 18, SCSS y GSAP.

## Estado

- App base implementada en la rama `por-1-bootstrap`
- Secciones listas: hero, stack, experience, about, projects y contact
- Cursor custom desktop, scroll reveal, timeline con logos y project links
- Siguiente paso operativo: CLAU mergea a `develop`, crea PR a `main` y gestiona deploy

## Desarrollo local

```bash
npm start
```

Dev server: `http://localhost:4200/`

## Build de producción

```bash
npm run build -- --configuration production --no-progress
```

## Stack

- Angular 18 standalone
- SCSS
- GSAP
- n8n destacado en automatizaciones del portfolio

## Notas

- El favicon usa el avatar público de Álvaro
- Logos de empresas se sirven desde `public/assets/companies`
- Logo de Jauría se sirve desde `public/assets/jauria-logo.png`
