---
title: "Tokens y embeddings"
description: "Unidades de texto que procesa el modelo y representaciones vectoriales del significado."
---


## Tokens

Un **token** es la unidad básica de texto que un LLM procesa. No equivale exactamente a una palabra o a un texto.

### Ejemplos de tokenización

| Texto                    | Tokens aprox.     |
| ------------------------ | ----------------- |
| "hola"                   | 1 token           |
| "inteligencia"           | 2–3 tokens        |
| "artificial"             | 2 tokens          |
| 1000 palabras en inglés  | ~750 tokens      |
| 1000 palabras en español | ~900–1100 tokens |

> El español requiere más tokens que el inglés para el mismo contenido, lo que puede aumentar los costos de API.

### Importancia práctica

* Las APIs de IA **cobran por token** (input + output).
* Los modelos tienen un límite de tokens por request (ventana de contexto).
* Saber estimar tokens ayuda a optimizar costos y evitar errores.

**Ojo:** Como dijimos, los LLM procesan Tokens. No texto como tal. No palabras. Y no todos los modelos manejan el mismo sistema de Tokenización. Para un modelo, el mismo prompt puede equivaler a más tokens que otro (tampoco es una diferencia gigante, pero existe la diferencia). En este sitio web se puede poner a prueba: [OpenAI Platform](https://platform.openai.com/tokenizer)

---
## Embeddings

Un **embedding** es una representación vectorial (lista de números) de un texto que captura su **significado semántico**.

```
"perro" → [0.23, -0.71, 0.88, ..., 0.12]  (vector de 1536 dimensiones)
"gato"  → [0.19, -0.68, 0.91, ..., 0.09]  (similar al de "perro")
"auto"  → [-0.45, 0.22, -0.11, ..., 0.67] (muy distinto)
```

### Usos principales

* **Búsqueda semántica**: encontrar documentos similares en significado (no solo por palabras exactas).
* **RAG**: recuperar contexto relevante antes de enviar al LLM.
* **Clasificación de texto**: spam, sentimiento, categorías.
* **Bases de datos vectoriales**: Pinecone, Weaviate, Chroma, pgvector.

---
