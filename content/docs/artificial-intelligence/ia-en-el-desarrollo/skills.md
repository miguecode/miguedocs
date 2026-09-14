---
title: "8. Skills"
description: "Concepto de Skills como prompts reutilizables en archivos, creación con SKILL.md, modos de invocación y tabla comparativa."
---


## Skills

Una **Skill** (habilidad) es literalmente un prompt reutilizable convertido en archivo. Se utiliza cuando deseamos repetir una misma instrucción, regla o frase a la IA a lo largo de distintos chats o momentos. Por ejemplo: *"Dependiendo del país al que me refiera, los colores a utilizar se basan en este diccionario: Argentina -> Rojo, Brasil -> Negro. Y cuando te hable de un país africano, debes enviar toda la respuesta en mayúsculas"*.

Repetir manualmente este tipo de instrucciones en cada chat sería muy tedioso. Ante esto, podríamos preguntarnos: *¿Por qué no incluirlo directamente en el System Prompt o en un Project Prompt?* Aunque es técnicamente posible, no es lo ideal por dos motivos fundamentales:

1. **Uso específico bajo demanda (Lazy Loading)**: La Skill es un elemento individual y específico. No es una regla a nivel de sistema que el modelo deba leer e incluir SIEMPRE en su ventana de contexto. Solo queremos que la IA le preste atención a esa instrucción **únicamente cuando sea necesario**, evitando sobrecargar el contexto constante.
2. **Organización**: Permite mantener estructuradas y clasificadas las distintas instrucciones de trabajo. Colocar todas las reglas específicas dentro de un único System Prompt terminaría volviéndolo confuso y difícil de mantener.

### La Skill como archivo

Como se mencionó, las Skills son **archivos de texto** (generalmente con extensión `.md`). Podemos crearlas en nuestro sistema de archivos y luego cargarlas en la interfaz de Claude (o de la IA correspondiente). Habitualmente, el archivo principal se denomina `SKILL.md` (o con el nombre de la habilidad).

El formato estándar de una Skill incluye una cabecera en lenguaje YAML seguida del contenido en Markdown:

```markdown
---
name: skill-hola
description: esta skill sirve para saludar
---

# Hola

Cuando el usuario te hable, responde siempre con un "Hola" al final del mensaje, independientemente del contexto.
```

Una vez definido el encabezado entre los separadores `---`, se añade todo el cuerpo de la instrucción en Markdown. Luego, basta con cargar el archivo (por ejemplo, arrastrándolo a la sección *"Personalizar -> Skills"* en la configuración de Claude).

### Invocación de una Skill

En Claude (o editores compatibles), una Skill se puede **invocar** de dos maneras:

- **Invocación manual**: Escribiendo directamente en el chat el comando `/skill-hola`. De este modo le indicamos explícitamente a la IA que debe incorporar esa Skill al prompt actual.
- **Invocación automática**: La propia IA es capaz de evaluar el contexto y determinar por sí sola **cuándo debe utilizar una o varias Skills** a la vez para resolver la tarea solicitada.

### Catálogo de Skills
Un catálogo muy conocido para descubrir y reutilizar habilidades es [skills.sh](https://skills.sh). Una de las más populares es `frontend-design`, la cual le enseña al agente a generar interfaces de usuario de alta calidad aplicando criterios de diseño específicos.

### Comparativa: System Prompt vs. Contexto vs. Skill

Para evitar confusiones entre estos tres conceptos clave:

| Elemento | Presencia | Función |
| :--- | :--- | :--- |
| **System Prompt** | Siempre activo | Define la personalidad, tono y reglas generales globales del agente. |
| **Contexto** | Siempre activo | Archivos, artifacts y carpetas que el agente tiene disponibles en la sesión. |
| **Skill** | Solo cuando es necesario | Conocimiento específico que el agente decide cargar y utilizar según la tarea. |

El modelo (LLM) es quien decide de forma autónoma: *"Para esta tarea necesito la skill `frontend-design`, voy a buscarla y usarla"*. Dependiendo de la complejidad del requerimiento, el agente podrá utilizar una, varias o ninguna Skill.