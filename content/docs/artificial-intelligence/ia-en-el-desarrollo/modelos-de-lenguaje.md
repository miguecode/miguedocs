---
title: "Modelos de lenguaje (LLM)"
description: "Qué es un LLM, cómo funciona, transformers y fases de entrenamiento."
---


## Modelos de Lenguaje (LLM)

**LLM** = *Large Language Model* (Modelo de Lenguaje Grande)

Estos son lisa y llanamente los modelos de los que siempre hablamos, acá esta el core de todo: cuando decimos "Usá ChatGPT", técnicamente estamos diciendo "Usá el producto de OpenAI, el cual es un chatbot llamado ChatGPT, el cual utiliza el modelo GPT 5.2 (por decir uno)". Ese "modelo" es un LLM. Un Large Language Model.

Un LLM es un modelo de Machine Learning entrenado con enormes cantidades de texto para **predecir y generar texto** de forma coherente y útil.

### ¿Cómo funciona?

1. Se entrena con cientos de miles de millones de palabras de internet, libros, código, etc.
2. Aprende a predecir la siguiente palabra (token) dado un contexto.
3. En producción, genera texto token por token de forma probabilística.

### El error más básico

Las personas creen (y tiene sentido) que la IA "piensa". O sea, que los LLM piensan. Y en realidad, por más que tiene todo el sentido del mundo entenderlo así, no lo hacen. Los LLM no piensan, lo que hacen es predecir el próximo token. O sea, la próxima palabra a elegir, a "escribir". Cuando ya tienen todo, te lo devuelven en forma de respuesta.

### Arquitectura: Transformers

La arquitectura dominante de los LLMs modernos. Introducida en 2017 (paper *"Attention is All You Need"*).

Componentes clave:

* **Atención (Attention)**: permite al modelo enfocarse en partes relevantes del texto de entrada.
* **Capas**: los transformers tienen decenas o cientos de capas que refinan la representación del texto.
* **Parámetros**: los "pesos" del modelo. GPT-4 tiene estimados ~1.8 billones de parámetros.

### Tamaños de modelos

| Escala  | Ejemplo              | Parámetros aprox.  |
| ------- | -------------------- | ------------------ |
| Pequeño | Mistral 7B           | 7.000 millones     |
| Mediano | LLaMA 3 70B          | 70.000 millones    |
| Grande  | GPT-4, Claude 3 Opus | > 500.000 millones |

### Fases de Entrenamiento de un LLM

**Fase 1 -** **Pre-Entrenamiento**: alimentar al modelo con cantidades masivas de información (leer código, libros, artículos, documentación). El modelo aprende los miles de millones de patrones estadísticos.

**Fase 2 - Fine Tuning (Ajuste fino)**: Se entrena para tener mejores respuestas y estructurar la comunicación con el usuario.

**Fase 3 - RLHF (Reforcing Language From Human Feedback)**: Es el aprendizaje más reforzado ya que se aprovecha de la interacción y el feedback del humano (o de otras IAs).

### Parámetros a utilizar por un LLM

El LLM es como una función que tiene dentro distintos "diales", y cada "dial" es un parámetro. Estos miles de parámetros determinan qué tanto se va a ajustar la respuesta. Y cuanto más parámetros, más lenta es la respuesta, ya que mayor es el análisis a realizar.

```javascript
function(contexto): response
```

---
