---
title: "Flexbox - Parte 2 (Posicionamiento)"
description: "El eje principal de nuestro contenedor flexbox va a ser el que determine 'flex-direction'. Si flex-direction es row, el eje principal va a ser el X, o sea, el h..."
---


## 🎯 Posicionamiento y Alineación en Flexbox

El posicionamiento en Flexbox depende enteramente de los ejes. El **Eje Principal** es el que define `flex-direction`, y el **Eje Secundario** es el perpendicular a este.

---

## ↕️ Alineación del Eje Principal (`justify-content`)

Esta propiedad alinea los elementos a lo largo del eje principal. 
- Si `flex-direction: row`, alinea horizontalmente.
- Si `flex-direction: column`, alinea verticalmente.

| Valor | Descripción |
| :--- | :--- |
| **`flex-start`** | (Defecto) Elementos al inicio del contenedor. |
| **`flex-end`** | Elementos al final del contenedor. |
| **`center`** | Elementos centrados. |
| **`space-between`** | Primer y último elemento pegados a los bordes; el resto con espacio igual. |
| **`space-around`** | Espacio igual alrededor de cada elemento (los bordes tienen mitad de espacio). |
| **`space-evenly`** | Espacio idéntico entre elementos y bordes. |

---

## ↔️ Alineación del Eje Secundario (`align-items`)

Alinea los elementos a lo largo del eje perpendicular al principal.

- **`stretch`** (Defecto): Los elementos se estiran para llenar el contenedor.
- **`flex-start`** / **`flex-end`**: Alineación al inicio o final del eje secundario.
- **`center`**: Centrado vertical (si es fila) o horizontal (si es columna).
- **`baseline`**: Se alinean según la línea base del texto de los elementos.

```css
.container {
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center;     /* Centrado vertical */
  height: 100vh;
}
```

---

## 🏗️ Alineación de Multilíneas (`align-content`)

Esta propiedad solo funciona cuando hay varias líneas de elementos (es decir, cuando usas `flex-wrap: wrap`). Controla el espacio **entre las líneas**.

- **Valores comunes:** `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

---

## 🧩 Alineación Individual (`align-self`)

Permite a un elemento hijo **romper** la regla de `align-items` definida por su padre y posicionarse de forma independiente.

```css
.hijo-rebelde {
  align-self: flex-end; /* Este hijo se irá al final mientras los otros siguen al padre */
}
```

---

## 📏 Espaciado Moderno (`gap`)

Define la separación mínima entre los elementos sin tener que recurrir a márgenes manuales.

- **`gap`**: Define el espacio en ambas direcciones.
- **`row-gap`**: Solo espacio entre filas.
- **`column-gap`**: Solo espacio entre columnas.

```css
.container {
  display: flex;
  gap: 20px; /* Separación de 20px entre cada item */
}
```

> [!TIP]
> Antes de la propiedad `gap`, se usaba `margin` en los hijos, lo cual solía causar problemas en los bordes. `gap` es mucho más limpio y preciso.