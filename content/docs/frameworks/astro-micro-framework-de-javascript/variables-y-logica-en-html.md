---
title: "Variables y Lógica en el Template"
description: "Aprende a integrar JavaScript en el HTML de Astro para crear plantillas dinámicas, utilizar mapeo de arrays y aplicar renderizado condicional mediante JSX-like syntax."
---

## Uso de Variables en el HTML

En Astro, la parte lógica del archivo (el **Frontmatter** entre `---`) permite definir variables de JavaScript o TypeScript que luego pueden inyectarse directamente en el HTML. Esto evita el "hardcodeo" y facilita la reutilización de datos.

Si necesitas cambiar un valor, solo lo haces en una línea del Frontmatter y se actualizará en todos los lugares del HTML donde se llame a esa variable.

### Ejemplo de Datos y Atributos:

```astro
---
const pageTitle = "Sobre Mí";

const identity = {
  firstName: "Miguel",
  country: "Argentina",
  occupation: "Desarrollador Web",
  hobbies: ["cine", "fútbol", "programación"],
};

const skills = ["HTML", "JavaScript", "CSS", "Astro"];
---

<h1>{pageTitle}</h1>

<ul>
  <li>Mi nombre es: {identity.firstName}</li>
  <li>Mi país es: {identity.country}</li>
  <li>Mi ocupación es: {identity.occupation}</li>
</ul>

<p>Mis habilidades son:</p>
<ul>
  <!-- Usamos .map() para generar elementos dinámicamente -->
  {skills.map((skill) => <li>{skill}</li>)}
</ul>
```

---

## Renderizado Condicional

Astro utiliza una sintaxis muy similar a JSX (React) para mostrar u ocultar elementos basándose en condiciones lógicas.

### Operador Lógico `&&`
Se utiliza cuando queremos mostrar algo solo si una condición es verdadera. Si es falsa, no se renderizará nada.

```astro
---
const happy = true;
const finished = false;
---

{happy && <p>¡Estoy feliz aprendiendo Astro!</p>}
{finished && <p>He terminado este tutorial.</p>}
```

En este ejemplo, solo se verá el primer párrafo porque la variable `finished` es falsa.

### Operador Ternario
Se utiliza cuando queremos mostrar una opción u otra dependiendo de la condición.

```astro
---
const goal = 3;
---

{goal === 3 ? (
  <p>Mi objetivo es terminar en 3 días.</p>
) : (
  <p>Mi objetivo no es de 3 días.</p>
)}
```

> [!TIP]
> Recuerda que toda esta lógica se ejecuta en **tiempo de construcción (Build Time)**. El navegador recibirá el HTML final ya procesado, sin la lógica de JavaScript necesaria para calcular estas condiciones, lo que garantiza una velocidad de carga superior.