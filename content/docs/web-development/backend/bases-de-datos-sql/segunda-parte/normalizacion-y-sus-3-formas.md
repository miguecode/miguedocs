---
title: "Normalización y sus 3 formas"
description: "En toda esta segunda parte vamos a ver el DISEÑO de una Base de Datos."
---

## Normalización y sus 3 formas

En toda esta segunda parte vamos a ver el DISEÑO de una Base de Datos.

Vamos a buscar grupos óptimos de Tablas.
Las columnas deben estar organizadas, normalizadas en una tabla. Para que sea óptimo.
Algo que ya sabíamos era lo de establecer en qué tabla tiene que ir la FK a la hora de hacer una relación ente tablas. Esta práctica habla de realizar un buen diseño de BD.

### ACLARACIÓN FK

- Si la entidad A respecto a la B tiene una relación de muchos a uno, la FK la tendrá la tabla A. La A va a ser la tabla HIJA. (El ejemplo de los empleados y su provincia).
- Si ambas entidades tienen una relación de muchos a uno entre sí, entonces necesito hacer una tercer tabla. La tabla interrelacional o también llamada intermedia. (El ejemplo de los pacientes y los medicamentos).

Otra recomendación de correcto diseño es el de los valores nulos en las tuplas: Depende los casos, pero si yo hago una tabla Alumno y son alumnos de la secundaria, no conviene incluir una columna que sea CUIT/CUIL, porque yo se que el 95% va a estar vacío. Entonces esa columna va a tener un 95% de nulos y sólo un 5% con un valor. Eso no es un correcto diseño, no tiene por qué existir.
Lo que se recomienda es no crearla, pero sí crear una tabla nueva que sea ALU-TRAB que contenga sólo tuplas con los alumnos que están trabajando (es decir, que tienen CUIT/CUIL).


### Ventajas de una tabla normalizada

- Se evitan anomalías en la inserción, borrado y modificación.
- Se facilita la extensión; si en un futuro se llevan a cabo amplicaciones, se tendrán menos cambios en la esctructura de la BD y por lo tanto en los programas de aplicación.

### ¿Qué es normalizar?
Normalizar es descomponer las relaciones, distribuyendo los atributos en relacionas más pequeñas satisfaciendo un cierto conjunto de restricciones.

Es decir, y para concluir: normalizar es crear grupos óptimos de columnas.

Existen 3 formas normales de crear una tabla. Cada una valida cosas distintas.
Para que una tabla esté en Segunda Forma Normal (2FN), primero tiene que estar en 1FN. Y para que esté en 3FN, antes tiene que estar en 1FN y 2FN.

1) PRIMERA FORMA NORMAL (1FN)

Se dice que una relación está en 1FN si y sólo si todos sus atributos tienen un único valor para una ocurrencia de la entidad. Entonces, la 1FN valida evitar los grupos repetitivos de datos. 

### Ejemplo de 1FN

Si yo tengo una tabla Empleado y le pongo las columnas: Legajo, Nombre, Cod-Idioma, Nombre-Idioma, Nivel-Idioma y Sección, van a haber datos repetidos: ya que yo haría una tupla para poner 120, Patricia, 01, Inglés, B, Contable. Y tendría que hacer otra tupla más si esta persona maneja otro idioma. Haría otra vez: 120, Patricia, 02, Portugés, A, Contable. Es decir, estoy repitiendo el '120', 'Patricia', y el 'Contable'. Los repito por cada idioma que sepa una persona. Eso está mal. Cada entidad tiene que almacenar una tupla por cada cosa que almacena. En este caso, una tupla por cada empleado, no más de una. Además esto provocaría problemas con la PK, ya que saltaría el error al repetir el '120' del Legajo, no se puede hacer esto. Esta tabla no está en 1FN, porque hay grupos repetitivos.

Vamos a normalizar: ¿Qué datos me causan problema en la repetición? Los datos del idioma.
Entonces yo me tengo que llevar a otra entidad los datos del idioma.

Crearía otra tabla así: EMP-IDIOMA (LEGAJO, COD-IDIOMA, NIVEL-IDIOMA)

En este caso, se repetirá COD-IDIOMA, pero jamás el mismo LEGAJO (ponemos que la PK sea compuesta entre LEGAJO y COD-IDIOMA).
Las tablas en las que yo intervine, tienen que quedar todas en 1FN. En primera forma. Tengo que comprobarlo y si no es así, tengo que seguir descomponiendo hasta que estén todas en primera.

Entonces, siempre antes de pasar a analizar la 2FN, tengo que asegurarme de que todas las tablas estén en 1FN. Hay que repreguntarme siempre ¿Están todas en 1FN? Si lo están, bien. Sino, repito el proceso.

2) SEGUNDA FORMA NORMAL (2FN)

Una relación está en segunda forma normal si y sólo si está en 1FN y todos los atributos no clave dependen por completo de la clave primaria. No existen dependencias parciales.

La pregunta que me tendría que hacer es: ¿Este atributo no clave depende de la PK? ¿Sí? Bien. ¿Este atributo no clave depende de la PK? ¿Sí? Bien. Y si alguna NO lo hace, está mal, por ende, no está en 2FN.
Cuando la tabla tiene una PK simple, es más facil darse cuenta de esto. Si es compuesta será un poco más complejo, pero hay que seguir la misma regla. Tengo que analizar que cada atributo no-clave sea DEPENDIENTE de todas las columnas que conforman a la PK compuesta.

