---
title: "Manejo de Estilos y CSS en Astro"
description: "Aprende a aplicar estilos de forma global o local (scoped), a integrar archivos CSS externos y a entender el sistema de estilos automáticos de Astro."
---

## Estrategias de Estilos en Astro

Astro ofrece una gran flexibilidad para manejar el diseño. Los estilos se pueden aplicar mediante cuatro enfoques principales:

1.  **CSS Local (Scoped)**: Estilos que solo afectan al componente donde se definen.
2.  **CSS Global**: Estilos que afectan a toda la aplicación (como tipografías, variables y resets).
3.  **CSS Modules**: Para un control granular de clases.
4.  **Frameworks Externos**: Integración sencilla con Tailwind, Bootstrap, Sass, etc.

---

## Estilos Locales (Scoped por defecto)

Una de las características más potentes de Astro es que las etiquetas `<style>` dentro de un componente son **automáticamente locales**. Esto significa que las reglas escritas allí no "sangrarán" hacia otros componentes, evitando conflictos de nombres.

```astro
<!-- Button.astro -->
<button class="btn">Haz click</button>

<style>
  .btn {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  /* Este estilo solo afectará a los botones DENTRO de este componente */
</style>
```

---

## Estilos Globales

Para aplicar estilos que afecten a toda la web, lo recomendable es centralizarlos en un archivo independiente.

### Paso 1: Crear el archivo global
Dentro de la carpeta `src/styles/`, creamos un archivo por ejemplo llamado `global.css`:

```css
/* src/styles/global.css */
:root {
  --color-primario: #ff5733;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f4;
}
```

### Paso 2: Importar el CSS Global
Para que una página (y sus componentes hijos) adquieran estos estilos, debemos importarlos en el **frontmatter** de nuestro archivo principal (ej: `Layout.astro` o `index.astro`).

```astro
---
// index.astro
import '../styles/global.css';
import Header from '../components/Header.astro';
---

<html>
  <body>
    <Header />
    <h1>Contenido de la página</h1>
  </body>
</html>
```

---

## Mejores Prácticas

*   **Centralización**: Usa archivos globales para variables CSS (`--color-main`), resets y estilos base del cuerpo.
*   **Encapsulamiento**: Usa estilos locales dentro de los componentes para el diseño específico del mismo. Esto facilita la reutilización y el mantenimiento.
*   **Directiva `is:global`**: Si por alguna razón necesitas que una etiqueta `<style>` dentro de un componente sea global, puedes usar el atributo: `<style is:global>`.