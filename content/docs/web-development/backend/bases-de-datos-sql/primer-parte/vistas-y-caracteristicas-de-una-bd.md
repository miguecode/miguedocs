---
title: "Vistas y características de una BD"
description: "Objeto Vista y Cortes de Vista"
---

## Objeto Vista y Cortes de Vista

Imaginando que yo como admin quiero darle al usuario Pepito el permiso de ver la tabla Clientes, yo haría un GRANT SELECT ON Clientes TO Pepito. De esta forma, Pepito puede hacer un SELECT * FROM Clientes. Es decir, puede seleccionar todos los registros y campos de la tabla Clientes para verlos. Eso funciona así, pero...
Supongamos que yo quiero hacer un corte de vista, o sea, que Pepito pueda hacer SELECT de Clientes, pero que SÓLO pueda ver clientes de Avellaneda. Lo que sería un SELECT * FROM CLIENTES WHERE LOCALIDAD = 'AVELLANEDA'... yo eso no puedo hacerlo con GRANT. Tengo que crear un objeto Vista.

Entonces yo lo que quiero es que varios usuarios accedan a porciones distintas de la tabla. Para eso hago uso de los cortes de vista. Es decir, CREO objetos de tipo Vista (VIEW). Para que por ejemplo PEPITO pueda ver la tabla de clientes, pero sólo los que sean de Avellaneda. Y que Juancito pueda ver la tabla de clientes, pero sólo los que sean mayores de edad.

**¿Cómo creo un objeto Vista? Así:**

```sql
CREATE VIEW V_CLIENTES_AVELLANEDA AS
SELECT NUMERO, NOMBRE, TELEFONO  // La consulta SQL
FROM CLIENTES
WHERE LOCALIDAD='AVELLANEDA';
```

**V_CLIENTES_AVELLANEDA** será el nombre de la vista, y el 'AS', es decir el alias, será la consulta que va a ejecutar, que en este caso es mostrar esas columnas de la tabla cliente, siempre y cuando la localidad sea igual a AVELLANEDA.
Entonces, Pepito no va a poder hacer el " SELECT * " que hacía antes. IMPORTANTE: Esto es porque a Pepito NO le vamos a dar el permiso sobre la TABLA como hicimos antes. Le vamos a dar el permiso sobre LA VISTA. La que acabamos de crear. Ahí está el chiste.

Entonces, como DBA, le vamos a dar PERMISO sobre la VISTA que acabamos de crear a PEPITO y a JUANCITO. Así:

```sql
GRANT SELECT ON V_CLIENTES_AVELLANEDA TO PEPITO, JUANCITO;
```

Después PEPITO o JUANCITO podrían hacer:

```sql
SELECT * FROM V_CLIENTES_AVELLANEDA;
```


Cada vez que quiera hacer un corte de vista, es decir, un grupo, tengo que hacer un CREATE VIEW distinto. Es repetir ese proceso.
Recordemos que una vista es un objeto, por lo tanto va a tener un propietario, que en este caso va a ser Pepito. 


## Características de una BD

1. Independencia de datos respecto a los sistemas. Ya lo habiamos visto, los programas de acceso a la base deben ser independientes a los datos.
2. Posibilidad de disminuir la redundancia. Tenemos que hacer una normalización correcta para ahorrar espacio y mejorar el entendimiento de los datos.
3. Naturaleza autodescriptiva de los sistemas de las BD. Autodescriptiva se refiere a qué contiene la BD, es lo que vimos antes del catálogo.
4. Manejo de múltiples vistas de los datos. Una BD puede ser vista por muchos usuarios distintos, pero cada uno puede ver distintas vistas de los datos. (Lo que vimos antes de ver las características)
5. Posibilidad de compartir los datos. La información puede ser visualizada por distintos usuarios.
6. Compacto, rápido y actual.
7. Posibilidad de restricciones de seguridad. Lo que ya hablamos sobre las vistas.
8. Auditoría. Administrar la auditoría de una BD es dejar un log interno de los movimientos principales que se dan en la BD. Si la auditoría está deshabilitada, puede provocar problemas en la empresa. Básicamente auditar es hacer los logs (registrar los movimientos), en una tabla interna.
9. Recupero. Se trata de la recuperación y la restauración que hacemos con un backup. 
10. Relacionabilidad. Los datos se pueden relacionar entre sí.