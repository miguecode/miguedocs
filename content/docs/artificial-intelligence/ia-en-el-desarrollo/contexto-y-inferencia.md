---
title: "5. Contexto e inferencia"
description: "Ventana de contexto, ruido, temperatura y cómo el modelo genera respuestas."
---


## Contexto y Ventana de Contexto

## Ventana de contexto

La **ventana de contexto** (*context window*) es la cpacidad que tiene un modelo de IA de recordar, es decir, la cantidad máxima de tokens que el modelo puede "ver" a la vez. La ventana de contxto es la sesión (el chat actual) en el que estamos teniendo una conversación con el asistente. Si nosotros hablamos y hablamos y hablamos y no paramos de hablar, va a llegar un punto en el que la ventanta de contexto se va a llenar, y en ese punto la sesión va a empezar a olvidar cosas. 

La ventana de contexto se compone por el historial de conversación, el System Prompt y la respuesta generada del agente.


| Modelo            | Ventana de contexto |
| ----------------- | ------------------- |
| GPT-4o            | 128.000 tokens      |
| Claude 3.5 Sonnet | 200.000 tokens      |
| Gemini 1.5 Pro    | 1.000.000 tokens    |
| LLaMA 3 70B       | 128.000 tokens      |

### Por qué importa

* Si el contexto supera el límite, el modelo "olvida" el texto más antiguo.
* Contextos más grandes permiten trabajar con documentos enteros o conversaciones largas.
* Procesar contextos más grandes también cuesta más en tokens.

### **Gestión del Ruido y Calidad**

* **El problema del ruido:** Existe la creencia falsa de que "a más contexto, siempre mejor". En realidad, NO SIEMPRE es así. El exceso de información irrelevante puede generar ruido, lo que degrada la calidad de la respuesta y provoca que el modelo ignore instrucciones críticas.

* **Compactación (Amnesia Forzada):** Cuando la ventana se llena, el modelo realiza un resumen de la sesión para liberar espacio. Si este resumen es vago, el agente pierde detalles críticos de decisiones previas (efecto "lobotomía").

---
## Inferencia y Temperatura

### Inferencia

Es el proceso de **ejecutar el modelo** para generar una respuesta. En producción, se hace a través de APIs o modelos alojados localmente.

### Temperatura

Controla la **aleatoriedad** de las respuestas.

| Temperatura | Comportamiento                                    | Ideal para                        |
| ----------- | ------------------------------------------------- | --------------------------------- |
| 0.0         | Determinista, siempre elige el token más probable | Código, extracción de datos       |
| 0.3–0.7     | Balanceado                                        | Asistentes generales              |
| 0.8–1.2     | Creativo, variado                                 | Escritura creativa, brainstorming |
| > 1.2       | Caótico, incoherente                              | Raramente útil                    |

### Top-P y Top-K

Parámetros adicionales para controlar qué tokens considera el modelo al generar la respuesta siguiente.

---
