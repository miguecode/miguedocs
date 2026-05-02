---
title: "Rutas Absolutas y Relativas"
description: "Comprende la diferencia entre rutas absolutas y relativas para gestionar archivos y URLs correctamente."
---


## Rutas Absolutas

Las rutas absolutas son siempre iguales, ya que no importa desde dónde las accedamos. Es decir, sin importar en qué directorio estemos parados, la ruta absoluta siempre se escribe de la misma forma y garantiza que lleguemos al destino. Siempre comienzan desde un punto fijo, como el dominio en una URL o la raíz del sistema de archivos.

Las rutas absolutas se usan típicamente para las URLs externas. Por ejemplo, la URL de Google:

```text
https://www.google.com
```

Otro ejemplo de ruta absoluta puede ser una ruta completa en nuestro sistema de archivos local:

```text
C:/Users/JUNIOR/Desktop/Carpeta1/
```

Manejarse exclusivamente con rutas absolutas en un proyecto de desarrollo no es ideal, ya que si mueves el proyecto de carpeta o de computadora, las rutas dejarán de funcionar. Para resolver esto, utilizamos las rutas relativas.

## Rutas Relativas

Las rutas relativas son las más utilizadas en programación. Al movernos por los archivos de nuestro proyecto, casi siempre estamos manipulando rutas relativas.

A diferencia de las absolutas, a las rutas relativas **sí les importa en dónde estamos parados**. Estas rutas indican la ubicación de un archivo o carpeta en relación con la posición actual. Dependen de la carpeta en la que estemos ubicados, y por eso cambian según el contexto.

### Símbolos comunes en rutas relativas

*   `./`: Representa el **directorio actual**. Es útil en editores como VS Code para que nos sugiera archivos en el mismo nivel.
*   `../`: Representa **un nivel hacia arriba** (subir a la carpeta padre). Se pueden encadenar (ej: `../../`) para subir múltiples niveles.

### Ejemplo práctico

Considerando la siguiente jerarquía de archivos:

```text
Desktop/
├── Carpeta1/
│   ├── MiniCarpeta1/
│   │   └── OtraCarpeta/
│   │       └── Carpetita/
│   └── MiniCarpeta2/
│       └── Hola.txt
├── Carpeta2/
│   └── MiniCarpeta3/
└── Carpeta3/
    └── Chau.txt
```

1.  **Escenario A**: Estamos parados en `MiniCarpeta3` y queremos acceder a `Hola.txt`.
    *   Ruta relativa: `../../Carpeta1/MiniCarpeta2/Hola.txt`
    *   *Explicación: Subimos dos niveles (primero a Carpeta2 y luego a Desktop) para después entrar en Carpeta1.*

2.  **Escenario B**: Estamos parados en `Carpetita` y queremos acceder a `Chau.txt`.
    *   Ruta relativa: `../../../Carpeta3/Chau.txt`
    *   *Explicación: Subimos tres niveles para llegar a Desktop y luego entrar en Carpeta3.*