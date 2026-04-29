---
title: "Pseudoelementos"
description: "No son lo mismo que las pseudoclases (como por ejemplo, hover). Las pseudoclases hacen referencia a los estados de los elementos."
---
## 🧩 Pseudoelementos en CSS

Los **pseudoelementos** permiten aplicar estilos a partes específicas de un elemento que no existen como nodos independientes en el HTML. Se identifican por llevar **dos puntos dobles** (`::`) antes del nombre.

> [!NOTE]
> Aunque los navegadores modernos perdonan el uso de un solo dos puntos (`:`), la norma oficial dicta que se usen dos (`::`) para diferenciarlos de las pseudoclases.

---

## 🎨 Elementos Decorativos (`::before` y `::after`)

Son los más utilizados. Permiten insertar contenido extra antes o después del contenido real de un elemento.

### Reglas de Oro:
1. **`content` es OBLIGATORIO:** Incluso si está vacío (`content: ""`), debe estar presente para que el elemento se renderice.
2. **Son `inline` por defecto:** Suelen requerir `display: block` o `display: inline-block` si se les quiere dar dimensiones.

```css
/* Añadir una barra decorativa debajo de un título */
h2 {
  position: relative;
  padding-bottom: 10px;
}

h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #ff4500;
}
```

---

## 🖱️ Interacción y Selección

### `::selection`
Personaliza cómo se ve el texto cuando el usuario lo resalta con el mouse.
- **Propiedades permitidas:** `color`, `background-color`, `text-decoration`, `text-shadow`.

```css
::selection {
  background-color: yellow;
  color: black;
}
```

### `::placeholder`
Estiliza el texto de ayuda dentro de los elementos `<input>` o `<textarea>`.

```css
input::placeholder {
  color: #ccc;
  font-style: italic;
}
```

---

## 📝 Tipografía y Listas

| Pseudoelemento | Descripción |
| :--- | :--- |
| **`::first-letter`** | Estila la **primera letra** del primer párrafo (efecto letra capitular). |
| **`::first-line`** | Estila la **primera línea** de un bloque de texto. |
| **`::marker`** | Estila la viñeta (bullet) o el número de un ítem de lista (`<li>`). |

```css
/* Cambiar el color de los puntos de una lista */
li::marker {
  color: red;
  font-size: 1.2em;
}

/* Letra capitular */
p::first-letter {
  font-size: 3rem;
  float: left;
  margin-right: 8px;
}
```

---

## 🚀 Pseudoelementos Avanzados

- **`::file-selector-button`**: Para estilar el botón de los `<input type="file">`.
- **`::backdrop`**: Estila el fondo oscuro que aparece detrás de un `<dialog>` o un elemento en modo pantalla completa.
- **`::cue`**: Para estilar los subtítulos (VTT) en elementos `<video>`.

### Web Components
- **`::part()`**: Permite estilar elementos internos de un **Shadow DOM** desde el CSS global si han sido expuestos con el atributo `part`.

> [!TIP]
> Los pseudoelementos son ideales para mantener el HTML limpio de etiquetas vacías que solo tienen una función estética (como divisores, iconos decorativos o barras de diseño).