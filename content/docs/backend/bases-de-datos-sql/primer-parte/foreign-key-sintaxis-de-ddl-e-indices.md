---
title: "Foreign Key, Sintaxis de DDL e Índices"
description: "La foreign key es para relacionar tablas. La FK actúa sobre una columna de la tabla y va en la tabla hija, es decir, la que utiliza información de la tabla padre."
---


## FOREIGN KEY

Una foreign key, o clave ajena, o clave foránea, es para relacionar tablas. La FK actua sobre una columna de la tabla. La FK va en la tabla hijo. La tabla que va a utilizar información de la tabla padre.
¿Cómo se cuál es la tabla padre y cual la hija? Considerando quién es el que tiene una relación muchos a uno respecto a la otra tabla.

### ACLARACIÓN FK

- Si la entidad A respecto a la B tiene una relación de muchos a uno, la FK la tendrá la tabla A. La A va a ser la tabla HIJA. (El ejemplo de los empleados y su provincia).

- Si ambas entidades tienen una relación de uno a muchos entre sí, entonces necesito hacer una tercer tabla. La tabla interrelacional o también llamada intermedia. (El ejemplo de los pacientes y los medicamentos o el de los proveedores y los productos).

```text
PRODUCTOS          PROVEEDORES
  (uno) ------------->(muchos)

PROVEEDORES        PRODUCTOS
  (uno) ------------->(muchos)
```

Recordemos que, si yo quiero BORRAR una tupla de la tabla padre la cual le está dando información a otra tabla, no voy a poder hacerlo. Va a saltar la FK y me va a devolver error. Primero tengo que borrarla de la tabla que está usando el dato, para después borrarla de la otra tabla.
Esto es por mantener la consistencia de los datos. 

**Nomenclatura**: Si bien el nombre de la columna en la FK puede ser cualquiera, lo que se estila hacer es que el nombre de la columna FK se suele llamar IGUAL al nombre de la columna a la que se la va a relacionar.

**Aclaración**: La FOREIGN KEY SIEMPRE, SIEMPRE se relaciona con la PRIMARY KEY de otra tabla. Siempre la relación es FK->PK. Por eso es que si una tabla no tiene PK, va a ser una tabla aislada, ya que no se va a poder relacionar.


**FK** = Regla de integridad referencial
Si tenemos DEPARTAMENTOS y EMPLEADOS, la tabla EMPLEADOS va a tener una FK en su columna 'COD-DEPT'. Porque tiene una relación de muchos a uno. Muchos empleados, a un departamento.

Esta regla de integridad referencial SALTA y tira error si por ejemplo, en EMPLEADOS queremos ponerle a una fila, un COD-DEPT que no existe. El valor del COD-DEPT obviamente debe existir en la tabla de DEPARTAMENTOS.
Otra forma de saltar es cuando querés eliminar un registro de DEPARTAMENTOS, el cual está siendo usado en EMPLEADOS.


### ACLARACIÓN SOBRE NOMENCLATURA

SIEMPRE: Hay que respetar que en una sentencia, las palabras reservadas van en MAYÚSCULAS. Y las variables, como por ejemplo el nombre de la tabla, a en MINÚSCULAS.


## DDL - DATA DEFINITION LANGUAGE - LENGUAJE DE DEFINICIÓN DE DATOS

### CREATE TABLE

Sintaxis:

```sql
CREATE TABLE tablita (...);
```


**TIPOS DE DATOS**
- Numéricos: INTEGER, DECIMAL, FLOAT
- Cadena: CHARACTER(n), VARCHAR(n)
- Fechas: DATE, TIME

Ejemplo de una tabla entidad proveedores:

```sql
CREATE TABLE PROVEEDORES
(NUMERO INT NOT NULL,
NOMBRE VARCHAR(20) NOT NULL,
DOMICILIO VARCHAR(15) NOT NULL,
LOCALIDAD VARCHAR(12),
PRIMARY KEY (NUMERO));  //Esta PK es simple (1 atributo)
```

Ejemplo de tabla interrelacional:

```sql
CREATE TABLE PROV-PROD
(NUMERO INT NOT NULL,
PNRO INT NOT NULL,
CANTIDAD INT NOT NULL,
PRIMARY KEY (NUMERO, PNRO),    //Esta PK es compuesta (2 atributos)
FOREIGN KEY (NUMERO) REFERENCES PROVEEDORES (NUMERO),
FOREIGN KEY (PNRO) REFERENCES PRODUCTOS (PNRO));
```
 
### ALTER TABLE

Sintaxis:

