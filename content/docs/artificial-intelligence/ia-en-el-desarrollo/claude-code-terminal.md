---
title: "10. Claude Code y la Terminal"
description: "Funcionamiento de Claude Code en directorios locales, integración en la terminal y comandos especiales como goal, loop y hook."
---


## Claude Code

**Claude Code** es Claude trabajando directamente sobre una carpeta REAL de nuestra máquina. A nivel de arquitectura raíz, no se trata simplemente de una terminal o de una interfaz gráfica: es la interacción sobre un directorio de nuestro sistema con sus correspondientes subcarpetas y archivos.

Cuando aclaramos que *"no es una terminal ni una interfaz"*, nos referimos a que el motor de trabajo es el mismo independientemente de cómo accedamos a él. Trabajar desde la terminal o desde la interfaz de Claude (sea en su versión Web o en la App de Desktop) solo altera la forma en la que nosotros manipulamos y visualizamos la información; el comportamiento interno de cómo Claude Code gestiona los archivos no cambia.

En la interfaz de Claude, al ingresar a la vista de Claude Code, podemos abrir una carpeta de nuestro sistema. Desde ese momento, la IA obtiene acceso total al directorio seleccionado para **leer, editar, eliminar y crear archivos nuevos**. En esencia, esto representa la aplicación directa del concepto de **Artifacts** explicado en las guías previas.


## Claude en la Terminal

Usar Claude desde la terminal no significa disponer de un modelo diferente ni más "inteligente". En su núcleo, es exactamente el mismo LLM que utilizamos en la interfaz gráfica.

### ¿Por qué utilizar la terminal?

No ofrece capacidades cognitivas extra ni opciones ocultas, pero aporta ventajas operativas clave:

- **Velocidad y agilidad**: Es significativamente más rápido operar la herramienta mediante comandos de teclado que usar el ratón para alternar entre diferentes chats, agregar Skills o configurar conectores MCP.
- **Limpieza visual**: Proporciona un entorno de trabajo enfocado y sin distracciones.

Para inicializar Claude en un directorio específico de nuestra máquina, ejecutamos el comando:

```bash
claude
```

Este comando actúa de forma análoga a ejecutar `git init` u `opencode` dentro de un proyecto: vincula la sesión de Claude con la carpeta actual. Además, al presionar `/` en la terminal, se despliega la lista completa de comandos disponibles.


## Goals, Loops y Hooks

Los comandos `/goal`, `/loop` y `/hook` son comandos especiales de terminal en Claude. Se escriben indicando la barra `/` seguida del nombre del comando y el contenido del prompt:

1. **`/goal` (Objetivos)**: Diseñado para alcanzar un resultado concreto. Le especificamos la meta deseada en el prompt y la IA iterará acciones de forma continua (incluso durante horas) hasta conseguir el objetivo final.
2. **`/loop` (Bucle de revisión)**: Permite ejecutar o revisar una tarea cada cierto intervalo de tiempo (definido por el usuario). La IA repetirá el proceso periódicamente y continuará o se detendrá según las condiciones que le hayamos fijado.
3. **`/hook` (Disparadores / Triggers)**: Funciona como una regla de control que ejecuta una acción específica solo cuando se cumple un evento determinado. Por ejemplo: *"cancela la acción cada vez que se esté por eliminar un archivo"*. Si el agente intenta borrar algo, el *hook* interceptará y bloqueará la operación.

### Buenas prácticas para comandos de terminal:

- **Para `/goal`**: Incluir siempre un criterio explícito de comprobación o test. Por ejemplo: *"No te detengas hasta comprobar que X función trabaja correctamente"*, indicándole ejecutar un comando de verificación como `npm test` hasta que la suite pase con 0 errores.
- **Para `/loop`**: Definir una condición de parada simple, clara y directa para evitar ejecuciones infinitas innecesarias.
- **Para `/hook`**: Diseñarlo enfocado en una sola responsabilidad o tarea concreta.
