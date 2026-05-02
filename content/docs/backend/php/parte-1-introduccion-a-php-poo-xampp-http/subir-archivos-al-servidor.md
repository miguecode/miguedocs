---
title: "Subir archivos al Servidor"
description: "Para poder subir archivos al Servidor, es necesario crear un formulario en HTML que le permita a los usuarios seleccionar un archivo, utilizando el `input type='file'`."
---


## Persistir Información: Subir archivos al Servidor

Para poder subir archivos al Servidor, es necesario crear un formulario en HTML que le permita a los usuarios seleccionar un archivo, utilizando el `input type="file"`. 

El `form` debe configurarse de la siguiente manera:

```html
<form action="upload.php" method="post" enctype="multipart/form-data">
    <input type="file" name="archivo">
    <input type="submit" value="Subir">
</form>
```

**Requerimientos importantes:**
- El **método** del formulario debe ser **POST**.
- El **enctype** especifica el contenido/tipo a usarse cuando se envía el formulario (`multipart/form-data`). Sin esto, la subida de archivos no funcionará.

> Esta es la forma más antigua de subida de archivos; actualmente ha sido desplazada por métodos más modernos (vía AJAX/Fetch), aunque el concepto base en el Servidor sigue siendo similar.

### Manejo en el Servidor (PHP)

Del lado del Servidor, tratamos la subida de archivos usando la variable global `$_FILES`. Debemos mover el archivo desde su ubicación temporal a la ubicación definitiva dentro del Servidor.

```php
$destino = "uploads/" . $_FILES["archivo"]["name"];
move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
```

Cuando PHP recibe el archivo, lo guarda en una carpeta temporal. Si queremos que el archivo persista, debemos moverlo manualmente.

#### La función `move_uploaded_file`

```php
move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
```

Esta función recibe dos parámetros:
1. **Nombre temporal:** El archivo es tratado como un objeto que tiene un atributo `["tmp_name"]`. Accedemos a él mediante `$_FILES["archivo"]["tmp_name"]`.
2. **Destino:** La ruta dentro del Servidor donde deseamos guardar el archivo.

### Variable Super Global `$_FILES`

`$_FILES` es un array asociativo que contiene información sobre los archivos cargados mediante el método POST. Contiene las siguientes claves:

- **"name":** nombre del archivo (con su extensión).
- **"type":** tipo del archivo (determinado por el navegador, ej: `image/png`).
- **"tmp_name":** ruta temporal donde se almacenó el archivo en el servidor.
- **"error":** código de error asociado a la subida (si es 0, no hubo errores).
- **"size":** tamaño del archivo en bytes.

### 💡 Aclaración
Las validaciones **SIEMPRE** deben estar de ambos lados: en el **Frontend** (para experiencia de usuario) y en el **Backend** (por seguridad).

### Uso con Postman

Dado que el uso directo de formularios HTML está cayendo en desuso para APIs, podemos probarlo en Postman:

1. Seleccionar el método **POST**.
2. En la pestaña **Body**, seleccionar **form-data**.
3. En la columna de **Key**, escribir el nombre (ej: `archivo`) y cambiar el tipo de `Text` a `File` (aparece un desplegable al posicionar el mouse sobre la key).
4. Seleccionar el archivo desde el explorador del SO.

> [!CAUTION]
> **Ojo:** Si estás enviando la petición a un archivo llamado `index.php`, recuerda explicitarlo en la URL del Postman (`http://localhost/tu-proyecto/index.php`) para evitar confusiones de ruteo si el servidor no lo toma por defecto.