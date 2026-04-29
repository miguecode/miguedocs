---
title: "Claude Code"
description: "Claude Code es una herramienta de inteligencia artificial que se puede ejecutar en distintos entornos en nuestras máquinas"
---


## Claude Code

Claude Code es una herramienta de inteligencia artificial que se puede ejecutar en distintos entornos en nuestras máquinas:

- La terminal (el más usado)
- VS Code
- Web 
- JetBrains
- Slack



Al estar en la terminal, no tiene interfaz gráfica. Opera en nuestros repositorios sin ninguna interfaz gráfica. Está todo el tiempo en la terminal. Esa es la gracia de Claude Code y es el motivo de por qué es tan popular a día de hoy (marzo 2026)



A diferencia de lo que muchos creen, no es obligatorio tener una subscripción "Pro" en Claude para poder usar Claude Code. Se puede usar sin suscripción -> hay que ir al sitio web de Claude Code, y copiar el comando que tenemos que ejecutar en nuestra terminal. Eso lo va a instalar y ya lo vamos a poder usar.



OpenCode

Es una alternativa Open Source de Claude Code. Se puede instalar en una línea en la terminal, y es gratis. Si nos autenticamos en distintas plataformas, vamos a tener acceso a sus modelos (a sus LLM). Por ejemplo, si iniciamos sesión con GitHub, vamos a tener los modelos que tiene GitHub Copilot. O si iniciamo sesión en Anthropic, lo mismo. Es todo en la terminal como Claude Code.





Usar Claude Code de forma gratuita con Ollama

Es posible usar agentes como Claude Code sin pagar una suscripción, ejecutando un modelo de lenguaje **localmente** a través de [Ollama](https://ollama.com).

#### ¿Qué es Ollama?

Ollama es una herramienta que permite descargar y ejecutar modelos de lenguaje en tu propia máquina, sin depender de APIs externas ni incurrir en costos por token. Es decir, funcionaría hasta si no tuviésemos conexión a internet.

¿El problema? La PC debe ser relativamente buena. Porque claro, vamos a correr un LLM de forma local. No es necesario una super PC, pero -dependiendo del modelo-, necesitamos tener una máquina que lo pueda conseguir. 

#### Modelo recomendado: `glm4-flash`

Uno de los modelos que mejor funciona con agentes de código como Claude Code es `glm4-flash`, disponible en el catálogo de Ollama.

> ⚠️ El modelo pesa aproximadamente **36 GB**. Asegurate de tener espacio y una GPU o CPU potente.

**Paso 1 — Descargar y ejecutar el modelo:**
    ollama run glm4-flash

**Paso 2 — Lanzar Claude Code apuntando al modelo local:**
    ollama launch claude --model glm4-flash

#### Otras herramientas compatibles

Además de Claude Code, hay otras interfaces de agente de código que pueden conectarse a modelos locales vía Ollama:

| Herramienta     | Descripción                           |
| --------------- |:------------------------------------- |
| **Claude Code** | Agente CLI de Anthropic               |
| **Codex**       | CLI de OpenAI                         |
| **OpenCode**    | Alternativa open-source               |
| **OpenClaw**    | Interfaz liviana para agentes locales |
