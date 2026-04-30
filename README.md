# 📚 miguedocs

Este proyecto es mi repositorio personal de apuntes sobre desarrollo web y tecnología en general. Sus apuntes empecé a escribirlos mientras cursaba la **Tecnicatura Universitaria en Programación (UTN)** y los fui ampliando con cursos, proyectos y experiencia propia. Estilo "docs" hecho con Fumadocs y Next.js.

👉 Link: [miguedocs](https://miguedocs.vercel.app)

<img width="1529" height="892" alt="image" src="https://github.com/user-attachments/assets/3b3cfba6-ad2b-4d45-b93e-ca86c725c076" />


### 🛠 Stack

| Categoría    | Tecnología   |
|--------------|--------------|
| 📚 Base      | Fumadocs     |
| ✨ Frontend  | Next.js      |
| ✍ Lenguaje  | TypeScript   |
| 🎨 Estilos   | Tailwind CSS |
| 🚀 Deploy    | Vercel       |

---

## 🤓 Descripción Técnica generada

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.
