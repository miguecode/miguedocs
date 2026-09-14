---
title: "6. Artifacts, proyectos y otros"
description: "Uso de artifacts, gestión de proyectos en Claude, fundamentos de RAG y diferencias entre búsqueda e investigación."
---


## Artifacts

Los **artifacts** (artefactos) son elementos vivos dentro de una sesión con un modelo de IA. Con "elemento" nos referimos a un archivo (un PDF, un CSV, un archivo JS, un TXT, etc.). 

Estos archivos persisten en la conversación con el fin de que, cada vez que el modelo vaya a realizar una modificación, trabaje siempre sobre el mismo elemento/archivo en lugar de crear uno nuevo desde cero. Los artifacts los puede generar el modelo desde cero o pueden ser archivos que nosotros mismos le proporcionemos.

En Claude (por ejemplo al utilizar Claude Code), podemos ir a la sección de **Artifacts** y crear los que necesitemos. **Ojo:** un punto muy importante sobre esto (que se profundizará al explicar Claude Code) es que los artifacts no flotan en la interfaz sobre la nada misma, sino que están almacenados físicamente en nuestra máquina. Claude cuenta con un directorio físico en el sistema donde organiza los distintos artifacts de la sesión.


## Projects (Proyectos)

Un **proyecto** es una carpeta inteligente dedicada a agrupar chats y archivos (artifacts), donde todo se almacena e interconecta en un mismo lugar. Cada chat se relaciona con los demás y todas las conversaciones de un mismo proyecto pueden visualizar y editar el mismo artifact. En esencia, funciona como un organizador de sesiones de chat y archivos compartidos.

En Claude también podemos agregar **"Instrucciones"** al proyecto (una especie de *System Prompt*, al que podríamos denominar **Project Prompt**). Estas son reglas e instrucciones que el modelo tendrá siempre presentes en cada uno de los chats y prompts realizados dentro del proyecto.

> **Nota de jerarquía**: Los *Project Prompts* tienen menor jerarquía/importancia que los *System Prompts*.


## RAG (Retrieval-Augmented Generation)

El **RAG** es una técnica que la propia IA aplica de forma interna; no requiere que nos encarguemos de su implementación manual en la interfaz. Por ejemplo, Claude utiliza RAG para recuperar la información relevante según lo que le solicitemos: en lugar de analizar todo el contexto palabra por palabra, consulta directamente los datos específicos que le resultarán útiles.

### Consejos para optimizar el RAG:
- **Nombres descriptivos**: Asegurarse de que los artifacts de contexto tengan nombres claros y representativos (evitar nombres informales como `jaja.md`).
- **Referencias explícitas en el prompt**: Al redactar la consulta, indicarle específicamente la fuente (p. ej., *"para responder esto, revisa el archivo 02-ESTANDAR-DE-CALIDAD.md"*).


## Búsqueda vs. Investigación

En el chat de Claude existen dos casillas de verificación (*checkboxes*) independientes: **Búsqueda** e **Investigación**. Ambas pueden activarse o desactivarse según la necesidad. Aunque parecen similares, cumplen funciones distintas:

- **Búsqueda**: Si está activada, Claude puede consultar información en Internet en tiempo real. Si no está activada (y tampoco Investigación), el modelo no realizará consultas externas en la web.
- **Investigación**: Si está activada, Claude no solo buscará información en Internet en tiempo real, sino que realizará una **búsqueda exhaustiva**. Consultará múltiples fuentes y sitios web, comparándolos entre sí para detectar diferencias o incongruencias y extraer conclusiones que le permitan entregar una respuesta mucho más precisa y completa. Realiza un proceso de investigación profundo y no una simple consulta puntual.

En resumen: **Investigación > Búsqueda**.