Cuando es compuesta, tengo que asegurarme de que cada atributo clave dependa de TODAS las columnas de la PK, es decir, asegurarme de ambas, no de una sóla.

Ahora: ¿Qué serÍa DEPENDER? Que una columna dependa de otra significa que si cambia el valor de una, tiene que cambiar también el valor de la otra.

Vamos a seguir con el ejemplo anterior, con la tercer tabla que hicimos:
EMP-IDIOMA (LEGAJO, COD-IDIOMA, NIVEL-IDIOMA)

Aca tenemos una PK compuesta con LEGAJO y COD-IDIOMA. Por lo tanto, el único atributo no clave es NIVEL-IDIOMA. Tenemos que hacernos la pregunta de: ¿Nivel-Idioma depende de Legajo? y ¿Nivel-Idioma depende de Cod-Idioma? Ambas respuestas son sí. Por lo tanto, esta tabla está en segunda forma. Está bien.

Nivel-Idioma depende de Legajo porque el legajo corresponde a la persona a la que le atribuimos ese nivel de idioma. Y depende del Código porque ese código va a ser el código que le corresponde al idioma al que le estamos poniendo el nivel.

Ahora un ejemplo en el que hay que normalizar una tabla para llegar a la 2NF:
EMPLE (LEGAJO, COD-IDIOMA, NIV-IDIOMA, NIVEL-DE-ESTUDIO);

Es la misma tabla de antes, pero con un atributo nuevo: 'Nivel de estudio'. La columna 'NIVEL-DE-ESTUDIO' depende del legajo, ya que ese legajo le corresponde al empleado que va a tener ese nivel de estudio. PERO, no depende del COD-IDIOMA, ya que no tiene nada que ver el nivel de estudio que tenga esa persona con el código del idioma que estudia. Entonces no hay una dependencia completa de la PK, sino que parcial. Así que esta tabla NO está en segunda forma. Tenemos que normalizarla (hacer el desglose/descomposición).

Esto se resuelve descomponiendo las tabla así:
EMPLEADO (LEGAJO, NOMBRE, SECCION, NIVEL-DE-ESTUDIO);
IDIOMA (COD-IDIOMA, NOMBRE-IDIOMA);
EMP-IDIOMA (LEGAJO, COD-IDIOMA, NIVEL-IDIOMA);

Ahora, estas 3 tablas están en primera y en segunda forma. Lo normalizamos.


3) TERCERA FORMA NORMAL (3FN)

Una relación esta en tercera forma (3FN) si y sólo si está previamente en 2FN y los atributos no clave son mutuamente independientes entre sí, es decir, que los valores de los atributos dependen SÓLO de la clave.

Entonces, los atributos no clave NO deben depender entre sí. Si algún atributo no clave depende de algún otro atributo no clave, entonces esa tabla NO está en tercera forma normal.

Si hay algún atributo no clave que dependa del otro, significa que la tabla NO está en 3FN y por ende la tengo que normalizar (desglosarla/descomponerla).

### Ejemplo:

EMPLEADO (LEGAJO*, NOMBRE, NRO-SECCION, OFIC-SECCION)

En este caso, la relación no se encuentra en tercera, ya que 'NRO-SECCION' depende de 'OFIC-SECCION' ¿Por qué? Porque si cambio el valor de uno, tengo que cambiar el valor del otro. Entonces, tengo 2 atributos no clave los cuales dependen entre sí. Esto significa que la tabla no está en 3FN y hay que normalizarla.

Para normalizarlo deberíamos hacer esto:

```sql
EMPLEADO (LEGAJO*, NOMBRE, NRO-SECCION);
SECCION (NRO-SECCION*, OFICINA-SECCION); 
```

### Aclaración importante y sencilla
Si lo pensas es obvio, pero si una tabla tiene UN SÓLO atributo no clave y esa tabla ya está en 2FN, entonces automaticamente también esta en 3FN. Ya que ese atributo no clave no va a depender de ningún otro atributo no clave, ya que es el único que hay.

Otro ejemplo es si yo tengo una tabla EMPLEADOS con CARRERA y ESPECIALIDAD. Esta tabla NO estaría en 3FN ¿Por qué? Porque esas 2 columnas son atributos no claves que dependen entre sí. Es decir, si yo modifico la carrera, también tendría que modificar la especialización, y viceversa. Eso va a provocar anomalías, ya que podría modificar la Carrera y ponerle 'Abogado', y en Especialidad va a seguir estando el dato anterior de, por ejemplo, 'Dentista', y no tendría sentido.

Si una persona con permisos de UPDATE me hace:

```sql
UPDATE EMPLEADOS SET ESPECIALIDAD = 'TRAUMATOLOGIA' WHERE ID_EMP=2;
```

Existe la posibilidad de que ahora CARRERA (que depende de ESPECIALIDAD y viceversa), quede mal. Porque si vos cambiás la especialidad, también tenés que cambiar su carrera, y viceversa. Por eso está mal. No deberían depender entre sí para estar en 3FN. Y la regla de integridad no nos va a salvar en este caso.