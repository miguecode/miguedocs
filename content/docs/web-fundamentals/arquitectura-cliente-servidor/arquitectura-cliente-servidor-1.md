---
title: "Arquitectura Cliente-Servidor - Parte 1"
description: "La primera parte de los apuntes de Arquitectura Cliente-Servidor"
---


## Arquitectura Cliente-Servidor

- Un Cliente es una computadora o un dispositivo que, en principio, tiene un navegador. Y un navegador puede realizar peticiones a un Servidor. El cliente va a ser un dispositivo de Hardware (PC, Notebooks, Tablets, SmartPhones, SmartWatch, etc), el cual corre un Software que se encarga de realizar peticiones.

- **Y ojo**: un navegador web PUEDE ser el Cliente. Pero no obligatoriamente debe serlo. También puede ser una aplicación movil o de escritorio, una terminal de comandos, o incluso otro servidor actuando como cliente. 

- Un Servidor es una PC que está en la nube, en una empresa o en una red local. Dicha PC debe estar encendida las 24hs del día los 365 días del año, y conectada a internet.

- Al Servidor lo podemos entender como el Hardware (literalmente una máquina) y también lo podemos entender como el Software que se encarga de escuchar peticiones, validarlas y entregar una respuesta a esa petición de recursos solicitados.

- Normalmente, ambos dispositivos están conectados a Internet (una red de computadoras). 


### IP y Dominio

Un Servidor tiene lo que se conoce como una IP (Internet Protocol). Una IP es una dirección numérica.

```text
Ejemplo de IP:   86.028.045.152
```

- La dirección IP es una dirección que utilizan los dispositivos conectados a una red para ser identificados.
Como a los humanos nos cuesta recordar esos números de memoria tan largos, las IP se traducen en un DOMINIO, es decir, un nombre de fantasía que es fácilmente recordable para un ser humano. Por ejemplo, "google", "youtube", "twitter" son DOMINIOS. O sea, son IP's traducidas a lenguaje humano para que las personas lo entiendan. Pero en realidad, siguen funcionando como si fuesen lo mismo:

- Supongamos que la IP de YouTube es 86.021.486.199. Si esto es así, nosotros podríamos ingresar a:

```text
https://86.021.486.199/
https://youtube.com/
```

- Y sería lo mismo. Es decir, ingresaríamos al mismo lugar. Sólo que en el primer ejemplo pusimos la IP y en el segundo el dominio, que es el nombre de fantasía que recubre la IP.


### URL y sus partes

- **Las URL NO son lo mismo que los dominios. Veamos**: 

```text
URL = Uniform Resource Locator
```

- La URL es una dirección web que especifica la ubicación de un recurso en un Servidor conectado a Internet, la cual es una red de computadoras. 

- Si bien URL y Dominio son dos cosas distintas, se las suele confundir o llamar como si fueran lo mismo, pero no lo son. La URL es una cadena de caracteres formada por:

1. Un protocolo.
2. Un Dominio o una IP.
3. Un puerto (opcional).
4. Un TLD (Top-Level Domain).
5. Un recurso y parámetros (opcionales)

- El dominio no es ni más ni menos que la traducción de la Dirección IP del Servidor.

- El TLD hace referencia a ".com", ".net", ".org", que son TLD genéricos. También existen los TLD geográficos como ".ar", ".es", ".br". Una URL puede tener ambos tipos (.com.ar)

- El Recurso es un archivo que le queremos solicitar al Servidor. Ese archivo puede ser de cualquier tipo (Un HTML (es decir, una página), un arhico CSS, un archivo JS, una imágen, un video, un audio, un documento, etc). Y los parámetros son distintos valores para darle forma a la petición que queremos hacer.

- ¿Qué es un protocolo? ¿Qué es un puerto? Lo vamos a ver más adelante en este apunte.


### Ejemplos de URL's

```text
https://www.youtube.com/feed/history
```

- **"https**: //www.youtube.com/feed/history" es la URL.
- "https" es el protocolo.
- "www" es el subdominio (no siempre es necesario escribirlo).
- "youtube" es el DOMINIO, es decir, la traducción de la IP para que el humano la entienda.
- ".com" es el TLD (Top Level Domain). En este caso, es un TLD genérico.
- "/feed/history" es la ruta del recurso al que queremos acceder. Son los archivos del Servidor.


```text
http://127.0.0.1:5500/index.html
```

- **"http**: //127.0.0.1:5500/index.html" es la URL.
- "http" es el protocolo.
- "127.0.0.1" es la dirección IP.
- "5500" es el puerto. Esto es opcional.
- "index.html" es el recurso al que queremos acceder. Es un archivo del Servidor.

```text
https://www.ejemplo.com/productos?categoria=ropa&talla=M
```

- Ese sería un ejemplo con parámetros. Los parámetros siempre van después de un " ? ", se separan con " & " y son keys values [key = value].

- **Entonces, la estructura de una URL sería**: 

