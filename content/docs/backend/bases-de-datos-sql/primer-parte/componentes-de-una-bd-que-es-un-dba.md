---
title: "Componentes de una BD, qué es un DBA"
description: "Los componentes de una base de datos son 4: Información, Equipos, Programas y Usuarios. El DBA es el administrador de la base de datos."
---


## Introducción

Todos los objetos de una BD pertenecen a un usuario. No estan tirados por ahí. A los usuarios también se los llama 'propietarios' u 'owners'. 

Catálogo. El catálogo son las vistas que genera la BD. Como dijimos, todas las BD tienen que tener mínimo un usuario, todos los objetos pertenecen a algún usuario. Cuando creamos una BD, el motor va a crear un usuario admin por defecto. Este usuario admin por defecto que crea la BD va a ser el propietario de las vistas del catálogo.

Un 'esquema de base de datos' es un usuario con sus propios objetos. Para ser más técnicos. Es como decir el propietario con sus objetos, o el owner con sus objetos, o el usuario con sus objetos.

## ACLARACIÓN IMPORTANTE SOBRE USUARIOS
La idea no es que la estructura sea Pepito > Tablas > Clientes, Pedidos, etc. Porque si no, el hecho de que Pepito se vaya de la empresa nos provocaría un problema con toda la información de la que es propietario en la BD. Nosotros tenemos que ser más genéricos: RRHH > Tablas > Clientes, etc. Es decir, que cada USUARIO sea un GRUPO, como rrhh, finanzas... Ojo, los usuarios 'Pepito', 'Juanito', sí van a existir. PERO no van a ser propietarios. Ellos no van a tener sus propias tablas como sí lo va a tener el usuario RRHH. Ellos simplemente van a tener determinados PERMISOS para poder interactuar con las tablas principales (es decir, las que van a ser del usuario RRHH, Finanzas, etc.).
De esta forma, si el día de mañana el usuario PEPITO se va de la empresa, yo elimino su usuario y listo. No habría problema, ya que el no era el propietario de ninguna tabla principal de mi sistema. Las tablas van a seguir vivas en el usuario RRHH o el usuario FINANZAS, etc.


## Componentes de una BD. Son 4:  INFORMACIÓN, EQUIPOS, PROGRAMAS y USUARIOS.

- 1 - Información.  La información debe ser integrada y compartida. Que sea integrada significa que la BD puede considerarse como una unificación de varios archivos de datos, eliminando lo más que se pueda la redundancia. Es decir, que los datos no se repitan. Para evitar la redundancia, tenemos que tener bien administrada/diseñada la BD. La técnica para esto es la NORMALIZACIÓN (lo vamos a ver después).
Que sea compartida significa que los objetos de la DB pueden compartirse entre varios usuarios distintos. Se refiere a la existencia de un catálogo. El catálogo es un conjunto de objetos de tipo VISTAS. Al momento de crear la DB se crean estas vistas. El catálogo es como un diccionario de los objetos. 

- 2 - Equipos. Son los servidores de la BD: volúmenes de almacenamiento, los dispositivos de E/S, controladores de dispositivos procesadores y memorias principales.

- 3 - Programas. Son los distintos programas que interactúan con una BD. Son: el motor de la BD (que es una aplicación), la aplicación que utiliza el usuario final, y el SQL que se conecta a la BD. 
Los programas de aplicación son los que permiten la interacción entre los usuarios y la BD.
Los programas de administración son el sistema de administración (SGBD) (Sistema de Gestión de BD), esto es literalmente el Motor de la BD. Maneja las solicitudes de acceso a la BD, obtención y puesta al día de los datos.

- 4 - Usuarios. Existen 4 tipos de usuarios en una BD.

---

1) Administrador de Base de Datos. Es el 'DBA' (Data Base Administrator). Es la persona que toma las decisiones estratégicas y de política con respecto a la información de la empresa. Es el encargado del control general de la BD a nivel técnico. Es el responsable de toda la información de la empresa, por lo tanto tiene mucha importancia ya que esa información puede ser crítica/sensible.
Tiene funciones más específicas como identificar las entidades (tablas) y la información que debe registrarse acerca de esas entidades. Esto es el diseño lógico (El diseño lógico se refiere al DER y al conjunto de tablas normalizadas).
También se encarga de la definición del esquema interno, el diseño físico. Esto se da utilizando DDL, es la continuación del diseño lógico.

Primero se hace el diseño lógico en el cual se hace el DER (el mapa de la BD y las tablas normalizadas) y después se hace el diseño físico, que es el momento en el cual uso DDL para CREAR las tablas como lo planteé en el diseño lógico. 

El DBA también tiene que administrar la seguridad (los permisos de los usuarios) (aunque no es él quien los decide). 
 
El DBA también debe encargarse de la INTEGRIDAD de los datos, es decir, que no se pierdan, y que no sean basura. (Validar que no se haga una inserción de un dato incorrecto como una edad='Arbol'o edad=300). Las reglas de integridad definen que el usuario hagan lo que tienen que hacer de manera correcta. Es decir, el usuario puede modificar la edad de alguien, sí. Pero la regla de integridad le limita a hacerlo de la forma correcta, que no pueda poner una edad de 165390. 

Por lo tanto, las reglas de SEGURIDAD definen qué puede y qué no puede hacer el usuario. Y las reglas de INTEGRIDAD, definen que lo que el usuario puede hacer, lo tiene que hacer como yo quiero que lo haga. 

Obviamente nosotros sabemos que las reglas de integración también están en el lado del Backend, es decir, del lado de la aplicación final que usa el usuario final. O sea, las validaciones que hacen programan los programadores. Pero a pesar de que ya existen esas validaciones para que el ingreso de datos sea correcto, las validaciones TAMBIÉN tienen que estar del lado de la BD. Es por una cuestión de que haya más seguridad, puesto que el programador podría entar por SQL y hacer un INSERT o un ALTER... y ahí me pincharía toda la BD. Entonces la validación primero debe estar en la BD. Motivo de que en la aplicación final existan validaciones es que si sólo lo vamos a validar en la BD, al usuario final le podrían aparecer errores técnicos de SQL como un "integrity violated" o cosas así. Además tambien es para evitar hacer consultas innecesarias a la BD.

Otra tarea del DBA es el backup y el recovery de los datos. El backup debe ser DIARIO. Obviamente es una tarea muy importante y existen distintas formas de hacerlo. Y otra es la de supervisar el desempeño. Con el desempeño nos referimos a los recursos de la BD, no hay que sobregastarla. Toda BD tiene su porción de memoria, llamada SGA. Algo que yo podría hacer para administrar el desempeño de recursos, es por ejemplo limitar la cantidad de sesiones concurrentes por usuario. 

2) Los analistas de sistemas y los programadores de aplicaciones. Los analistas determinan los requerimientos de los usuarios finales y los programadores son quienes codifican la aplicación que se va a conectar a la BD. No hay mucho más que explicar.

3) Lo de arriba.

4) Usuarios finales. Interactúan con el sistema a través de las aplicaciones que crean los programadores. Necesitan tener acceso a la BD para consultarla, actualizarla, generar informes, etc.