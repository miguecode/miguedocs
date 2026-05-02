---
title: "Configuración de React con Vite, y qué es Vite"
description: "Configuración de un proyecto de React con Vite"
---


## Configuración de un proyecto de React con Vite

Como vimos en el apunte anterior, React necesita usar JSX para ser eficiente. Y JSX es código que necesita ser transpilado a JS. Para eso, necesitamos usar alguna herramienta que lo haga por nosotros. Y esto no es lo único que necesitamos.

En el proceso de desarrollo, vamos a necesitar diferentes herramientas para poder trabajar de forma eficiente. Este tiempo de configuración es tedioso y no tiene sentido que lo resolvamos nosotros mismos. Para eso, ya existen tecnologías que hacen este trabajo por nosotros, como por ejemplo: Vite.

Vite (palabra en francés para "rápido", pronunciado como "vit") es una herramienta de desarrollo para la creación de aplicaciones web basadas en JavaScript. Sirve para React, Angular, Vue, SolidJS, Svelte, Astro, Nuxt, y demás. Nosotros, en este caso, lo vamos a usar para configurar nuestro proyecto React.

En otras palabras, Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarollo más rápida y ágil para proyectos web modernos. Consta de dos partes principales: 


1. Un servidor de desarrollo que proporciona mejoras en funcionalidades sobre módulos ES nativos, como HMR 	(Hot Module Replacemente)
2. Un comando de compilación que empaqueta nuestro código con Rollup, preconfigurado para generar recursos 	estáticos altamente optimizados para producción.

Entonces, el primer paso es instalar Vite. Es tan simple como ver en su documentación qué comando hay que utilizar. Se puede usar NPM, PNPM, Bun, o Yarn.

En este caso, vamos a usar npm, y para inicializar un proyecto con vite, creamos una carpeta y en ella ejecutamos:

```bash
npm create vite@latest
```
Este comando nos va a hacer ciertas preguntas por la consola como:

1. Nombre del proyecto
2. Framework a utilizar (Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik u Others)
3. Al elegir alguno, nos pregunta sus variantes (TypeScript, TypeScript + SWC, JavaScript, JavaScript + SWC) *


### ¿Qué elegir acá? ¿JS o TS? ¿Qué es SWC? *

1. La mejor opción es: TypeScript + SWC. 

2. El SWC es lo que mencionamos en el apunte anterior: es un transpilador de código como Babel. Pero como SWC usa Rust por debajo, es más rápido que Babel, y por eso hoy en día es más recomendable. 

3. Y sobre usar TS o JS, la historia de siempre -> TS es ampliamente mejor. Es más profesional por todo lo que ya sabemos. Si bien React nació siendo JS puro y fue así durante mucho tiempo, en los últimos años TS se convirtió en el estándar para los proyectos profesionales con React. Además, el ecosistema de Next.js, Remix, Vite, TanStack, Redux y demás, tienen soporte oficial para TS e incluso lo recomiendan. Next.js, el framework más popular sobre React, usa TS por defecto. Eso no quiere decir que esté mal usar JS ni nada. De hecho, para proyectos muy pequeños o de aprendizaje, es muy común usarlo.


Y listo. Ahora vamos a ver que tenemos distintos archivos creados como:

```text
- package.json 
- index.html por defecto
- .gitignore configurado
- vite.config.js
- **Carpeta src con**: App.jsx, main.jsx, App.css e index.css
```

Vite ya tiene configurado un servidor, por ende, para correr nuestro sitio podríamos hacer:

```bash
npm run dev
```

Esto ya que por defecto Vite nos deja ese script ya listo. El tema es que si bien las independencias aparecen indicadas, no todas están instaladas (en caso de que no hayamos hecho un npm init inicial anteriormente, que lo podríamos haber hecho). Por ende, antes de hacer eso, tenemos que tirar un npm install:

```bash
npm install
```
Ahora sí, ya tenemos el node_modules instalado y podemos tirar el "npm run dev" y ver nuestro sitio funcionando en nuestro navegador.

A partir de acá, ya podemos trabajar con React tranquilamente, la configuración es esto. Nos queda ya el archivo App.jsx para modificar lo que vemos inicialmente.