---
title: "2. Modelos de lenguaje (LLM)"
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


## Modelos, esfuerzo y pensamiento

Ejemplos de modelos de Claude como Haiku, Sonnet, Opus o Fable son todos **LLM**. 

La tendencia anterior en el desarrollo de IA era lanzar modelos de forma lineal, donde cada uno era simplemente mejor que el anterior. Hoy en día es diferente: existen modelos **nivelados según la complejidad** (modelos más simples y rápidos, intermedios y pesados/avanzados).

Un **modelo** es un programa matemático complejo entrenado con millones y millones de datos (p. ej., GPT-5, Opus 4.8, Gemini 2.5...). 

Sin embargo, un modelo no nos sirve de nada si no contamos con una **interfaz** que nos permita utilizarlo. Es la analogía directa de tener un **cerebro sin un cuerpo**:

* **El modelo (LLM)**: Es el *cerebro* (p. ej., GPT-5, Opus 4.8, Fable 5, Haiku 4.5...).
* **La interfaz**: Es el *cuerpo* (p. ej., ChatGPT, Claude, Gemini, DeepSeek).

### ¿Qué modelo usar?

La elección del modelo depende directamente de las necesidades de cada tarea. Es importante seleccionar los modelos con conciencia para evitar **gastar tokens de más** y para obtener las **mejores respuestas posibles**. 

Por ejemplo, si queremos preguntarle cuánto es *8 + 8*, no tiene sentido utilizar un modelo diseñado para tareas complejas; conviene usar el más rápido, ya que requiere menos procesamiento ("piensa" menos) y, por lo tanto, consume menos recursos.

### El esfuerzo (nivel de razonamiento)

Además del modelo seleccionado, también existe el parámetro de **"Esfuerzo"** (*Thinking/Reasoning*) que aplicará durante la respuesta. Este suele configurarse en niveles como **Bajo**, **Medio** o **Alto** (según la plataforma).

El esfuerzo determina básicamente la cantidad de tiempo que el modelo se tomará para procesar y estructurar la respuesta:

* Por ejemplo, Claude cuenta con una función de **pensamiento extendido** (*Extended Thinking*). Al activarse, el modelo dispone de más tiempo para procesar el contexto y entregar la mejor respuesta posible.
* Algunos modelos permiten activar o desactivar directamente este modo extendido o de "pensamiento". Al desactivarlo, el modelo responde de forma directa e inmediata. Al activarlo, aplica un nivel extra de esfuerzo y análisis.
* Lógicamente, dedicar más tiempo a razonar devuelve respuestas de mayor calidad y precisión, aunque a costa de **consumir más tokens**.

En última instancia, todo se reduce a una relación de **tiempo y tokens**: cuanto más se esfuerza y tarda el modelo en procesar, mejor será la respuesta y más rápido se consumirá el límite de uso.

> **Consejo práctico**: Para la gran mayoría de los casos cotidianos, utilizar **modelos intermedios con un nivel de esfuerzo medio** es una excelente opción que resolverá prácticamente cualquier requerimiento. Si la tarea es sencilla, se puede reducir el modelo o el esfuerzo. Si se trata de un trabajo crítico, estratégico o con decisiones estructurales, es preferible optar por un modelo y esfuerzo más altos.

### Parámetros a utilizar por un LLM

Un LLM funciona conceptualmente como una función que posee múltiples "diales" internos, donde cada dial representa un **parámetro**. Estos miles o billones de parámetros determinan qué tanto se ajusta la respuesta generada. Cuantos más parámetros se pongan en juego durante el procesamiento, mayor será el nivel de análisis y, por lo tanto, la respuesta requerirá un tiempo de cálculo superior.

```javascript
function(contexto): response
```