---
title: "Grupos de rutas (rutas hijas) y Navegación entre rutas"
description: "Grupos de rutas (rutas hijas)"
---


## Grupos de rutas (rutas hijas)

- Para mejorar la legibilidad y no tener todas las rutas en un mismo archivo, podemos agruparlas:

```typescript
{ path: 'auth', loadChildren: () => import('./views/auth./auth.routes').then(c => c.routes) }
```
- En este caso, el loadChildren carga un nuevo archivo de ruteo. En ese nuevo archivo van a haber nuevas rutas que van a ser hijas de este path 'auth'. En ella es donde van a estar los loadComponent(). Como vemos en el import, lo que estamos pasando es un "auth.routes", es decir, otro archivo de ruteo, que en este caso tiene el nombre de otro componente (auth). Nosotros podríamos tener varios así, y así agrupar cada ruta en un componente específico.

- Ese archivo "auth.routes.ts" lo creamos nosotros a mano. La semántica es opcional, pero una buena opción es crear la carpeta 'views'. Y en ella, colocar la carpeta 'auth'. Después, dentro de la carpeta 'auth', coloco los 3 componentes que quiero que sean hijos de 'auth'. Entonces, podría poner componentes como login, profile y register allí.

- Las rutas que estén declaradas en auth.routes.ts, van a terminar con paths así: /auth/[path]. Es decir, se le agrega el /path/ adelante automáticamente, enfatizando que estamos en una "sub-ruta".


## Navegación mediante routerLink

- Como es lógico, nosotros no queremos que el usuario navegue entre las distintas rutas de nuestro sitio teniendo que escribir el path específico en la URL. Lo ideal es que tenga un menú o navbar en el cual pueda elegir a dónde ir.

- Vamos a crear un simple botón, y le vamos a agregar la propiedad routerLink, la cual, para usarla, tenemos que importar el componente RouterLink en el componente donde queramos usarlo:

```text
<button routerLink="bienvenido">Bienvenido</button>
```
- En este caso, "routerLink" nos va a redirigir a la ruta que le indiquemos.

- **OJO**: Cuando ponemos el routerLink, podemos poner "bienvenido" o "/bienvenido", y no es lo mismo. Sin la " / " al principio, estamos indicando una ruta ABSOLUTA a la aplicación base. Es decir, ignora todas las sub-rutas y nos manda directamente a /bienvenido. En cambio, con el " / ", se va a parar primeramente en la ruta actual y va a agregar el /bienvenido al final de todo: assa/saas/sas/bienvenido

routerLink="/bienvenido": ruta absoluta → empieza desde la raíz (vamos directo a /bienvenido)
routerLink="bienvenido": ruta relativa → se concatena a la ruta actual (vamos a [ruta-actual]/bienvenido)

### Vamos a hacer un ruteo básico:

```html
<h1>Ruteo</h1> <br>

<button routerLink="/bienvenido">Bienvenido</button>
<button routerLink="/login">Login</button>
<button routerLink="/error">Error</button>
```
- Esto funciona perfectamente. Al pulsar cada botón, el routerLink nos va a redirigir hacia la ruta que indiquemos.


## Navegación mediante Router (TypeScript)

- Hasta ahora vimos cómo hacer los ruteos por HTML. Pero también se puede por lógica, es decir, por TypeScript. Esto lo podemos hacer gracias al servicio Router, veamos:

```typescript
private router = inject(Router);

volver() {
	this.router.navigateByUrl('bienvenido');
}
```
- Acá lo que hicimos fue crear una función volver(), que al ejecutarse, nos manda a la ruta con path 'bienvenido'. Así es como se usa Router con el método "navigateByUrl()", el cual recibe una URL completa como string. Como cuando hacemos el routerLink="/..." en código HTML.

- Pero también existe el método navigate, el cual es más versatil ya que acepta arrays y parámetros:

```text
this.router.navigate(['/usuario', id]);
```
- Si la id de usuario fuese 123, esta línea nos llevaría a /usuario/123. Además, con navigate podríamos pasar opciones como queryParams.

- **Un ejemplo básico de navegación lógica podría ser**: 

```typescript
if (usuario.estaLogueado) {
  this.router.navigate(['/dashboard']);
} else {
  this.router.navigate(['/login']);
}
```