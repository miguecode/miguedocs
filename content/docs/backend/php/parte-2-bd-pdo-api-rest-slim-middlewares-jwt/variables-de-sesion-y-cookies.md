---
title: "Variables de Sesión y Cookies"
description: "Las variables de sesión y las cookies son mecanismos que permiten mantener el estado entre diferentes peticiones HTTP."
---


## 🔐 Variables de Sesión y Cookies

PHP permite mantener el estado entre diferentes peticiones mediante dos mecanismos principales: las **Sesiones** (lado del servidor) y las **Cookies** (lado del cliente).

---

### 📂 Variables de Sesión

Una **Sesión** crea una relación entre un usuario y las peticiones que este realiza. Permite guardar información que estará disponible en todas las páginas del sitio durante la visita del usuario.

- **Almacenamiento:** Se guardan en el **Servidor**.
- **Persistencia:** Por defecto, duran hasta que el usuario cierra el navegador.
- **Iniciación:** Se utiliza la función `session_start()`, la cual debe llamarse antes de cualquier salida de HTML.

#### Uso de `$_SESSION`
Es un array asociativo superglobal con la información de la sesión activa.

```php
// Iniciar o reanudar sesión
session_start();

// Guardar datos
$_SESSION["usuario"] = "Miguel";
$_SESSION["id"] = 12345;

// Acceder a los datos en otro script
echo $_SESSION["usuario"];
```

#### Finalización
- `session_unset()`: Remueve todas las variables de la sesión actual (limpia los datos).
- `session_destroy()`: Destruye la sesión por completo, eliminando la vinculación entre el cliente y el servidor.

---

### 🍪 Cookies

Una **Cookie** es un pequeño archivo de texto que el servidor solicita al cliente que guarde en su equipo. Se envía automáticamente en la cabecera de cada petición HTTP hacia ese servidor.

#### Características principales:
- **Almacenamiento:** En el **Cliente** (navegador).
- **Finalidad:** Identificar al usuario, recordar preferencias o vincular una sesión de backend (`PHPSESSID`).
- **Seguridad:** Pueden marcarse como `httpOnly` para que no sean accesibles vía JavaScript, protegiendo contra ataques XSS.

#### Setear una Cookie
Se usa la función `setcookie()`. Debe llamarse antes de enviar cualquier contenido al navegador.

```php
setcookie(
    string $name, 
    string $value = "", 
    int $expires = 0, 
    string $path = "", 
    string $domain = "", 
    bool $secure = false, 
    bool $httponly = false
);

// Ejemplo: Cookie que dura 30 días
setcookie("usuario_preferencias", "oscuro", time() + (86400 * 30), "/");
```

#### Acceder a las Cookies
Se utiliza el array superglobal `$_COOKIE`.

```php
if(isset($_COOKIE["usuario_preferencias"])) {
    echo "Tu tema preferido es: " . $_COOKIE["usuario_preferencias"];
}
```

#### Eliminar una Cookie
Dado que están en el cliente, no podemos borrarlas directamente. Lo que hacemos es **forzar su expiración** seteando una fecha en el pasado.

```php
// Seteamos el tiempo actual menos una hora
setcookie("usuario_preferencias", "", time() - 3600);
```

---

### ⚖️ Sesiones vs Cookies

| Característica | Sesiones (`$_SESSION`) | Cookies (`$_COOKIE`) |
| :--- | :--- | :--- |
| **Ubicación** | Servidor | Cliente (Navegador) |
| **Seguridad** | Mayor (el cliente no ve los datos) | Menor (el cliente puede ver/editar datos) |
| **Capacidad** | Prácticamente ilimitada | Limitada (aprox. 4KB por cookie) |
| **Expiración** | Al cerrar el navegador (configurable) | Definida por el desarrollador |

> [!TIP]
> En entornos como **Postman**, cerrar la pestaña o la aplicación equivale a cerrar el navegador, lo que provocará la pérdida de las variables de sesión y las cookies temporales.an es como cerrar el navegador. Al hacerlo, expiran las cookies creadas.
