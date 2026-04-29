---
title: "Accesibilidad Web. Aria-label, alt y más"
description: "Accesibilidad Web: ¿Qué es y por qué es importante?"
---

## ♿ Accesibilidad Web: ¿Qué es y por qué es importante?

La **accesibilidad web** se refiere a la práctica de hacer sitios web que sean adaptables para todos. Es decir, que todo aquel que entre a nuestra página sea capaz de entenderla fácilmente, e interactuar con ella correctamente.

Esto no sólo hace referencia a la gente con distintas capacidades o limitaciones físicas como ser ciego o daltónico. Hace referencia a **cualquier** tipo de persona. Por ejemplo, que un texto tenga un color muy parecido al fondo o una fuente muy chica hará que sea difícil leerlo para cualquiera. La accesibilidad es vital y afecta a **todos**, más allá de sus capacidades.

En algunos lugares, el no cumplir con reglas mínimas de accesibilidad puede considerarse un delito. Además, tener buena accesibilidad afecta positivamente al **SEO** (Search Engine Optimization), ya que los motores de búsqueda premian los sitios accesibles, semánticos y con buenos metadatos.

---

## ⌨️ ¿Cómo hacemos que sea accesible?

El simple hecho de usar la **etiqueta correcta** para cada elemento ya suma accesibilidad. Por ejemplo, si haces una lista de botones, es importante usar etiquetas `<button>` para que sean accesibles mediante la tecla **TAB**.

La **Navegación TAB** es fundamental para personas que no usan el mouse. Al pulsar TAB, el foco se desplaza por los elementos interactivos, y con ENTER o ESPACIO se puede "hacer clic". Tu página debe ser 100% navegable mediante el teclado.

---

## 🏷️ El atributo `aria-label`

**ARIA** (Accessible Rich Internet Applications) es un conjunto de especificaciones diseñadas para mejorar la accesibilidad. El atributo **`aria-label`** aporta una descripción de texto para elementos que no tienen texto visible o necesitan ser más explícitos para los lectores de pantalla.

```html
<button id="cambiar-tema">Cambiar de Tema</button>
```
Este botón es **autodescriptivo**; no necesita `aria-label` porque el lector leerá directamente el texto.

Sin embargo, si el botón sólo contiene un ícono:

```html
<button aria-label="Cambiar de tema">
    <svg>...</svg>
</button>
```
Ahora el lector de voz dirá "Cambiar de tema" al enfocar el botón, aunque visualmente sólo sea un ícono.

---

## 🖼️ El atributo `alt`

El atributo **`alt`** en la etiqueta `<img>` cumple una función similar a `aria-label` pero específica para imágenes. Explica de qué trata la imagen para quienes no pueden verla.

```html
<img src="foto.jpg" alt="Foto de Miguel trabajando en su escritorio">
```

En imágenes puramente decorativas (como separadores o iconos de adorno), se recomienda dejar el atributo vacío: `alt=""`.

---

## ✅ Buenas Prácticas

1. **No redundancia:** No uses `aria-label` si el texto ya es visible y relevante.
2. **Prioridad semántica:** Prioriza el uso de etiquetas HTML5 semánticas antes de recurrir a atributos ARIA.
3. **Claridad:** Usa descripciones concisas pero descriptivas.
    *   **Bien:** `aria-label="Abrir configuraciones del usuario"`
    *   **Mal:** `aria-label="Configuraciones"`

---

## 🔍 Herramientas y Otros Atributos

Puedes probar la accesibilidad de tu sitio usando el **Narrador** de Windows (Win + Ctrl + Enter) o extensiones como **Screen Reader** para Chrome.

### Atributos útiles adicionales:
- **`role`**: Especifica la función de un elemento (usar solo si no hay una etiqueta semántica equivalente).
- **`aria-hidden`**: Indica que el lector debe ignorar ese elemento (útil para decoraciones).
- **`tabindex`**: Controla el orden del foco. `tabindex="0"` hace a un elemento seleccionable; `tabindex="-1"` lo quita del flujo del TAB.
- **`aria-labelledby`**: Referencia el ID de otro elemento para obtener su descripción.

### 📋 Tabla de Roles Comunes

| Rol | ¿Para qué sirve? | ¿Cuándo usarlo? |
| :--- | :--- | :--- |
| **`role="button"`** | Simula un botón. | Si usas un `div` o `span` como botón (no recomendado). |
| **`role="alert"`** | Notificación automática. | Para errores o mensajes importantes. |
| **`role="navigation"`** | Define navegación. | Si usas un `div` en lugar de `<nav>`. |
| **`role="dialog"`** | Indica un modal. | Para pop-ups o cuadros de diálogo custom. |

```html
<!-- Ejemplo de uso de role y tabindex -->
<div role="button" tabindex="0" onclick="accion()">Haz clic aquí</div>
```