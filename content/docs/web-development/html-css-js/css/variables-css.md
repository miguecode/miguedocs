---
title: "Variables CSS"
description: "Variables CSS (Custom Properties)"
---


## 🎨 Variables CSS (Custom Properties)

Las **Custom Properties**, comúnmente conocidas como **Variables CSS**, permiten almacenar valores reutilizables (colores, fuentes, tamaños) en un solo lugar. Esto hace que el código sea más modular, fácil de mantener y permite realizar cambios globales de manera instantánea.

---

## 🏗️ Cómo declarar variables

Las variables se definen habitualmente dentro de la pseudoclase `:root`, que representa el elemento raíz del documento (`<html>`). Esto las hace disponibles de forma **global** en todo el sitio.

```css
:root {
  /* Toda variable DEBE empezar con doble guion -- */
  --color-brand: #505EF4;
  --font-main: 'Inter', sans-serif;
  --base-padding: 1rem;
}
```

> [!IMPORTANT]
> Las variables CSS distinguen entre **mayúsculas y minúsculas**. `--Color-Main` no es lo mismo que `--color-main`.

---

## 🚀 Cómo usar las variables (`var()`)

Para aplicar el valor de una variable, utilizamos la función `var()`.

```css
.button {
  background-color: var(--color-brand);
  padding: var(--base-padding);
  font-family: var(--font-main);
}
```

### Valores de respaldo (Fallbacks)
Puedes definir un valor de seguridad por si la variable no existe o no carga:

```css
.card {
  /* Si --card-bg no está definida, usará blanco (#fff) */
  background-color: var(--card-bg, #fff);
}
```

---

## ⚡ Variables Dinámicas

A diferencia de las variables en preprocesadores (Sass), las variables CSS son **dinámicas** y pueden cambiar en tiempo real según el contexto.

### 1. Responsive Design (@media)
```css
:root {
  --container-width: 1200px;
}

@media (max-width: 768px) {
  :root {
    --container-width: 100%;
  }
}
```

### 2. Modo Oscuro (`prefers-color-scheme`)
```css
:root {
  --bg-color: #ffffff;
  --text-color: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #111111;
    --text-color: #eeeeee;
  }
}
```

### 3. Interacción con JavaScript
Puedes leer o cambiar variables CSS desde JS, lo que permite crear temas personalizados o controles deslizantes dinámicos.

```javascript
// Cambiar el color de marca dinámicamente
document.documentElement.style.setProperty('--color-brand', '#FF0000');

// Obtener el valor de una variable
const brandColor = getComputedStyle(document.documentElement).getPropertyValue('--color-brand');
```

---

## 💡 Mejores Prácticas

1.  **Usa nombres semánticos:** Es mejor `--button-bg` que `--color-blue-dark`. El primero describe la función, el segundo solo el color.
2.  **Define valores base:** Centraliza tus colores, tipografías y escalas de espaciado al inicio de tu CSS principal.
3.  **Herencia:** Las variables se heredan. Si defines una variable en `.card`, solo sus elementos hijos podrán usarla.

> [!TIP]
> El soporte actual para variables CSS es superior al **97%**, por lo que son seguras de usar en prácticamente cualquier proyecto moderno.