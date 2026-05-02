---
title: "APIs. Qué son y qué es API REST"
description: "Una API (Application Programming Interface) es un conjunto de reglas, protocolos y herramientas que permiten que diferentes aplicaciones de software se comuniquen entre sí, intercambiando datos y funcionalidades de manera estandarizada."
---


## API (Application Programming Intercae)

- Una API es un conjunto de funciones y procedimientos (métodos) que se usan para diseñar e integrar el software de diferentes aplicaciones. 

- Por ejemplo, yo puedo tener un Backend desarrollado en un lenguaje, y un Frontend en otro, y comunicarlos. ¿Cómo? Mediante una API. O sino, yo puedo tener dos Backend desarrollados escritos en lenguajes distintos, y también comunicarlos. ¿Cómo? Mediante una API. O también, yo puedo tener dos aplicaciones desarrolladas de forma totalmente diferente, y también comunicarlas. ¿Cómo? Mediante una API.

- Entonces, una API es una INTERMEDIARIA. 

- Generalmente, los programadores Backend son los encargados de desarrollar las APIs. Y los Frontend, son los encargados de CONSUMIR las APIs, y obtener información a partir de ellas. 

- Cada una de las APIs que se desarrollan, suelen tener un Endpoint, es decir, una URL, mediante las cuales los Frontend van a conseguir comunicarse con la información que obtener o manipular. 


## ¿Qué significa REST? 

- REST = Representational State Transfert. Estado de transferencia representacional.

- La forma más común de implementación de una API es mediante la arquitectura REST.

- La arquitectura REST implica que los datos pueden guardarse en caché, que el estado no se envía en las peticiones, y que uno pueda definir qué datos se podrán manipular/acceder.

- Las comunicaciones que se realicen mediante REST no tienen estado. Es decir, el estado de las solicitudes no quedan guardadas en ningún lado. Por ende, para obtener una respuesta, en cada petición tenemos que pasarle toda la información necesaria.

- Si desarrollamos una API, vamos a crear al intermediario ente el Cliente y el Servidor (o sea, entre el Front y el Back). Esto se hace mediante el protocolo HTTP.

- Si el Front "habla en JavaScript", y la API lo hace en Java. ¿Cómo se entienden? Esto es gracias a JSON. JSON es el lenguaje estándar, es decir, el más común. XML también es una opción, pero no es tan común como JSON.

- Entonces, JSON va a ser el lenguaje intermediario para poder comunicar el Frontend (El lado del cliente), con la API.