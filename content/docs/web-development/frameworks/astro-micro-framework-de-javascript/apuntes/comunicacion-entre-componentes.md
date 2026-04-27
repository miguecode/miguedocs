---
title: "Comunicación entre Componentes: Props y Slots"
description: "Aprende las dos formas principales de pasar información y contenido entre componentes en Astro: mediante propiedades dinámicas y el sistema de Slots."
---

## Comunicación de componentes

Al igual que en otros frameworks modernos, en Astro los componentes se comunican principalmente mediante una relación de **Padre a Hijo**. Existen dos mecanismos fundamentales para esto: el paso de datos (Props) y el paso de contenido (Slots).

---

## 1. Comunicación mediante Props (Propiedades)

Esta es la forma más directa de enviar información. El componente Padre invoca al Hijo y le envía atributos que el Hijo captura mediante el objeto global `Astro.props`.

### Paso a paso:
1.  **En el Hijo**: Definimos qué datos esperamos recibir desestructurando `Astro.props`.
2.  **En el Padre**: Importamos al Hijo y le pasamos los valores deseados.

```astro
---
// Hijo.astro
const { nombre, edad } = Astro.props;
---
<div>
  <h2>Usuario: {nombre}</h2>
  <p>Edad: {edad}</p>
</div>
```

---

## 2. Comunicación mediante Slots

Los **Slots** permiten que el componente Padre envíe **fragmentos de HTML** completos para que se rendericen dentro del componente Hijo. Esto proporciona una flexibilidad mucho mayor que las props de texto simple.

### Ejemplo básico:
El componente Hijo define un lugar reservado usando la etiqueta `<slot />`.

```astro
---
// Hijo.astro (Un contenedor genérico)
---
<div class="card">
  <h3>Título fijo</h3>
  <hr />
  <!-- Aquí caerá todo lo que el padre ponga dentro de las etiquetas -->
  <slot />
</div>
```

**Uso desde el Padre:**
```astro
---
// Padre.astro
import Hijo from './Hijo.astro';
---
<Hijo>
  <p>Este párrafo es el contenido que viaja al slot del hijo.</p>
  <button>Acción dinámica</button>
</Hijo>
```

### Slots con nombres (Named Slots)
Si un componente Hijo necesita colocar contenido en distintos lugares, podemos usar slots con nombre:

```astro
<!-- Hijo.astro -->
<header>
  <slot name="header" />
</header>
<main>
  <slot /> <!-- Slot por defecto -->
</main>
```

```astro
<!-- Padre.astro -->
<Hijo>
  <h1 slot="header">Título de la cabecera</h1>
  <p>Contenido principal.</p>
</Hijo>
```

> [!NOTE]
> Mientras que las **Props** sirven para pasar datos (strings, números, objetos), los **Slots** sirven para pasar estructura y marcado HTML.