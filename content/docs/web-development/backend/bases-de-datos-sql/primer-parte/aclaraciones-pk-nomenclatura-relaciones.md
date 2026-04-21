---
title: "Aclaraciones, PK, nomenclatura, relaciones"
---

Veamos un ejemplo de una BD. Tiene 3 tablas: proveedores, productos y prov-prod. Las 2 primeras tablas son ENTIDADES. Ya que, sus columnas corresponden a la entidad. En cambio la tercera, no es una entidad, es una tabla inter-relacional, ya que NO TODAS sus columnas corresponden a su tabla. Prov-Prod tiene la columna NUMERO que corresponde a la tabla Proveedores, y además tiene la columna PNRO que corresponde a la tabla Productos. Por lo tanto, tiene dos columnas que NO corresponden a su propia tabla en sí. Por eso no es una tabla ENTIDAD, es una tabla interrelacional.


Cada tabla tiene sus propiedades. Vamos primero con las tablas relacionales:
- Cada entrada de la tabla representa un item de datos, sin repetirse. Son homogéneos por columnas, todos los items de una columna son de la misma clase y con un sólo valor. Cada columna tiene su propio nombre, único en esa tabla. No se permiten filas duplicadas (usando Primary Key). Ojo: un mismo usuario no puede tener dos tablas que se llamen exactamente igual. 


Una Primary Key es una regla de integridad que sirve para identificar una fila de forma única. Una tabla puede tener SÓLO UNA Primary Key. No más de una. En el caso de una tabla interrelacional, la Primary Key puede ser una PK compuesta, es decir, conformada por 2 columnas en vez de por una sóla como en las simples. Como la de prov-prod. Entonces, las PK pueden ser Simples o Compuestas. Las PK también validan que el dato no sea nulo.

En 'Proveedores' la PK sería la columna NUMERO. En 'Productos' sería la columna PNRO. Son dos PK simples porque son de una sola columna. Pero en la tabla Prov-Prod, la PK son dos columnas: la columna NUMERO y la PNRO. Entonces es una PK compuesta, porque tiene más de una columna. La regla de integridad PRIMARY KEY se viola en el momento de que una fila tenga el mismo valor que otra, o que tenga un valor nulo, obviamente porque las PK no pueden tener valores nulos.




> Nomenclatura
* Si vamos a hacer tablas en plural, todas tienen que estar en plural. Si van a ser en singular, todas en singular. Pero lo correcto es PLURAL.

* Las columnas no suelen seguir un orden específico. Lo que sí se estila hacer y es necesario es que la o las primeras columnas sean las de PK. Eso sí hay que respetarlo. Los nombres de las tablas van siempre en plural. Si el nombre de la tabla es un nombre compuesto, todos deben tener el mismo prefijo (- _). Como'Prov-Prod' o 'Prov_Prod'. 

* Si tenemos un objeto vista, lo lógico es que empiece con un V_



> Tecnicismos para hablar en Bases de Datos:
* Una tabla, como dijimos, es una entidad.
* Una fila es una TUPLA. Tupla = Fila. Es un registro de datos.
* Una columna es un atributo. Columna = Atributo.

Entonces, en vez de decir que una tabla tiene filas y columnas, decimos que una entidad tiene tuplas y atributos.

* El 'grado de la relación' es la cantidad de columnas (atributos) que tiene una tabla.
* La cardinalidad es el número de filas (tuplas) que tiene una tabla.
* El dominio es un conjunto de valores, es decir, el rango de valores posibles que puede adoptar una columna, si yo tengo una columna día, su dominio va a ser 1-31, si tengo una columna mes su dominio va a ser 1-12.



Tipos de relaciones

- Relaciones base o reales. Son así porque están los datos físicos, son las tablas las cuales tienen información.

- Vistas. Es una relación VIRTUAL, no real. Es una relación con nombre (V_CLIENTES_AVELLANEDA) que apunta a una tabla. La vista no posee datos almacenados propios de forma física. No es una relación real/física.

- Instantáneas (Snapshot). Es un mix entre las 2 anteriores. SNAPSHOT es un objeto más de la BD como lo es una VISTA o una TABLA.
Como dice el nombre, una instantánea es una foto, nosotros tomamos un momento específico de una tabla, y lo guardamos en un Snapshot, queda estático ahí y no puede cambiar, mientras que a la tabla a la que le hicimos el snapshot sí puede seguir cambiando. Es una relación real, física, como si estuviera duplicando los datos.

CREATE SNAPSHOT S_CLIENTES AS
SELECT NOMBRE
FROM CLIENTES
WHERE LOCALIDAD='JUJUY?;

Serviría si, por ejemplo, tengo que hacer un informe de una tabla a las 3 de la tarde, entonces cuando llega esa hora me guardo de forma estática el cómo estaba la tabla en ese momento. Yo podría establecer que el Snapshot se autodispare todos los días a las 3 de la tarde. Entonces cada 24hs se crea un objeto Snapshot.

En algunos motores le cambiaron el nombre a Snapshot y ahora se llama 'Materialized view'. Pero es exactamente lo mismo.

- Resultado de las consultas. No tienen existencia persistente y pueden o no tener nombre.

- Relaciones temporales. Es una relación con nombre que se destruye al cerrarse la sesión. No se borra la tabla, si no que se vacía, es decir, queda la tabla pero sin información. Es un objeto común.
CREATE TEMPORARY TABLE CLIENTES .. etc


Aclaración de nombres
Obviamente una VIEW o un SNAPSHOT pueden llamarse 'pepe' o 'juan'. Pero lo lógico por nomenclatura es seguir un patrón que me ayude a saber QUÉ es ese objeto, entonces, para todas las vistas ponemos 'V_' adelante, y para el snapshot un 'S_'. 'V_CLIENTES_AVELLANEDA', etc.