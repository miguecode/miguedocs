---
title: "JSON Web Tokens 1"
description: "JWT es un estándar abierto que define un formato compacto y seguro para transmitir información entre partes como un objeto JSON, firmado digitalmente."
---


## 🔑 JSON Web Tokens (JWT)

El uso de **Tokens** consiste en una firma digital que certifica la identidad y el acceso de un usuario. Una vez que el usuario se identifica correctamente, el servidor le otorga un Token que podrá usar en subsiguientes peticiones HTTP (enviándolo en la cabecera) sin necesidad de re-ingresar sus credenciales.

**Características principales:**
- **Almacenamiento:** No se guarda en el servidor, sino en el cliente.
- **Sin estado (Stateless):** Solo guardan la información necesaria para verificar la sesión.
- **Identificación:** La API descifra el Token para identificar al usuario y dirigir el flujo de la aplicación.

---

### 🔄 Ciclo de Vida del Token

1. **Autenticación:** El usuario envía credenciales (ID/Clave) al Servidor.
2. **Creación:** El servidor valida los datos, crea el Token y lo envía de vuelta al usuario.
3. **Persistencia:** El usuario guarda el Token localmente para futuras peticiones.
4. **Verificación:** El servidor recibe el Token en cada petición, lo verifica y procesa la solicitud si es válido.

---

### 🏗️ Estructura de un JWT

Un JWT se compone de tres partes separadas por puntos: `header.payload.signature`

#### 1. Encabezado (Header)
Define el tipo de Token (`JWT`) y el algoritmo de cifrado utilizado (comúnmente `HS256`).

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

#### 2. Payload (Cuerpo)
Contiene los **JWT Claims**, que son piezas de información sobre el usuario y metadatos del token.

**Claims comunes:**
- **`sub`**: Identificador del sujeto (ej. ID de usuario).
- **`iat`**: Fecha de emisión (Issued At) en formato UNIX.
- **`exp`**: Fecha de expiración (Expiration Time) en formato UNIX.
- **Atributos personalizados**: Como `rol`, `admin`, etc.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "admin": true
}
```

#### 3. Firma (Signature)
Es la parte más crítica. Se crea tomando el Header y el Payload codificados, y cifrándolos con una **Clave Secreta** que solo el backend conoce.

```text
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  mi_clave_secreta
)
```

---

### 💡 Conceptos Clave

> [!IMPORTANT]
> **Codificar vs Cifrar:**
> - **Codificar:** Cambia la representación de los datos (ej: Base64). Es reversible sin clave. El Header y el Payload están codificados.
> - **Cifrar:** Transforma los datos de forma que solo se puedan leer con una palabra secreta. La **Firma** es la parte cifrada/encriptada.

- **Integridad:** El propósito de JWT no es ocultar datos (ya que el Header y el Payload son legibles al decodificar Base64), sino garantizar la **integridad**. Si alguien altera el Payload, la Firma dejará de coincidir y el servidor rechazará el Token.
- **JWT.io:** Puedes usar esta herramienta para depurar y visualizar tus tokens en tiempo real.

---

### 🚀 Resumen del flujo en una API
1. `POST /login` → El servidor crea el JWT con su secreto.
2. Cliente recibe el JWT y lo guarda.
3. Cliente envía cada petición con el Header: `Authorization: Bearer <token>`.
4. El servidor comprueba la firma y devuelve el recurso si es válida.
