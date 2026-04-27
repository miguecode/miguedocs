---
title: "Componentes en Astro: Primeros Pasos"
description: "Aprende qué son los componentes en Astro, cómo se estructuran mediante el Frontmatter y cómo reutilizar elementos de la interfaz de forma eficiente."
---

## Concepto de Componente

La idea de los componentes en Astro es similar a la de frameworks como Angular o React: son fracciones de código independientes que representan pequeñas partes de la página principal. Cada componente tiene su propia estructura, lógica y estilo.

A diferencia de Angular, donde un componente suele dividirse en tres archivos (.html, .ts, .css), en Astro todo reside en un único archivo con extensión **`.astro`**.

### Ventajas de usar componentes
*   **Reutilización**: Creas un elemento (como un botón o una card) una vez y lo usas en múltiples lugares.
*   **Mantenimiento**: Si necesitas cambiar el diseño de un botón en toda la web, solo lo modificas en su archivo fuente.
*   **Legibilidad**: Permite que las páginas principales (`index.astro`) sean mucho más limpias al delegar la complejidad a subcomponentes.

---

## Estructura de un archivo `.astro`

Un archivo Astro se divide principalmente en dos secciones:

1.  **Component Script (Frontmatter)**: Se encuentra entre dos bloques de tres guiones (`---`). Aquí es donde escribes JavaScript o TypeScript. Este código se ejecuta exclusivamente en el servidor durante el build.
2.  **Component Template (HTML)**: Debajo del frontmatter, escribes el HTML que se enviará al navegador.

```astro
---
// Lógica de JavaScript/TypeScript aquí
const titulo = "Hola desde Astro";
---

<!-- HTML aquí -->
<h1>{titulo}</h1>
```

---

## Creación y Propiedades

Por convención, los nombres de los componentes deben escribirse en **PascalCase** (Mayúscula inicial, ej: `BotonPrincipal.astro`) para distinguirlos de las etiquetas HTML estándar.

### Uso de `Astro.props`
Para que un componente sea dinámico, puede recibir parámetros del exterior a través del objeto global `Astro.props`.

```astro
---
// Button.astro
const { color = "blue", label = "Click aquí" } = Astro.props;
---

<button style={`background-color: ${color};`}>
  {label}
</button>
```

Podemos asignar valores por defecto en la desestructuración de las props por si el usuario olvida pasarlos al invocar el componente.

---

## Importación y Uso

Para utilizar un componente creado en la carpeta `/components`, debemos importarlo en el frontmatter de nuestra página (`index.astro`):

```astro
---
// index.astro
import Button from '../components/Button.astro';
---

<html>
  <body>
    <h1>Mi Sitio con Astro</h1>
    <!-- Invocamos al componente enviándole sus props -->
    <Button color="red" label="Botón de Acción" />
    <Button color="green" label="Confirmar" />
  </body>
</html>
```