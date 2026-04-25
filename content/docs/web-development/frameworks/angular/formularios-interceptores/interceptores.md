---
title: "Interceptores"
description: "Interceptores en Angular"
---


## Interceptores en Angular

- Un interceptor es otro elemento de Angular el cual puede crearse con Angular CLI:

```text
ng create interceptor interceptors/MiInterceptor
```
- En Angular, un interceptor es una clase que intercepta todas las peticiones HTTP que hacemos desde nuestra aplicación (antes de que salgan al servidor) y también las respuestas que vuelven del servidor. Es decir, intercepta las peticiones y las respuestas.

- Sirven para aplicar lógica común y automática en todas las peticiones o respuestas sin repetir código:

```text
Caso de uso			¿Qué hace?
```
_____________________________________________________________________________________________
| Autenticación | Agrega el token JWT a todas las requests. |
| --- | --- |
| Manejo de errores | Centraliza cómo manejar errores HTTP. |
| Carga / Spinner | Muestra u oculta un loader global durante requests. |
 	Transformación		Modifica la request o la response (headers, body, etc).
 	Logs / Debug			Imprime todas las requests/responses para debugear.


## Ejemplo de Interceptor que agrega un token

```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'token123'; // Normalmente lo obtenemos del localStorage o AuthService

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(authReq); // Envía la nueva request modificada
  }
}
```
- Para poder hacer uso de este interceptor, tenemos que aclararlo en nuestro archivo de configuración:

```typescript
...
providers: [provideHttpClient(withInterceptors([(req, next) => inject(AuthInterceptor).intercept(req, next)])]
...
```
## Cómo funciona internamente

- Cuando hacemos una request con HttpClient (como http.get()), lo que hace Angular es:

1. Pasa la request por todos los interceptores registrados en withInterceptors(), en orden.
2. Cada uno de estos interceptores puede modificar o detener la request.
3. Al final, la request llega al servidor.
4. Cuando vuelve la respuesta del servidor, pasa de nuevo por los interceptores (en orden inverso).
5. Podemos modificar la respuesta o manejar errores ahí.