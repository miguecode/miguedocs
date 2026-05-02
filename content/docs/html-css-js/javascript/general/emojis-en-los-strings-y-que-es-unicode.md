---
title: "Emojis en los Strings y qué es Unicode"
description: "Los emojis son caracteres Unicode, y JavaScript puede manejarlos como cualquier otro carácter."
---

## Usar Emojis en Strings

Un string puede tener emojis: `"Hola, este es mi texto 🔥"`.

Esto es posible ya que JavaScript usa **Unicode** como sistema de codificación de caracteres, y los emojis forman parte de Unicode. Entonces, "🔥" es simplemente un carácter Unicode, y JavaScript lo trata como cualquier otro carácter válido en una cadena de texto.

```javascript
const emoji = "🔥";
console.log(emoji); // Muestra "🔥"
console.log(emoji.length); // Muestra 2
```

¿Por qué el `length` es 2? Esto es porque algunos emojis están codificados con lo que se llama **surrogate pairs**. Unicode tiene más de 1 millón de caracteres posibles, pero los primeros sistemas como UTF-16 solo podían representar 65,536 ($2^{16}$).

Entonces, para los caracteres fuera de ese rango, como muchos emojis, se usan 2 valores de 16 bits en lugar de uno. Y a eso se lo llama un *surrogate pair* (par sustituto).

```javascript
"🔥" === "\uD83D\uDD25"; // true
```

Ese emoji se representa como DOS unidades de código UTF-16. Y por eso el `length` es 2.

## Unicode

Unicode fue creado en 1987 y es un sistema de codificación de caracteres muy grande y moderno. Tiene espacio para todos los idiomas, símbolos, emojis y más. Su primer versión fue lanzada en 1991 y fue creado para **unificar** todo bajo un solo estándar de caracteres para todos los lenguajes humanos, y también símbolos matemáticos, emojis, etc. 

Entonces, como JavaScript usa Unicode, puede manejar emojis, letras de otros idiomas, símbolos matemáticos, y hasta jeroglíficos egipcios. Cada carácter Unicode tiene un punto de código único:

```javascript
console.log("🔥".codePointAt(0).toString(16)); // Muestra 1f525
```

Esto nos quiere decir que el emoji "🔥" tiene el código Unicode `U+1F525`.

## Conceptos clave de JavaScript

| Concepto | ¿Qué es? | Ejemplo con 🔥 |
| :--- | :--- | :--- |
| **Unicode** | Un número universal para representar caracteres. | `U+1F525` |
| **UTF-16** | Cómo se codifica ese número en memoria. | `0xD83D + 0xDD25` |
| **JavaScript** | Usa UTF-16 internamente. | `"🔥".length === 2` |

## Lenguajes con Unicode

Hoy en día, casi todos los lenguajes modernos soportan Unicode, al menos en algún nivel. Algunos ejemplos son JavaScript, Python, Java, C#, Go, Ruby, Swift y PHP.

## ¿ASCII puede representar emojis?

**No, el ASCII original es un sistema MUY limitado**: solo soporta 128 caracteres (del 0 al 127), incluyendo letras del alfabeto inglés, números, símbolos básicos y caracteres de control (*control characters*). No tiene espacio para caracteres especiales de otros idiomas ni mucho menos para emojis.