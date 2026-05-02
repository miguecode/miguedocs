---
title: "Tablas, Details y Summary, y Dialog"
description: "Las tablas, los details y summary, y los dialog son elementos de HTML que nos permiten organizar datos complejos y crear componentes interactivos de forma nativa."
---


## 📊 Tablas, Acordeones y Modales

HTML ofrece elementos especializados para organizar datos complejos y crear componentes interactivos de forma nativa.

---

## 📑 Etiqueta `<table>`

Originalmente se usaba para maquetar sitios completos, pero hoy en día eso es una **mala práctica**. Las tablas deben usarse exclusivamente para **datos tabulares** (excel, calendarios, estadísticas).

### Estructura de una tabla:
- **`<thead>`**: El encabezado de la tabla.
- **`<tbody>`**: El contenido principal de los datos.
- **`<tfoot>`**: Pie de página de la tabla (útil para totales o resúmenes).
- **`<tr>`** (Table Row): Define una fila.
- **`<th>`** (Table Header): Celda de título (centrada y negrita por defecto).
- **`<td>`** (Table Data): Celda de datos estándar.

```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Café</td>
      <td>$2.50</td>
    </tr>
  </tbody>
</table>
```

### Atributos útiles:
- **`rowspan`**: Permite que una celda ocupe varias filas hacia abajo.
- **`colspan`**: Permite que una celda se expanda horizontalmente ocupando varias columnas.

---

## ↕️ Details y Summary (Acordeones)

Permiten crear menús desplegables o secciones de "Preguntas Frecuentes" sin necesidad de JavaScript.

- **`<details>`**: Es el contenedor principal.
- **`<summary>`**: Es el título visible que, al hacer clic, despliega el resto del contenido.

```html
<details>
  <summary>¿Cómo optimizar imágenes?</summary>
  <p>Puedes usar formatos como WebP y herramientas como Squoosh.</p>
</details>
```

---

## 🪟 Etiqueta `<dialog>` (Modales Nativos)

El elemento **`<dialog>`** permite crear ventanas modales que se posicionan por encima de todo el contenido.

### Atributos y Métodos:
- **`open`**: Atributo booleano. Si está presente, el diálogo es visible.
- **`showModal()`**: Método de JavaScript que abre el diálogo eclipsando el fondo (backdrop).
- **`close()`**: Método para cerrar el diálogo.

```html
<dialog id="miModal">
  <p>¡Este es un mensaje importante!</p>
  <button id="btnCerrar">Entendido</button>
</dialog>

<button id="btnAbrir">Abrir Modal</button>

<script>
  const modal = document.querySelector("#miModal");
  const abrir = document.querySelector("#btnAbrir");
  const cerrar = document.querySelector("#btnCerrar");

  abrir.addEventListener("click", () => modal.showModal());
  cerrar.addEventListener("click", () => modal.close());
</script>
```

> [!TIP]
> Usar `<dialog>` es mucho más accesible que crear un modal manualmente con `<div>`, ya que el navegador maneja automáticamente el foco del teclado y el cierre con la tecla `Esc`.