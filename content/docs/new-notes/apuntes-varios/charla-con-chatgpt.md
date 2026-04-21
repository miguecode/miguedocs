---
title: "Charla con ChatGPT"
---

Bien. Vamos por el primer cambio que nos hizo hacer:

En el archivo "app.config.ts":

import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/*export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};*/

export const appConfig: ApplicationConfig = {
  	providers: [provideExperimentalZonelessChangeDetection(), provideRouter(routes), 	provideClientHydration(withEventReplay())]
};


Lo que está comentado es lo que venía por defecto. Y lo que no está comentado es el cambio que nos hizo hacer. Usamos el provideExperimentalZonelessChangeDetection(), esto supuestamente para hacer uso de la nueva característica experimental de detección de cambios "Zoneless", que reemplaza a Zone.js ¿Está bien?

Eso sí: el tiene una leve diferencia respecto a mi archivo: Mi archivo viene por defecto con eso de "withEventReplay()", el archivo del profesor del curso no tiene ese método ahí. Y no nos habla de ello. Como dije al principio, el está usando Angular 18 y yo 19. ¿Qué es eso? ¿Debería sacarlo o dejarlo? ¿Da igual?












¡Excelente pregunta! 🔥 Estás entendiendo todo perfecto, vamos paso a paso:

1. Sobre el cambio a provideExperimentalZonelessChangeDetection()
✅ Sí, está perfecto lo que hiciste.

Lo que vos comentás es correcto:

El provideZoneChangeDetection({ eventCoalescing: true }) usa Zone.js todavía (aunque más optimizado).

El provideExperimentalZonelessChangeDetection() desactiva completamente Zone.js, activando el nuevo sistema experimental de detección de cambios basado en Signals y otras optimizaciones.

Así que tu cambio es válido y bien aplicado. 🔥

2. Sobre withEventReplay()
Ahora el punto importante que me preguntaste:

¿Qué es withEventReplay()? 🤔

withEventReplay() es una opción que se activa cuando usás Server Side Rendering (SSR) en Angular.

Su propósito es que, cuando Angular hidrata la página en el navegador (es decir, cuando pasa de la versión renderizada en el servidor al cliente), no se pierdan eventos que ocurrieron mientras Angular todavía estaba inicializándose.

⏳ Imaginate esto:

El servidor renderiza tu página (SSR).

El navegador recibe HTML ya armado.

El usuario podría, muy rápido, hacer click en un botón antes de que Angular termine de "hidratar" el sitio.

Si Angular todavía no terminó de inicializar, ese evento (ese click) se podría perder ❌.

withEventReplay() lo que hace es "recordar" esos eventos tempranos y los vuelve a ejecutar una vez que Angular ya está listo.

3. ¿Por qué a vos te aparece y al profesor no?
Porque:

En Angular 19 el equipo de Angular decidió que, por defecto, al crear un nuevo proyecto con soporte de SSR y Client Hydration, se agregue automáticamente withEventReplay().

En Angular 18, esto no venía habilitado por defecto.

Por eso tu archivo generado tiene withEventReplay() y el proyecto del profesor (que estaba en Angular 18) no lo tiene. 🧠

4. Entonces... ¿deberías dejarlo o sacarlo?
Mi consejo objetivo es:

✅ Dejalo.

No te afecta en nada si no usás Server Side Rendering ahora mismo (no va a romper nada).

Y si algún día activás SSR o hidratación, te va a proteger automáticamente de perder eventos importantes.

No ocupa recursos de más ni genera sobrecarga significativa. Es un "extra" de seguridad.

🎯 Conclusión rápida:

Pregunta	Respuesta
¿El cambio a provideExperimentalZonelessChangeDetection() está bien?	Sí.
¿Qué es withEventReplay()?	Guarda eventos de usuario tempranos durante la hidratación de SSR.
¿Deberías dejarlo o sacarlo?	Dejalo. No molesta y puede ayudarte si después usás SSR.





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

El siguiente cambio se hizo en el archivo angular.json:


