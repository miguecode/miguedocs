---
title: "Base de datos MySQL"
---

Base de datos MySQL
Persistencia de datos de nuestras APIS.
MySQL es muy parecido, practicamente lo mismo, a MariaDB.

Como recordamos, nosotros vimos SQLServer en Progra y Labo II. Ahora, vamos a ver MySQL. Son dos motores de bases de datos distintos. El de MySQL no es necesario que lo instalemos ya que nosotros en el XAMPP ya tenemos MySQL. Si ya tenemos el Apache corriendo, le tenemos que dar a 'Start', y si le damos a 'Admin' vamos al panel de la bdd, que es una aplicación llamada PhpMyAdmin.

Sentencias
SELECT
SELECT sirve para seleccionar registros desde una tabla de la bdd.
SELECT columna1, columna2, ... FROM tabla_nombre;
SELECT * FROM usuarios; //El * significa todos los campos de esa tabla
SELECT nombre, apellido FROM usuarios;

Cláusula WHERE
WHERE sirve para seleccionar datos en base a los criterios que especifiquemos.
SELECT * FROM tabla_nombre WHERE [condición];
SELECT * FROM usuarios WHERE apellido = 'Diaz';
SELECT * FROM usuarios WHERE fecha_nacimiento > '1/1/19700;
SELECT nombre FROM usuarios
WHERE edad > '18';

INSERT
INSERT sirve para insertar registros en una tabla de la DB.
INSERT INTO tabla_nombre (columna1, columna2, ...) VALUES (valor1, valor2 ...);
INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, edad)
VALUES ('Jorge', 'Diaz', '1969-07-11', 54);

UPDATE
UPDATE sirve para actualizar registros en una tabla de la DB.
UPDATE tabla_nombre SET (columna1 = valor1, columna2 = valor2 ...) WHERE [condic.];
UPDATE usuarios SET nombre = 'Miguelito', apellido = 'Gil' WHERE id = 15;

DELETE
DELETE sirve para remover registros en una tabla de la DB.
DELETE FROM tabla_nombre WHERE [condic.];
DELETE FROM usuarios WHERE id=7;

Antes usaba SQL Server en el SQL Server Management Studio. Creo que MySQL también puede manejarse en esa app.

Aclaración
El tipo de dato TEXT y VARCHAR son lo mismo. La diferencia es la longitud máxima de cada uno. TEXT permite muchísima más longitud. Por esto es que lo más logico es usar VARCHAR.
La diferencia entre FLOAT y DECIMAL es la precisión. Float es extremadamente preciso y Decimal no tanto. Si bien es menos preciso, es más performante usar DECIMAL.

Aclaración
En SQL, el <> es sinónimo de !=. De hecho, es más usado.

Aclaración
Todo se realiza mediante solicitudes SQL. Cada cosa que realicamos en la interfaz de phpMyAdmin, por abajo está escribiendo peticiones en lenguaje SQL y ejecutándolas. Podemos verlo en la Consola anclada abajo de todo.

Aclaración
No puede haber más de una clave PRIMARY con el mismo valor. Por eso no pueden haber dos ID iguales en una tabla.
Suponiendo que quisieramos pasarle el ID en un INSERT INTO, lo podemos hacer siempre y cuando ese ID no esté repetido y además cumpla que el AUTOINCREMENTAL sea el mayor.

Aclaración
La descripción es un campo ''imaginario'' que nos sirviría por ejemplo para hacernos una anotación, y después filtrar su búsqueda en un WHERE. WHERE descripcion is not NULL.