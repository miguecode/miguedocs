---
title: "Ruteo básico, router-outler y Lazy Loading"
description: "Ruteo en Angular"
---


## Ruteo en Angular

- Como sabemos, nosotros en nuestra página vamos a tener distintos componentes. Y la página no se va a actualizar, sino que lo que se van a actualizar son los componentes que nosotros queramos. Es decir, algunos van a actualizarse, y otros van a quedar estáticos. Por esto es que Angular es SPA (Single Page Application), nosotros cambiamos las partes de la página, pero no a la página entera como tal.

- Además de esto, Angular usa la API de History del navegador (HTML5) para interceptar los cambios de URL y manejar el ruteo en memoria, sin hacer una recarga real. Por eso, aunque cambie la URL, no se hace una consulta HTTP nueva.

- Un ejemplo sencillo de esto es por ejemplo la página de Angular (angular.dev). Podemos ver que la navbar de la izquierda no cambia nunca, y lo único que cambia es el contenido de la derecha. Si vamos cambiando la sección a mostrar, podemos ver cómo va cambiando la URL. Y eso no nos reinicia la página, simplemente cambia la URL, y se actualiza el contenido mostrado a la derecha. Pero la navbar de la izquierda y otros elementos que no son necesario de actualizar, quedan estáticos. Eso del "cambio de URL" hace referencia al ROUTING en Angular. Y es lo que vamos a ver en este apunte.


## La etiqueta `<router-outlet />`

- Como sabemos, nosotros vamos a trabajar en el componente appComponent, que es el componente invocado en el archivo index.html. Si vemos su template (app.component.html), vamos a ver que tenemos todo en blanco, pero con una línea:

```text
<router-outlet />
```
- Esta es la clave de todo. El router-outlet lo que está haciendo es invocar el ruteo de nuestra app. Es decir, es la raíz de la cual van a salir todos los demás componentes de la aplicación.

- Para manejar lo que muestra el router-outlet, tenemos que trabajar en el archivo app.routes.ts. En el, vamos a poder ver un array de datos de tipo type = Routes. Además de importar el "Routes", nosotros tenemos que importar en este archivo todos los componentes que queramos enrutar.

```typescript
export const routes: Routes = [
  { path: "", redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];
```
- **Esto es un ejemplo de ruteo básico**: cada ruta es un objeto con distintas propiedades. Vamos a explicarlas:

1. path: Esta propiedad es obligatoria, y es simplemente el "nombre" del lugar al que queremos ir, es un string. Pero ojo: no es una ruta a un archivo, es como una dirección.

2. component: Es literalmente el componente al que hacemos referencia. Por ejemplo, ese "LoginComponent" es ni más ni menos que la clase del componente LoginComponent, así que la tenemos que importar para poder colocarla como valor de "component". Lógicamente, esto significa que cuando el ruteo se dirija a "login" (el nombre que le pusimos al path), vamos a invocar al componente LoginComponent.

3. redirectTo: Esta propiedad recibe el valor de otro path de nuestro ruteo. Lo que hace es que, si el ruteo ingresó por este path, ahora se lo va a redirigir al otro que tiene como valor en el redirectTo. Básicamente es un redireccionamiento.

4. pathMatch: Es simplemente una configuración para que el path note correctamente el uso de comillas "".


- ¿Qué significan los **? Los astericos dobles significan "Una ruta por defecto", entonces, si no se encontró coincidencia con ninguna ruta, ya sea "bienvenido", "login", o "registro" entonces el ruteo va a caer en la ruta por defecto, es decir, la que tenga **. La idea es que cuando el ruteo vaya ahí, lo que se muestre por pantalla sea un error 404, haciendo referencia a que el usuario está intentando llegar a un lugar que no existe en nuestra web, así que la ruta por defecto siempre tiene que mostrar dicho mensaje. En este caso, le vinculamos un componente ErrorComponent.

- Angular lo que hace es revisar cada "path" EN ORDEN. Es decir, en el orden en el que las declaremos, así que es importante prestarle atención a eso. Por eso es que la ruta por defecto, es decir, la que tiene **, siempre tiene que ser la última en declararse. Porque si la pusieramos primera, lo primero que se va a preguntar Angular es: ¿Estoy en una ruta cualquiera, es decir, en un path **? Y como la respuesta es sí, va a mostrar ese componente y no se va a poner a analizar los path siguientes. 

- Por si no se entendió, el ** es como un comodín, el ruteo siempre va a coincidir con el **. Por eso no hay que ponerlo antes de ninguna ruta, porque al ** va a entrar siempre. Y en cuanto entre a alguno, no analiza a los demás.


### Una curiosidad sobre el array routes

- Ese array llamado routes que creamos en app.routes.ts, es ni más ni menos que el que aparece en bootstrapApplication() en el archivo main.ts.

```typescript
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```
- Si notamos algún error con las rutas, hay que verificar que esto esté así.


## Ruteo con Lazy Loading

- Con lo que vimos hasta ahora, sabemos rutear los componentes de nuestra web. Pero hay un problema: si lo dejamos así como estaba antes, Angular va a cargar todos y cada uno de nuestros componentes apenas se carga la página. Esto no es lo ideal, ya que podrían haber componentes que todavía no van a ser mostrados, y los estamos cargando igual.

- En el desarrollo web el concepto de "Lazy Loading" (carga perezosa) hace referencia a cargar los elementos a medida en la que el usuario los requiera. Si en nuestra página hay un elemento que -de momento- no es visible para el usuario, no tiene sentido cargarlo. Es mejor cargarlo justo en el momento en el que el usuario vaya a verlo realmente. Eso es lazy loading y nos sirve para, lógicamente, mejorar el rendimiento de la web.

- Hablando de ruteo, la Lazy Loading serviría para que nuestros componentes se carguen sólo cuando accedemos a su ruta, y hasta que no llegue ese momento, no se carguen.

- Para aplicar Lazy Loading en el ruteo, en nuestro archivo "app.routes.ts" vamos a usar "loadComponent" en vez de "component", de la siguiente forma:

  {
```typescript
path: 'bienvenido',
loadComponent: () =>
  import('./components/bienvenido/bienvenido.component').then(
    (m) => m.BienvenidoComponent
  ),
```
  },

- Esto lo que hace es importar el archivo, tomarlo como si fuese un módulo y retornarlo como si fuese un componente. Lo ideal es que apliquemos esto en cada ruta, y así evitamos la importación de cada componente en el inicio de la app. De esta forma, el componente solamente se va a importar cuando la ruta se lo indique.