---
title: "Etiquetas obsoletas y etiquetas no recomendadas"
description: "Existen etiquetas obsoletas y etiquetas no recomendadas en HTML. Veamos cuáles son y por qué no debemos usarlas."
---


## 🚫 Etiquetas Obsoletas en HTML

A lo largo del tiempo han existido etiquetas que fueron útiles en su momento, pero que hoy han sido reemplazadas por nuevas características o por CSS. Usarlas es una **mala práctica** que afecta la compatibilidad y la accesibilidad.

La mayoría de estas etiquetas se enfocaban en el **estilo visual**, algo que hoy debe manejarse exclusivamente con **CSS**.

---

## 📜 Ejemplos de Etiquetas Obsoletas

| Etiqueta | Propósito original | Reemplazo moderno |
| :--- | :--- | :--- |
| **`<font>`** | Personalizar fuente, color y tamaño. | Propiedades CSS (`font-family`, `color`). |
| **`<center>`** | Centrar elementos horizontalmente. | Flexbox, Grid o `text-align: center`. |
| **`<blink>`** | Hacer que el texto titile. | Animaciones CSS (aunque no se recomienda). |
| **`<marquee>`** | Texto con desplazamiento animado. | Animaciones CSS (`@keyframes`). |
| **`<strike>`** | Tachar un texto. | Etiqueta semántica `<del>`. |
| **`<tt>`** | Fuente monoespaciada (teletipo). | Etiqueta semántica `<code>`. |
| **`<big>`** | Aumentar el tamaño del texto. | Propiedad CSS `font-size`. |

### Análisis detallado:

- **`<strike>`**: Se reemplazó por **`<del>`**, ya que esta última tiene un significado semántico (indica que el contenido ha sido eliminado).
- **`<tt>`**: Se reemplazó por **`<code>`**, que es semánticamente correcta para representar fragmentos de código.
- **`<isindex>`**: Se usaba para campos de búsqueda básicos; hoy se usa un `<form>` con un `<input type="search">`.
- **`<noframes>`**: Indicaba falta de soporte para frames; hoy se utilizan **`<iframe>`** o componentes modernos.

---

## ⚠️ Etiquetas NO obsoletas, pero no recomendadas

Estas etiquetas siguen funcionando en los navegadores actuales, pero su uso ha sido desplazado por opciones semánticas más potentes o por el control total de CSS.

### `<b>` vs `<strong>`
No es recomendable usar **`<b>`** (solo visual). Es mejor usar **`<strong>`**, que indica importancia o urgencia para motores de búsqueda y lectores de pantalla.

### `<i>` vs `<em>`
Evita **`<i>`**. Usa **`<em>`** (énfasis), que semánticamente indica que el texto debe ser pronunciado con un tono diferente.

### `<u>`, `<s>` y `<small>`
- **`<u>`** (Subrayado): Es preferible usar `<span>` con `text-decoration: underline` en CSS.
- **`<s>`** (Tachado): Usa **`<del>`** si el contenido fue borrado, o CSS si es puramente estético.
- **`<small>`**: Aunque en HTML5 tiene el significado de "letra pequeña" (como avisos legales), para cambios puramente estéticos de tamaño es mejor usar CSS `font-size`.

> [!IMPORTANT]
> La regla de oro del desarrollo web moderno es: **HTML para la estructura y semántica, CSS para el diseño y estilo.** Si una etiqueta solo sirve para "que se vea de tal forma", probablemente sea mejor usar CSS.