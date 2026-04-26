---
title: "El prefijo webkit"
description: "En CSS; webkit es un prefijo de proveedor (vendor prefix). Se usa para propiedades específicas del motor de renderizado WebKit, que es el motor que usan navegad..."
---


## 🛠️ El prefijo Webkit

En CSS, `-webkit-` es un **prefijo de proveedor** (vendor prefix). Se utiliza para aplicar propiedades específicas del motor de renderizado **WebKit**, el cual es utilizado por navegadores como **Safari** y las versiones antiguas de Chrome.

### ¿Para qué sirven los prefijos?
Cuando una nueva propiedad de CSS no está completamente estandarizada, los fabricantes de navegadores implementan su propia versión experimental usando un prefijo único. De esta forma, se aseguran de que la propiedad funcione en su navegador sin afectar a los demás.

**Principales prefijos:**
- `-webkit-`: Safari, navegadores iOS y antiguos Chrome (motor WebKit/Blink).
- `-moz-`: Mozilla Firefox (motor Gecko).
- `-ms-`: Internet Explorer y versiones antiguas de Edge (motor Trident/EdgeHTML).
- `-o-`: Versiones muy antiguas de Opera (motor Presto).

---

### ¿Sigue siendo necesario -webkit-?
Hoy en día, la mayoría de las propiedades están estandarizadas. Sin embargo, sigue siendo útil por tres razones:
1. **Retrocompatibilidad:** Soporte para navegadores y versiones antiguas.
2. **Propiedades No Estándar:** Características que solo existen en Safari (como ciertos efectos de texto o scroll en iOS).
3. **Motores compartidos:** Chrome usa **Blink** (un fork de WebKit), por lo que muchas propiedades `-webkit-` siguen funcionando en él.

---

### 📝 Ejemplos Prácticos

#### 1. Efectos de Texto (Exclusivos de WebKit)
Permite crear contornos de letras que no son posibles con el CSS estándar.

```css
.texto-contorno {
  -webkit-text-stroke: 1px black; /* Contorno de texto */
  -webkit-text-fill-color: red;   /* Color de relleno del texto */
}
```

#### 2. Scroll Nativo en iOS
Mejora la fluidez del scroll en dispositivos Apple.

```css
.contenedor-scroll {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* Scroll suave tipo "inercia" en iOS */
}
```

#### 3. Personalización de Scrollbars
WebKit permite cambiar el diseño de las barras de desplazamiento (algo que el CSS estándar apenas está empezando a soportar).

```css
/* Solo funciona en Chrome, Safari y Edge */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
```

---

> [!TIP]
> **Consejo Pro:** En lugar de escribir todos estos prefijos manualmente, los desarrolladores modernos usan herramientas como **Autoprefixer** (integrado en Vite, Webpack o PostCSS). Esto permite escribir CSS estándar y la herramienta añade los prefijos necesarios automáticamente basándose en la compatibilidad de navegadores que necesites.







