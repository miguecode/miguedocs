---
title: "Importar archivos (Include y Require)"
description: "Inclusión de archivos en PHP"
---


Inclusión de archivos en PHP
Include y Require son declaraciones que copian todo el código existente del archivo especificado dentro del archivo que posee dicha declaración. Sería como el import de JS.
Ambas funcionan exactamente igual, pero con la diferencia de que si el 'require' falla, produce un error fatal (E_COMPILE_ERROR) y frenará el script. En cambio, el include sólo produce una advertencia (E_WARNING) y el script continuará.

include "ruta_archivo.php";
include_once "ruta_archivo.php";  //include_once significa que sólo lo incluye una vez
require "ruta_archivo.php";
require_once "ruta_archivo.php";  //require_once significa que sólo lo requiere una vez

Diferencia clave entre usar el 'once' y no usarlo.
Un error común que podría pasarnos es que incluyamos 2 veces la misma clase. Eso va a dar error. Y eso pasaría por ejemplo en este sentido: tengo mi archivo main.php en el cual hago un include de Profesor porque quiero usar profesores. Y además, hago un include de Persona porque también quiero usar personas. En ese caso, me va a dar un error porque el archivo Profesor.php ya hace su propio include de Persona. Por lo tanto, yo en mi main.php, estaría literalmente haciendole 2 includes distintos a Persona. Porque estoy una vez más incluyendo el mismo código. En cambio si yo usara once, no va a hacer esa segunda inclusión, y me evitaría ese error en particular.
 
Diferencia entre include y require
La diferencia es el grado de valor que le vamos a dar a eso que queramos incluir. Es decir, si yo quiero trabajar con Usuarios y todo mi programa se va a tratar sobre usuarios, tiene sentido que le ponga require. Ya que, sin poder incluir Usuario ¿Para qué voy a querer que continúe la ejecución del programa? Ya está, a esa altura, no vale la pena seguir. En cambio, el include lo que haría es que siga la ejecución, cosa que en ese caso no va a tener mucho sentido.
