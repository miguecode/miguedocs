---
title: "Las 5 Reglas de Integridad (Constraints)"
description: "Reglas de Integridad (Constraints)"
---

## Las 5 reglas Reglas de Integridad (Constraints)

Ya las habíamos visto antes, pero las vamos a recordar. Las reglas de integridad son VALIDACIONES. Hasta ahora conocemos 3: la PK, la FK y el NOT NULL.

La PK valida que no se repita la tupla, y que no sea null.

La FK valida que una tabla relacionada no pueda relacionar un dato de la otra tabla el cual no existe. Es decir, no puedo agregar el departamento con ID = 20 si en la tabla departamentos no existe un departamento con el ID = 20. Y también valida que, uno no pueda eliminar una tupla de una columna, la cual está siendo utilizada en otra tabla relacionada.

El NOT NULL es una regla de integridad también. Y obviamente valida que las columnas tengan datos.

Recordemos que si yo quiero relacionar dos tablas, para saber a cuál le tengo que poner el FK tengo que hacerme la pregunta de ¿Cuál tabla es la que establece una relación muchos a uno respecto de la otra? La que la establece, esa va a ser la que tenga la FK.

**Constraints = 'Reglas de Integridad'**
En el catálogo podemos ver la vista SYSCONSTRAINTS para ver todas las reglas que tenemos.

Ventajas de las reglas de integridad: mejoramiento de la eficiencia, centralización de reglas, fácilmente modificables, flexibilidad, documentación (el catálogo).

Vimos esas 3 reglas de integridad pero hay 2 más: Unique y Check.

### Aclaración
Las constraints se pueden crear en el momento en el que se crea la tabla, o después.
Las constraints pueden ser nombradas, pero no es obligatorio. Si no las nombramos, el motor les asigna un nombre por defecto. Es altamente recomendable que las nombremos a todas excepto a las NOT NULL, para que tengan nombres intuitivos.


### Aclaración en las sentencias:
Al igual que como pasaba con la PRIMARY KEY, nosotros podemos asignarle una constraint al lado o al final. Es decir, la constraint puede aparecer al lado de la columna como escribimos en la línea anterior, o puede aparecer abajo aclarando la columna entre paréntesis.

La buena práctica es que estén siempre abajo. Las constraint tienen que estar declaradas al final. La única que se hace al costado de las columnas es la NOT NULL.

1) NOT NULL Constraint
Cuando una columna debe tener siempre valores, debe usarse la not null constraint, la cual controlará las inserciones y actualizaciones. No se recomienda que tenga nombre.

```sql
CREATE TABLE empleados (id_empleado INT NOT NULL);
```

2) Unique Constraint
Esta es una de las nuevas. Garantiza que dos filas en la tabla no tengan valores duplicados para la columna o columnas sobre las cuales se define la Unique constraint. OJO: No es una PK. La PK valida que los datos no sean repetidos ni nulos.

Ejemplo de uso: Por ejemplo si en mi tabla empleados tengo la columna DNI. El DNI no va a ser la PK de la tabla, pero tampoco quiero que se repitan. Por lo tanto el DNI va a tener una Unique Constraint.

```sql
CREATE TABLE empleados (documento INT CONSTRAINT uk_documento UNIQUE);
```

El 'uk' es por Unique. Es CONSTRAINT [nombre] [tipo]

Las UNIQUE CONSTRAINT pueden ser simples o compuestas. Funciona igual que las PK. Si yo la Unique se la aplico a una sola columna, entonces es simple. Y va a saltar si se repite ese dato en particular. Si se la aplico a dos columnas, va a ser compuesta. Y va a saltar si se repiten los dos datos.

CONSTRAINT uk_tipo_num_doc unique (tipo_doc, documento);

Las Unique compuestas se tienen que declarar siempre abajo (al igual que todas las demás constraints). Obviamente porque no podemos ponerla al lado de las dos columnas. Tiene que estar aparte nombrando a ambas.


