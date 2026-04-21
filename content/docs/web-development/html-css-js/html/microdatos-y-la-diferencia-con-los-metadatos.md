---
title: "Microdatos y la diferencia con los Metadatos"
---

> Diferencia entre microdatos y metadatos

- Si bien ambos tipos de datos ayudan al SEO, no son lo mismo:

1. Metadatos (<meta>, og:)
- ¿Qué hacen? Proporcionan información general sobre LA PÁGINA para buscadores y redes sociales
- ¿Dónde se usan? Se agregan en la etiqueta <head> con la etiqueta <meta>
- Ejemplo: Define el título, descripción y vista previa en redes sociales


2. Microdatos (Schema.org)		
- ¿Qué hacen? Proporcionan información extra sobre el LOS ELEMENTOS de la propia página
- ¿Dónde se usan? Se incrustan en las etiquetas HTML (itemscope, itemprop)
- Ejemplo: Ayuda a Google a entender que un <div> representa un negocio, receta, artículo, etc.	


- Metadatos (como <meta name="description"> y og:image) son datos sobre la página en general.
- Microdatos (como itemscope y itemprop) son datos dentro del contenido para que Google lo entienda mejor.


> Ejemplo de código de Microdatos

- Vamos a hacer que Google entienda que este código representa un restaurante y sus detalles.

<div itemscope itemtype="https://schema.org/Restaurant">
    <h2 itemprop="name">La Pizzería de Miguel</h2>
    <p itemprop="address">Avenida Siempre Viva 123, Buenos Aires</p>
    <p>Calificación: <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <span itemprop="ratingValue">4.8</span> de 5
    </span></p>
</div>

- Con esto, Google sabe que estamos mostrando información sobre un restaurante y su calificación.

- ¿Por qué usar microdatos?
- Mejoran el SEO → Google entiende mejor el contenido.
- Aparecen en resultados enriquecidos → Como estrellas en reseñas o detalles en eventos.
- Son fáciles de implementar → No requieren cambios grandes en el HTML.

- Alternativas: También podemos usar JSON-LD (más recomendado por Google) o RDFa en lugar de microdatos.