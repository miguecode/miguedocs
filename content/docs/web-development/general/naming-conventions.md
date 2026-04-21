---
title: "Naming Conventions"
---

> Naming Conventions (Casos de escritura)

- En programación, usamos distintos "naming cases" o estilos para nombrar variables, funciones, clases, archivos, constantes, etc. Cada uno tiene un propósito y se usa en contextos específicos.


1. camelCase

- Regla: Primera palabra en minúscula, y las siguientes con mayúscula.

- Ejemplos: nombreUsuario, calcularEdad, obtenerDatosDelServidor.

- Es muy común en: Variables, Funciones y Propiedades de objetos.

- Lenguajes que lo usan mucho: JavaScript, TypeScript, Java, Kotlin, Swift.



2. PascalCase (o UpperCamelCase)

- Regla: Todas las palabras empiezan con mayúscula.

- Ejemplos: Usuario, ProductoService, AppComponent.

- Es muy común en: Clases, Interfaces, Constructores y Tipos en TypeScripts.

- Lenguajes que lo usan mucho: C#, TypeScript, Java, Swift.



3. snake_case

- Regla: Palabras separadas por " _ ".

- Ejemplos: nombre_usuario, calcular_edad, obtener_datos.

- Es muy común en: Bases de datos (nombres de tablas/columnas), Nombres de archivos, APIs REST (endpoints).

- Lenguajes que lo usan mucho: Python, Ruby, C, algunos estilos de backend.



4. kebab-case

- Regla: Palabras separadas por " - ".

- Ejemplos: nombre-usuario, obtener-datos.

- Ojo: No se puede usar en variables (no es válido en muchos lenguajes), pero sí en:

- Nombres de archivos
- URLs y rutas (/mi-perfil, /lista-de-productos)
- Proyectos de frontend (nombres de componentes en HTML)

- Lenguajes donde aparece: HTML, archivos de configuración, frameworks web .



5. UPPER_CASE (o SCREAMING_SNAKE_CASE)

- Regla: Todo en mayúsculas y palabras separadas por " _ ".

- Ejemplos: API_KEY, MAX_INTENTOS, BASE_URL

- Muy común en: Constantes que no cambian nunca, Variables de entorno, Configs globales.

- Lenguajes que lo usan mucho: JavaScript, C, C++, Python, Java.