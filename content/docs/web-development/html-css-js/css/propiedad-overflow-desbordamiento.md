---
title: "Propiedad Overflow (desbordamiento)"
description: "Overflow (desbordamiento)"
---


## 📦 Propiedad Overflow (Desbordamiento)

El **overflow** ocurre cuando el contenido de un elemento (hijo) es más grande que el contenedor (padre) que lo aloja. Por defecto, CSS permite que el contenido se "salga" de la caja, pero podemos controlar este comportamiento.

Existen dos variantes específicas: `overflow-x` (horizontal) y `overflow-y` (vertical).

---

## 🛠️ Valores de Overflow

### 1. `visible` (Por defecto)
El contenido desbordado se muestra fuera de los límites de la caja. No recorta nada.
```css
.caja {
  overflow: visible;
}
```

### 2. `hidden`
Recorta el contenido que se sale de la caja. El contenido sobrante es invisible y no se puede acceder a él mediante scroll.
```css
.caja {
  overflow: hidden;
}
```

### 3. `scroll`
Recorta el contenido pero añade barras de desplazamiento siempre, incluso si el contenido **no** se desborda (en algunos SO se ven barras desactivadas).

### 4. `auto` (Recomendado)
Es similar a `scroll`, pero el navegador solo muestra las barras de desplazamiento si son estrictamente necesarias.

---

## 📝 Text-Overflow

Esta propiedad controla cómo se muestra el texto que ha sido recortado por un `overflow: hidden`. 

> [!IMPORTANT]
> Para que `text-overflow: ellipsis` funcione, el elemento debe cumplir tres condiciones:
> 1. Tener un ancho definido (`width`).
> 2. Tener `overflow: hidden`.
> 3. Tener `white-space: nowrap` (para que el texto no salte de línea).

### Ejemplo de Puntos Suspensivos:
```css
.texto-recortado {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Añade los "..." al final */
}
```

---

## 🎨 Estilar el Scrollbar

Aunque es posible personalizar las barras de desplazamiento usando pseudo-elementos como `::-webkit-scrollbar`, se recomienda hacerlo solo para elementos internos específicos y no para el scroll principal de la página, para mantener la usabilidad nativa del sistema operativo.

```css
/* Ejemplo básico para navegadores WebKit */
.contenedor::-webkit-scrollbar {
  width: 8px;
}

.contenedor::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
```

> [!TIP]
> Usa `overflow: overlay` (si está disponible) para que la barra de scroll aparezca "encima" del contenido sin ocupar espacio físico en el ancho del elemento. Aunque esta propiedad está en desuso, su comportamiento se está estandarizando con `scrollbar-gutter`.