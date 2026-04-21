---
title: "Catálogo del Sistema"
---

- CATÁLOGO DEL SISTEMA -
Es un conjunto de objetos de tipo Vista. Actúa como un diccionario de la BD.
En él podemos consultar qué objetos tengo en mi BD.

Si yo quiero saber qué edad tiene un cliente, consulto a la tabla clientes. Si yo quiero saber la fecha de un pedido, consulto la tabla pedidos. NO al catálogo.

Ahora, si yo quiero saber qué tablas hay en la BD, o si quiero saber qué usuarios hay en la BD, consulto a las vistas del Catálogo.

Los objetos del catálogo se crean al momento de crear la BD. Por lo tanto, el usuario que sea propietario de estas vistas va a ser el usuario administrador. El que se crea por defecto.

Con los objetos del catálogo, entonces, sólo podemos hacer operaciones de CONSULTAS, es decir, SELECT's.

Algunas vistas principales del catálogo son:
(Los nombres son como aparecen en SQL Server. En otro producto comercial pueden tener otros nombres. Por ejemplo, en Oracle en vez de llamarse 'SYSTABLES' se llama 'DBA_TABLES'. Pero en realidad son exactamente lo mismo con otro nombre).

- SYSTABLES: Esta vista proporciona una fila por cada tabla en la BD. Para cada una de estas tablas, indica: NAME, CREATOR, COLCOUNT (Nombre de la tabla, del usuario dueño y la cantidad de columnas), entre otras. Para ver todas sus columnas, podemos hacer DESC SYSTABLES;

- SYSCOLUMNS: Esta vista proporciona una fila por cada columna de cada tabla nombrada en SYSTABLES. Por cada una de estas indica: NAME, TBNAME (Nombre de la tabla), COLTYPE (Tipos de datos de la columna).

SELECT * FROM SYSCOLUMNS
WHERE NAME = 'LOCALIDAD';

- SYSINDEXES: Esta vista proporciona una fila por cada índice de la BD. Tiene NAME, TBNAME, CREATOR (Que en Oracle es 'Owner'), entre otros.

- SYSVIEWS: Da información sobre las vistas. OJO: No sobre las listas del catálogo, sino sobre las vistas de la DB, proporciona NAME y CREATOR.

'SYS' viene de System. En Oracle en vez de 'SYS' se usa 'DBA'. Pero la idea es la misma.


Entonces, por cada tipo de objeto, en el catálogo vamos a tener una vista distinta.

Hay otra vista muy importante que es SYSOBJECTS, y se usaría por ejemplo así:
SELECT * FROM SYSOBJECTS
WHERE OWNER = 'Pepito';

Y así vemos todos los objetos del usuario Pepito. SYSOBJECTS engloba todos los objetos, por lo tanto tiene una columna adicional llamada 'OBJECT_TYPE', la cual obviamente nos dice qué objeto es: si es una tabla, un índice, una vista, etc.



Bien. Además de estas vistas principales que vimos con el prefijo SYS, también estan las que son con el prefijo USER. Son exactamente lo mismo pero con otro prefijo. 
Si quien está usando la BD no es administrador, es decir, no es Sys, no va a poder hacer un SELECT de por ejemplo: SYSTABLES. Simplemente porque no tiene permisos. Lo que él va a poder ver son las tablas de uno mismo, no la de los demás. Para eso esta el Pepito_TABLES.