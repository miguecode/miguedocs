---
title: "DML (UPDATE, DELETE, INSERT) y ROLLBACK"
description: "SET CAMPO = valor"
---


DML - UPDATE

Sintaxis:

UPDATE tablita
SET CAMPO = valor
WHERE condición;

"Cambiar el tamaño a 'chico', disminuir el precio del producto 003 de 8 a 7 pesos e indicar que su localidad es 'desconocida'":

UPDATE PRODUCTOS
SET TAMAÑO = 'CHICO',
PRECIO = PRECIO - 1,
LOCALIDAD = NULL
WHERE PNRO = 003;  // Si no pongo WHERE, modifica a todos los registros

Podría poner también PRECIO = 7.

Dato: Las sentencias DML funcionan por completo o NO funcionan. Si existe un error, directamente no se altera nada.



DML - DELETE
DELETE FROM tablita
WHERE condición   // Si no pongo WHERE, elimina a todos los registros

"Eliminar todos los productos realizados en Capital":

DELETE FROM PRODUCTOS
WHERE LOCALIDAD = 'CAPITAL';


DDL - TRUNCATE OJO: es de DDL. No DML
TRUNCATE TABLE PRODUCTOS

El TRUNCATE sirve para vaciar la tabla entera. A diferencia del DELETE sin WHERE, este no tiene vuelta atrás. Y además, reinicia el conteo de ID's a su primer número.

Las operaciones de DML pueden volver para atrás. De cierta forma. Pero en las de DDL NO se puede volver hacia atrás. Es definitivo.



DML - INSERT
INSERT INTO tablita (campos...)
VALUES (valores...)

INSERT INTO PRODUCTOS (PNRO, PNOMBRE, PRECIO, LOCALIDAD)
VALUES (004, 'jabón', 10, 'Avellaneda');

Esto agrega una nueva tupla a la tabla. No es necesario poner todos los campos. Pero: si yo no pongo un campo y ese campo NO admite NULOS, entonces va a dar error la inserción.


INSERT INTO PRODUCTOS
VALUES (004, 'jabón', 10, 'Avellaneda');

En este ejemplo, no nombro ninguna columna. Si yo no nombro ninguna, tengo que pasarle TODOS los valores. Y se van a agregar en orden.


INSERT INTO PRODUCTOS
VALUES (004, 'jabón', 10, NULL, 'Avellaneda');

En este ejemplo, en la columna 4 de la tabla, se va a colocar NULL, ya que es una palabra reservada. Obviamente que si la columna 4 no admite nulos, va a dar error.


Cuando hacemos un INSERT INTO lo que suele pasar es que nos olvidamos de las columnas y su orden. Nosotros no tenemos que memorizar las columnas. Tenemos que saber manejarnos en la BD. Para eso existe la sentencia DESC o DESCRIBE. Literalmente nos va a mostrar la estructura de la tabla:

DESC PRODUCTOS;
DESCRIBE PRODUCTOS;

Otra cosa que podemos hacer es pasar registros de una tabla a otra (siempre y cuando tengan ambas las mismas columnas):

INSERT INTO aux_clientes SELECT * FROM clientes WHERE LOCALIDAD = 'AVELLANEDA';

Si quiero crear una tabla igual a otra pero que esté vacía, puedo hacer:



CREATE TABLE AUX_CLIENTES AS SELECT * FROM CLIENTES WHERE 1=2;
Como el WHERE siempre va a ser falso, la va a crear sin registros.






Las operaciones de DML (UPDATE, INSERT, DELETE) se pueden volver hacia atrás por si nos arrepentimos de haber hecho algo o por si nos equivocamos. En las de DDL no.

Esto ocurre porque estas operaciones no afectan de forma directa a la base. Primero pasan por memoria en lo que se denomina 'rollback'.

Entonces cuando hago una operación de DML, internamente el motor hace una transacción al segmento de memoria ROLLBACK. Es lo previo a impactar a la BD. Se dice que es una transacción parcialmente confirmada.

¿Cómo deshago una operación? Ejecutando la sentencia ROLLBACK.
El ROLLBACK deshace todo hasta encontrar un punto de sincronización en la base. Por ejemplo, cuando inicio sesión en la base, ya que en ese momento el ROLLBACK está vacío.
Obviamente, un punto de sincronización también es cuando hacemos un ROLLBACK. Ya que cuando lo hacemos, estamos vaciando la memoria. Así que a partir de ahí, será un nuevo punto de sincronización. Otro punto de sincronización es el COMMIT. Entonces los posibles puntos de sincronización son 3: El inicio de sesión, el rollback y el commit.

El COMMIT lo que hace es grabar físicamente en la base y limpiar la memoria.
Los usuarios consultamos a la BASE. O sea que si yo hago algo pero no le hago COMMIT, no lo estoy grabando en la base, si no que lo estoy grabando en mi memoria: solo YO lo veo. Por eso si otro usuario trabaja en la misma BD no va a ver lo que yo haga sin que yo le haga COMMIT antes.

¿La recomendación? Primero hacer el UPDATE o el DELETE o lo que sea, y cuando estoy seguro de que está bien, en ese momento hago el COMMIT. UPDATE -> COMMIT -> DELETE -> COMMIT. Así todo el tiempo. Si me doy cuenta que me equivoqué, en vez de hacer COMMIT hago ROLLBACK. Y listo, yo tengo que intentar que cuando haga ROLLBACK no vuelva 10 pasos atrás, si no que uno sólo.