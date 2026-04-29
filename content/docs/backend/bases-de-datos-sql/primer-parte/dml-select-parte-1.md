---
title: "DML (SELECT parte 1)"
description: "DML - DATA MANIPULATION LANGUAGE - LENGUAJE DE MANIPULACIÓN DE DATOS"
---

## DML - DATA MANIPULATION LANGUAGE - LENGUAJE DE MANIPULACIÓN DE DATOS (parte 1)

### SELECT

Sintaxis con su significado:

| Sentencia | Significado |
| --- | --- |
| SELECT nombre-columna | Selecciono los campos especificados |
| FROM nombre-tabla | Desde dónde saco la información |
| WHERE condición | Siempre y cuando se cumpla la condición |
| SELECT DISTINCT | El DISTINCT hace que NO seleccione valores repetidos |
| SELECT * | El * significa TODAS LAS COLUMNAS de la tabla |

- Operadores relacionales: =   !=   <   <=   >   >= 
- Operadores booleanos: AND, OR y NOT
- Ordenamientos: ORDER BY (Puede ser DESC o ASC) (Si no especifico, será ASC)

```sql
ORDER BY PRECIO DESC;
```

Puedo hacer un sub-ordenamiento. Imaginando que hay producto con exactamente el mismo precio, a esos ordenarlos también por su cantidad.

```sql
ORDER BY PRECIO, CANTIDAD DESC;
```

Esa sentencia ordena primeramente por PRECIO en ASC y como sub-orden, por CANTIDAD en DESC.

Otra variante de ordenamiento es:

```sql
ORDER BY 3 DESC;
```

Ese '3' significa: la tercer columna de la tabla. El motor la va a identificar según esté estructurado.

```sql
SELECT por Reunión (Un SELECT pero de 2 tablas o más)
```

```sql
SELECT PROVEEDORES.*, PRODUCTOS.*
```

Para estos casos hay que usar los Alias, porque si no vamos a escribir demasiado. Se hace así:

```sql
SELECT P.*, PR.*
FROM PROVEEDORES AS P, PRODUCTOS AS PR
WHERE P.LOCALIDAD = PR.LOCALIDAD
AND PR.PRECIO > 6;
```

Dato curioso: se podría aplicar el alias sin usar el AS. Pero por claridad es mejor escribir el AS.

Funciones de agregados:
- COUNT: Cantidad de tuplas (filas)
- SUM: Suma de los valores de la columna
- AVG: Promedio de los valores de la columna
- MIN: Valor más bajo de la columna
- MAX: Valor más alto de la columna

COUNT(columna/s);

"Obtener el número total de proveedores que entregan productos actualmente"

```sql
SELECT COUNT (DISTINCT NUMERO)
FROM PROV-PROD;
```

Esto se hace porque en la tabla prov-prod, puede aparecer el mismo proveedor más de una vez, entonces el distinct me soluciona eso.

"Obtener la cantidad total suministrada de cada producto":

```sql
SELECT PNRO, SUM(CANTIDAD) AS CANTIDAD
FROM PROV-PROD
GROUP BY PNRO;
```

El GROUP BY hace una función de corte. Es decir, esta sentencia va a hacer la suma de la columna cantidad POR CADA PNRO, eso lo provoca el GROUP BY. Cada vez que pasa a un nuevo PNRO, el SUM se reinicia para crear una fila nueva en lo que va a devolver el SELECT.
Aclaración: la columna de agrupamiento (la que va en el GROUP BY) DEBE estar en el SELECT. Si no, no funcionará.

En otras palabras, el GROUP BY hace que la búsqueda se realice CADA ALGO.

"Obtener los números de todos los productos suministrados por más de un prov.":

```sql
SELECT PNRO
FROM PROV-PROD
GROUP BY PNRO
HAVING COUNT (*) > 1;
```

El **HAVING** va de la mano del **GROUP BY**. Es decir, si no hay GROUP BY, NO puede haber HAVING.
El operador HAVING (con) sirve para eliminar grupos, de la misma forma en la que WHERE sirve para eliminar filas. Básicamente es una condición, un filtro. El HAVING puede ir con SUM.

"Obtener todos los productos cuyos nombres comiencen con la letra A":

```sql
SELECT *
FROM PRODUCTOS
WHERE PNOMBRE LIKE 'A%';
```

El 'LIKE' recibe comillas simples. El % representa cualquier secuencia de 'n' caracteres.

'%A%' -> Esto significa "Todo lo que contenga la letra A".
'_A%' -> Esto significa que "La segunda letra DEBE ser una A". 
'%A_' -> Esto significa que "La anteúltima letra DEBE ser una A".

```sql
WHERE FECHA LIKE '__/03/2024';
```

El '_' representa una posición en la cadena de caracteres. H_OLA El '_' sería la segunda posición.

Dato: Hay motores que tienen sensibilidad con las mayúsculas. Por lo tanto, habría que hacer:

LIKE 'A%' OR 'a%'. - Pero - Otra opción es usar el UPPER así:
WHERE UPPER(PNOMBRE) LIKE 'A%';   El UPPER(columna) trae la columna pero en mayúsculas.

- NOT LIKE: El NOT LIKE es igual que el LIKE pero invertido, obviamente.


### SUBCONSULTAS

"Obtener todos los nombres de los proveedores que hayan enviado el producto de número 004".

```sql
SELECT NOMBRE
FROM PROVEEDORES
WHERE NUMERO IN
```

```sql
(SELECT NUMERO
FROM PROV-PROD
WHERE PNRO = 004);
```

Lo que está entre paréntesis es una consulta anidada. El motor primero resolverá lo que está entre paréntesis y después resuelve la consulta general con lo que resuelva la subconsulta.

```sql
SELECT NOMBRE
FROM PROVEEDORES
WHERE NUMERO IN (101, 104);
```

Quedaría así internamente, lo que está entre paréntesis le devolvió esos valores.

El **IN** es una lista de valores. Se debe usar cuando NO se sabe el dato y utilizo una subconsulta.  Igualmente cuandosí sé el dato también lo puedo hacer. Sirve para 'agrupar', es decir:

Cuando hacemos una subconsulta y no sabemos qué nos va a devolver, conviene usar el IN en vez del =. Obviamente porque si la subconsulta devuelve más de un valor, el operador = va a fallar, ya que no se puede hacer 10 = 24, 15. Para esos casos hay que usar un IN en vez de un =.

```sql
WHERE NUMERO =101 OR NUMERO=102 OR NUMERO=103 OR NUMERO=104;
```

Todo eso se puede resumir más sencillamente con el IN:

```sql
WHERE NUMERO IN (101,102,103,104);
```

Así como existe el IN, existe el **NOT IN**. Es exactamente lo mismo pero al revés.

Otra forma de resolver lo anterior pero sin hacer subconsulta es así:

```sql
SELECT P.NOMBRE
FROM PROVEEDORES AS P, PROV-PROD AS PP
WHERE P.NUMERO = PP.NUMERO
AND PP.PNRO = 004;
```

### LIMIT

El LIMIT puede ir al final de cualquier sentencia de SELECT, y literalmente es limitar a que la consulta devuelva como máximo la cantidad de registros que queramos: LIMIT 4, LIMIT 3, LIMIT 10...