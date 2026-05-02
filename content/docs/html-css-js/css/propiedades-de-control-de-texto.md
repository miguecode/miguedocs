---
title: "Propiedades de control de texto"
description: "Las propiedades de control de texto en CSS permiten ajustar el espaciado, la alineación y el comportamiento de los saltos de línea en el texto."
---


## 🔠 Propiedades de Control de Texto

Ajustar cómo se comporta el texto es vital para la legibilidad y la estética de una web. Aquí veremos propiedades modernas y clásicas para el control tipográfico.

---

## ⚖️ Modern Text Wrap (Balance y Pretty)

Estas propiedades permiten que el navegador tome mejores decisiones sobre dónde romper las líneas de texto.

### 1. `text-wrap: balance`
Ideal para **títulos cortos** (h1, h2, etc.). Su objetivo es evitar que una sola palabra quede sola en la última línea ("viuda"), equilibrando el número de palabras por línea.

```css
h1 {
  text-wrap: balance;
}
```

### 2. `text-wrap: pretty`
Diseñado para **párrafos largos**. Analiza las últimas cuatro líneas para evitar "huérfanas" (palabras sueltas al final de un bloque), pero es menos agresivo que el modo balance.

```css
p {
  text-wrap: pretty;
}
```

---

## 📏 Espaciado y Legibilidad

### Line-height (Interlineado)
Controla el espacio vertical entre líneas. Un valor adecuado mejora enormemente la lectura.

```css
p {
  /* Se recomienda entre 1.5 y 1.6 para párrafos */
  line-height: 1.5; 
}

h1 {
  /* Los títulos suelen verse mejor con menos espacio */
  line-height: 1.2;
}
```

### Letter-spacing y Word-spacing
- **`letter-spacing`**: Espacio entre letras individuales.
- **`word-spacing`**: Espacio entre palabras completas.

```css
.boton-moderno {
  letter-spacing: 0.05em; /* Un toque de aire entre letras */
  text-transform: uppercase;
}
```

---

## 🚫 Alineación y Bloqueos

### Text-align: justify
Aunque hace que los bordes izquierdo y derecho sean rectos, **no se recomienda** en la web. Crea "ríos de espacio" irregulares que dificultan la lectura, especialmente para personas con dislexia.

### White-space
Controla cómo se manejan los espacios en blanco y los saltos de línea manuales.

- **`nowrap`**: El texto nunca salta de línea, se extiende horizontalmente hasta el infinito.
- **`pre-wrap`**: Respeta los saltos de línea hechos en el código HTML (como un elemento `<pre>`) pero permite el ajuste automático.

```css
.codigo-o-nota {
  white-space: pre-wrap;
}
```

---

## 💡 Otras propiedades útiles
- **`word-break`**: Define si se pueden romper palabras largas al final de la línea.
- **`hyphens: auto`**: Añade guiones automáticos cuando una palabra se corta (requiere atributo `lang` en el HTML).
- **`text-transform`**: Permite cambiar a `uppercase` (MAYÚSCULAS), `lowercase` (minúsculas) o `capitalize` (Primera Letra Mayúscula).

> [!TIP]
> **Accesibilidad:** Mantener un buen contraste de color y un `line-height` de al menos 1.5 en párrafos son reglas básicas para que tu sitio sea inclusivo y fácil de leer.