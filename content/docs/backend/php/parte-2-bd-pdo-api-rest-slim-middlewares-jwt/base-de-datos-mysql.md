---
title: "Base de datos MySQL"
description: "MySQL es el motor de base de datos que utilizaremos para la persistencia de nuestras APIs. Es prácticamente idéntico a MariaDB."
---


## 🗄️ Base de Datos MySQL

MySQL es el motor de base de datos que utilizaremos para la persistencia de nuestras APIs. Es prácticamente idéntico a MariaDB.

En el entorno **XAMPP**, MySQL ya viene incluido. Para utilizarlo:
1. Inicia el módulo **MySQL** desde el Panel de Control.
2. Haz clic en **'Admin'** para acceder a **phpMyAdmin**, la interfaz web de gestión.

---

### 🔍 Sentencias Principales

#### SELECT
Se utiliza para recuperar registros de una tabla.

```sql
-- Sintaxis básica
SELECT columna1, columna2, ... FROM tabla_nombre;

-- Seleccionar todos los campos
SELECT * FROM usuarios;

-- Seleccionar campos específicos
SELECT nombre, apellido FROM usuarios;
```

#### Cláusula WHERE
Permite filtrar los resultados según criterios específicos.

```sql
-- Buscar coincidencias exactas
SELECT * FROM usuarios WHERE apellido = 'Diaz';

-- Filtrar por rangos o comparaciones
SELECT * FROM usuarios WHERE fecha_nacimiento > '1970-01-01';
SELECT nombre FROM usuarios WHERE edad > 18;
```

#### INSERT
Se utiliza para agregar nuevos registros.

```sql
-- Sintaxis
INSERT INTO tabla_nombre (columna1, columna2, ...) VALUES (valor1, valor2, ...);

-- Ejemplo
INSERT INTO usuarios (nombre, apellido, fecha_nacimiento, edad)
VALUES ('Jorge', 'Diaz', '1969-07-11', 54);
```

#### UPDATE
Se utiliza para modificar registros existentes. **¡Cuidado con el WHERE!**

```sql
-- Sintaxis
UPDATE tabla_nombre SET columna1 = valor1, columna2 = valor2 WHERE [condición];

-- Ejemplo
UPDATE usuarios SET nombre = 'Miguelito', apellido = 'Gil' WHERE id = 15;
```

#### DELETE
Se utiliza para eliminar registros. **¡Cuidado con el WHERE!**

```sql
-- Sintaxis
DELETE FROM tabla_nombre WHERE [condición];

-- Ejemplo
DELETE FROM usuarios WHERE id = 7;
```

---

### 💡 Aclaraciones Técnicas

- **TEXT vs VARCHAR:** Ambos guardan cadenas de texto. `VARCHAR` es para longitudes definidas (más eficiente), mientras que `TEXT` permite longitudes masivas.
- **FLOAT vs DECIMAL:** `FLOAT` ofrece una precisión científica extrema, mientras que `DECIMAL` es más predecible para temas financieros y generalmente más performante para el uso común.
- **Operador de desigualdad:** En SQL, `<>` es sinónimo de `!=`. El uso de `<>` es más estándar y frecuente en el ámbito de base de datos.
- **pk (Primary Key):** No puede haber duplicados de la clave primaria. Si la columna es `AUTO_INCREMENT`, el motor gestionará el ID automáticamente.
- **phpMyAdmin:** Cada acción realizada en la interfaz visual genera y ejecuta por debajo una sentencia SQL. Puedes ver estas sentencias en la consola anclada en la parte inferior de la herramienta.

> [!TIP]
> Siempre usa la cláusula `WHERE` en `UPDATE` y `DELETE` para evitar alterar o borrar toda la tabla accidentalmente.