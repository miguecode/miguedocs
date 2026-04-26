---
title: "Formularios Parte 1. Inputs y Controles de Form"
description: "En el desarrollo web, los formularios son una pieza clave. Es una forma de pedirle todo tipo de datos al usuario. Para esto, HTML tiene distintas etiquetas."
---


## 📝 Formularios - Parte 1

Los formularios son esenciales para interactuar con los usuarios y recibir sus datos. En esta primera parte, veremos los distintos controles y tipos de entrada que ofrece HTML.

---

## 🏗️ La etiqueta `<form>`

La etiqueta **`<form>`** actúa como un contenedor para todos los controles del formulario. Dentro de ella colocaremos los elementos que permitirán al usuario ingresar información.

```html
<form>
  <!-- Controles de formulario aquí -->
</form>
```

---

## ⌨️ La etiqueta `<input>`

Es el elemento más versátil de los formularios. No tiene etiqueta de cierre (self-closing) y su comportamiento cambia radicalmente según su atributo **`type`**.

### Tipos de Input comunes:
- **`text`**: Texto plano.
- **`password`**: Oculta los caracteres con puntos.
- **`email`**: Valida que el formato tenga una `@`.
- **`number`**: Solo permite números.
- **`checkbox`**: Casilla de selección múltiple.
- **`radio`**: Selección única (cuando comparten el mismo `name`).
- **`file`**: Selector de archivos del sistema.
- **`date` / `color` / `range`**: Selectores específicos de fecha, color o deslizadores.
- **`submit`**: Botón que envía el formulario.

---

## ⚙️ Atributos Esenciales

1.  **`name`**: Es el identificador que recibirá el servidor. Sin este atributo, el dato no se envía.
2.  **`id`**: Identificador único para el DOM, vital para linkear con `<label>`.
3.  **`value`**: El valor real del dato. En inputs de texto es lo que el usuario escribe.
4.  **`placeholder`**: Texto de ayuda grisáceo que desaparece al escribir.
5.  **`required`**: Obliga al usuario a completar el campo antes de enviar.
6.  **`disabled`** / **`readonly`**: Deshabilitar el campo o dejarlo solo para lectura.

```html
<input type="text" name="usuario" id="user-input" placeholder="Ej: JuanPerez" required>
```

---

## 🏷️ La etiqueta `<label>`

Sirve para dar una descripción a un control. Es fundamental para la accesibilidad y mejora la experiencia de usuario: al hacer clic en el label, se enfoca o activa el input asociado.

### ¿Cómo vincularlos?
Usamos el atributo **`for`** del label apuntando al **`id`** del input.

```html
<label for="email">Correo Electrónico:</label>
<input type="email" id="email" name="email">

<input type="checkbox" id="terms" name="terms">
<label for="terms">Acepto los términos</label>
```

---

## 📑 Otros Controles de Formulario

### `<select>` (Listas desplegables)
Utiliza etiquetas **`<option>`** para definir las alternativas.

```html
<select name="paises" id="paises">
  <option value="ar">Argentina</option>
  <option value="mx" selected>México</option>
  <option value="es">España</option>
</select>
```

### `<textarea>` (Texto multilínea)
Para comentarios o mensajes largos.

```html
<textarea name="mensaje" rows="4" placeholder="Escribe aquí..."></textarea>
```

### `<fieldset>` y `<legend>`
Sirven para agrupar lógicamente partes de un formulario extenso.

```html
<fieldset>
  <legend>Datos de Contacto</legend>
  <label for="tel">Teléfono:</label>
  <input type="tel" id="tel" name="telefono">
</fieldset>
```

---

> [!IMPORTANT]
> Nunca olvides el atributo **`name`**. Aunque el formulario se vea bien, si los inputs no tienen `name`, el servidor no recibirá ninguna información al procesar el envío.