{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "first-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "css",
          "changeDetection": "OnPush"
        }
      },
}

Exactamente en la parte de "schematics". El proyecto del profesor ya venía con esto:

"@schematics/angular:component": {
    "style": "css"
}

Y él lo que hizo fue agregar lo de "changeDetection": "OnPush". Mi proyecto, en cambio, venía con el "schematics": {}. Es decir, vacío. Así que yo mismo le agregué todo lo lo que tenía el profe, y agregando tambien lo del changeDetection en OnPush.











¡Excelente 👏! Te felicito porque lo entendiste perfectamente y actuaste de la forma correcta.

Vamos a repasar rapidito para asegurarte que tenés todo súper claro:

🎯 ¿Qué es "schematics" en angular.json?
Schematics son plantillas o reglas que Angular usa cuando creás cosas automáticamente (como componentes, servicios, módulos, etc.) usando la CLI (ng generate o ng g).

Lo que pongas en "schematics" va a ser el comportamiento por defecto cada vez que crees un nuevo elemento.

Por ejemplo:

bash
Copiar
Editar
ng g c ejemplo
➡️ Eso genera un componente nuevo.

Lo que definiste en angular.json (en "schematics") le dice a Angular:

"Usá css para los estilos (no scss, ni sass, ni less)"

"Y usá ChangeDetectionStrategy.OnPush por defecto en todos los componentes nuevos."

🔥 ¿Qué hace changeDetection: "OnPush"?
Cuando creás un componente, Angular le pone automáticamente:

typescript
Copiar
Editar
changeDetection: ChangeDetectionStrategy.Default
(que es el modo "normal", basado en Zone.js).

Cuando ponés "changeDetection": "OnPush":

Angular ya sabe que ese componente es más "eficiente".

Sólo va a actualizarse cuando cambie un @Input o una Signal/Observable relacionada.

Es ideal para el nuevo enfoque Zoneless + Signals.

Además, OnPush se lleva muy bien con SSR.

🧠 Detalle sobre tu caso
Vos dijiste que tu angular.json venía así:

json
Copiar
Editar
"schematics": {}
(Es decir, vacío).

Y vos agregaste manualmente:

json
Copiar
Editar
"schematics": {
  "@schematics/angular:component": {
    "style": "css",
    "changeDetection": "OnPush"
  }
}
➡️ ¡Perfecto! 🔥 Es exactamente lo que tenías que hacer.

Ahora, todos los nuevos componentes que crees en tu proyecto ya nacerán con:

style: 'css'

changeDetection: 'OnPush'

✅ Sin que tengas que escribirlo manualmente cada vez.

📢 Nota rápida
El hecho de que el profe tenía "schematics" ya preconfigurado es simplemente porque él seguramente usó una opción distinta al crear el proyecto o porque su versión de Angular CLI 18 lo incluía por defecto.

En Angular 19, puede variar si respondés que sí o no a ciertas preguntas cuando hacés ng new.

Pero no importa: ahora vos ya lo dejaste bien configurado y eso es lo que importa.

🏆 Resumen

Acción	Estado
Agregar changeDetection: OnPush	✅ Correcto
Agregar style: css	✅ Correcto
Adaptarlo en tu proyecto Angular 19	✅ Correcto
¿Seguimos con el próximo cambio/configuración que haya hecho el profesor? 🚀
(¡Te estás armando un proyecto súper moderno, eh! 💻✨)







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Mira, ahora volvimos al archivo de antes y agregamos más cositas, y las últimas de este archivo:

import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

