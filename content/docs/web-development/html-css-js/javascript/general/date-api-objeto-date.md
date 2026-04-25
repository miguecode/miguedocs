---
title: "Date API (Objeto Date)"
description: "La API Date de JavaScript nos permite trabajar con fechas y horas: crear fechas, obtener partes específicas (año, mes, día, hora, etc.), compararlas o modificar..."
---


## Date

- La API Date de JavaScript nos permite trabajar con fechas y horas: crear fechas, obtener partes específicas (año, mes, día, hora, etc.), compararlas o modificarlas.

- Estas fechas se representan en JavaSCript como objetos del tipo Date.


## Formas de crear un objeto Date

```typescript
const ahora = new Date();   // Fecha y hora actual

new Date("2024-12-31");              		// Fecha específica (ISO)
new Date("December 31, 2024 23:59"); 	// Otra forma de fecha con hora específica
new Date("2025-04-09T15:30:00");          // Otra forma de fecha con hora específica
new Date(2024, 11, 31);              		// Año, mes (0-indexado), día
new Date(2024, 11, 31, 23, 59, 0);   		// Año, mes, día, hora, minuto, segundo
new Date(0);                         			// Epoch (01/01/1970)
```
## Métodos para obtener partes de la fecha

- **Supongamos que creamos la siguiente fecha**: 

```typescript
const fecha = new Date("2025-04-09T15:30:00");
```
- Vamos a obtener las diferentes partes de esa fecha:

```text
fecha.getDate();	→ 9         // Día del mes (Los días del mes no forman parte de un array, es de 1 a 31)
fecha.getDay();         → 3        // Día de la semana (0 = domingo, 6 = sábado) (porque es un array)
fecha.getMonth();	→ 3        // Mes (0 = enero, 11 = diciembre) (porque es un array)
fecha.getFullYear()   → 2025  // Año completo (si usamos getYear le tendríamos que sumar 1900)
fecha.getHours();	→ 15      // Hora (0-23)
fecha.getMinutes();	→ 30      // Minutos
fecha.getSeconds();	→ 0        // Segundos
fecha.getMilliseconds()	→ 0      			// Milisegundos
fecha.getTime()        	→ 1744218600000 	// Tiempo en milisegundos desde el Epoch
```
- **Aclaración sobre getYear()**: este método NO tiene sentido usarlo, está obsoleto. El que hay que usar es getFullYear(), el otro se usaba antes pero ya no.

- Como vimos hasta ahora, el 0 representa al domingo y el 11 a diciembre. Pero... ¿Por qué? Esto es porque ambos salen de arrays. Entonces, como el domingo es considerado el primer día de la semana, es la primer posición del array (el 0). Y con los meses pasa lo mismo. Como enero es el primer mes del año, se representa con un 0. Y por ende, diciembre es 11, noviembre 10, etc.

- Eso no pasa con los días del mes (del 1 al 31). Ya que ahí no se maneja un array interno, es simplemente un valor del 1 al 31 sin contar el 0. Tampoco pasa con las horas (del 0 al 23) ni con los minutos y los segundos (que van del 0 al 60). 

- Con el tema de los meses, siempre se recomienda ponerle un +1 al getMonth, para corregir ese "error" de que el mes sea un número menos del que debería ser. Porque como vemos en ese caso, nos devuelve "3", cuando lo que esperábamos era un "4" por el mes abril.

- **El Epoch es un momento específico en particular**: el 01/01/1970. Entonces, por ejemplo, cuando hacemos getTime, recibimos la cantidad de milisegundos que ocurrieron desde esa fecha hasta la fecha actual o la fecha con la que estemos trabajando.


## Date.now()

- Este método devuelve la fecha actual en milisegundos desde el Epoch (es decir, desde el 01/01/1970). ¿Entonces, hace lo mismo que getTime()? Sí. Literalmente devuelve lo mismo, pero con la diferencia de que para invocar a este método, no es necesario tener una instancia Date como sí lo necesitábamos con getTime().

```typescript
const ahora = Date.now(); // Muy útil para timestamps rápidos
```
- Como vemos, now() es un método estático del objeto Date. No hay que hacer fecha.now(). 


## Métodos para establecer partes de la fecha

```typescript
const fecha = new Date(); // Creamos una fecha

fecha.setFullYear(2030);	// Le seteamos el año 2030
fecha.setMonth(11);        // Le seteamos el mes Diciembre
fecha.setDate(25);           // Le seteamos el día del mes 25
fecha.setHours(10);	       // Le seteamos la hora 10
fecha.setMinutes(45);     // Le seteamos el minuto 45
fecha.setSeconds(20);     // Le seteamos el segundo 20
fecha.setMilliseconds(30);    // Le seteamos el milisegundo 30
```
- No hay mucho que aclarar, simplemente son métodos que sirven para modificar o setear un nuevo valor en la fecha. Estos son los más usados.


## Otros métodos útiles

```typescript
const fecha = new Date();

fecha.toString()        		→ "Wed Apr 09 2025 15:34:00 GMT-0300"
fecha.toDateString()    		→ "Wed Apr 09 2025"
fecha.toTimeString()    		→ "15:34:00 GMT-0300"
fecha.toISOString()     		→ "2025-04-09T18:34:00.000Z"
fecha.toLocaleDateString() 	→ "9/4/2025" (depende del idioma del navegador)
fecha.toLocaleTimeString() 	→ "15:34:00"
```
## Comparar fechas entre sí

- La API nos permite comparar fechas, para saber cuál es más vieja o actual que otra (mayor o menor).

```typescript
const fecha1 = new Date("2025-01-01");
const fecha2 = new Date("2026-01-01");

console.log(fecha1 < fecha2); // Muestra true
console.log(fecha1.getTime() === fecha2.getTime()); // Muestra false
```
- Como vemos, podemos hacer comparaciones con los operadores <= `< >` >=, == y ===. Cuanto más grande sea una fecha (2026 es más grande que 2025 numéricamente hablando), eso significa que es más reciente.


## Saber la diferencia entre una fecha y otra

- Para saber la diferencia temporal entre una fecha y otra, podemos simplemente usar " - ":

```typescript
const inicio = new Date("2025-04-01");
const fin = new Date("2025-04-09");

const diferencia = fin - inicio; // "diferencia" va a guardar la cantidad de milisegundos de diferencia
const dias = diferencia / (1000 * 60 * 60 * 24); // → Esto es 8
```
- Ese cálculo de la última línea es necesario para saber cuántos días es esa cantidad de milisegundos.


## Validar si una fecha es válida

- Para saber si una fecha es válida o no, podemos hacer uso del método isNaN(), ya que cuando una fecha es válida, es distinta de NaN. Pero si no lo es, es NaN.

```typescript
const fechaValida = new Date("2025-10-10");
const fechaInvalida = new Date("esto no es una fecha");

isNaN(fechaValida);   // false
isNaN(fechaInvalida); // true
```
### Aclaraciones

- Las fechas se basan en la zona horaria local del sistema.
- La API Date puede ser incómoda para operaciones complejas, para eso existen librerías como date-fns o Luxon.