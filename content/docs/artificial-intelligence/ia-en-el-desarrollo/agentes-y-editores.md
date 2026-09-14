---
title: "7. Agentes y editores"
description: "Agentes de IA, frameworks y cómo se integra la IA en los editores de código."
---


## Agentes de IA

Un **agente de IA** es un sistema donde un LLM puede **tomar decisiones, usar herramientas y ejecutar acciones** de forma autónoma o semi-autónoma para cumplir un objetivo.

### Anatomía de un agente

```
Objetivo del usuario
       ↓
[LLM — el cerebro del agente]
       ↓
¿Necesito más info o ejecutar algo?
       ↓
[Herramientas disponibles]
├── Búsqueda web
├── Ejecución de código
├── Leer/escribir archivos
├── Llamar APIs externas
└── Bases de datos
       ↓
Resultado → LLM → Siguiente acción
       ↓
Respuesta final al usuario
```

### Tipos de agentes

* **ReAct** (*Reasoning + Acting*): el modelo razona paso a paso y decide cuándo actuar.
* **Multi-agente**: varios agentes especializados colaboran (un agente planifica, otro ejecuta, otro revisa).
* **Agentes con memoria**: mantienen contexto entre sesiones usando bases de datos externas.

### Frameworks populares

| Framework   | Descripción                                 |
| ----------- | ------------------------------------------- |
| LangChain   | Framework general para aplicaciones LLM     |
| LangGraph   | Flujos de agentes con estados, de LangChain |
| AutoGen     | Multi-agente de Microsoft                   |
| CrewAI      | Equipos de agentes con roles                |
| Pydantic AI | Agentes con validación de datos estricta    |
| Claude Code | Agente de codificación de Anthropic         |

### **Evolución en la arquitectura de Agentes**

Para optimizar el rendimiento y reducir el ruido, la implementación de agentes ha evolucionado en tres etapas:

1. **El  Origen (`AGENTS.md`):** Un archivo único y gigante con todas las reglas, que se vuelve inmanejable por el ruido acumulado.

2. **La aparición de las Skills (Lazy Loading):** Fragmentar el conocimiento en archivos específicos que solo se cargan bajo demanda mediante un disparador o *trigger*.

3. **Los Subagentes (Orquestación):** Un agente "orquestador" delega tareas a subagentes que nacen con un **Contexto Limpio (Fresh Context)**. Al terminar la tarea, el subagente entrega un reporte y se cierra, evitando que el ruido de la ejecución contamine la sesión principal.

---
## IA en los Editores de Código

Los editores de código modernos integran IA de forma nativa, convirtiéndose en herramientas mucho más potentes que un simple editor de texto. Algunos de los más populares son **VS Code** (con extensiones como GitHub Copilot), **Cursor**, **Windsurf**, **Kiro**, **Antigravity** y **Trae** — todos diseñados pensando en la experiencia de IA dentro del propio entorno de desarrollo.

### Autocompletado inteligente

La función más básica y extendida. El editor tiene en cuenta el contexto del archivo actual, puede navegar entre archivos del proyecto y **predice el próximo bloque de código** que el desarrollador querría escribir. No es un simple autocompletado de palabras: entiende la intención.

### Modos de interacción

La mayoría de estos editores ofrecen distintos modos según el nivel de autonomía que se le quiera dar al modelo:

| Modo           | Descripción                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Chat / Ask** | Solo para preguntas. El modelo responde con texto, sin tocar archivos.                                                          |
| **Edit**       | Edita archivos directamente según la instrucción. No ejecuta comandos.                                                          |
| **Agent**      | Modo completo: edita archivos, ejecuta comandos en terminal, levanta servidores, instala dependencias. Actúa de forma autónoma. |
| **Plan**       | Analiza el proyecto y genera un plan de múltiples pasos antes de actuar. Ideal para tareas complejas.                           |

#### Modos de ejecución del chatbot integrado

Dentro del modo chat, también existe una distinción en *dónde* corre el agente cuando se le delega una tarea:

* **Local**: los cambios se realizan directamente en la máquina del desarrollador.
* **Background**: la tarea se delega a un subagente que corre en segundo plano.
* **Cloud**: igual que Background, pero el subagente corre en infraestructura de nube.

### Context Window en el editor

El editor también tiene su propia ventana de contexto. Cuantos más archivos se incluyan, y cuanto más grandes sean, más rápido se llena. Por eso es importante gestionar qué contexto se le pasa al modelo.

Se puede **agregar contexto manualmente**: archivos específicos, carpetas, o incluso contenido multimedia (imágenes, PDFs, videos) para que el modelo sepa exactamente a qué prestarle atención en cada momento.

---
