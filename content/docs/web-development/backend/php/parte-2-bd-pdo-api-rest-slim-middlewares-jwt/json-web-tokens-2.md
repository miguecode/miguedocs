---
title: "JSON Web Tokens 2"
description: "Ejemplo de Código -"
---


### 🛠️ Implementación de JWT en Slim

Para trabajar con JWT en PHP, solemos utilizar la biblioteca `firebase/php-jwt`. La gestión se realiza principalmente a través de dos procesos: **creación** (encode) y **validación** (decode).

#### 1. Creación del Token (Encode)
Se utiliza el método estático `encode` de la clase `Firebase\JWT\JWT`. Antes de crearlo, preparamos los datos (**Payload**).

```php
use Firebase\JWT\JWT;

// 1. Obtener datos del usuario
$datos = $request->getParsedBody();
$ahora = time();

// 2. Definir el Payload
$payload = array(
    "iat" => $ahora,            // Fecha de creación
    "exp" => $ahora + 3600,     // Expiración (1 hora)
    "data" => [                 // Datos personalizados
        "id" => 1,
        "nombre" => "Miguel"
    ]
);

// 3. Generar el Token
$token = JWT::encode($payload, "miClaveSecreta", "HS256");
```

#### 2. Validación del Token (Decode)
Para verificar si un token es válido y obtener su contenido, usamos el método `decode`.

```php
try {
    $decoded = JWT::decode($token, new Key("miClaveSecreta", "HS256"));
    // Si llegamos aquí, el token es válido
} catch (Exception $e) {
    // El token es inválido, expiró o la firma no coincide
}
```

---

### 🎡 Analogía: La pulsera del Lollapalooza

Para entenderlo mejor, piensa en el flujo de acceso a un festival:

1. **Entrada (Credenciales):** Presentas tu DNI y tu entrada comprada (Usuario y Contraseña).
2. **Entrega de Pulsera (JWT):** Una vez validada tu entrada, el personal te pone una pulsera oficial con un chip. Tú ya no necesitas mostrar tu DNI en cada escenario.
3. **Acceso a Escenarios (Peticiones con Token):** Al querer entrar a un sector VIP, el guardia escanea tu pulsera. Él no sabe quién eres, pero el escáner le dice que la pulsera es auténtica (fue creada por ellos) y que no ha expirado.

> [!TIP]
> El JWT permite que el servidor identifique al usuario de forma segura sin tener que consultar la base de datos en cada pequeña interacción.