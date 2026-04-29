---
title: "Bases de datos NoSQL"
description: "Entiende qué son las bases de datos no relacionales, su origen en gigantes como Google y Amazon, y por qué son la elección preferida para aplicaciones de alto rendimiento."
---

## Bases de Datos No Relacionales

En el desarrollo de software moderno, el factor más crítico suele ser el **TIEMPO**. La necesidad de procesar volúmenes masivos de datos con la menor latencia posible dio origen a las bases de datos no relacionales o **NoSQL**. Aunque usaremos MongoDB como referencia principal, este concepto abarca una gran variedad de tecnologías.

### Origen de NoSQL
Las bases de datos NoSQL nacieron de la necesidad de gigantes tecnológicos para escalar de forma masiva:
*   **Google**: Creó *BigTable* para manejar la indexación de la web.
*   **Amazon**: Desarrolló *DynamoDB* para gestionar su inventario y carritos de compra a escala global.

---

## Diferencias clave con SQL

A diferencia de las bases de datos SQL tradicionales, las NoSQL permiten manejar datos **no estructurados o semiestructurados**. Esto significa que no requieren un esquema rígidamente definido ni relaciones complejas entre tablas mediante claves foráneas.

*   **Performance**: Al no tener que realizar múltiples "JOINs" o consultas cruzadas entre tablas relacionadas, la lectura de datos es extremadamente rápida.
*   **Flexibilidad**: Puedes guardar diferentes tipos de datos en la misma colección sin necesidad de realizar migraciones de esquema complejas.
*   **Velocidad**: SQL suele ser más rápido en escritura que en lectura debido a sus reglas de integridad. NoSQL sacrifica parte de esa formalidad para ganar una velocidad de lectura y escalabilidad horizontal superior.

---

## Comparativa: ACID vs. BASE

Las bases de datos se rigen por diferentes principios de consistencia y disponibilidad:

| SQL (**ACID**) | NoSQL (**BASE**) |
| :--- | :--- |
| **A**tomicity (Atomicidad) | **B**asically **A**vailable (Básicamente disponible) |
| **C**onsistency (Consistencia) | **S**oft state (Estado suave/flexible) |
| **I**solation (Aislamiento) | **E**ventual consistency (Consistencia eventual) |
| **D**urable (Durabilidad) | |

En resumen, mientras que SQL se enfoca en la integridad matemática y el rigor estructural, **NoSQL** prioriza la flexibilidad, la sencillez de uso y la alta disponibilidad, adaptándose mejor a las necesidades de las aplicaciones web modernas que requieren escalar rápidamente.