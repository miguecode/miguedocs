---
title: "12. APIs y comparativa"
description: "Consumo de APIs de IA, cuadro comparativo de modelos y herramientas actualizadas, y stack típico de una aplicación con LLMs."
---


## APIs de IA

La mayoría de los modelos de lenguaje se consumen a través de APIs REST con una estructura de datos estándar:

```javascript
// Ejemplo con la API de OpenAI
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Eres un asistente útil." },
      { role: "user", content: "¿Qué es un LLM?" }
    ],
    temperature: 0.7,
    max_tokens: 500
  })
});
```

### Conceptos clave en la API

| Concepto | Descripción |
| :--- | :--- |
| `model` | Identificador único del modelo a ejecutar (p. ej., `gpt-4o`, `claude-3-5-sonnet`). |
| `messages` | Historial estructurado de la conversación con roles asignados (`system`, `user`, `assistant`). |
| `temperature` | Parámetro que controla la aleatoriedad y creatividad en la respuesta generada. |
| `max_tokens` | Límite máximo de tokens que el modelo generará en la respuesta. |
| `stream` | Habilita el envío progresivo de la respuesta token a token (efecto *typewriter*). |
| `tools` | Definición de herramientas o funciones externas que el modelo puede invocar (*Function Calling*). |

### Function Calling / Tool Use

Esta capacidad permite al modelo **invocar funciones definidas por el desarrollador** para interactuar con sistemas externos:

```javascript
tools: [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Obtiene el clima actual de una ciudad",
      parameters: {
        type: "object",
        properties: {
          city: { type: "string", description: "Nombre de la ciudad" }
        },
        required: ["city"]
      }
    }
  }
]
```


## Cuadro Comparativo de Productos

### Glosario de clasificaciones

| Clasificación | Descripción |
| :--- | :--- |
| **Empresa** | Organización o laboratorio que investiga y desarrolla la tecnología. |
| **Modelo** | La red neuronal entrenada (el "cerebro" matemático). |
| **Producto/App** | La interfaz gráfica o plataforma final con la que interactúa el usuario. |
| **API** | Servicio programático para integrar el modelo en aplicaciones de software. |
| **Agente** | Sistema autónomo que utiliza uno o varios modelos como motor para ejecutar tareas. |

---

### Tabla comparativa actualizada

| Nombre | Tipo | Empresa | Descripción |
| :--- | :--- | :--- | :--- |
| **OpenAI** | Empresa | — | Laboratorio de IA fundado en 2015. Creador de GPT, DALL-E, Codex, Sora, Whisper y Astra. Uno de los actores clave del sector. |
| **GPT-4o** | Modelo | OpenAI | Modelo multimodal de alta capacidad para procesamiento de texto, voz e imagen. La "o" representa "omni". Motor principal de ChatGPT. |
| **GPT-4o mini** | Modelo | OpenAI | Versión compacta, rápida y económica de GPT-4o, optimizada para tareas livianas de alta frecuencia. |
| **o1 / o3** | Modelo | OpenAI | Serie de modelos orientados a *reasoning* (razonamiento). Piensan antes de responder mediante cadenas de pensamiento internas, ideales para lógica avanzada. |
| **Astra** | Modelo / Agente | OpenAI | Modelo y agente de razonamiento autónomo multimodal de OpenAI, diseñado para ejecución avanzada de tareas complejas en tiempo real y entornos agente. |
| **ChatGPT** | Producto (App) | OpenAI | Interfaz conversacional de OpenAI en versiones Web, iOS y Android. Es la aplicación de IA más masiva del mundo. |
| **Codex** | Modelo (deprecado) | OpenAI | Modelo especializado en programación basado en GPT-3. Fue reemplazado por versiones mejoradas de GPT-4 para desarrollo. |
| **DALL-E 3** | Modelo | OpenAI | Sistema de generación y edición de imágenes mediante instrucciones de texto, integrado en ChatGPT. |
| **Whisper** | Modelo | OpenAI | Modelo de código abierto para transcripción y traducción de audio a texto (*speech-to-text*). |
| **Anthropic** | Empresa | — | Compañía de IA fundada en 2021 por exinvestigadores de OpenAI. Enfocada en alineación e IA segura. |
| **Claude** | Familia de modelos | Anthropic | Serie de modelos de lenguaje de Anthropic, clasificados en Haiku (rápido), Sonnet (equilibrado) y Opus (máxima potencia). |
| **Claude Sonnet 4.5** | Modelo | Anthropic | Modelo insignia equilibrado: combina alta inteligencia analítica con excelente velocidad. Estándar de la industria para desarrollo. |
| **Claude Opus 4** | Modelo | Anthropic | Modelo de máxima capacidad cognitiva de Anthropic, optimizado para tareas complejas de razonamiento y arquitectura. |
| **Claude Haiku** | Modelo | Anthropic | El modelo más veloz y rentable de Anthropic, ideal para tareas repetitivas y respuestas inmediatas. |
| **Claude.ai** | Producto (App) | Anthropic | Interfaz web y móvil de Anthropic para interactuar con la familia de modelos Claude. |
| **Claude Code** | Agente | Anthropic | Agente de codificación para terminal (CLI) que opera sobre repositorios locales de código. |
| **xAI** | Empresa | — | Compañía de inteligencia artificial fundada por Elon Musk en 2023. |
| **Grok** | Modelo / Producto | xAI | LLM e interfaz de xAI integrado en la plataforma X (Twitter), con acceso en tiempo real a publicaciones y tendencias. |
| **Google DeepMind** | Empresa | — | División de investigación de IA de Google (unión de Google Brain y DeepMind). Creadora de Gemini. |
| **Gemini** | Familia de modelos | Google | Familia de modelos multimodales nativos de Google, subdividida en variantes Flash, Pro y Ultra. |
| **Gemini 1.5 / 2.0 Pro** | Modelo | Google | Modelos con ventanas de contexto masivas de hasta millones de tokens, capaces de procesar bases de código enteras o vídeos extensos. |
| **Google AI Studio** | Producto (App/API) | Google | Entorno para desarrolladores destinado a prototipar y consumir la API de los modelos Gemini. |
| **Gemini App** | Producto (App) | Google | Aplicación conversacional de Google para el consumidor final (evolución de Google Bard). |
| **Meta AI** | Empresa / División | — | División de investigación de inteligencia artificial de Meta. Desarrolladora de la familia LLaMA. |
| **LLaMA 3 / 3.1** | Modelo | Meta | Familia de modelos de código abierto (*open-source*) disponibles para descarga e inferencia en infraestructura propia. |
| **GitHub Copilot** | Producto (Agente) | GitHub / Microsoft | Asistente de programación integrado en IDEs (VS Code, JetBrains), que utiliza modelos de OpenAI y otros proveedores. |
| **Microsoft Azure OpenAI** | API / Plataforma | Microsoft | Servicio empresarial que ofrece la infraestructura de modelos de OpenAI con garantías de seguridad y privacidad corporativa. |
| **Mistral** | Empresa y Modelo | Mistral AI | Empresa de IA con sede en Francia especializada en modelos *open-weight* de alta eficiencia como Mistral Large. |
| **Perplexity** | Producto (App) | Perplexity AI | Motor de búsqueda conversacional que combina consulta web en tiempo real con síntesis de respuestas citadas. |
| **Cursor** | Producto (IDE) | Cursor | Editor de código integrado con IA (fork de VS Code) que ofrece edición contextual nativa y soporte multimodelo. |
| **Devin** | Agente | Cognition AI | Agente autónomo de ingeniería de software capaz de planificar y resolver tareas de desarrollo de extremo a extremo. |


