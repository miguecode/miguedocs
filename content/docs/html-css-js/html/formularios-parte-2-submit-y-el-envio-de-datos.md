---
title: "Formularios Parte 2. Submit y el Envío de Datos"
description: "En el desarrollo web, los formularios son una pieza clave. Es una forma de pedirle todo tipo de datos al usuario. Para esto, HTML tiene distintas etiquetas."
---


## 📤 Formularios - Parte 2: Envío de Datos

Una vez que el usuario ha completado los campos, el siguiente paso es enviar esa información al servidor. Esto se logra mediante el evento de **submit**.

---

## 🔘 El botón de envío (`submit`)

Existen dos formas principales de crear un botón que dispare el envío de un formulario:

1.  **`<input type="submit">`**: La forma tradicional. El texto del botón se define con el atributo `value`.
2.  **`<button type="submit">`**: La forma moderna y más semántica. Permite anidar otros elementos (como iconos) dentro del botón.

```html
<form>
  <input type="text" name="usuario">
  <!-- Ambos hacen lo mismo: -->
  <input type="submit" value="Enviar Datos">
  <button type="submit">Finalizar Registro</button>
</form>
```

---

## 🛠️ Procesamiento con JavaScript

En el desarrollo web moderno, preferimos evitar que el navegador envíe el formulario de forma nativa (lo que recargaría la página). En su lugar, usamos JavaScript para interceptar el envío.

### `e.preventDefault()`
Este método es vital. Detiene la acción por defecto del navegador (el envío y recarga), permitiéndonos validar los datos o enviarlos mediante una petición asíncrona (Fetch/AJAX).

```javascript
const formulario = document.querySelector('#miForm');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Detenemos la recarga de la página
  console.log("Formulario interceptado con éxito.");
  // Aquí procesamos los datos...
});
```

---

## 🌍 Métodos de Envío: `GET` vs `POST`

El atributo **`method`** de la etiqueta `<form>` define cómo se envían los datos al servidor.

| Método | Comportamiento | Uso recomendado |
| :--- | :--- | :--- |
| **`GET`** | Los datos se envían visibles en la **URL** (ej: `?id=123`). | Búsquedas, filtros, datos no sensibles. |
| **`POST`** | Los datos se envían ocultos en el **cuerpo** de la petición. | Registro, login, datos sensibles o pesados. |

```html
<!-- Ejemplo de formulario seguro para contraseñas -->
<form method="POST" action="/api/login">
  <input type="password" name="pass">
  <button type="submit">Entrar</button>
</form>
```

---

## 📍 El atributo `action`

El atributo **`action`** indica la **URL** o destino a donde deben enviarse los datos. Por defecto, si no se especifica, se envían a la misma página donde se encuentra el formulario.

---

## 📝 Otros atributos útiles de `<form>`

- **`name`**: Identifica al formulario dentro de `document.forms`.
- **`enctype`**: Obligatorio si vas a enviar archivos (`multipart/form-data`).
- **`novalidate`**: Desactiva la validación nativa de HTML5 para manejarla 100% con JS.
- **`autocomplete`**: Puede ser `on` u `off` para el formulario completo.

---

> [!NOTE]
> Recuerda que la seguridad real ocurre en el **Backend**. Aunque valides todo en el Frontend con HTML y JS, el servidor siempre debe volver a validar los datos recibidos.