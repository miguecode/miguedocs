---
title: "Explicación de PDO"
description: "PDO es una capa de abstracción para acceder a bases de datos en PHP."
---


## 🔌 PDO (PHP Data Object)

**PDO** es una interfaz ligera y consistente para acceder a bases de datos en PHP. Proporciona una **capa de abstracción**, lo que significa que puedes usar las mismas funciones independientemente del motor de base de datos que utilices (MySQL, PostgreSQL, SQLite, etc.).

### 🤝 Conexión a la Base de Datos

Se establece instanciando la clase `PDO`. El parámetro principal es el **DSN** (Data Source Name), que define el driver y los detalles del host.

```php
try {
    $conStr = "mysql:host=localhost;dbname=pruebaDB";
    $user = "root";
    $pass = "";
    
    $pdo = new PDO($conStr, $user, $pass);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
```

- **DSN (`$conStr`):** Empieza con el driver (`mysql:`), seguido de pares clave-valor separados por `;`.
- **Cierre de conexión:** La conexión se mantiene viva hasta que el objeto se destruye (asignándole `NULL`) o finaliza el script.

---

### 📝 Sentencias Preparadas (Prepared Statements)

Son plantillas de SQL que se compilan una vez y se pueden ejecutar múltiples veces con diferentes parámetros. 

#### Beneficios:
1. **Seguridad:** Previenen ataques de **Inyección SQL**.
2. **Performance:** La base de datos analiza y optimiza la consulta solo una vez.
3. **Eficiencia:** Utilizan menos recursos del servidor al evitar ciclos repetitivos de compilación.

#### Flujo de trabajo:
1. **`prepare()`:** Envía la plantilla a la BD. Devuelve un objeto `PDOStatement`.
2. **`execute()`:** Envía los datos y ejecuta la consulta.

```php
$sentencia = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
$sentencia->execute([':id' => 3]);
```

---

### 🔗 Vinculación de Parámetros

Existen dos formas principales de pasar datos a una sentencia preparada:

#### 1. `bindParam()`
Vincula una **referencia** de variable al parámetro de la consulta. Si el valor de la variable cambia antes del `execute()`, se tomará el nuevo valor.

```php
$id = 10;
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
$stmt->bindParam(":id", $id, PDO::PARAM_INT); // Vincula por referencia
$stmt->execute();
```

- **Relacionales (con nombre):** Usando `:nombre`.
- **Posicionales:** Usando `?` y vinculando por índice (empezando en 1).

#### 2. `bindValue()`
Vincula el **valor** actual de la variable al parámetro. Es la opción más común si no necesitas cambiar la variable posteriormente.

---

### 📥 Obtención de Resultados

Una vez ejecutada la sentencia (`execute()`), usamos estos métodos para extraer los datos:

| Método | Descripción |
| :--- | :--- |
| **`fetch()`** | Obtiene la **siguiente fila** del conjunto de resultados. |
| **`fetchAll()`** | Obtiene **todas las filas** en un array. |
| **`fetchColumn()`** | Devuelve una única columna de la siguiente fila. |

#### Estilos de obtención (`fetch_style`):
- `PDO::FETCH_ASSOC`: Devuelve un array asociativo indexado por nombre de columna.
- `PDO::FETCH_OBJ`: Devuelve un objeto anónimo con propiedades que corresponden a los nombres de columna.
- `PDO::FETCH_CLASS`: Mapea las columnas a propiedades de una clase definida.

> [!TIP]
> Si usas exclusivamente **Sentencias Preparadas**, eliminas prácticamente cualquier riesgo de Inyección SQL en tu aplicación.que va a retornar la información.

- **Otras funciones PDO**: : [FETCH]