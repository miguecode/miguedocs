---
title: "Qué es CSS y Selectores"
description: "CSS - Cascading Style Sheets (Hojas de estilo en cascada)"
---


## 🎨 ¿Qué es CSS?

**CSS** (Cascading Style Sheets) es el lenguaje utilizado para definir la presentación y el diseño de un documento HTML. Mientras que el HTML se encarga de la **estructura** y el contenido, el CSS se encarga de la **apariencia** (colores, fuentes, espaciados, etc.).

El término "**Cascada**" se refiere a cómo el navegador decide qué estilos aplicar cuando hay reglas que compiten entre sí, basándose en la posición del código y la **especificidad**.

---

## 🏗️ Anatomía de una Regla CSS

Una regla de CSS se compone de un **selector** y un **bloque de declaración**:

```css
/* Selector: A quién afecta */
h1 {
  /* Declaración: Propiedad + Valor */
  color: blue; 
  font-size: 24px;
}
```

- **Selector:** Indica el elemento o elementos HTML a los que se aplicará el estilo.
- **Propiedad:** El aspecto que quieres cambiar (color, font-size, margin).
- **Valor:** El ajuste específico que le das a la propiedad.

---

## 🎯 Tipos de Selectores Básicos

1. **Universal (`*`):** Selecciona todos los elementos de la página. Útil para "resetear" estilos.
   ```css
   * { margin: 0; padding: 0; box-sizing: border-box; }
   ```
2. **De Etiqueta (`h1`, `p`, `div`):** Selecciona todos los elementos que usen esa etiqueta.
3. **De Clase (`.clase`):** Selecciona elementos con el atributo `class`. Se pueden repetir y usar en varios elementos.
   ```css
   .boton-primario { background: green; }
   ```
4. **De ID (`#identificador`):** Selecciona un elemento único con el atributo `id`. **No se deben repetir** los IDs en un mismo documento.
   ```css
   #header-principal { height: 100px; }
   ```

> [!TIP]
> **Prioriza las clases:** En el desarrollo moderno, se prefiere el uso de clases sobre IDs para mantener el código reutilizable y evitar problemas de especificidad alta.

---

## 🔗 Selectores Combinados (Combinadores)

Permiten seleccionar elementos basándose en su relación jerárquica en el HTML.

| Combinador | Nombre | Selección |
| :--- | :--- | :--- |
| `A B` | **Descendiente** | Selecciona todos los `B` que estén dentro de `A` (hijos, nietos, etc.). |
| `A > B` | **Hijo Directo** | Selecciona solo los `B` que sean hijos inmediatos de `A`. |
| `A + B` | **Hermano Adyacente** | Selecciona el elemento `B` que está justo después de `A`. |
| `A ~ B` | **Hermano General** | Selecciona todos los `B` que sigan a `A` en el mismo nivel. |

### Ejemplos:
```css
/* Todos los párrafos dentro de un nav */
nav p { color: gray; }

/* Solo el párrafo que es hijo directo de section */
section > p { font-weight: bold; }

/* El span que sigue inmediatamente a un h2 */
h2 + span { color: red; }
```

---

## 📝 Agrupamiento de Selectores

Si varias reglas comparten los mismos estilos, podemos agruparlas separándolas con **comas** para evitar repetir código:

```css
/* Aplica el mismo color a h1, h2 y h3 */
h1, h2, h3 {
  color: #333;
  font-family: Arial, sans-serif;
}
```

---

## 🏠 Estilos del Navegador (User Agent)

Todos los navegadores traen estilos por defecto (como el margen del `body` o el color azul de los links). Estos se conocen como **User Agent Stylesheet**. Una de nuestras primeras tareas como desarrolladores suele ser "limpiar" estos estilos para tener un control total sobre el diseño.

> [!IMPORTANT]
> Recuerda que el CSS se procesa de arriba hacia abajo. Si dos reglas tienen la misma importancia, la que esté escrita **más abajo** ganará.