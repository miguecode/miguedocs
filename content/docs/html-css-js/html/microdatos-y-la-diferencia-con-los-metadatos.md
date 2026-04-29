---
title: "Microdatos y la diferencia con los Metadatos"
description: "Diferencia entre microdatos y metadatos"
---


## 🧠 Microdatos vs Metadatos

Aunque ambos términos suenan parecidos y ayudan al **SEO**, cumplen funciones diferentes dentro de la arquitectura de la web.

---

## 📊 Tabla Comparativa

| Característica | Metadatos (`<meta>`) | Microdatos (`itemprop`) |
| :--- | :--- | :--- |
| **Ubicación** | Siempre en el `<head>`. | Dentro del `<body>`, en el contenido. |
| **Propósito** | Información general de la **página**. | Información específica de los **elementos**. |
| **Visualización** | Invisibles para el usuario. | Se incrustan en etiquetas visibles. |
| **Ejemplo** | Título, descripción para redes. | Nombre de restaurante, precio, reseñas. |

---

## 🔍 Microdatos (Schema.org)

Los **Microdatos** se utilizan para que los motores de búsqueda entiendan exactamente qué representa un fragmento de tu HTML. Esto ayuda a generar **Rich Snippets** (resultados enriquecidos con estrellas, precios o fechas).

### Atributos clave:
- **`itemscope`**: Define que el contenido dentro de la etiqueta es un "ítem" específico.
- **`itemtype`**: Indica qué tipo de ítem es (usando esquemas de **Schema.org**).
- **`itemprop`**: Define las propiedades específicas de ese ítem (nombre, dirección, rating).

---

## 💻 Ejemplo Práctico

Hagamos que Google detecte que este código es un restaurante real:

```html
<div itemscope itemtype="https://schema.org/Restaurant">
  <h2 itemprop="name">La Pizzería de Miguel</h2>
  <p itemprop="address">Avenida Siempre Viva 123, Buenos Aires</p>
  
  <p>
    Calificación: 
    <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
      <span itemprop="ratingValue">4.8</span> de 5
    </span>
  </p>
</div>
```

---

## 🚀 ¿Por qué usarlos?

1.  **Mejor SEO**: Google indexa tu contenido con mayor precisión.
2.  **Resultados Enriquecidos**: Tu sitio resaltará en las búsquedas con estrellas de reseñas o detalles de eventos.
3.  **CTR más alto**: Los usuarios tienden a hacer más clic en resultados que muestran información detallada directamente en el buscador.

---

> [!TIP]
> Aunque los microdatos son útiles, Google actualmente recomienda usar **JSON-LD** (un bloque de script con formato JSON) para estructurar datos, ya que separa la información semántica del diseño visual del HTML.


		# Code Interaction Summary:
		The following is an important list of files that you and the user have previously edited and viewed.
		If you believe the file contents are important, you may view the file again to regain context.
		If you need to see the exact diff made, run commands using the user's version control system, if available, to see what has changed.
		If one is not available, view the file to see its current state.
		<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\etiquetas-semanticas-main-section-footer-etc.md</target_file>
	<lines_modified>11-93</lines_modified>
	<edit_summary>Updated the document to improve the presentation of semantic HTML tags. Key changes include structuring the content with an initial summary table for quick reference to each tag's function, clarifying the difference between `strong` and `mark` emphasis, and optimizing examples for `details` and `figure` with cleaner code blocks. Strategic use of bolding for tag names and key terms was also applied to enhance readability.</edit_summary>
</edited_file>
<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\flujo-de-creacion-de-una-pagina-html-y-dom.md</target_file>
	<lines_modified>6-78</lines_modified>
	<edit_summary>Standardized headers, improved diagram blocks using Mermaid for better visualization of the Critical Rendering Path, and applied bolding for technical terms throughout the text. Added detailed flows for standard rendering and accessibility while maintaining the original technical definitions.</edit_summary>
</edited_file>
<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\formularios-parte-1-inputs-y-controles-de-form.md</target_file>
	<lines_modified>7-171</lines_modified>
	<edit_summary>Standardized Markdown structure with clear headers and categorized sections for input types, essential attributes, and labeling. Examples for select, textarea, and fieldset elements were optimized into clean code blocks, and the vital connection between label and input for accessibility was emphasized through bolding and targeted explanations.</edit_summary>
</edited_file>
<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\formularios-parte-2-submit-y-el-envio-de-datos.md</target_file>
	<lines_modified>7-145</lines_modified>
	<edit_summary>Standardized Markdown headers and structures. Key technical terms like `submit`, `method`, `action`, `GET`, `POST`, and `preventDefault()` were bolded for clarity. Added a comparative table for GET vs POST methods and provided optimized code examples for both native HTML submission and JavaScript interception.</edit_summary>
</edited_file>
<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\html-web-components.md</target_file>
	<lines_modified>7-64</lines_modified>
	<edit_summary>Standardized headers and applied bolding to core Web Component technologies (template, slot, Shadow DOM). Structured the content with a summary table for the three pillars and optimized code examples to clearly separate the HTML/CSS template from the JavaScript implementation logic.</edit_summary>
</edited_file>
<edited_file>
	<target_file>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\metatags-etiquetas-meta.md</target_file>
	<lines_modified>7-105</lines_modified>
	<edit_summary>Standardized Markdown structure by upgrading headers and implementing clear categorization for meta tags (Structure, SEO, Robots, Open Graph). Applied bolding to key attributes and property names, and added a descriptive table for Open Graph properties to enhance clarity on social sharing configurations.</edit_summary>
</edited_file>

<viewed_file>
	<absolute_path>c:\Users\JUNIOR\Desktop\miguedocs\content\docs\web-development\html-css-js\html\metatags-etiquetas-meta.md</absolute_path>
	<lines_viewed>90-99</lines_viewed>
	<learnings>Confirmed the fix for the text glitch at the end of the file, ensuring the Tip block concludes cleanly at the social media tools links.</learnings>
</viewed_file>