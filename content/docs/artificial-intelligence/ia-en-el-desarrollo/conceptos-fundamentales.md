---
title: "1. Conceptos fundamentales"
description: "IA, Machine Learning y Deep Learning: la base del ecosistema actual."
---


## Conceptos Fundamentales

### Inteligencia Artificial (IA)

Es un campo de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana: razonamiento, aprendizaje, percepción, comprensión del lenguaje natural, etc.

### Machine Learning (ML)

Subcampo de la IA donde los sistemas **aprenden de datos** sin ser programados explícitamente. En lugar de escribir reglas, se entrena un modelo con ejemplos y el sistema aprende los patrones por sí solo.

### Deep Learning

Subcampo del ML que usa **redes neuronales profundas** (con muchas capas). Es la base de la mayoría de los LLMs modernos.

## Casos de uso

- **Pensar e idear**: estructurar un plan, una propuesta o lluvia de ideas.
- **Escribir y reescribir**: redactar y pulir guiones, correos electrónicos, propuestas, publicaciones, informes, documentación, etc.
- **Resumir información**: sintetizar documentos extensos como PDFs, hilos de correos y reuniones.
- **Explicar temas complejos**: simplificar conceptos difíciles (p. ej., *"explícamelo como si tuviera 12 años"* o *"dame ejemplos reales"*), ideal para estudiar y aprender.
- **Ordenar el caos**: crear documentos estructurados a partir de notas o información desordenada.
- **Revisar y mejorar**: utilizar la IA como una "segunda mirada" para pedir opiniones y proponer mejoras.
- **Planificar**: diseñar campañas, proyectos, lanzamientos, metas y objetivos.
- **Analizar información**: interpretar comentarios de clientes, opiniones de usuarios, encuestas, etc.
- **Programar**: asistir en todo el proceso de desarrollo de software.
- **Automatizar procesos**: optimizar y realizar tareas repetitivas de forma eficiente.

## Cuándo NO usar la IA (o usar con mucha precaución y revisión)

- **Decisiones legales**
- **Diagnósticos médicos**
- **Decisiones financieras**
- **Información de actualidad en tiempo real**

## Entornos y herramientas de uso

Las IAs se pueden utilizar generalmente en:

- **La terminal** (el entorno más utilizado por desarrolladores)
- **Aplicación de escritorio (Desktop)**
- **Navegador web**
- **VS Code**
- **JetBrains**
- **Slack**

De base, es muy recomendable descargar la aplicación de **Claude para Desktop**, ya que resulta más cómoda que la versión de navegador, ofrece una mejor experiencia sin tantas restricciones y cuenta con acceso a archivos locales del sistema.

### Chatbots

Un **chatbot** es una interfaz conversacional que usa un LLM (un motor de IA) para interactuar con usuarios en lenguaje natural.

### Diferencia entre chatbot y agente

Ambos usan lo mismo en su núcleo — un LLM — pero difieren fundamentalmente en lo que hacen con él:

* El **chatbot** analiza el prompt del usuario junto con el System Prompt y devuelve una respuesta en texto (o algún archivo multimedia generado). Solo responde.
* El **agente** actúa: investiga, explora el proyecto, planifica, edita archivos y ejecuta comandos en la terminal. Tiene autonomía para completar tareas de principio a fin.

|              | Chatbot básico                  | Agente IA                                |
| ------------ | ------------------------------- | ---------------------------------------- |
| Herramientas | No (solo texto)                 | Sí (puede ejecutar código, buscar, etc.) |
| Autonomía    | Baja (responde y ya)            | Alta (planifica y actúa)                 |
| Ejemplos     | ChatGPT, Claude bots de soporte | Codex, Claude Code, Devin                |

### Componentes de un chatbot moderno

```
 [System Prompt]    ← mensaje global hacia el LLM, define su personalidad y reglas
    [History]       ← es el historial de mensajes, mantiene la conversación
  [User Prompt]     ← es el mensaje del usuario, la input actual
        ↓
     [LLM API]
        ↓
[Respuesta del modelo]
```