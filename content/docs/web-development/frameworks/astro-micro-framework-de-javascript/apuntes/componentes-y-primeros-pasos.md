---
title: "Componentes y primeros pasos"
description: "La idea de los componentes es la misma que la de Angular. Son una fracción de código más pequeña de lo que es la página principal en sí. Son sus pequeñas partes..."
---


## Componentes

- La idea de los componentes es la misma que la de Angular. Son una fracción de código más pequeña de lo que es la página principal en sí. Son sus pequeñas partes independientes, cada una con su estructura, lógica y estilo. En Angular, generalmente cada componente lo tenemos dividido en archivos HTML, TS y CSS. En Astro, todo está en un unico archivo, el cual va a ser de tipo Astro.

- Los componentes en sirven para evitar la duplicación de código, y facilitar el mantenimiento y la reutilización de elementos de la interfaz. La idea es crear un componente una vez y utilizarlo más de una vez. Eso es reutilizar. Por ejemplo, un botón, una card, una navbar, una sección, lo que sea. 

- Y cuando decimos que sirve para el mantenimiento, nos referimos a que si quisieramos modificar algo en un futuro, sólo hay que ir a un lugar en específico. Es decir, no tenemos que modificar 10 veces el mismo botón, sino que lo modificamos una vez sola, en su componente. 


## Primeros pasos en Astro

### Archivo index.astro

El archivo index.astro es la página principal. Es lo que vamos a ver en pantalla. Este archivo es .astro. Un archivo .astro es un archivo que tiene HTML y JS/TS opcionales. También puede tener estilos. Todos se conectan en esta misma página HTML.

Para escribir JS o TS, lo ponemos entre tres guiones --- código JS/TS  ---

### Carpeta components

En esta carpeta van todos nuestros componentes. Los componentes van a ser también .astro.


## Creando un componente

- Vamos a crear un componente llamado Button. Para crearlo, lo hacemos de forma manual en la carpeta components.

- Por convención, los componentes tienen que escribirse en PascalCase (mayúscula inicial para cada palabra). O sea: Button en vez de button. Y esto es así para evitar la confusión con las etiquetas HTML. 

### El objeto Astro.props

El objeto Astro.props contiene las propiedades pasadas a un componente. Obviamente es un objeto propio de este framweork.

const { color = "blue", label = "Soy un botón" } = Astro.props;

Este es un ejemplo de uso. Si bien 'color' y 'label' son variables que van a tener el valor que le pasemos al componente a la hora de ser invocado, en esa línea le estoy pasando valores por defecto, en caso de que el usuario se olvide de pasarle valores.

### Importar los componentes

Para usar los componentes que creamos, tenemos que ir al archivo index.astro, y ahí, usar la función 'import'. 

---
import Button from '../components/Button.astro';
---

Y lo invocamos así en el HTML:

<Button color="red" label="Botón Componente Astro" />