```text
[Protocolo] [:] [//] [Subdominio] [Dominio/IP] [:] [TLD] [Puerto] [/] [Ruta al Recurso] [? Parámetros]
```

- Como dijimos, el puerto, recurso y los parámetros son opcionales. El subdominio (www) a veces es necesario escribirlo y a veces no.


### IP fija y variable

- Una máquina que quiere ser encontrada, tiene lo que se conoce como una IP fija. Entonces, tiene siempre la misma dirección IP. Los clientes también, al pertenecer a la red, tienen su dirección IP. Pero normalmente, éstos tienen una IP variable (no fija).

- En el momento en el que nosotros (Clientes) nos conectamos al router de nuestro proveedor, obtenemos una IP, y podría pasar que se nos va la luz o algo. Cuando nos volvemos a conectar, vamos a tener otra IP. Eso es porque nuestra IP es variable y no fija. Esto significa que a nosotros como clientes no nos interesa nuestra IP. Y tampoco nos vemos en la necesidad de tener una IP fija.

- Un Router, a su vez, tiene una dirección IP variable hacia el exterior (asignada por el proveedor de internet). Y hacia nuestra casa, se encarga de generar una subred, es decir, una red privada en la cual el Router es el encargado de darles una IP interna a cada uno de nuestros dispositivos conectados en nuestra casa. La IP interna sería la forma de identificarse del dispositivo dentro de la subred de nuestra casa/empresa.

- El Router es quien sabe quién hizo la petición, la envía hacia internet y cuando viene la respuesta, es también el encargado de recibirla y dársela al dispositivo que la haya solicitado.

- También cabe decir que La IP pública es la que asigna el proveedor de internet y es la que se usa para que un servidor pueda ser encontrado en Internet. En cambio, la IP privada es la que asigna el Router dentro de una red local (ejemplo: 192.168.1.1).


- Entonces, ¿Cómo hace el Cliente para encontrar ese Servidor al que queremos solicitarle algo? Bueno, lo hace con la URL de la que hablamos antes.


## Protocolo

- Un protocolo es un conjunto de reglas que indican cómo se realiza una comunicación. Es como el idioma en el que se van a comunicar el Cliente y el Servidor. En el caso de la transferencia de datos, Internet utiliza HTTP para transmitir páginas Web.

- Como dijimos, cuando desarrollamos (y usamos Live Server o un derivado) estamos siendo el Servidor y el Cliente a la vez. Por lo tanto, nos queremos comunicar con nosotros mismos. Cuando una máquina quiere hacer esto, lo hace siempre a la dirección IP 127.0.0.1, esa IP sería como decir "Yo mismo". Localhost es el Dominio de esa Dirección IP. Por lo tanto, es su nombre de fantasía. Nosotros podemos escribir "localhost" o podemos escribir "127.0.0.1" y nos estamos refiriendo a lo mismo.

```text
IP de nuestra máquina: 127.0.0.1
Dominio de esa IP: localhost
```

El protocolo por excelencia es HTTP, el cual tiene su variación HTTPS, que es exactamente lo mismo, pero con la S de Security, es decir, que es un protocolo más seguro. Por eso siempre lo mejor es HTTPS. De esto se va a hablar en otro apunte.


## Puertos y Live Server como ejemplo

- En una computadora hay 2 elevado a la 16 puertos. O sea, 65.536 puertos. Los programas que están corriendo dentro de una computadora, se comunican con otros programas a través de esos puertos. Sería como que nuestra máquina es un edificio, con 65.536 departamentos o ventanitas, que serían los puertos. 

- Normalmente, el navegador utiliza el puerto 80. Live Server generalmente utiliza el puerto 5500. Entonces, el programa Live Server está en el departamento 5500. Cuando el navegador (Cliente) quiere hacerle una petición al Servidor (Live Server), dice que quiere hacerle una petición HTTP a esta misma máquina (localhost) pero al puerto 5500. Es decir, a nuestro departamento 5500.

- El protocolo HTTP nos permite realizar una petición. Las peticiones tienen algo llamado métodos, los cuales se los suele asociar con verbos HTTP y son: GET, POST, PUT, PATCH y DELETE. Hay más, pero estos son los principales y los que se usan. Dependiendo del método, es la tarea que va a hacer el Servidor con esa petición. 

- El Live Server nos hace la gauchada de que cuando se levanta, automaticamente escribe la URL http://127.0.0.1:5500/index.html, es decir, realiza una petición HTTP a la dirección IP 127.0.0.1 (la misma máquina), y a su puerto 5500, que es donde está atendiendo Live Server. Y por último, le pide un recurso, que va a ser el index.html.

- El Servidor Apache, por ejemplo, utiliza el puerto por defecto 8080. 

- El navegador en la URL sólo puede hacer peticiones GET. Si quisieramos hacerlo con otro método HTTP, tendríamos que hacerlo programáticamente, es decir, ejecutando algún archivo JS.