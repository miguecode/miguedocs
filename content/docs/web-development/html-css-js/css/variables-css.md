---
title: "Variables CSS"
description: "Variables CSS (Custom Properties)"
---


## Variables CSS (Custom Properties)

- Las variables en CSS permiten almacenar valores reutilizables, como colores, fuentes o tamaños, con el fin de tener un código más modular, escalable y fácil de mantener. 

- Hoy en día, el 97% de los navegadores soportan las variables en CSS. Por ende, usarlas es una práctica recomendada. Antes esto no era así, y era necesario usar preprocesadores CSS como Sass.


### Ventajas

- **Facilitan los cambios globales**: Modificar una variable afecta a todos los elementos que la usan.
- **Mejoran la organización**: Separan valores importantes del resto del código.
- **Son dinámicas**: Pueden cambiar con :hover, @media, JavaScript, etc.
- **No requieren preprocesadores**: A diferencia de Sass, no necesitan ser compiladas.


### Cómo crear y usar variables CSS

- Para crear variables, tenemos que ir al principio de nuestro archivo CSS, y hacer uso de la pseudoclase "root", la cual hace referencia a la raíz del documento (que en HTML, es la etiqueta `<html>`).

:root {
```text
...
```
}

- En esta pseudoclase, es donde nosotros vamos a crear variables globales CSS. Esto también sirve para aplicar estilos, como por ejemplo ponerle un "font-size: 20px", pero en este caso lo único que vamos a hacer es crear variables.

:root {
```text
--color-primary: #505EF4;
```
}

- Ahora, "--color-primary" es una variable, la cual tiene el valor #505EF4.

- Las variables tienen que tener el prefijo -- de forma obligatoria. Si no lo tienen, el navegador no las va a reconocer y por ende las va a ignorar. Se hizo así para diferenciarlas de las propiedades estándar. También cabe decir que distinguen mayúsculas y minúsculas.

- Ahora, para usar nuestra variable "--color-primary", tenemos que hacer uso de var(), así:

.button {
```css
background-color: var(--primary-color);
```
}


- **Otro caso común es crear variables para fuentes**: 

:root {
```text
--color-primary: #505EF4;
--font-primary: 'Lato', sans-serif;
```
}

body {
```typescript
font-family: var(--font-primary);
```
}


## Más ejemplos de uso

:root {
  --color-primary: #505EF4;
  --color-secondary: #FF5733;
  --font-primary: 'Lato', sans-serif;
  --spacing: 8px;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing);
}

body {
  font-family: var(--font-primary);
}


### Usando la palabra reservada @media para el responsive design

:root {
  --font-size: 16px;
}

@media (max-width: 768px) {
  :root {
```text
--font-size: 14px;
```
  }
}

body {
  font-size: var(--font-size);
}


### Usando el prefers-color-scheme para el modo oscuro

:root {
```text
--color-primary: #777;
--color-secondary: #333;
```
}

@media (prefers-color-scheme: dark) {
  :root {
```text
--color-primary: #333;
--color-secondary: #777;
```
  }
}


### Cambiando el valor en JavaScript

document.documentElement.style.setProperty('--color-primary', '#FF0000');