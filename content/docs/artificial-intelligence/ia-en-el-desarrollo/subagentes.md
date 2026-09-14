---
title: "11. Subagentes"
description: "Delegación de tareas mediante subagentes, optimización de tokens y contexto, creación con `.claude/agentes/` e invocación simultánea."
---


## Subagentes y automatizaciones

Un **subagente** es un agente especializado que sirve para delegar tareas de forma simultánea, optimizando de esta manera el uso de tokens y mejorando la precisión de la respuesta final.

### Flujo de funcionamiento

1. Enviamos un prompt al **agente orquestador** (la sesión o chat principal).
2. El agente orquestador evalúa la solicitud y decide automáticamente cómo dividir el prompt principal en múltiples mini-prompts destinados a chats o procesos internos (los subagentes).
3. Cada subagente o mini-chat ejecuta de forma aislada la tarea encomendada y le devuelve su resultado al orquestador.
4. El orquestador consolida los informes de los subagentes y nos presenta la respuesta final.

Todo este proceso de delegación ocurre de forma transparente: el usuario interactúa únicamente con el agente principal.

### Ejemplos de subagentes especializados

- **Revisión de código**: analizar calidad y buscar vulnerabilidades.
- **Búsqueda específica**: localizar referencias o archivos puntuales en el proyecto.
- **Modificación funcional**: refactorizar o implementar características concretas.
- **Testing**: ejecutar pruebas y auditar resultados.
- **Búsqueda en la web**: investigar información externa en Internet.
- **Diseño UI/UX**: generar conceptos e ideas de interfaz.

Claude incluye subagentes integrados nativos, como `explore` (para explorar el proyecto) o `plan` (para elaborar planes de acción).


## Creación de subagentes

Podemos crear subagentes personalizados según nuestras necesidades. La forma más sencilla es solicitárselo directamente a Claude desde la terminal mediante un prompt descriptivo.

### Ejemplo de instrucción para crear un subagente:

```text
"Crea un subagente llamado code-reviewer. Quiero que revise el código sin modificar archivos (respetando la estructura de carpetas y las jerarquías). Tiene que buscar errores, código repetido y riesgos básicos. Debe devolver una lista con el formato: 'Problema; Archivo; Por qué importa; Acción sugerida'. Guárdalo en .claude/agentes/code-reviewer.md."
```


## Invocación y uso de subagentes

Para invocar un subagente (de manera análoga a como invocamos una Skill o un Conector MCP), podemos solicitarlo de dos formas:

- **Por chat en el prompt**: *"Usa el subagente code-reviewer para revisar el proyecto"*.
- **Mediante Agent Tool**: Configurando el parámetro `subagent_type: "code-reviewer"`.

También es posible darle instrucciones de notificación explícitas al orquestador: *"Avísame cuando el subagente code-reviewer termine y cuéntame lo que te devolvió"*.

### Ventajas del trabajo simultáneo

Los subagentes permiten un flujo de trabajo **paralelo y asíncrono**: al solicitarle al orquestador que divida una tarea compleja en subtareas y las delegue a subagentes, el agente principal queda disponible para seguir recibiendo otras consultas mientras espera las respuestas de los subagentes en segundo plano.