/*export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
  ],
};











📚 Análisis de tu nuevo app.config.ts
typescript
Copiar
Editar
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), // ✅
    provideRouter(routes, withComponentInputBinding()), // 🛣️
    provideHttpClient(withFetch()), // 🌐
    provideClientHydration(withEventReplay()), // 💧
  ],
};
✅ 1. provideExperimentalZonelessChangeDetection()
Esto ya lo habíamos hablado: detección de cambios sin Zone.js.

Usás Signals de forma nativa, ganando eficiencia.

🛣️ 2. provideRouter(routes, withComponentInputBinding())
provideRouter(routes) es el clásico proveedor para activar el enrutamiento.

Ahora agregaste withComponentInputBinding(), que es nuevo 🔥.

¿Qué hace withComponentInputBinding()?
Te permite pasar datos directamente a un componente desde la URL, usando los inputs del componente.

Antes tenías que hacer todo a mano con ActivatedRoute (medio tedioso 😵‍💫).
Ahora, con withComponentInputBinding(), Angular asocia automáticamente los valores de la URL a las propiedades del componente.

👉 Ejemplo rápido:

URL:

bash
Copiar
Editar
/detalle-producto/42
Componente:

typescript
Copiar
Editar
@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  template: `ID del producto: {{ id }}`
})
export class DetalleProductoComponent {
  @Input() id!: string; // Angular lo llena solito 💥
}
🔥 Recontra útil para apps modernas, sobre todo combinándolo con SSR.

🌐 3. provideHttpClient(withFetch())
provideHttpClient() es para usar el nuevo API HTTP de Angular (basado en HttpClient, como siempre).

Le agregás withFetch(), que hace que Angular internamente use el API fetch nativo del navegador en vez de XMLHttpRequest.

¿Ventajas de usar fetch?

Es más moderno y rápido.

Funciona mejor con SSR e hidración.

Es menos pesado que XMLHttpRequest.

➡️ Así que está buenísimo usarlo.

💧 4. provideClientHydration(withEventReplay())
provideClientHydration() lo que hace es habilitar la hidratación: reconstruir los eventos y el estado en el navegador sin tener que volver a renderizar todo desde cero.

withEventReplay() indica que Angular va a capturar los eventos que ocurrieron antes de la hidratación completa (por ejemplo, un click que el usuario haga mientras la página todavía se está terminando de preparar), y los reinyecta cuando todo esté listo.

Traducción simple:
➡️ El usuario puede interactuar apenas ve la página, aunque todavía no esté 100% "despertada" la app en el navegador.

¡Mejora mucho la UX! 🚀

🎯 Resumen final

Configuración	¿Está bien?	¿Recomendado?
provideExperimentalZonelessChangeDetection()	✅	✔️
provideRouter(routes, withComponentInputBinding())	✅	✔️
provideHttpClient(withFetch())	✅	✔️
provideClientHydration(withEventReplay())	✅	✔️
Conclusión:

👉 Tu app.config.ts está PERFECTAMENTE MODERNO. Estás usando las prácticas más actuales de Angular 19, ¡inclusive las experimentales! 🚀🔥

¿Querés que ahora pasemos a ver cómo debería ser un primer componente hecho siguiendo esta arquitectura moderna (standalone, signals, OnPush, etc.)? 🎯
Te puedo armar un ejemplo "modelo" si querés. 🚀







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Okey, ahora me encuentro con 2 "inconvenientes". El profesor hizo el típico ng serve. Y lo hice yo. Hasta ahí, todo bien, la página la puedo visualizar perfectamente. Pero me aparecieron 2 mensajes por consola que a él no le aparecieron. El primero es este:

Component HMR has been enabled.
If you encounter application reload issues, you can manually reload the page to bypass HMR and/or disable this feature with the --no-hmr command line option.
Please consider reporting any issues you encounter here: https://github.com/angular/angular-cli/issues

Este no tengo idea de por qué aparece, pero no me parece grave¿No?

El que si me llama más la atención es el segundo:

NG0914: The application is using zoneless change detection, but is still loading Zone.js. Consider removing Zone.js to get the 
full benefits of zoneless. In applications using the Angular CLI, Zone.js is typically included in the "polyfills" section of the angular.json file.

Yo entiendo lo que dice el warning, porque el profesor también lo explicó (pero a él no le salió este mensaje por consola, creo). Lo que dice la consola es que en el archivo angular.json, todavía está presente el polyfill de zone.js, y también existe la dependencia de zone.js. Yo eso lo sé, y el profesor explicó que por ahora es mejor dejarla, ya que hay bibliotecas que todavía usar Zone.js, como AngularFire. Entonces, por un tema de compatibilidad, dejó el polyfill de zone.js (a pesar de que en archivo de configuración lo sacamos y pusimos el zoneless). 

Mmm... ¿Qué onda con esto?











¡Excelente explicación la tuya! 👏 Se nota que entendiste el contexto de lo que está pasando, ¡y eso es mucho más importante que memorizar qué hacer! 🚀 Vamos a analizar los dos mensajes que te aparecieron:

📜 1. Primer mensaje: Component HMR has been enabled
bash
Copiar
Editar
Component HMR has been enabled.
If you encounter application reload issues, you can manually reload the page to bypass HMR and/or disable this feature with the `--no-hmr` command line option.
¿Qué es HMR?
👉 HMR = Hot Module Replacement.

Es una feature moderna que Angular te habilita por defecto desde hace versiones recientes (especialmente desde Angular 17), donde:

Cuando modificás un componente, NO recarga toda la página.

En cambio, solo reemplaza el módulo afectado en vivo en el navegador.

💬 O sea: editás -> guardás -> el cambio se ve al instante sin refrescar la página completa (ni perder estado, ni ir a la Home otra vez, etc.).
Es parecido a lo que hace React o Vite.

¿Por qué no le salió ese mensaje al profesor?
Porque en Angular 18, HMR todavía no estaba habilitado por defecto. En Angular 19, sí.

¿Deberías preocuparte?
❌ NO.
Todo bien. Es una funcionalidad buena. Te avisa nada más, por si ves algún bug raro (que es raro que pase). Y si no te gusta, podés desactivarlo como te dice (--no-hmr), pero yo te recomiendo dejarlo activado. Es muy cómodo para trabajar.

📜 2. Segundo mensaje: NG0914 - Zone.js cargándose innecesariamente
bash
Copiar
Editar
NG0914: The application is using zoneless change detection, but is still loading Zone.js.
Consider removing Zone.js to get the full benefits of zoneless.
¿Qué pasa acá?
Vos activaste Zoneless (provideExperimentalZonelessChangeDetection()), PERO tu proyecto sigue trayendo Zone.js en su bundle.

¿Por qué?

Porque en angular.json, en la sección de polyfills, todavía está configurado para cargar zone.js.

Además, si ves el package.json, también existe la dependencia instalada de zone.js.

👉 Y Angular, como ahora es inteligente, detecta eso automáticamente y te lo advierte.

🤔 ¿Entonces qué hago con Zone.js?
Tu razonamiento es perfecto:

Lo dejo por ahora.

¿Por qué?

Hay librerías que dependen de Zone.js para funcionar (AngularFire, algunos componentes de Material, etc.).

Si lo sacás, puede que algunas librerías se rompan o te tiren errores extraños.

Si algún día migrás a un proyecto 100% standalone + signals + nuevas APIs, recién ahí podrías plantearte remover Zone.js por completo.

Así que dejalo, ignorá el warning, no es un error crítico. ⚡

Además, ¡es súper normal en proyectos híbridos que hacen la transición a Zoneless!

🎯 Resumen claro y práctico

Mensaje	¿Preocupante?	¿Qué hacer?
Component HMR enabled	❌ No	Disfrutar del Hot Reload 🚀
NG0914 - Zone.js cargándose	❌ No (por ahora)	Dejar Zone.js para mantener compatibilidad
🚀 Te dejo además un tip para el futuro:
Cuando quieras quitar Zone.js (más adelante), los pasos serían:

Eliminar zone.js de la sección polyfills en angular.json.

Borrar la dependencia zone.js del package.json.

Asegurarte que no usás librerías que dependan de Zone.js.

(Opcional) Configurar tu build para que aproveche al máximo Zoneless (más pequeño y rápido 🚀).

Pero por ahora NO. Vas perfecto como estás. 🔥


