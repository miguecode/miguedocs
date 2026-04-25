---
title: "Qué es Tailwind y comparación con Bootstrap"
description: "¿Qué es Tailwind CSS?"
---


## ¿Qué es Tailwind CSS?

- TailwindCSS es un framework CSS de utilidad que permite diseñar interfaces web mediante clases predefinidas directamente en el HTML. La idea es esa, aplicar estilos de forma más rápida que en CSS puro gracias al uso de utilidades.

- A diferencia de otros frameworks como Bootstrap, Tailwind no proporciona componentes prediseñados, sino que brinda herramientas para aplicar estilos desde cero y de forma muy personalizable (más que Bootstrap), todo esto gracias al uso de utilidades.

- ¿A qué nos referimos con "utilidades"? Las utilidades son los distintos nombres de clases preestablecidos por Tailwind. Por ejemplo, "bg-blue", que traducido a CSS puro sería: "background-color: blue;".

- Otro ejemplo de una "utilidad" o "clase utilitaria":

`<p text-center font-bold text-xl>`Hola Mundo<>

- **Su traducción en CSS puro sería esto**: 

text-align: center;
font-weight: bold;
font-size: 1.25rem;  // o "20px"

- Y esto es así ya que, lógicamente, Tailwind CSS no deja de ser CSS. Es lo mismo. Las clases utilitarias de Tailwind son puramente CSS por debajo, sin ninguna magia.


## ¿Por qué existe Tailwind?

- TailwindCSS existe para abordar las limitaciones y frustraciones comunes en CSS tradicional y frameworks como Bootstrap, que tienden a ofrecer soluciones rígidas o de difícil personalización. Busca un equilibrio entre la flexibilidad de CSS puro y la velocidad de desarrollo de un framework.

- Su objetivo principal es acelerar el desarrollo web permitiendo un diseño más directo y modular, sin necesidad de escribir a mano reglas CSS para cada estilo. Se busca reducir la cantidad de CSS personalizado, mantener estilos consistentes y facilitar el mantenimiento del código. Es decir, se busca una coherencia visual en toda la web.


## Configuración de las utilidades

- Además de las clases utilitarias creadas por Tailwind, nosotros también podemos meter mano ahí. Tailwind ofrece configuraciones predeterminadas que se pueden sobreescribir fácilmente mediante el archivo tailwind.config.js. Por ejemplo, si quisiéramos cambiar la paleta de colores, podríamos redefinir el azul predeterminado (bg-blue) para que sea un tono personalizado en todo el proyecto. O también podemos "extender" las reglas, creando, por ejemplo, una clase llamada "azul-eléctrico". Y que esa clase sea un color específico que indiquemos nosotros. Todo eso se puede hacer en el archivo tailwind.config.js.


## Comparación entre Tailwind CSS, Bootstrap y CSS puro 

- CSS puro es "el rey de la personalización", ya que manejas absolutamente todo a tu gusto, con máxima precisión en cada detalle. El problema que tiene es que usando CSS puro, el desarrollo de proyectos grandes se puede volver tedioso, lento o repetitivo. Es mucho CSS escrito a mano y un framework puede agilizar las cosas. También puede dar lugar a estilos desordenados o inconsistentes si no se estructuran bien las reglas CSS. Por eso se dice que CSS es fácil de aprender, pero difícil de dominar.

- Bootstrap reduce esa cantidad de CSS escrito a mano, brindando clases utilitarias y componentes con diseños ya definidos, los cuales se pueden personalizar pero hasta cierto punto. Es ideal para obtener resultados rápidos con diseños ya creados, para gente que no se preocupa tanto en la personalización. Su uso es más "estricto" que Tailwind, porque si quisieras un estilo más original o personalizado, tendrías que pisar constantemente los estilos ya creados por Bootstrap. Es un framework de CSS tradicional y muy utilizado, ya que es un estándar "probado" con muchos recursos de soporte.

- Tailwind, al igual que Bootstrap, reduce totalmente la cantidad de CSS escrito a mano. Su enfoque está totalmente dirigido al uso de clases utilitarias y la gran diferencia que tiene con Bootstrap es que NO tiene componentes predefinidos. Sólo tiene clases utilitarias. Esto hace que Tailwind sea mucho más flexible y personalizable que Bootstrap. Más alla de todo, tiene una desventaja; El uso constante de utilidades (las cuales van en el HTML), se puede decir que "ensucia" el código. Y va contra la buena práctica de separar la estructura de los estilos. Es decir, de no mezclar HTML con CSS. 

- **Aunque, ojo**: usar las utilidades NO es lo mismo que escribir estilos in-line. Es decir, no se está haciendo uso de la propiedad "style" de los elementos. Ya que, por ejemplo, de esa forma no se podrían modificar los hovers. Con las utilidades sí.

- También cabe decir que últimamente está siendo más aceptada la práctica de agregar clases en el HTML, "ensuciándolo". Esto se dio así ya que muchas herramientas modernas como componentes de React Angular o Vue, lo están haciendo al integrar estilos en el HTML. Y al fin y al cabo, se compensa con la modularidad y el mantenimiento a largo plazo. Separar estrictamente HTML y CSS suele ser menos relevante en entornos modernos donde frameworks como React o Angular ya acostumbran a mezclar estructura y lógica.

- Por cierto, existe una herramienta llamada Tailwind JIT que optimiza el CSS generado para incluir solo las clases realmente usadas en el proyecto, intentando también solventar la carga de estilos en HTML.