---
title: "Todo sobre XAMPP"
description: "XAMPP es un paquete de software que facilita la instalación de un entorno de desarrollo local."
---


## 🛠 Todo sobre XAMPP

**XAMPP** es un paquete de software que facilita la instalación de un entorno de desarrollo local. Sus siglas significan:

- **X:** Multiplataforma (Cross-platform), funciona en cualquier SO.
- **A:** **Apache**, el servidor web que interpreta nuestro código PHP.
- **M:** **MariaDB** (antes MySQL), el sistema de gestión de bases de datos.
- **P:** **PHP**, el lenguaje de programación.
- **P:** **Perl**, otro lenguaje de programación (que generalmente no usaremos).

Este paquete nos permite levantar un servidor local en nuestra máquina de manera sencilla para probar aplicaciones web sin necesidad de un hosting externo.

### Instalación y Configuración

1. Tras instalar XAMPP, abre el **XAMPP Control Panel**.
2. Dale al botón **'Start'** en el módulo de **Apache** para iniciar el servidor.
3. Abre tu navegador y dirígete a: `http://localhost/` o `http://localhost:80/`. El puerto 80 es el puerto por defecto de Apache.

#### ⚖️ Una aclaración sobre los puertos
Si Apache no inicia, puede ser que el puerto 80 esté ocupado por otro programa (como Skype o algún otro servidor local). En ese caso, deberás cambiar el puerto en la configuración de Apache dentro del panel de control de XAMPP.

### ¿Dónde guardar mis proyectos? (htdocs)

En el directorio de instalación de XAMPP (usualmente `C:\xampp\`), encontrarás una carpeta llamada **`htdocs`**. Esta es la **raíz de tu servidor local**.

> [!IMPORTANT]
> Todo lo que coloques dentro de `htdocs` será accesible desde el navegador a través de `localhost/`.

---

### Ejemplo práctico: Mi primera página PHP

1. Dentro de `htdocs`, crea una carpeta llamada `Clase01`.
2. Crea un archivo dentro llamado **`index.php`**.
3. Escribe el siguiente código:

```php
<?php
  echo "Hola Mundo";
?>
```

4. Para verlo en el navegador, accede a: `http://localhost/Clase01/`

### 💡 Aclaraciones adicionales

- **localhost** apunta directamente al contenido de la carpeta `htdocs`.
- **Búsqueda automática:** Apache busca siempre por defecto un archivo llamado `index.php`. Si no existe, busca `index.html`. Si lo encuentra, lo sirve automáticamente al entrar a la carpeta.
- **Limpieza:** Se recomienda borrar los archivos que vienen por defecto en `htdocs` (como el dashboard) para tener un espacio de trabajo limpio y ver tus propias carpetas al entrar a `localhost`.