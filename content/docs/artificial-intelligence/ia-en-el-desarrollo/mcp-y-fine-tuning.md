---
title: "MCP y fine-tuning"
description: "Model Context Protocol, prompting y cuándo tiene sentido hacer fine-tuning."
---


## MCP — Model Context Protocol

**MCP** (*Model Context Protocol*) es un protocolo abierto creado por Anthropic que define cómo los LLMs se conectan con herramientas, datos y servicios externos de forma estandarizada.

### Analogía

> MCP es para los LLMs lo que USB es para los dispositivos: un estándar universal de conexión.

### Arquitectura MCP

```
[Aplicación Host]       ← Claude Desktop, IDEs, etc.
       ↓
  [Cliente MCP]
       ↓
  [Servidor MCP]        ← expone herramientas y recursos
       ↓
[Servicio externo]      ← base de datos, API, sistema de archivos, etc.
```

### Lo que puede exponer un servidor MCP

* **Herramientas** (*tools*): funciones que el modelo puede llamar (buscar, escribir, calcular).
* **Recursos** (*resources*): archivos, datos, URIs que el modelo puede leer.
* **Prompts**: plantillas reutilizables.

### Servidores MCP populares

| Servidor          | Función                        |
| ----------------- | ------------------------------ |
| `filesystem`      | Leer/escribir archivos locales |
| `github`          | Gestionar repos, issues, PRs   |
| `postgres`        | Consultar bases de datos       |
| `brave-search`    | Búsqueda web                   |
| `chrome-devtools` | Acceso al navegador web        |
| `slack`           | Leer/enviar mensajes           |
| `google-drive`    | Acceder a documentos de Drive  |

---
## Fine-tuning vs Prompting

### Prompting (Prompt Engineering)

Técnica de **instruir al modelo** mediante el texto de entrada, sin modificar sus pesos.

| Técnica          | Descripción                            |
| ---------------- | -------------------------------------- |
| Zero-shot        | Solo instrucción, sin ejemplos         |
| Few-shot         | Instrucción + 2–5 ejemplos             |
| Chain of Thought | Pedir razonamiento paso a paso         |
| System Prompt    | Contexto de comportamiento persistente |

### Fine-tuning

Proceso de **reentrenar el modelo** con datos específicos del dominio para especializar su comportamiento.

|                             | Prompting        | Fine-tuning                                        |
| --------------------------- | ---------------- | -------------------------------------------------- |
| Costo                       | Bajo             | Alto (GPUs, tiempo, datos)                         |
| Velocidad de implementación | Inmediata        | Días/semanas                                       |
| Control                     | Limitado         | Alto                                               |
| Cuándo usarlo               | Mayoría de casos | Formato muy específico, datos privados, eficiencia |

---
