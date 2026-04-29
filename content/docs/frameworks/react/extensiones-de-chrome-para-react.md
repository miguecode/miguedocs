---
title: "Extensiones de Chrome imprescindibles para React"
description: "Conoce las herramientas esenciales que debes tener instaladas en tu navegador para auditar, debuggear y entender aplicaciones en React."
---

Google Chrome tiene millones de extensiones disponibles en su Web Store para todo tipo de propósitos en el entorno de desarrollo, pero estas son las extensiones técnicas primordiales que no te pueden faltar a la hora de trabajar e inspeccionar profundamente aplicaciones creadas usando la librería de React.

## 1️⃣ React Scan

Detecta automáticamente problemas de rendimiento en capas complejas de tu aplicación de React.

Su principal ventaja técnica y de experiencia de desarrollador es que **no requiere cambios en el código** o integraciones intrusivas mediante dependencias en tus proyectos. Resalta exactamente y de forma visual los componentes que necesitas optimizar en base a la concurrencia en la propia pantalla web. Está disponible como extensión, pero también mediante una etiqueta script pura, paquete en npm y muchas más formas de distribución perfiles.

## 2️⃣ React Developer Tools

Es la herramienta oficial por excelencia del ecosistema moderno. Te permite inspeccionar microscópicamente e interactuar con las jerarquías de componentes de React directamente adosado en las herramientas para desarrolladores de Chrome (*DevTools*) dividiéndose en dos increíbles nuevas pestañas vitales: **Components** y **Profiler**.

### Pestaña Components
Esta pestaña desmenuza de forma visual y estructurada mostrando toda tu interfaz al nivel de cuáles fueron exactamente los componentes raíz de React que lograron renderizarse en la página inicial o ruta corriente, así como explorar todos los subcomponentes (*childrens*) que generaron en la jerarquía, mostrándote a nivel local al interactuar o seleccionar a cada uno, la totalidad de información referida a sus **Props**, variabilidad de su **State** interno (*hooks de mutación contextual*) y el componente padre de su arbolada que provocó dicho nacimiento original.

### Pestaña Profiler
La pestaña gráfica de "Perfilador" del sistema te permite registrar puntualmente por tramos de tiempo vital cualquier nivel de información sobre el rendimiento de las actualizaciones, listando exactamente cuánto tiempo le toma a cada eslabón un render, para determinar la causa y ubicación perfecta de estrangulamientos visuales.