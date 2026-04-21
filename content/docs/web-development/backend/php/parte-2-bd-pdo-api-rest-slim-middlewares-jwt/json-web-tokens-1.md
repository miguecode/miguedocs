---
title: "JSON Web Tokens 1"
---

Uso de Tokens
Consiste en una firma digital la cual va a certificar que la persona que está tratando de acceder tiene acceso y que ya ingresó. Sirve para no estar pasando cada 2 x 3 el usuario y la clave, sino que una vez que ya ingresó, le otorgo una Token al usuario. Y una vez que tiene el Token, lo usa para ingresar.

El Token, en cada petición HTTP lo tenemos que mandar en la cabecera.
El Token no es más que una firma cifrada que le permite a la API identificar al usuario.
El Token no se almacena en el servidor, sino que se guarda en el lado del cliente. Y la API es la que se encarga de descifrar ese Token y redirigir el flujo de la aplicación en un sentido u otro.
Los Token no guardan ningún estado. Sólo guardan info. necesaria para checkear que se haya logeado o no.

1. Paso: El usuario se identifica como siempre (usando id/clave/usuario), etc. Todos esos datos le llegan al Servidor.

2. Paso: El usuario es autenticado, el Token se crea y es enviado al usuario.

3. Paso: Ahora, la próxima vez que el usuario quiera logearse, simplemente tiene que pasar su Token.

4. Paso: La aplicación (Servidor) verifica y procesa la petición en base al Token recibido.

Nosotros nos vamos a centrar más que nada en el paso 2 y 4 (Servidor).

JWT (JSON Web Token)
Es un estándar abierto basado en JSON para crear un token que sirva para enviar datos entre aplicaciones o servicios y garantizar que sean válidos y seguros.

Un JWT está compuesto por 3 partes:
1. El encabezado (header)
2. El payload
3. La firma (signature)

header.payload.signature

1. El encabezado (header)
El encabezado va a definir el tipo de Token, en este caso JWT y la codificación utilizada. Comúnmente se usa HS256:

{
	"typ": "JWT",
	"alg": "HS256
}
Esto codificado queda: eyJhbGci0iJIUzI1NiIsInr5cCI6IkpXVCJ9

2. El payload
Está compuesto por los llamados JWT Claims. Son todas las partes configurables que puede tener nuestro JWT.
Los Claims mas comunes son sub, iat y exp.
Sub = identifica el sujeto del Token (ej. el id del usuario).
iat = Identifica la fecha de creación del Token (formato de tiempo UNIX)
exp = Identifica la fecha de expiración del Token (formato de tiempo UNIX)

{
	"sub":  "afsab3rb4sb",
	"iat": "2492849aisa9",
	"exp": "5254356sda",
	"admin": true,
	"rol": 1
}
Esto codificado quedaría: [letras y numeros...]

3. La firma (signature)
Esta es la tercera y última parte del JWT y es muy importante.S
Está formada por los anteriores componentes (Header y Payload) cifrados, y con una clave secreta almacenada en nuestro backend.
Sirve de Hash para comprobar que todo esté bien.

HMACSHA256(
	base64UrlEncode(header) + "." + base64UrlEncode(payload), miClaveSecreta
)
Esto codificado quedaría: [letras y numeros...]

La firma es lo que nos salva de que no cualquiera pueda decodificar toda esta información.

Codificar basicamente es cambiar el cómo represento los datos. Y eso es reversible.
En cambio, cifrar garantiza que va a transformar esos datos para que solamente se pueda decodificar si tenemos la palabra secreta, y no lo hace con todo el JWT. Sólo lo hace con la parte de la firma.

La tercer parte, la firma, es la que está codificada y encriptada. A nosotros como Servidor nos importa la firma porque es la que nos va a decir que eso lo hicimos nosotros. 

Nosotros podríamos decodificar el header y el payload para poder leerlo. Pero lo que no vamos a poder decodificar y desencriptar es la firma.

jwt.io //La página nos muestra un ejemplo de cómo funciona

Entonces, finalmente el JWT completo quedaría
header.payload.firma Pero cada parte, encriptada.

El ciclo de vida de un JWT es similar al del Token.
1. POST /login con usuario y contraseña.
2. El Servidor crea un JWT con el secreto.
3. Se devuelve el JWT para el usuario.
4. Después, el usuario envía el JWT en el encabezado.
5. El Servidor comprueba la firma del Token y devuelve el recurso al usuario.

Notas
Es importante entender que el propósito de usar JWT NO es ocultar u ofuscar datos de ninguna manera. Sirven para que el Servidor sepa que lo que están recibiendo del cliente (el Token) fue creado por el Servidor y no fue modificado por nadie más.
