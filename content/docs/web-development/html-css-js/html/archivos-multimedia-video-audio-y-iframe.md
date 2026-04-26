---
title: "Archivos Multimedia (Video, Audio y Iframe)"
description: "¡Tu navegador no soporta el video!"
---


## 📺 Etiqueta `<video>`

La etiqueta `<video>` permite reproducir archivos de video directamente en el navegador.

```html
<video controls autoplay muted src="mivideo.mp4" poster="miniatura.jpg">
  ¡Tu navegador no soporta el video!
</video>
```

### Atributos principales:
- **`src`**: Indica la ruta del archivo de video.
- **`controls`**: Muestra los controles del reproductor (play/pause, volumen, pantalla completa). Es vital para que el usuario pueda interactuar.
- **`autoplay`**: Intenta reproducir el video automáticamente al cargar. 
- **`muted`**: Silencia el video por defecto. **Dato importante:** La mayoría de los navegadores modernos sólo permiten el `autoplay` si el video también tiene el atributo `muted`.
- **`poster`**: Define una imagen que se muestra como miniatura antes de que el video se reproduzca o mientras se descarga.
- **`loop`**: Hace que el video se reinicie automáticamente cada vez que termina.
- **`alt`**: Proporciona una descripción alternativa para mejorar la accesibilidad.

### Subtítulos con `<track>`
Podemos añadir pistas de texto (como subtítulos) usando la etiqueta `<track>` dentro del video.

```html
<video src="videocorto.mp4" controls>
  <track src="subtitulos_es.vtt" kind="captions" srclang="es" label="Español" default>
</video>
```

---

## 🎵 Etiqueta `<audio>`

Funciona de manera muy similar a la etiqueta de video, pero para archivos sonoros. Aunque técnicamente podrías pasarle un video para que sólo se escuche, lo ideal es usar formatos específicos de audio (MP3, WAV, OGG).

```html
<audio src="musica.mp3" controls>
  Your browser does not support the audio element.
</audio>
```

---

## 🖼️ Etiqueta `<iframe>`

La etiqueta **`<iframe>`** (Inline Frame) sirve para incrustar otro documento HTML dentro de nuestra página actual. Se usa comúnmente para insertar mapas de Google Maps, videos de YouTube o widgets de redes sociales.

### ¿Cómo se utiliza?
Generalmente, no escribimos el código desde cero. Páginas como YouTube o Google Maps ofrecen una opción llamada **"Insertar"** o **"Incorporar"** (dentro del menú "Compartir"). Al seleccionarla, nos brindan un bloque de código listo para copiar y pegar en nuestro HTML.

```html
<!-- Ejemplo de un iframe típico de YouTube -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/XXXXX" 
  title="Reproductor de video" 
  frameborder="0" 
  allowfullscreen>
</iframe>
```

> [!NOTE]
> Por razones de seguridad, muchos sitios bloquean la posibilidad de ser incrustados mediante iframes en dominios externos.