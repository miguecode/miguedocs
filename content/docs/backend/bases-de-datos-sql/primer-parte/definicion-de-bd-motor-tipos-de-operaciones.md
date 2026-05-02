---
title: "Definición de BD, Motor, tipos de operaciones"
description: "Una base de datos es un sistema que almacena información de forma centralizada y la pone a disposición cuando se la solicita. Para crearla, se necesita un Motor de Base de Datos."
---


## Definición de Base de Datos

Una base de datos es un sistema, un Software. Lo que hace es almacenar información con ciertas características. El propósito general es mantener esa información centralizada y hacer que esté disponible para cuando se la solicite.

Para yo crear una, dos o tres bases de datos, primero necesito instalar el software que es el Motor de Base de Datos. ¿Qué es un motor de Base de Datos?

Un motor de base de datos es un software de un producto comercial. Hay distintos motores de bases de datos en el mercado. Ejemplos: MySQL (gratuito), SQL Server, Oracle... entre otros.

Una Base de Datos debe, entonces, tener su propio motor. Si no, no se puede crear.

### Aclaración
Otra forma de llamar al Motor de Base de Datos es: Sistema de Gestión de Base de Datos (SGBD)

Para lograr flexibilidad en el diseño de la BD, hay 2 aspectos importantes:
- Los datos deben ser INDEPENDIENTES de los programas que los utilizan, es decir, que cualquier cambio en los datos no implique un cambio necesario en el programa.
- La BD debe ser explorada sin necesidad de usar lenguajes convencionales de programación. Para esto se van a usar lenguajes de consultas (SQL) (Structured Query Language).

### ¿Qué es SQL?
SQL es un Software, es una aplicación más. Nosotros nos vamos a conectar a la Base de Datos mediante SQL.

### ¿Cómo nace SQL?
Todo motor de BD viene con un SQL básico. De esa forma nace SQL. SQL debe conectarse a una BD.

Objetos de una BD: Table, View, Index, Package, Stored procedure, entre otros

### ¿Qué tipos de operaciones se pueden hacer en SQL?
Se separa en 3 grandes grupos (DDL, DML y DCL):

1) DDL (Data Definition Language) (Definición de datos)
Este grupo modifica/altera la estrucutra de la base de datos.
Operaciones de este grupo: Create, Alter, Drop.

El 'Create' puede ser a cualquier objeto de BD, los nombrados anteriormente (create table, create index)... obviamente sirve para crear estos objetos.
El 'Alter' sólo puede ser a la tabla (alter table). Agregaríamos o quitaríamos columnas de una tabla, por ejemplo.
El 'Drop' (eliminar) puede ser a cualquier objeto de BD (drop table, drop index)... es lo contrario al Create.

2) DML (Data Manipulation Language) (Manipulación de datos)
Este grupo va a manipular a los datos de la BD. Pero NO se mete con la estructura de la BD en sí. Sólo manipula la información, sin alterar a la BD como tal. Modifico registros, es decir, si tengo un edad 20, se la cambio a 30. No modifico la estructura, sólo modifico datos.
Operaciones de este grupo: Select, Update, Insert, Delete. (Ya sabemos qué hacen cada una).

Aclaración: CREATE no es lo mismo que INSERT. Y DROP no es lo mismo que DELETE. El DROP elimina un objeto de la BD y el DELETE elimina un registro (algún dato) de la DB.


3) DCL (Data Control Language) (Control de datos)
Este grupo maneja la SEGURIDAD de la BD, se refiere a administrar los PERMISOS de la BD, los permisos que tengan los usuarios que vayan a conectarse a la BD.
Operaciones de este grupo: Grant (Otorgar permisos), Revoke (Revocar permisos).

Obviamente el que da los permisos es el DBA. La persona que a va a ingresar como ADMIN, es decir, el usuario 'System'.
¿Qué tipo de permisos se pueden otorgar? Se puden dar permisos de DDL o de DML.

```sql
GRANT CREATE TABLE TO PEPITO;
GRANT CREATE ANY TABLE TO PEPITO;
```

Así le damos el permiso a PEPITO de crear tablas.

Ojo. Si PEPITO no tuviera permisos de crear la tabla, obviamente no podría hacerlo. Le saldrá error. Pero yo como usuario System, puedo crearle una tabla a PEPITO por mi cuenta. Es decir, creo una tabla para que el propietario sea PEPITO, sin que haya sido él quien la cree. 

El DBA obviamente no DECIDE quién tiene permisos y quién no. Es quien puede dar o quitar los permisos, pero no es su decisión.

¿Cuándo no es necesario dar permisos de DML? Cuando PEPITO ya es propietario de sus propias tablas. Si PEPITO es el owner de CLIENTES, ya tiene permisos de DML sobre esa tabla. No es necesario que se los demos, sería redundante.

Nosotros tenemos que darle permisos de DML a un usuario, cuando ese usuario NO es el propietario de la tabla. Es decir, si PEPITO no es el propietario de VENTAS pero quiere realizar operaciones de DML en esa tabla, nosotros le tenemos que dar permisos de DML, se hace así:

```sql
GRANT SELECT, UPDATE ON VENTAS TO PEPITO;
GRANT ALL ON VENTAS TO JUANCITO;
```
