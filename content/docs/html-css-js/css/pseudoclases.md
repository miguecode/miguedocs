---
title: "Pseudoclases"
description: "Una pseudoclase es una situación especial en la que se encuentra un elemento. Hacen referencia a los distintos estados que pueden tener los elementos."
---## ✨ Pseudoclases en CSS

Una **pseudoclase** define un estado especial de un elemento. Se utilizan para aplicar estilos dinámicos sin necesidad de JavaScript, basándose en la interacción del usuario o en la posición del elemento en el documento.

Se identifican por llevar un solo dos puntos (`:`) antes del nombre.

---

## 🖱️ Interacción y Usuario

| Pseudoclase | Descripción |
| :--- | :--- |
| **`:hover`** | Cuando el puntero del mouse está sobre el elemento. |
| **`:active`** | Mientras el elemento está siendo presionado/clicado. |
| **`:focus`** | Cuando el elemento está enfocado (vía clic o teclado `TAB`). |
| **`:visited`** | Para enlaces (`<a>`) que el usuario ya ha visitado. |

```css
button:hover {
  background-color: #007bff;
  transition: background-color 0.3s;
}

button:active {
  transform: scale(0.95);
}
```

---

## 📝 Formularios y Validación

Permiten dar feedback visual según el estado de las entradas de datos.

- **`:valid` / `:invalid`**: Según si el valor cumple con las reglas (ej: `type="email"`).
- **`:required`**: Elementos que tienen el atributo `required`.
- **`:checked`**: Para checkboxes o radio buttons seleccionados.
- **`:disabled` / `:enabled`**: Según si el elemento está bloqueado o no.

```css
input:invalid {
  border: 2px solid red;
}

input:focus {
  outline: 2px solid blue;
}
```

---

## 🏗️ Estructura y Posición (Tree-Structural)

Ideales para estilar listas o rejillas sin añadir clases extra al HTML.

- **`:first-child` / `:last-child`**: El primer o último hijo del padre.
- **`:nth-child(n)`**: Selecciona el hijo en la posición `n`. Soporta fórmulas:
  - `:nth-child(odd)`: Elementos impares (1, 3, 5...).
  - `:nth-child(even)`: Elementos pares (2, 4, 6...).
  - `:nth-child(3n)`: Cada 3 elementos.
- **`:only-child`**: Si es el único hijo que tiene el padre.

```css
li:nth-child(even) {
  background-color: #f9f9f9;
}

li:first-child {
  font-weight: bold;
}
```

---

## 🧱 Pseudoclases Especiales y Modernas

### :root
Selecciona el elemento raíz (normalmente `<html>`). Se usa principalmente para declarar variables globales.
```css
:root {
  --primary-color: #ff4500;
}
```

### :has() (La más potente)
Permite seleccionar un padre basándose en lo que contiene.
```css
/* Selecciona el div SOLAMENTE si tiene una imagen dentro */
div:has(img) {
  padding: 0;
  border: 2px solid blue;
}
```

### :not()
Excluye elementos de una regla.
```css
/* Selecciona todos los párrafos excepto los que tienen la clase "error" */
p:not(.error) {
  color: #333;
}
```

---

## 🔗 CSS Nesting (Anidamiento Nativo)

El anidamiento nativo ya es ampliamente soportado en navegadores modernos. Permite agrupar las pseudoclases dentro del bloque del elemento principal usando el símbolo `&`.

```css
.card {
  background-color: white;
  padding: 20px;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  &:active {
    background-color: #eee;
  }
}
```

> [!TIP]
> **Diferencia Clave:** Las **Pseudoclases** (`:hover`) seleccionan estados, mientras que los **Pseudoelementos** (`::before`) introducen contenido o partes específicas del elemento. Fíjate en los puntos: uno para clases, dos para elementos.ng todavía no es compatible con todos los navegadores sin preprocessors como Sass o PostCSS.