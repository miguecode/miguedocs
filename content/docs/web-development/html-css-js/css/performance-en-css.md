---
title: "Performance en CSS"
---

> El Performance en CSS

- Como en todo, el performance es importante. Cuanto menos recursos y mejores prácticas usemos, mejor para el rendimiento. Vamos a ver distintas características para conseguir esto.


> Content-visibility: auto

- "content-visibility: auto" es una propiedad de optimización de rendimiento en CSS que retrasa el renderizado de un elemento hasta que se vuelve visible en la pantalla. Esto mejora la velocidad de carga de la página, ya que el navegador ignora los elementos fuera del viewport hasta que sean necesarios.

- Cuando aplicamos content-visibility: auto a un elemento...

- No se renderiza inicialmente si está fuera de la pantalla (fuera del viewport).
- Se renderiza solo cuando es visible en el área de visualización del usuario.
- Reduce el trabajo del navegador, optimizando la carga y el reflujo de la página.

- Ejemplo con un elemento <div>:

.lazy-load-section {
  content-visibility: auto;
}

- Si este div está fuera de la pantalla, su contenido no se renderizará hasta que el usuario haga scroll y lo traiga al viewport.

- Beneficios
- Acelera la carga inicial: El navegador solo procesa lo visible.
- Reduce el consumo de memoria y CPU: No renderiza contenido innecesario.
- Optimiza el reflujo y repintado: Especialmente útil en páginas con muchas imágenes o secciones largas.


- Otro ejemplo:

.section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}

contain-intrinsic-size: 1000px; evita un "salto" en la página al reservar un espacio estimado para el contenido oculto.


- ¿Cuándo usarlo?
- En secciones grandes que no se ven de inmediato.
- En listas largas o contenido dinámico.
- En páginas con imágenes pesadas.


> Lazy Loading en imágenes o iframes [HTML]

- Lazy Loading = Carga perezosa. Es decir, "No cargar cosas que no se están viendo".

- loading="lazy" es un atributo que se usa en imágenes (<img>) y iframes (<iframe>) para posponer su carga hasta que estén cerca del viewport del usuario. Esto reduce el tiempo de carga inicial de la página y ahorra ancho de banda.

<img src="imagen.webp" alt="Ejemplo" loading="lazy">

- Sin loading="lazy": La imágen se carga de inmediato, afectando la velocidad de la página.
- Con loading="lazy": La imágen sólo se carga cuando el usuario se desplaza hacia ellas.

- Dónde usar loading="lazy"?
- En imágenes grandes o en galerías.
- En imágenes que no sean visibles al inicio (ejemplo: artículos largos).
- En iframes de videos de YouTube o mapas de Google.

<iframe src="https://www.youtube.com/embed/videoID" loading="lazy"></iframe>


> Uso de srcset y sizes en imágenes

- Permite servir imágenes optimizadas según la resolución de pantalla.

<img 
  src="imagen-600.jpg" 
  srcset="imagen-300.jpg 300w, imagen-600.jpg 600w, imagen-1200.jpg 1200w" 
  sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
  alt="Ejemplo"
  loading="lazy"
>


> Uso de fetchpriority="high" en imágenes críticas

- Si una imagen es clave para la estructura de la página (como un logo o una foto de perfil), podemos decirle al navegador que la cargue antes que otras imágenes:

<img src="logo.webp" alt="Logo" fetchpriority="high">


> Terser, UglifyJS, esbuild y otros

- Estas herramientas sirven para reducir el tamaño de los archivos CSS y/o JS.


> Evitar fuentes externas bloqueantes

- Si cargamos fuentes desde Google Fonts, podemos usar display: swap para evitar que bloqueen el renderizado:

font-display: swap;

- Esto muestra una fuente del sistema temporalmente mientras carga la fuente personalizada.


> Preload de recursos importantes

- Si una imagen o archivo CSS/JS es crítico, podemos hacer un preload:

<link rel="preload" href="estilos.css" as="style">
<link rel="preload" href="imagen-destacada.webp" as="image">


> CSS Critical Path

- Extrae el CSS necesario para la parte visible de la página y lo inserta en línea (<style> en el <head>), después cargamos el resto de forma asíncrona.


> Resumen

Para mejorar el rendimiento de un sitio web, deberíamos usar una combinación de:

- loading="lazy" para imágenes e iframes.
- content-visibility: auto para evitar renderizados innecesarios.
- srcset y sizes para imágenes adaptativas.
- fetchpriority="high" para imágenes clave.
- Minificación de CSS y JS.
- font-display: swap para evitar bloqueos con fuentes externas.
- preload para recursos críticos.