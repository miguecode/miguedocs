---
title: "Position (Static, Relative, Absolute, Fixed, Sticky)"
description: "La propiedad position en CSS determina cómo se ubica un elemento en el documento. Por defecto, todos los elementos tienen un comportamiento de flujo normal, pero podemos alterarlo para crear layouts complejos."
---


## 📍 Posicionamientos en CSS (Property: position)

La propiedad `position` determina cómo se ubica un elemento en el documento. Por defecto, todos los elementos tienen un comportamiento de flujo normal, pero podemos alterarlo para crear layouts complejos.

---

## 1️⃣ Static (Por defecto)
Es el valor inicial. El elemento sigue el flujo normal del documento y se posiciona según el orden del HTML.
- **Nota:** Las propiedades `top`, `right`, `bottom`, `left` y `z-index` **no tienen efecto** en elementos estáticos.

```css
.elemento {
  position: static;
}
```

---

## 2️⃣ Relative
El elemento se posiciona respecto a su **ubicación original**. Al moverlo, el espacio que ocupaba inicialmente en el flujo del documento se mantiene vacío (no afecta a los vecinos).

```css
.caja {
  position: relative;
  top: 20px;  /* Se desplaza 20px hacia abajo desde donde debería estar */
  left: 10px; /* Se desplaza 10px a la derecha */
}
```

---

## 3️⃣ Absolute
El elemento se elimina del flujo normal del documento (no deja espacio vacío) y se posiciona respecto a su **ancestro posicionado más cercano** (cualquiera que no sea `static`).

> [!IMPORTANT]
> Si no encuentra ningún padre con `position: relative`, `absolute` o `fixed`, se posicionará respecto al **documento (body)**.

### Ejemplo de Contenedor Relativo + Hijo Absoluto:
```css
/* El padre debe estar posicionado */
.padre {
  position: relative;
  width: 300px;
  height: 300px;
}

/* El hijo se mueve dentro de los límites del padre */
.hijo {
  position: absolute;
  top: 0;
  right: 0; /* Queda pegado a la esquina superior derecha del padre */
}
```

### El truco del `inset: 0`
Para expandir un elemento absoluto a todo el tamaño de su padre:
```css
.overlay {
  position: absolute;
  inset: 0; /* Atajo para top, right, bottom y left: 0 */
}
```

---

## 4️⃣ Fixed
El elemento se posiciona respecto al **viewport** (la ventana del navegador). Esto significa que se quedará siempre en el mismo lugar, incluso si el usuario hace scroll.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```
- **Uso común:** Menús de navegación, botones de "volver arriba", chats flotantes.

---

## 5️⃣ Sticky
Es un híbrido entre `relative` y `fixed`. El elemento se comporta como `relative` hasta que alcanza un punto de umbral definido (ej: `top: 0`) al hacer scroll; en ese momento, se queda "pegado" como un `fixed`.

```css
.header-tabla {
  position: sticky;
  top: 0; /* Se queda pegado arriba cuando llegamos a él */
  background: white;
}
```

> [!WARNING]
> **Condición de Sticky:** El elemento solo se mantendrá "pegado" mientras su **contenedor padre** sea visible en el viewport. Si el padre desaparece al scrollear, el elemento sticky se irá con él.

---

## 🧬 Z-Index
Cuando los elementos posicionados se superponen, usamos `z-index` para decidir cuál va al frente.
- Solo funciona en elementos con `position` distinto a `static`.
- A mayor número, más "cerca" del usuario (encima de otros).

```css
.modal {
  position: fixed;
  z-index: 999; /* Aparece encima de todo */
}
```