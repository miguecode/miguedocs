---
title: "La Cascada y la Especificidad"
description: "La cascada es el orden en el que el navegador aplica los estilos. Define qué regla sobreescribe a otra basándose principalmente en el orden de aparición (lo que se escribe al final tiene más peso) y el origen del estilo."
---


## 🌊 La Cascada

¿Qué pasa cuando dos reglas de estilo apuntan al mismo elemento? ¿Cuál gana? Aquí es donde entra el concepto de **Cascada**.

La cascada es el orden en el que el navegador aplica los estilos. Define qué regla sobreescribe a otra basándose principalmente en el **orden de aparición** (lo que se escribe al final tiene más peso) y el **origen** del estilo.

### Fallbacks en la Cascada
Podemos usar la cascada para ofrecer alternativas a navegadores antiguos. Si un navegador no entiende una propiedad nueva, saltará a la anterior que sí conozca.

```css
p {
  color: blue; /* Fallback para navegadores antiguos */
  color: oklch(0.7 0.148 238.24); /* Propiedad moderna (solo se aplica si se reconoce) */
}
```

---

## ⚖️ La Especificidad

Si la cascada es el "cuándo", la especificación es el "cuánto pesa". CSS utiliza un algoritmo para determinar qué regla es más específica que otra. Una regla muy específica siempre ganará a una general, sin importar el orden.

### El Algoritmo 0-0-0 (X-Y-Z)
La especificidad se calcula sumando puntos en tres categorías:

1.  **X (IDs):** Selectores de tipo `#id`. Tienen el peso más alto.
2.  **Y (Clases, Atributos y Pseudo-clases):** Selectores como `.clase`, `[type="text"]` o `:hover`.
3.  **Z (Elementos y Pseudo-elementos):** Selectores de etiqueta como `p`, `div`, `h1` o `::before`.

#### Lógica de comparación:
- Se compara de izquierda a derecha.
- Un solo ID (1,0,0) gana a mil clases (0,1000,0).
- Si hay empate en X, se mira Y. Si hay empate en Y, se mira Z.
- Si hay un empate total (X,Y,Z iguales), gana la última regla escrita (Cascada).

| Ejemplo de Selector | Especificidad (X-Y-Z) |
| :--- | :--- |
| `p` | 0, 0, 1 |
| `.texto` | 0, 1, 0 |
| `p.texto` | 0, 1, 1 |
| `#main .nav p` | 1, 1, 1 |

> [!TIP]
> Puedes verificar la especificidad de cualquier regla en las herramientas de desarrollador (DevTools) pasando el mouse sobre el selector en la pestaña "Styles".

---

## 🔝 Especificidad por Origen

El lugar de donde proviene el estilo también define su prioridad. Este es el orden de menor a mayor importancia:

1.  **User-Agent:** Estilos por defecto del navegador (ej: los `h1` son grandes).
2.  **Archivos Externos:** Tus archivos `.css` vinculados con `<link>`.
3.  **Etiqueta `<style>`:** Estilos dentro del HTML (en el `<head>`).
4.  **Estilos en línea (`inline`):** El atributo `style="..."` directamente en la etiqueta.
5.  **`!important`**: La declaración que rompe todas las reglas anteriores.

---

## ⚠️ La palabra clave `!important`

Se coloca al final de un valor de propiedad para forzar su aplicación por encima de cualquier otra regla de especificidad.

```css
p {
  color: red !important;
}
```

> [!CAUTION]
> **No abuses de `!important`**. Se considera una mala práctica porque dificulta mucho el mantenimiento del código. Úsalo solo como último recurso cuando no tengas control sobre otros estilos (como en bibliotecas externas o widgets).

---

#### Herramienta Recomendada:
Para calcular especificidades complejas, puedes usar: [Specificity Calculator](https://specificity.keegan.st/)