---
title: "9-1. Ciclo de Vida de una BD"
description: "CICLO DE VIDA DE UNA BASE DE DATOS"
---


CICLO DE VIDA DE UNA BASE DE DATOS

1) Definición del Sistema. Se define el alcance del sistema de la BD, los usuarios que la utilizarán y sus aplicaciones generales y específicas. Es la etapa de relevamiento.

2) Diseño. Se crea el diseño completo, lógico y físico del sistema de BD en el SGBD elegido. Con diseño lógico nos referimos a una correcta normalización de las tablas. Y también se refiere al DER. El diseño físico es en un motor de BD elegido. Es lo que hicimos antes del primer parcial, las sentencias DDL de la creación de los objetos.

Aclaración clave:
Cuando yo empiezo con el diseño físico, es decir, al momento real de empezar a hacer los CREATE (DDL), yo no puedo ponerme a analizar o a pensar si lo que estoy haciendo está normalizado o no. O sea, no puedo ponerme a pensar si las tablas que estoy creando están normalizadas o no, eso yo ya lo tengo que saber desde antes cuando hice el diseño lógico (Los grupos de tablas normalizadas y el DER). El DER es lo que vamos a ver hoy mismo.

Por lo tanto, queda claro que el orden es    Diseño lógico   ->   Diseño físico


3) Implementación. Se escriben las definiciones correspondientes al esquema conceptual externo e interno de la BD. Se crean archivos y se implementan las apps del software.

4) Carga o conversión de los datos: Esto es por si la base proviene de un sistema anterior (una migración), que en ese caso, habría que hacer una conversión. En caso de no ser así, hay que hacer una carga completa desde 0.

5) Conversión de las aplicaciones. Luego de esta fase se está en condiciones de hacer la instalación.

6) Prueba y validación. Se probará con datos reales en paralelo con el sistema existente para que no existan problemas en la organización existente en caso de fallas. Una vez que se sabe que el paralelo no falla, se hace la migración. La etapa de paralelo es tediosa, y hay que comprobar que tanto el sistema nuevo como el viejo sean equivalentes.

7) Operación. Es el uso diario de la base de datos.

8) Supervisión y mantenimiento. Son las tareas de backup y recovery, administración de permisos, etc.
