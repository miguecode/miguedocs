---
title: "[2] Arquitectura Cliente-Servidor"
description: "Por todo Internet, hay estratégicamente colocados distintos servidores DNS (Domain Name Server)."
---

## DNS

- Por todo Internet, hay estratégicamente colocados distintos servidores DNS (Domain Name Server).

- Los servidores DNS serían algo así como las agendas de contactos de la Web. O sea, como nuestros contactos del celular. En la lista de contactos, cada uno va a tener dos entradas: un número de teléfono y un nombre de contacto. Nosotros no tenemos que recordar el número de teléfono, sino tenemos que recordar el nombre del contacto asociado a él. Entonces esta agenda lo que hace es, mediante tablas, asociar una Dirección IP (dirección numérica) a un nombre de Dominio. 

- Eso va de la mano a lo que explicamos antes de las IP y los Dominios. La IP es el número en crudo, y el Dominio es el nombre de ese número, para que los humanos lo comprendan y recuerden.

- Nuestro Cliente, en este caso un navegador, lo que va a hacer es consultar a Servidores DNS, los cuales generalmente están asociados a través de nuestro proveedor de Internet. Eso sí, nosotros podríamos cambiarlos como para ir a DNS más rápidos, etc.

- Nuestro navegador va a enviar una petición al DOMINIO de un sitio, el cual el Servidor DNS lo va a TRADUCIR a la dirección IP del Servidor al que queremos acceder. El Servidor va a analizar nuestra petición y nos va a devolver una respuesta la cual debe llegar a nuestra máquina.

- En líneas generales, todo esto es la arquitectura Cliente-Servidor.


### Ejemplo práctico de resolución de un dominio

- Este es el paso a paso de lo que pasa cuando escribimos google.com en la barra del navegador:

- El navegador busca si ya tiene la IP en caché.
- Si no, consulta el servidor DNS de nuestro proveedor de internet.
- Si este no tiene la respuesta, sigue la jerarquía de DNS hasta encontrar la IP correcta.
- Una vez obtenida, la guarda en caché para futuras solicitudes.


### Explicación del mozo en el restaurante

- Un Servidor sería como el mozo de un restaurante, el mozo generalmente viene y nos entrega un menú. Ese menú seria la interface entre el restaurante (Servidor) y nosotros (Cliente). Nosotros, a partir de ese menú, vamos a elegir lo que queremos y se lo vamos a solicitar al mozo.

- Entonces, sin mediar palabra, el Servidor nos entrega un menú. Que en este caso, va a ser un index.html. Es lo que nos da de forma predeterminada aunque todavía no le hayamos pedido nada en específico. Index.html es el archivo que por defecto nos entrega un Servidor. En ese index (índice) vamos a ver las opciones que podemos elegir.
 
**Aclaración**: el index.html no siempre es obligatorio, depende de la configuración del servidor.
 
- En el caso del navegador, el cual es un programa, tiene un montón de módulos dentro. Así como el IDE tiene un editor de código, un compilador, un procesador, es como que es un programa el cual dentro de él, tiene corriendo otros varios programitas. Uno de ellos es un Intérprete de HTML, el cual, se encarga de interpretar el HTML.

- Un módulo es código escrito en un archivo aparte, que va a ser usado por el programa principal para poder aprovecharse de sus funciones, utilidades, etc. Es como si fuera una pequeña biblioteca de algo específico que vamos a querer usar para reutilizar código, organizar mejor las carpetas, etc.

- **Los navegadores modernos tienen módulos como**: 

- **Motor de renderizado (Ej**: Blink en Chrome, Gecko en Firefox).
- **Motor de JavaScript (Ej**: V8 en Chrome, SpiderMonkey en Firefox).
- Gestor de red (Para manejar las peticiones HTTP).

### Lo que pasa cuando desarrollamos y levantamos un servidor

- Nosotros normalmente para publicar una página web, alquilamos un espacio que tiene una IP fija siempre conectada a internet, y es ahí a donde vamos a subir los archivos que desarrollemos. Estos archivos van a estar hosteados en esa máquina.

- Generalmente, cuando probamos código o proyectos propios, lo que hacemos es ser el Servidor y el Cliente a la vez, porque nos hacemos peticiones a servidores hosteados en nuestra propia máquina (localhost).

- El disco rígido de la máquina Servidor es en donde nosotros colocamos nuestros archivos en desarrollo. Es decir, nuestros archivos .html, .css, .js, .php, .ico, .mp4, etc. Todo nuestro desarrollo. Ese disco rígido sería nuestra carpeta abierta en el Visual Studio Code, nuestra herramienta de desarrollo. Ese directorio (carpeta) sería el que está hosteado en ese disco rígido del Servidor (mi propia máquina).

Nosotros, en este caso, vamos a realizar 3 acciones a la vez: 

1. Vamos a ser el Cliente (usando nuestro navegador o usando Postman) para probar nuestro código. 
2. Vamos a ser el desarrollador (porque somos quienes vamos a escribir el código) en el VSCode.
3. Y vamos a ser el Servidor (porque vamos a levantar el Servidor en nuestra propia máquina), ya sea con los programas Live Server, JSON Server, Apache, lo que sea.