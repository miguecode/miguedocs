---
title: "9. Conectores, MCP y Plugins"
description: "Conectores a servicios externos, plugins como contenedores y la arquitectura del protocolo abierto Model Context Protocol (MCP)."
---


## Conectores

Un **conector** es un "puente" de comunicación entre un modelo de IA (como Claude, ChatGPT, etc.) y una aplicación externa cualquiera. Dentro de ese puente se definen explícitamente qué acciones están permitidas realizar y cuáles no.

Por ejemplo, supongamos que desarrollamos un juego donde el personaje puede caminar, correr y saltar. Podríamos crear un conector específico para nuestro juego en el que únicamente habilitemos las acciones de *caminar* y *correr*, pero no la de *saltar*. Una vez activado el conector en la configuración de Claude, le podemos enviar un prompt diciendo: *"corre en mi juego"*, y la IA lo ejecutará directamente en el juego sin necesidad de que toquemos nada. Si le pedimos que camine, también lo hará; pero si le pedimos que salte, no lo ejecutará, ya que esa función no fue establecida en las capacidades del conector.

De esta misma manera funcionan los conectores de servicios reales como Gmail o Google Drive:

- Con el conector de **Gmail** activado, le podemos pedir a Claude: *"envía un correo a tal dirección, con tal asunto y con tal contenido"*, y el modelo enviará el mail automáticamente.
- Sin embargo, si le pedimos a Claude: *"sube este archivo .mp4 a mi cuenta de YouTube y luego elimina mi cuenta de Google"*, no lo podrá hacer. No por falta de capacidad, sino porque el conector de Gmail no posee los permisos ni las funciones para interactuar con YouTube ni para eliminar cuentas. Cuando Google desarrolló el conector de Gmail, no incluyó esas acciones.

En la configuración de los conectores, los usuarios podemos activar o desactivar funciones específicas en base a las opciones que el propio conector ofrezca (por ejemplo, mediante casillas de verificación como *Caminar: Sí/No*, *Correr: Sí/No*, *Saltar: Sí/No*). La posibilidad de interactuar con el entorno la otorga directamente el conector.


## Plugins

Un **plugin** funciona como un "combo completo": es un contenedor que agrupa distintas **Skills** y/o **Conectores** en un solo paquete. Al instalar un plugin, se añaden automáticamente todas las Skills y Conectores que este incluya.


## MCP (Model Context Protocol)

**MCP** (*Model Context Protocol*) es un protocolo abierto desarrollado por Anthropic que define cómo los LLMs se conectan con herramientas, datos y servicios externos de forma estandarizada.

Un MCP funciona conceptualmente como un **cable USB**: es el protocolo que nos permite instalar y vincular un conector en nuestra IA (por ejemplo, en Claude) aun cuando ese conector no figure de forma nativa en el catálogo oficial de la interfaz. Si un conector no aparece en la interfaz gráfica de Claude pero existe un servidor MCP publicado en Internet, podemos instalarlo fácilmente mediante un comando en la terminal.

Un caso de uso práctico es **Playwright**: si instalamos el MCP de Playwright, podemos abrir un chat y solicitarle: *"ingresa a este sitio web y realiza X acción"*. El servidor MCP abrirá el navegador y podremos observar en tiempo real cómo la IA ejecuta la tarea en la web.

> **Analogía clave**: MCP es para los LLMs lo que un cable USB es para los dispositivos electrónicos: un estándar universal de conexión.

### Arquitectura MCP

```text
[Aplicación Host]       ← Claude Desktop, IDEs, etc.
       ↓
  [Cliente MCP]
       ↓
  [Servidor MCP]        ← expone herramientas, recursos y prompts
       ↓
[Servicio externo]      ← bases de datos, APIs, sistema de archivos, etc.
```

### Elementos que expone un servidor MCP

- **Herramientas** (*Tools*): funciones ejecutables que el modelo puede llamar (p. ej., buscar en la web, escribir archivos, realizar cálculos).
- **Recursos** (*Resources*): fuentes de datos, archivos locales o URIs que el modelo puede consultar y leer.
- **Prompts**: plantillas de instrucciones reutilizables preconfiguradas en el servidor.

### Servidores MCP populares

| Servidor | Función de ejemplo |
| :--- | :--- |
| `filesystem` | Leer y escribir archivos locales del sistema |
| `github` | Gestionar repositorios, *issues* y *pull requests* |
| `postgres` | Consultar y administrar bases de datos PostgreSQL |
| `brave-search` | Realizar búsquedas web en tiempo real |
| `chrome-devtools` | Inspeccionar y controlar el navegador web |
| `slack` | Leer y enviar mensajes en canales de Slack |
| `google-drive` | Acceder a documentos y archivos de Google Drive |
