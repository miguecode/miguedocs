---
title: "APIs y comparativa"
description: "APIs de IA, cuadro comparativo de productos y stack típico de una app con LLM."
---


## APIs de IA

La mayoría de los modelos se consumen a través de APIs REST con un formato similar:

```javascript
// Ejemplo con OpenAI API
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

### Conceptos de API

| Concepto      | Descripción                                                |
| ------------- | ---------------------------------------------------------- |
| `model`       | Identificador del modelo a usar                            |
| `messages`    | Historial de conversación (roles: system, user, assistant) |
| `temperature` | Aleatoriedad de la respuesta                               |
| `max_tokens`  | Límite de tokens a generar                                 |
| `stream`      | Recibir respuesta token a token (como efecto typewriter)   |
| `tools`       | Herramientas que el modelo puede llamar (function calling) |

### Function Calling / Tool Use

Permite que el modelo **llame funciones definidas por el desarrollador**:

```javascript
tools: [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Obtiene el clima de una ciudad",
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

---
## Cuadro Comparativo de Productos

### Glosario de clasificaciones

| Clasificación    | Descripción                                         |
| ---------------- | --------------------------------------------------- |
| **Empresa**      | Organización que desarrolla el producto             |
| **Modelo**       | Arquitectura de red neuronal entrenada (el cerebro) |
| **Producto/App** | Interfaz o plataforma que el usuario final consume  |
| **API**          | Servicio para desarrolladores                       |
| **Agente**       | Sistema autónomo que usa un modelo como motor       |

---
### Tabla comparativa

| Nombre                     | Tipo               | Empresa            | Descripción                                                                                                                                                      |
| -------------------------- | ------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OpenAI**                 | Empresa            | —                  | Laboratorio de IA fundado en 2015. Crea GPT, DALL-E, Codex, Sora, Whisper. Uno de los actores más influyentes del sector.                                        |
| **GPT-4o**                 | Modelo             | OpenAI             | Modelo multimodal (texto, imagen, audio, video) de alta capacidad. La "o" significa "omni". Motor de ChatGPT.                                                    |
| **GPT-4o mini**            | Modelo             | OpenAI             | Versión más pequeña y económica de GPT-4o. Ideal para tareas simples.                                                                                            |
| **o1 / o3**                | Modelo             | OpenAI             | Modelos "reasoning" de OpenAI. Piensan antes de responder usando cadenas de razonamiento internas. Más lentos pero más precisos en lógica compleja.              |
| **ChatGPT**                | Producto (App)     | OpenAI             | Interfaz conversacional de OpenAI. Disponible en web, iOS, Android. Usa GPT-4o como motor. El chatbot de IA más conocido del mundo.                              |
| **Codex**                  | Modelo (deprecado) | OpenAI             | Modelo especializado en código, basado en GPT-3. Fue el motor de GitHub Copilot. Fue reemplazado por GPT-4 para tareas de código.                                |
| **DALL-E 3**               | Modelo             | OpenAI             | Modelo de generación de imágenes a partir de texto de OpenAI. Integrado en ChatGPT.                                                                              |
| **Whisper**                | Modelo             | OpenAI             | Modelo de transcripción de audio a texto (speech-to-text) de OpenAI. Open source.                                                                                |
| **Anthropic**              | Empresa            | —                  | Laboratorio de IA fundado en 2021 por ex-miembros de OpenAI. Crea Claude. Enfocado en IA segura y confiable.                                                     |
| **Claude**                 | Familia de modelos | Anthropic          | Línea de modelos de lenguaje de Anthropic. Incluye Haiku (rápido), Sonnet (equilibrado) y Opus (máxima capacidad).                                               |
| **Claude Sonnet 4.5**      | Modelo             | Anthropic          | Modelo equilibrado de Anthropic: alta inteligencia con buena velocidad. Ideal para la mayoría de tareas de producción.                                           |
| **Claude Opus 4**          | Modelo             | Anthropic          | El modelo más potente de Anthropic. Diseñado para tareas complejas de razonamiento.                                                                              |
| **Claude Haiku**           | Modelo             | Anthropic          | El modelo más rápido y económico de Anthropic. Ideal para tareas de alta frecuencia.                                                                             |
| **Claude.ai**              | Producto (App)     | Anthropic          | Interfaz web y móvil de Anthropic para usar Claude. Equivalente a ChatGPT pero con Claude.                                                                       |
| **Claude Code**            | Agente             | Anthropic          | Agente de codificación de Anthropic (terminal CLI). Usa Claude como motor. Puede leer, escribir y ejecutar código de forma autónoma.                             |
| **xAI**                    | Empresa            | —                  | Empresa de IA fundada por Elon Musk en 2023. Crea Grok.                                                                                                          |
| **Grok**                   | Modelo / Producto  | xAI                | LLM de xAI. Integrado en X (Twitter). Tiene acceso a tweets en tiempo real. Disponible con suscripción X Premium.                                                |
| **Google DeepMind**        | Empresa            | —                  | División de IA de Google, fusión de Google Brain y DeepMind. Crea Gemini y otros modelos.                                                                        |
| **Gemini**                 | Familia de modelos | Google             | Línea de modelos de lenguaje multimodales de Google. Incluye Flash (rápido), Pro y Ultra.                                                                        |
| **Gemini 1.5 Pro**         | Modelo             | Google             | Modelo con ventana de contexto de 1 millón de tokens. Puede procesar libros, horas de video, etc.                                                                |
| **Google AI Studio**       | Producto (App/API) | Google             | Plataforma para desarrolladores para probar y usar la API de Gemini.                                                                                             |
| **Gemini App**             | Producto (App)     | Google             | Aplicación de Google (antes Bard). Interfaz conversacional con Gemini.                                                                                           |
| **Meta AI**                | Empresa / División | —                  | División de IA de Meta (Facebook, Instagram, WhatsApp). Crea LLaMA.                                                                                              |
| **LLaMA 3**                | Modelo             | Meta               | Familia de modelos open-source de Meta. Disponibles para descarga y uso local. Versiones de 8B, 70B y 405B parámetros.                                           |
| **GitHub Copilot**         | Producto (Agente)  | GitHub / Microsoft | Asistente de código integrado en IDEs (VS Code, JetBrains). Usa modelos de OpenAI y otros. Sugiere código, explica, escribe tests.                               |
| **Microsoft Azure OpenAI** | API / Plataforma   | Microsoft          | Acceso empresarial a los modelos de OpenAI a través de Azure. Con cumplimiento normativo y datos privados.                                                       |
| **Mistral**                | Empresa y Modelo   | Mistral AI         | Empresa francesa de IA. Sus modelos son open-source y muy eficientes. Mistral Large es su modelo premium.                                                        |
| **Perplexity**             | Producto (App)     | Perplexity AI      | Motor de búsqueda conversacional impulsado por IA. Combina búsqueda web con generación de respuestas con citas. No es un modelo, sino un producto sobre modelos. |
| **Cursor**                 | Producto (IDE)     | Cursor             | Editor de código (basado en VS Code) con IA integrada. Usa Claude y GPT-4. Competidor de GitHub Copilot.                                                         |
| **Devin**                  | Agente             | Cognition AI       | Agente de ingeniería de software autónomo. Puede completar tareas de desarrollo end-to-end de forma independiente.                                               |

---
## Conceptos de desarrollo con IA

### Stack típico de una aplicación LLM

```
[Frontend]
   ↓
[Backend / API propia]
   ↓
[Orquestación LLM]  ← LangChain, LangGraph, SDK directo
   ↓
[API del modelo]    ← OpenAI, Anthropic, Google, etc.
   ↓
[Herramientas / Datos]
   ├── Base de datos vectorial  (Pinecone, Chroma, pgvector)
   ├── Base de datos relacional (Postgres, MySQL)
   └── APIs externas
```

### Buenas prácticas

1. **Manejo de errores**: los LLMs pueden fallar, devolver JSON inválido, exceder límites. Siempre validar y reintentar.
2. **Streaming**: usar streaming para mejor UX en respuestas largas.
3. **Caché**: cachear respuestas idénticas para reducir costos.
4. **Observabilidad**: usar LangSmith, Helicone o similar para trazar y debuggear llamadas al LLM.
5. **Prompts versionados**: tratar los prompts como código: versionarlos, testearlos.
6. **Rate limiting**: las APIs tienen límites de requests por minuto (RPM) y tokens por minuto (TPM).

---
| Término              | Definición                                                                   |
| -------------------- | ---------------------------------------------------------------------------- |
| **LLM**              | Large Language Model — modelo de lenguaje de gran escala                     |
| **Token**            | Unidad mínima de texto que procesa el modelo                                 |
| **Embedding**        | Representación vectorial del significado de un texto                         |
| **Context window**   | Cantidad máxima de tokens que el modelo puede procesar a la vez              |
| **Temperature**      | Parámetro que controla la aleatoriedad de las respuestas                     |
| **Prompt**           | Texto de entrada enviado al modelo                                           |
| **System prompt**    | Instrucción de comportamiento persistente del asistente                      |
| **Fine-tuning**      | Reentrenamiento del modelo con datos específicos                             |
| **RAG**              | Retrieval-Augmented Generation — recuperar datos relevantes antes de generar |
| **MCP**              | Model Context Protocol — estándar de conexión LLM con herramientas           |
| **Agente**           | Sistema autónomo que usa un LLM para planificar y actuar                     |
| **Function calling** | Capacidad del modelo de llamar funciones del desarrollador                   |
| **Inference**        | Proceso de ejecutar el modelo para generar una respuesta                     |
| **Hallucination**    | Cuando el modelo genera información incorrecta con confianza                 |
| **Grounding**        | Anclar las respuestas del modelo a datos verificables                        |

---
*Última actualización: marzo 2026*
