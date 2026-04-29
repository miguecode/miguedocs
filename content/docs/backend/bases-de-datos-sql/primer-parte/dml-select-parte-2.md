---
title: "DML (SELECT parte 2)"
description: "Siguiendo con SELECT..."
---

## DML - DATA MANIPULATION LANGUAGE - LENGUAJE DE MANIPULACIÓN DE DATOS (parte 2)

Siguiendo con SELECT...

"Obtener los números de los productos cuyo precio sea menor que el valor máximo actual de precio en la tabla PRODUCTOS":

```sql
SELECT PNRO
FROM PRODUCTOS
WHERE PRECIO <
(SELECT MAX(PRECIO)
FROM PRODUCTOS);
```

"Obtener los números de los productos cuyo precio sea menor que 6, o sean suministrados por el proveedor 102.":

```sql
SELECT PNRO
FROM PRODUCTOS
WHERE PRECIO < 6
UNION
SELECT PNRO
FROM PROV-PROD
WHERE NUMERO = 102;
```

- UNION junta los seleccionados de ambos SELECTS. O los 'suma', es como cuando veiamos conjuntos en matemática y juntabamos dos grupos A  U  B. Ambos SELECT deben ser del mismo tipo de dato.

### Aclaración
Usamos UNION porque nos pide 2 condiciones de 2 tablas distintas. Si fueran las 2 sobre la misma tabla, no necesitaríamos el UNION, simplemente usaríamos el OR después del WHERE.

- UNION ALL - Es lo mismo que el UNION pero agrega también a los repetidos. Es decir, si en un select trajo un '5' y en otro select también encontró un '5', los muestra a los dos.

- INNER JOIN
INNER JOIN es una condición de igualdad. Esto es un INNER JOIN:

```sql
SELECT A.*, B.*
FROM TABLA1 AS A, TABLA2 AS B
WHERE A.FECHA = B.FECHA_ST;
```

Esta consulta va a mostrar las columnas de TABLA1 y las columnas de TABLA2. Y los registros a mostrar van a ser los que cumplan la condición de igualdad del WHERE.


- OUTER JOIN:

```sql
SELECT A.*, B.*
FROM TABLA1 AS A, TABLA2 AS B
WHERE A.FECHA(+) = B.FECHA_ST;
```

- (+) Es el operador de OUTER.
En este caso, la respuesta va a traer todos los campos de la tabla B, pero de la tabla A sólo va a traer él o los registros que cumplan con la condición. En este caso es un LEFT JOIN. Ya que el operador lo colocamos en la izquierda. Si lo colocamos a la derecha -> B.FECHA_ST(+), sería un RIGHT JOIN.
El OUTER JOIN se divide en esos 2, en el LEFT JOIN y en el RIGHT JOIN.

Este concepto se repite en TODOS los motores de BD. Lo que quizá cambie es el operador del OUTER, en vez de ser un +, quizá es otro símbolo.