---
title: "9-2. DER"
---


## DER

**Repitamos algo del artículo anterior:**

Con diseño lógico nos referimos a una correcta normalización de las tablas. Y también se refiere al DER. El diseño físico es en un motor de BD elegido. Es lo que hicimos antes del primer parcial, las sentencias DDL de la creación de los objetos.

Cuando yo empiezo con el diseño físico, es decir, al momento real de empezar a hacer los CREATE (DDL), yo no puedo ponerme a analizar o a pensar si lo que estoy haciendo está normalizado o no. O sea, no puedo ponerme a pensar si las tablas que estoy creando están normalizadas o no, eso yo ya lo tengo que saber desde antes cuando hice el diseño lógico (Los grupos de tablas normalizadas y el DER). El DER es lo que vamos a ver hoy mismo.
Por lo tanto, queda claro que el orden es    Diseño lógico   ->   Diseño físico

**------------ Fin de la aclaración**

Pautas para el Diseño Físico (factores que deben tomarse en cuenta)
Análisis de las consultas y transacciones (en relación de su calidad, con respecto a la frecuencia de la consulta, con relación a las restricciones de tiempo sobre ellas).
Si yo se que una tabla va a ser frecuentemente consultada, hago índices. Sino, no es necesario.

Modelado Semántico (DER)
**DER significa Diagrama de Entidad/Relación.**

El enfoque general del problema del modelado semántico podemos caracterizarlo en pasos:

1. Identificación de un conjunto de conceptos semánticos (entidad, atributo, clase, subclase...).
2. Identificación de un conjunto de objetos simbólicos (formales).
3. Desarrollo de un conjunto de reglas de integridad formales.
4. Desarrollo de un conjunto de operadores formales para manipular esos objetos formales.


Componentes de un DER

- Entidad (una tabla). Es el objeto de una BD más importante.
Ejemplos: proveedor, empleado, cliente, producto, etc.

- Atributo (la columna de una tabla). Es la característica de una entidad.
Ejemplos: nombre, apellido, tamaño, fecha, etc.

- Intarrelación. Una entidad que sirve para conectar entre sí a otras dos o más entidades.
Ejemplos: envío (prov-prod), grabación (composición-orquesta).

- Subtipo. El tipo de entidad Y es un subtipo de entidad X si y sólo si todo Y es por fuerza un X.
Ejemplos: Empleado es un subtipo de persona.

a) Clase. Representa una colección de entidades similares (de un mismo tipo).

b) Subclase. La subclase es un subconjunto de una clase, y la clase que sirve como 'padre-raiz' se conoce como una 'superclase'.

### Ejemplo:

EMPLEADO es cualquier persona que trabaja en la compañía. PROGRAMADOR, especifica un tipo de empleado.

O sea, que todos los programadores pasan a ser un subtipo o subclase de empleado.

```text
          -> PROGRAMADOR
EMPLEADO  -> ADMINISTRATIVO
          -> ANALISTA
```

Empleado va a ser una SUPERCLASE y PROGRAMADOR, ADMINISTRATIVO y ANALISTA son subclases.

Ahora vamos a ver cómo se grafica simbólicamente cada componente:

- Entidad/Clase: es un rectángulo, o un rectángulo con pequeños bordes.

- Atributo: Es un círculo o un pequeño rectángulo con bordes. O puede ser un circulito chiquito.

- Vínculo (relación): Es un rombo o una línea de unión con una R suelta.

- Cardinalidad: Es una línea que tiene un rombo en el medio, o una línea con una manito al extremo. La cardinalidad se marca a la llegada, no en la partida. Dependiendo de cómo sea la relación (uno a muchos, muchos a x..) se hace distinta la marquita.

Los tipos de simbología son 2, los de Martin y los de Chen.

Básicamente y para concluir, el DER son estos esquemas visuales hechos con simbologías. Las simbologías de Martin y de Chen tienen sus diferencias, pero el concepto es siempre el mismo. Los esquemas son representaciones de los objetos principales de la BD. 

Las 4 diferencias entre las simbologías de Martin y Chen

- 1. Chen indica la relación dentro de un rombo, Martin no.
- 2. Chen indica los atributos de cada clase, Martin no.
- 3. Chen indica la cardinalidad con dígitos y Martin con distintas cabezas de flechas. 
- 4. Chen indica la entidad asociativa como un cuadrado "doble", Martin con un rombo "doble".