## Conceptos de desarrollo con IA

### Stack típico de una aplicación basada en LLMs

```text
[Frontend]
   ↓
[Backend / API propia]
   ↓
[Orquestación LLM]  ← LangChain, LangGraph, LlamaIndex o SDK directo
   ↓
[API del modelo]    ← OpenAI, Anthropic, Google, etc.
   ↓
[Herramientas / Datos]
   ├── Base de datos vectorial  (Pinecone, Chroma, pgvector)
   ├── Base de datos relacional (Postgres, MySQL)
   └── APIs externas / Servicios MCP
```

### Buenas prácticas de integración

1. **Manejo de errores e imprevistos**: Los LLMs pueden fallar, devolver formatos JSON inválidos o superar los límites de velocidad. Se debe implementar validación de esquemas y reintentos automáticos.
2. **Respuestas en streaming**: Utilizar transmisión de datos por *stream* para mejorar la experiencia de usuario (UX) en respuestas extensas.
3. **Mecanismos de caché**: Almacenar en caché consultas idénticas para reducir latencia y consumo de tokens en la API.
4. **Observabilidad y trazabilidad**: Integrar herramientas de monitoreo (como LangSmith, Helicone o similares) para auditar latencias, costos y depurar llamadas a los modelos.
5. **Control de versiones en prompts**: Tratar a los prompts como código fuente: versionarlos, testearlos y someterlos a control de cambios.
6. **Gestión de límites de tasa (Rate Limiting)**: Controlar las restricciones de solicitudes por minuto (RPM) y tokens por minuto (TPM) para evitar bloqueos por parte del proveedor.

---

### Glosario de términos comunes

| Término | Definición |
| :--- | :--- |
| **LLM** | *Large Language Model*: modelo de lenguaje de gran escala entrenado con volumen masivo de datos. |
| **Token** | Unidad mínima de procesamiento de texto utilizada por el modelo. |
| **Embedding** | Vector numérico que representa el significado semántico de un texto. |
| **Context window** | Cantidad máxima de tokens que el modelo puede evaluar simultáneamente en una sesión. |
| **Temperature** | Parámetro que regula el nivel de creatividad y variabilidad en la generación de texto. |
| **Prompt** | Instrucción o texto de entrada proporcionado al modelo. |
| **System prompt** | Instrucción persistente de nivel de sistema que rige el comportamiento general del modelo. |
| **Fine-tuning** | Proceso de reentrenamiento secundario de un modelo con un dataset específico. |
| **RAG** | *Retrieval-Augmented Generation*: técnica para enriquecer el prompt recuperando datos de fuentes externas antes de generar la respuesta. |
| **MCP** | *Model Context Protocol*: protocolo estándar para conectar LLMs con datos y herramientas externas. |
| **Agente** | Sistema dotado de autonomía que utiliza un LLM para planificar, razonar y tomar acciones. |
| **Function calling** | Capacidad del modelo de estructurar llamadas a funciones externas creadas por el desarrollador. |
| **Inference** | Fase de ejecución del modelo para generar una salida a partir de una entrada. |
| **Hallucination** | Fenómeno en el que el modelo genera datos falsos o incorrectos presentándolos como verdaderos. |
| **Grounding** | Técnica para anclar o limitar las respuestas del modelo a fuentes de información reales y verificables. |

---

*Última actualización: septiembre 2026*
