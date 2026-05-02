---
title: "Qué es React, por qué se elige y con qué se combina"
description: "React es una biblioteca código abierto de JavaScript creada para crear interfaces de usuario, independientemente en dónde se use. Es agnóstico de la plataforma...."
---


## ¿Qué es React?

React es una biblioteca código abierto de JavaScript creada para crear interfaces de usuario, independientemente en dónde se use. Es agnóstico de la plataforma. Lo más importante a tener en cuenta es que React está hecho para construir interfaces de usuario, ya sea un sitio web, una aplicación móvil, una aplicación de consola, etc.

Es declarativo y está basado en componentes.

**Además, React es "isomórfico"**: se puede usar en cliente y servidor.

Como dijimos, es una biblioteca de JavaScript. Esto quiere decir que no es necesario más nada para usar React: simplemente el lenguaje JavaScript, e importar la biblioteca React.  Aunque en la práctica, como vamos a ver más adelante, vamos a necesitar algunas herramientas más (como la sintaxis JSX, esencialmente).


## Componentes en React

Particularmente, en React los componentes son funciones de JavaScript. 

Como en Angular o Astro, los componentes se escriben en mayúscula inicial, y van colocados embebidos en el código HTML, como si fuesen una etiqueta más. Pueden recibir propiedades en su declaración.

Esta combinación entre HTML y JavaScript, se llama JSX. Que en realidad, significa JS + XML. Entonces, JSX es la sintaxis que usa React para definir código HTML combinado con código JS, y así mostrar componentes. Es como cuando escribimos en un archivo .astro, y combinamos JS en el HTML.

Ejemplo

```typescript
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

Ejemplo con una lista de estos componentes

```typescript
function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}
```

## ¿Por qué se elige React, en qué casos es ideal y en cuáles no?

✅ Ventajas e ideales

- Cuando se necesita construir interfaces de usuario interactivas y dinámicas, que cambian mucho en tiempo real (ej: dashboards, redes sociales, apps con formularios complejos).
- Es eficiente gracias a su Virtual DOM, que minimiza los cambios en el DOM real.
- Está basado en componentes reutilizables, lo que favorece la organización y escalabilidad del código.
- Tiene un ecosistema enorme (librerías, herramientas, comunidad gigante).
- **Es muy flexible**: no impone estructura rígida como Angular. Se puede usar solo o con lo que quieras.

❌ Cuándo quizás no es la mejor opción

- **Proyectos muy pequeños y estáticos (ej**: landing pages simples sin mucha interacción). En esos casos puede ser “demasiado” y hasta innecesario. -> Acá es mejor un micro-framework como Astro.
- Si buscás un framework todo en uno (routing, estado global, data fetching, SSR incluidos de fábrica), quizás Next.js (un framework de React) o Angular sean mejores opciones. React puro requiere elegir y configurar librerías externas.
- En entornos con restricciones muy fuertes de rendimiento inicial (ej: sitios ultra ligeros para mercados con conexiones muy lentas), a veces frameworks estáticos (Astro, Hugo, etc.) pueden rendir mejor.


## ¿Con qué se combina una tecnología como React?

- **Herramientas de build/bundling**: Vite, Webpack, Parcel (aunque hoy en día Vite es el estándar por rapidez).
- **Frameworks sobre React**: Next.js (SSR, SSG, ISR, routing integrado), Remix (server-centric), Gatsby (generación estática).
- **Manejo de estado**: React Context API (incluido), Redux, Zustand, Jotai, Recoil, etc.
- **Estilos**: CSS Modules, TailwindCSS, Styled Components, Emotion.
- **Testing**: Jest, React Testing Library, Vitest, Cypress.
- **Integraciones backend y datos**: REST APIs, GraphQL (Apollo, Relay), Firebase, Supabase.
- **Mobile y multiplataforma**: React Native (apps móviles nativas), Expo, incluso frameworks como Electron para escritorio.

En resumen React no está “solo”, sino que se suele armar un stack a medida según el tipo de proyecto.