```sql
ALTER TABLE tablita ADD columnita tipo-de-datos;
```


Ejemplo:

```sql
ALTER TABLE PRODUCTOS ADD COLOR VARCHAR(10);
```


```sql
ALTER TABLE PRODUCTOS MODIFY (COLOR DEFAULT 'ROJO' NOT NULL);
```


Ojo: Cuando nosotros tenemos una tabla, y la tabla ya tiene registros... si a mi se me da por agregar una columna nueva, esa columna DEBE aceptar NULL. Por eso cuando hacemos un ADD COLOR VARCHAR(10) no le especificamos el 'NOT NULL'. Esto es para que acepte nulos. Necesita aceptar nulos ya que si no, va a dar error con los registros ya existentes. Es lógico. Obviamente este problema no ocurriría si la tabla no tiene ningún registro todavía.
Por lo tanto, primero hago el ADD aceptando NULL y después hago un MODIFY, le pongo un valor por default para todos los registros y le pongo finalmente el NOT NULL. Así, todos los registros van a tener un valor por defecto que yo decida en la columna 'COLOR', y ya no podrán ser nulos.

### DROP TABLE

Sintaxis:

```sql
DROP TABLE tablita;
```

Ejemplo:

```sql
DROP TABLE PRODUCTOS;
```

Ojo: Una tabla NO puede borrarse si está cediéndole información a otra. Es decir, no puedo borrar la tabla PRODUCTOS si en mi tabla PROD-CLIEN estoy usando elementos de la tabla PRODUCTOS. (Obviamente estando relacionadas).

## ÍNDICES (Index)

Los índices sirven para acelerar el criterio de búsqueda de la información. El índice tiene sentido cuando la tabla tiene muchos registros, y no pocos. Funciona como el índice de un libro. Si yo no tengo índice y quiero buscar algo, tengo que ir hoja por hoja hasta encontrar lo que necesito. El índice entonces, sirve para acelerar el proceso de encontrar un registro que buscábamos. Van a actuar sobre una o más columnas de tablas.

Si una tabla no tiene índices, cuando yo haga una búsqueda de un registro, el motor va a hacer una búsqueda llamada 'Full Scan', es decir, al no tener índice, el motor busca registro por registro (hoja por hoja) entre toda la información de la tabla. Si la tabla está indexada, o sea, si tiene índice, va a realizar la búsqueda mucho más rápido.

Lo que hace el motor en memoria cuando busca por una colunma indexada es usar una estructura de árbol. Básicamente, en subconjuntos. Para no perder tiempo en analizar cosas que ya sabe que no son.

Una tabla puede tener más de un índice.

ACLARACIÓN: Todas las PK están indexadas por defecto.

Sintaxis:

```sql
CREATE INDEX indice1
ON tablita (columna);
```

### Ejemplo:

```sql
CREATE INDEX I_XN ON PROVEEDORES (NUMERO);
CREATE INDEX I_XP ON PRODUCTOS (PNRO);
CREATE INDEX I_XNP ON PROV-PROD (NUMERO, PNRO);
```

Estas sentencias están perfectas, pero son redundantes ya que las 3 crean index's en columnas que son Primary Keys, por lo tanto, ya estaban indexadas.

Entonces, cada vez que una columna de una tabla tiene un índice, la búsqueda por esa columna va a ser mucho más rapida. Por lo tanto, ¿Tiene sentido que le pongamos índices a todas las columnas? La realidad es que no porque estaríamos sobrecargando de objetos a la BD. No es la idea. Lo óptimo es que sólo le creemos índices a las columnas que FRECUENTAN su búsqueda, es decir, tablas que tengan muchos registros y que se busquen mucho X columnas. No hay que indexar cosas que no se van a buscar o se van a buscar poco.

El ALTER INDEX no existe. Los índices no se alteran. Sólo se crean o se eliminan con el DROP INDEX.

### DROP INDEX
Sintaxis:

```sql
DROP INDEX indice1;
DROP INDEX I_XNP;
```

### VIEW

```sql
CREATE OR REPLACE (Es un ALTER VIEW camuflado)
CREATE OR REPLACE VIEW V_ALGUNOS_PROVEEDORES AS
SELECT NUMERO, LOCALIDAD
FROM PROVEEDORES
WHERE LOCALIDAD = 'CAPITAL';
```

Esto hace que si la VIEW ya existe, entonces el motor entra por el 'REPLACE' y le cambia la sentencia. Es decir, el 'AS'. Pero si no existe, entra por el CREATE y la crea con misma esa sentencia.