3) Check Constraint
Esta es otra de las nuevas. Esta es la regla de integridad más variable de todas. Obliga a que una condición especificada sea evaluada a TRUE para la columna o grupo de columnas que se aplique la Check Constraint.

Ejemplos:

```sql
CREATE TABLE empleado(
```
```text
Edad_emp INT CONSTRAINT ck_edad_emp
CHECK (edad_emp > 17 and edad_emp < 65));
```
CONSTRAINT ck_est_civil CHECK
((est_civil in ('CASADO', 'PAREJA') AND
```text
dni_conyuge IS NOT NULL) OR
```
(est_civil in ('SOLTERO', 'SEPARADO', 'VIUDO') AND
```text
dni_conyuge IS NULL));
```
4) Primary Key Constraint
Esta ya la conocemos. Lo que ahora vamos a variar es que la vamos a nombrar.

```sql
CREATE TABLE gerentes(
  id_sucursal INT NOT NULL,
  id_gerente INT NOT NULL,
);
```

```sql
CONSTRAINT pk_gerentes PRIMARY KEY (id_sucursal, id_gerente);
```

5) Foreign Key Constraint
Esta ya la conocemos. Lo que ahora vamos a variar es que la vamos a nombrar.

```sql
CONSTRAINT s_emp_fk_dept_id FOREIGN KEY (id_dept) REFERENCES s_dept(id);
```


- Borrado en cascada (DELETE CASCADE)

Esto es para las FK. Como sabemos en las FK, no nos deja borrar un elemento de la tabla padre si está siendo usado en alguna tabla hijo. Primero tenemos que borrar las coincidencias en la tabla hijo para poder borrarlo también en la padre. Bueno, el borrado en cascada es una opción que le podemos aplicar a la FK para evitar eso (lo cual no es recomendable ya que podría traer problemas). El borrado en cascada lo que hace es que borra todas las referencias hijo, y también al padre. Todo de una.

Lo que se le agrega a la sentencia de la FK al final es un 'ON DELETE CASCADE'.


- Agregando Constraints

Hasta ahora, todas las constraints que agregamos fueron al momento de crear la tabla. Pero también se pueden agregar una vez que ya estan creadas usando el ALTER TABLE:

```sql
ALTER TABLE s_emp
ADD (CONSTRAINT s_emp_pk_id PRIMARY KEY (id)),
```

```sql
CONSTRAINT s_emp_ck_salario CHECK (salario > 500);
```
OJO: Como estas constraints las estamos agregando una vez ya creada la tabla, podría ocurrir que la tabla ya tenía registros. Por lo tanto, quizá alguno no cumple con alguna constraint. Por ejemplo, si ya tengo un registro de un salario, y no es mayor a 500. Eso daría error y no va a permitir agregar la constraint. Se tiene que cumplir todo correctamente o no se crea la constraint.

- Deshabilitando/Habilitando constraints

Si deshabilito una constraint, sigue existiendo, pero deja de funcionar. No va a validar nada. Las pocas veces en las que se deshabilita una constraint, es para cargar grandes volúmenes de filas o para exportar/importar una tabla más rápidamente.

Ejemplo:

```sql
ALTER TABLE tabla DISABLE CONSTRAINT nombre_constraint;
```


Cuando se la vuelve a habilitar una constraint, primero se va a analizar que todos los registros de la tabla estén cumpliendo con esa constraint. Y si alguno no lo hace, va a dar error y no se va a habilitar la constraint. Mientras se está haciendo ese análisis previo, la tabla se va a bloquear. Para evitar que nadie haga un insert o un update mientras se están revisando los registros actuales.

```sql
ALTER TABLE tabla ENABLE CONSTRAINT nombre_constraint;
```

- **Para eliminar una constrain**: 

```sql
ALTER TABLE tabla DROP CONSTRAINT nombre_constraint;
```
